import React from "react";
import { NavLink } from "react-router-dom";

const menus = [
    {
        name: "Trang chủ",
        to: "/",
        exact: true
    },
    {
        name: "Quản lí sản phẩm",
        to: "/productlist",
        exact: false
    }
];

class MenuComponent extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">
                    <img
                        src="http://localhost:4000/images//vyvy.jpg"
                        width={30}
                        height={30}
                        className="d-inline-block align-top mr-1"
                        alt="Logo"
                    />
                    VyVy
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav">{this.showMenu(menus)}</div>
                </div>
            </nav>
        );
    }

    showMenu = menus => {
        let result = null;
        if (menus.length > 0) {
            result = menus.map((menu, idx) => (
                <NavLink
                    key={idx}
                    to={menu.to}
                    exact={menu.exact}
                    activeClassName="active"
                    className="nav-item nav-link"
                >
                    {menu.name}
                </NavLink>
            ));
        }
        return result;
    };
}

export default MenuComponent;
