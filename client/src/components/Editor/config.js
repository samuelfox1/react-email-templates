module.exports = {
    modules: {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'align': [] }],
            ['link', 'image'],
            ['clean']
        ],
    },
    formats: [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote', "color", "background",
        'list', 'bullet',
        'align',
        'link', 'image'
    ]

}