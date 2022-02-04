# React-Email-Templates

[check it out on heroku](https://sjf-react-email-templates.herokuapp.com/)


This app uses [React](https://reactjs.org) & [Quill](https://quilljs.com/) to provide [tutorly](https://www.tutor-me.io) users an email template solution.


Access this application with query paramters for `endpoint` & `token` to load your own template, edit it, and save it back to your database.

query paramaters 
- endpoint: url to request template from your server
- token: an authorization bearer token to access your server (if needed)

your server should listen for
-  A `GET` request to the endpoint provided  (get your template)
-  A `PUT` request to the endpoint provided  (save your template)

the response should be the following JSON object

```json
{
    "template" : {
        "body" : {
            "html" : "<String of HTML>",
            "text" : "<String of document text content without HTML>"
        },
        "includePropertiesFor": {
            "tutor" : "<Object: with key:value pairs to use for tutor>",
            "student" : "<Object: with key:value pairs to use for student>",
            "meeting" : "<Object: with key:value pairs to use for meeting>"
        },
        "_id" : "<ID: Template's Id>",
        "name" : "<String: Template's name>" ,
        "subject" : "<String: Email Templates Subject line >",
        "createdAt" : "<Date: ISO8601 String>"
    },
    "save_template_to" : "<String: endpoint listening for POST request to save template to when finished editing>",
    "return_user_to" : "<String:  URL to redirect user to when finished editing>",
}
```

## USER STORY
```
WHEN: The new browser window opens
THEN: Request params are scanned for an `endpoint` and `token` param

WHEN: Params are present
THEN: a GET request to the `endpoint` is made with the 'bearer: `token`', to fetch the template,
```

```js
fetch( endpoint, { headers:{ Authorization: `bearer: ${token}` } } )
```
```
WHEN: an endpoint is reached
THEN: the JSON shown above is returned

WHEN: A response is received with the above structure
THEN: The template is loaded into the editor
AND : An information box is displayed with user instructions

WHEN: The user types in the editor
THEN: Then the preview renders the output as HTML

WHEN: A template property is used in the placeholder pattern
THEN: The preview renders the property's value in place of the placeholder pattern
```

```
placeholder pattern: `[subject-property]` 
where `subject` is either tutor | student | meeting
and 'property' is a valid property for the 'subject'

Example: The tutor object has a 'firstName' property with the value of 'Sam'
Editor input: Hello, [tutor-firstName]
Rendered Output: Hello Sam
```
```
WHEN: A user clicks finish editing button
THEN: A PUT request is sent to the `save_template_to` endpoint
WITH:  The template's updated subject property & body's html & text properties, 

WHEN: When the PUT request succeeds
THEN: The user it redirected to the `return_user_to' url
```
