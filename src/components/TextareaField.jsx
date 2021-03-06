import React from 'react';
import PropTypes from 'prop-types';
import FieldConnect from './FieldConnect';
import ErrorField from './ErrorField';
import classnames from 'classnames';

export const TextareaField = ({
    wrapperClassName,
    className,
    onChange,
    name,
    validationErrors,
    hasValidationError,
    value = '',
    label,
    placeholder,
    errorStyles = {},
    fieldAttributes = {},
}) => (
    <div className={classnames(wrapperClassName, hasValidationError && errorStyles.fieldClassName)}>
        {label && <label>{label}</label>}
        <textarea
            name={name}
            onChange={e => onChange(e.target.value)}
            value={value}
            placeholder={placeholder}
            className={className}
            {...fieldAttributes}
        />
        {hasValidationError && <ErrorField errors={validationErrors} {...errorStyles} />}
    </div>
);

TextareaField.propTypes = {
    wrapperClassName: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    validationErrors: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
        PropTypes.string,
        PropTypes.shape({}),
    ]),
    hasValidationError: PropTypes.bool,
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    errorStyles: PropTypes.shape({
        className: PropTypes.string,
        itemClassName: PropTypes.string,
    }),
    fieldAttributes: PropTypes.shape({}),
};

export default FieldConnect(TextareaField);
