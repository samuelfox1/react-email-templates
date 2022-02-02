import React, { useContext } from 'react';
import { Button } from 'react-bulma-components';
import { EditorContext } from '../Provider';

const SaveButton = () => {
    const { } = useContext(EditorContext)
    return (
        <Button
            className='mt-5'
            color='success'
            fullwidth
        >
            Finish & Save
        </Button>
    );
};

export default SaveButton;
