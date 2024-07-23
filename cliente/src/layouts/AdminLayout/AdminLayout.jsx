import React from 'react';

export function AdminLayout (props) {
    const { children } = props
    return (
        <div>
            <h2>Se esta uando el AdminLayout</h2>
            {children}
        </div>
    )
}

