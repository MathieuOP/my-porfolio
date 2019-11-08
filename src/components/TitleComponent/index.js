import React from 'react';
import Helmet from 'react-helmet';

const TitleComponent = ({ title }) => {
    const defaultTitle = 'Mathieu OLIVEIRA PEREIRA';
    return (
        <Helmet>
            <title>{title ? title : defaultTitle}</title>
        </Helmet>
    );
};

export default TitleComponent;