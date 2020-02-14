import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu/MenuComp";
import routes from "./routes";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Menu />
                    <div className="container mt-3">
                        <div className="row">{this.showRoutesMenu(routes)}</div>
                    </div>
                </div>
            </Router>
        );
    }

    // Help display UI corresspond with URL
    showRoutesMenu = routes => {
        let result = null;
        if (routes.length > 0) {
            result = routes.map((route, idx) => (
                <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                ></Route>
            ));
        }
        return <Switch>{result}</Switch>;
    };
}

export default App;
