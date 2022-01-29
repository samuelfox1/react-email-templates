import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import data from './data.json'

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

const templateId = '61f2df7f1ea35c2faffb005a'
const endpoint = `localhost: 3001 / api / email - template / ${templateId} `

const user = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoic2FtdWVsamFzb25mb3hAZ21haWwuY29tIiwiX2lkIjoiNjFmMmRmN2YxZWEzNWMyZmFmZmIwMDRmIiwiYWNjb3VudEtleSI6IlUyRnNkR1ZrWDE5OHU2R0d4VE0vYi8xUDV1dWFZTlF2YVVwUTBTdStOTkU9In0sImlhdCI6MTY0MzQwODM3OSwiZXhwIjoxNjQzNDk0Nzc5fQ.vQ2LSWAHMnGjELu2ZPPtqd88uw-T02nHqjFXZx4ntck'
const server = 'localhost:3000'

const str = `${server} /react-email-templates?endpoint=${endpoint}&user=${user}`
console.log(str)


const EditorProvider = ({ children }) => {
    const [editorState, setEditorState] = useState({ text: data.html })
    const [queryParams, setQueryParams] = useState({
        endpoint: null, // endpoint to get email template
        user: null, // user auth token
    })

    useEffect(() => {
        if (window.location.search) {
            // convert query string to object -> '?key=value' as  {key:value} 
            const params = getSearchParams(window.location.search)
            // log any missing paramater 
            Object.keys(queryParams).forEach(key => {
                if (params[key]) setQueryParams((curr) => ({ ...curr, [key]: params[key] }))
                else reportMissingParam(key)
            })
        }
    }, [])

    useEffect(() => {
        let mounted = true
        if (queryParams.endpoint && queryParams.user) {
            axios
                .post('http://localhost:3002/', queryParams)
                .then(({ data }) => {
                    console.log(data)
                    if (mounted) setEditorState({ text: data.template.body.html })
                })
                .catch(error => console.error(error))
        }
        return () => mounted = false;
    }, [queryParams])

    const handleChange = (value) => {
        const html = document.querySelector('.ql-editor').innerHTML
        const text = document.querySelector('.ql-editor').innerText
        console.log({ html, text })
        setEditorState({ text: value })
    }
    return (
        <EditorContext.Provider value={{ editorState, handleChange }}>
            {children}
        </EditorContext.Provider>
    )
}

export default EditorProvider;