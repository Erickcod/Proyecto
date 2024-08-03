import React from 'react';
import { iconLogo } from '../../assets';
import { AdminMenu, Logout } from '../../comoponents/Admin/AdminLayout'
import "./AdminLayout.scss"

export function AdminLayout (props) {
    const { children } = props
    return (
    <div className='admin-layout'>
            <div className='admin-layout_left'>
                <img src={iconLogo} className='logo'/>
                <AdminMenu />
            </div>
        <div className='admin-layout_right'>
            <div className='admin-layout_right-header'>
               <Logout />
            </div>
        <div className='admin.layout_right-content'>{children}</div>
        </div>
    </div>
    )
}

