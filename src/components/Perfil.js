import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import '../assets/css/perfil.css'
export default function Perfil() {
    const user = useSelector(state => state.user);
    return (
        <div>
            <table className="dados">
                <tbody>
                {user.name ?<tr>
                    <th>Name:</th>
                    <td>{user.name}</td>
                </tr> : <div/>}
                {user.company ? <tr>
                    <th>Company:</th>
                    <td>{user.company}</td>
                </tr> : <div/>}
                {user.blog ? <tr>
                    <th>Blog:</th>
                    <td>{user.blog}</td>
                </tr> : <div/>}
                {user.location ? <tr>
                    <th>Location:</th>
                    <td>{user.location}</td>
                </tr> : <div/>}
                </tbody>
            </table>
        </div>
    )
}