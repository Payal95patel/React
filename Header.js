import React from "react";
import './Header.css';
export default function Header(){
    return(
        <div>
            <ul class="dropdown-menu">
                <li><h6 class="dropdown-header">Dropdown header</h6></li>
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
            </ul>
        </div>
    )
}