import React, { PropTypes } from 'react';
import FieldConnect from './FieldConnect';

export const SubmitField = ({
    wrapperClassName,
    className,
    submit,
    value
}) => (
    <div className={wrapperClassName}>
        <button
            onClick={submit}
            className={className}
        >
            {value}
        </button>
    </div>
);

SubmitField.propTypes = {
    wrapperClassName: PropTypes.string,
    className: PropTypes.string,
    submit: PropTypes.func.isRequired,
    value: PropTypes.string
};

export default FieldConnect(SubmitField);