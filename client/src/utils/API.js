const URL = process.env.REACT_APP_EMAIL_TEMPLATE_SERVER;

export const getEmailTemplate = async (endpoint, token) => {
    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ endpoint, token })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message);
        return error;
    };
};

export const setEmailTemplate = async (endpoint, token, template) => {
    try {
        const response = await fetch(`${URL}/save`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ endpoint, token, template })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message);
        return error;
    };
};