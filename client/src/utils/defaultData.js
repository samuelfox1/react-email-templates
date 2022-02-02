export const defaultQueryParams = {
    endpoint: null, // endpoint to get email template
    token: null, // user authorization   token
}

export const defaultTemplateData =
{
    template: {
        body: {
            html: 'template.body.html',
            text: 'template.body.text'
        },
        includePropertiesFor: {
            tutor: 'includePropertiesFor.tutor',
            student: 'includePropertiesFor.student',
            meeting: 'includePropertiesFor.meeting'
        },
        _id: '_id',
        name: "name",
        subject: "subject",
        createdAt: "createdAt",
    },
    saveTemplateTo: "save_template_to",
    returnUserTo: 'returnUserTo',
}