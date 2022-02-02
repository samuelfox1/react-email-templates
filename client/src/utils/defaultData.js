export const defaultQueryParams = {
    endpoint: null, // endpoint to get email template
    token: null, // user authorization   token
}

export const defaultTemplateData =
{
    template: {
        body: {
            html: null,
            text: null,
        },
        includePropertiesFor: {
            tutor: null,
            student: null,
            meeting: null,
        },
        _id: null,
        name: null,
        subject: null,
        createdAt: null,
    },
    saveTemplateTo: null,
    returnUserTo: null,
}