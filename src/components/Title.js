import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title }) => (
    <div className="title">
        <h1 className="title__app-name">{title}</h1>
    </div>
);



Title.propTypes = {
    title: PropTypes.string.isRequired
}

export default Title;