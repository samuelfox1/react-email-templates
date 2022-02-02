import React, { createContext, useEffect, useState } from "react";
import { getEmailTemplate } from "../../utils/API";
import { defaultQueryParams, defaultTemplateData } from "../../utils/defaultData";
import { testString } from "../../utils/temp";
import data from './data.json'

const loadTemplate = true

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
    const [bodyEditorState, setBodyEditorState] = useState({ text: testString || data.html })
    const [subjectEditorState, setSubjectEditorState] = useState({ text: testString || data.html })
    const [queryParams, setQueryParams] = useState(defaultQueryParams)
    const [templateData, setTemplateData] = useState(defaultTemplateData)
    const [viewHelp, setViewHelp] = useState(false)

    useEffect(() => {
        const html = templateData?.template?.body?.html
        const text = templateData?.template?.body?.text
        const subject = templateData?.template.subject
        if (html) setBodyEditorState({ text: html })
        else if (text) setBodyEditorState({ text })
        if (subject) setSubjectEditorState({ text: subject })
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

        if (loadTemplate && queryParams.endpoint && queryParams.token) getTemplateFromEndpointParam(queryParams)

        return () => mounted = false;
    }, [queryParams])

    const handleBodyChange = (value) => {
        // const html = document.querySelector('.ql-editor').innerHTML
        // const text = document.querySelector('.ql-editor').innerText
        setBodyEditorState({ text: value })
    }
    const handleSubjectChange = ({ target: { value } }) => {

        // const html = document.querySelector('.ql-editor').innerHTML
        // const text = document.querySelector('.ql-editor').innerText
        setSubjectEditorState({ text: value })
    }


    return (
        <EditorContext.Provider value={{
            viewHelp,
            setViewHelp,
            bodyEditorState,
            handleBodyChange,
            subjectEditorState,
            handleSubjectChange,
            templateData,
            queryParams,
        }}>
            {children}
        </EditorContext.Provider>
    )
}

export default EditorProvider;