import React from 'react';

export const Message = props => {
    const message = props.message;
    return (
        <pre>
            <code>{message}</code>
        </pre>
    );
};