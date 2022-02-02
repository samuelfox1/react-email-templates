import React, { createContext, useEffect, useState } from "react";
import { getEmailTemplate } from "../../utils/API";
import { defaultQueryParams, defaultTemplateData } from "../../utils/defaultData";
import demo from './data.json'
const { template: { body, subject, name } } = demo

const FETCH_TEMPLATE = true
console.log('FETCH_TEMPLATE =', FETCH_TEMPLATE)

export const EditorContext = createContext();

const reportMissingParam = (param) => console.log(`missing param: ${param}`)
const reduceParams = (obj, param) => {
    const [key, value] = param.split('=')
    obj[key] = value
    return obj
}
const getSearchParams = (search) => (
    search
        .substring(1)
        .split('&')
        .reduce(reduceParams, {})
);

const EditorProvider = ({ children }) => {
    const [bodyState, setBodyState] = useState({ text: body.html })
    const [subjectState, setSubjectState] = useState(subject)
    const [titleState, setTitleState] = useState(name)
    const [queryParams, setQueryParams] = useState(defaultQueryParams)
    const [templateData, setTemplateData] = useState(defaultTemplateData)
    const [viewHelp, setViewHelp] = useState(false)

    useEffect(() => {
        if (templateData.template) {
            const {
                template: {
                    body: {
                        html, text
                    },
                    subject,
                    name
                }
            } = templateData
            if (html) setBodyState({ text: html })
            else if (text) setBodyState({ text })
            if (subject) setSubjectState(subject)
            if (name) setTitleState(name)
        }
    }, [templateData])

    useEffect(() => {
        if (window.location.search) {
            // convert query string to object -> '?key=value' as  {key:value} 
            const params = getSearchParams(window.location.search)
            // log any missing paramater 
            Object.keys(defaultQueryParams).forEach(key => {
                if (params[key]) setQueryParams((curr) => ({ ...curr, [key]: params[key] }))
                else reportMissingParam(key)
            })
        }
    }, [])

    useEffect(() => {
        let mounted = true
        const getTemplateFromEndpointParam = async ({ endpoint, token }) => {
            try {
                console.log(endpoint)
                const response = await getEmailTemplate(endpoint, token)
                if (mounted && response) {
                    setTemplateData((curr) => ({ ...curr, ...response }))
                }
            } catch (error) { console.log(error) }
        }

        if (FETCH_TEMPLATE && queryParams.endpoint && queryParams.token) getTemplateFromEndpointParam(queryParams)

        return () => mounted = false;
    }, [queryParams])




    return (
        <EditorContext.Provider value={{
            viewHelp,
            setViewHelp,
            bodyState,
            setBodyState,
            subjectState,
            setSubjectState,
            titleState,
            setTitleState,
            templateData,
            queryParams,
        }}>
            {children}
        </EditorContext.Provider>
    )
}

export default EditorProvider;