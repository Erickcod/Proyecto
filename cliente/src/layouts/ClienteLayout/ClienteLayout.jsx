import React from 'react';

export function ClienteLayout (props) {
    const { children } = props
    return (
        <div>
            <h2>Se esta uando el ClienteLayout</h2>
            {children}
        </div>
    )
}
