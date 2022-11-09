import React from 'react';
import {Layout, Menu} from "antd";
import {Link, useLocation} from "react-router-dom";
import routes from "../../../routes/routes";

const {Header: AntHeader} = Layout;

const Header = () => {
    const {pathname} = useLocation()

    return (
        <AntHeader>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[pathname]}
                items={routes.map(route => ({
                    key: route.path,
                    label: <Link to={route.path}>{route.name}</Link>
                })).reverse()}
            >
            </Menu>
        </AntHeader>
    );
};

export default Header;