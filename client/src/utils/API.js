
export const setEmailTemplate = async (endpoint, token, template) => {
    try {
        // console.log(endpoint, token)
        const url = `${process.env.REACT_APP_EMAIL_TEMPLATE_SERVER}/save`
        const response = await fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ endpoint, token, template })
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error.message)
        return error
    }
}

export const getEmailTemplate = async (endpoint, token) => {
    try {
        // console.log(endpoint, token)
        const response = await fetch(process.env.REACT_APP_EMAIL_TEMPLATE_SERVER, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ endpoint, token })
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error.message)
        return error
    }
}