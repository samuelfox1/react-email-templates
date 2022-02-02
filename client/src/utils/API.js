
export const setEmailTemplate = async () => { }

export const getEmailTemplate = async (endpoint, token) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(endpoint, token)
            const response = await fetch(process.env.REACT_APP_EMAIL_TEMPLATE_SERVER, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ endpoint, token })
            })
            const data = await response.json()
            resolve(data)
        } catch (error) {
            console.log(error.message)
            reject(error)
        }
    });
}