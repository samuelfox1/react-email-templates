import React from 'react';
import { Button, Icon } from 'react-bulma-components';

const BackButton = () => {
    const whereIcameFrom = document.referrer;
    if (!whereIcameFrom) return '';

    const handleClick = () => window.location.href = whereIcameFrom
    const getDomain = (url) => url.split("://")[1]

    return (
        <Button
            className='tag mt-3 ml-3'
            color="info"
            outlined
            onClick={handleClick}
        >
            <Icon>
                <i className="fas fa-chevron-left mr-2"></i>
            </Icon>
            {getDomain(whereIcameFrom)}
        </Button>
    );
};

export default BackButton;
