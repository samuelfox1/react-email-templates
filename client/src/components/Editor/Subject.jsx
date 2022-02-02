import React, { useContext } from 'react';
import { Form } from 'react-bulma-components'
import { EditorContext } from '../Provider';

const Subject = () => {
    const { subjectState, setSubjectState } = useContext(EditorContext)

    const handleSubjectChange = ({ target: { value } }) => setSubjectState(value)

    return (
        <>
            <Form.Label textColor='white'>Subject</Form.Label>
            <Form.Control >
                <Form.Input id='subject' value={subjectState} onChange={handleSubjectChange} />
            </Form.Control>
        </>
    );
};

export default Subject;
