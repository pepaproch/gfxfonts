import {Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import React from "react";

interface SidebarProps {
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
    return (                    <div className="sidebar">
        <div className="sidebar-wrapper">
            <div className="logo d-flex align-items-center justify-content-start">
                <div className="logo-img">
                    <i className={'fa-solid fa-blender'}/>
                </div>
                <a className="simple-text" href="/">
                    Font Mixer
                </a>
            </div>
            <hr/>
            <Nav defaultActiveKey="/" className="flex-column">
                <li><NavLink className={"nav-link"} to="/fonts"><p>Fonts</p></NavLink></li>
                <li><NavLink className={"nav-link"} to="/codes"><p>Codes Mapping</p></NavLink></li>
                <li><NavLink className={"nav-link"}  to="/output"><p>Output</p></NavLink></li>
            </Nav>

        </div>
    </div> )

}