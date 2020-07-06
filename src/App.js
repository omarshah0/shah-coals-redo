import React from "react";
// Import of 3rd Party Packages
import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// Import of Functional Components
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import About from "./Components/About/About";
import Products from "./Components/Products/Products";
import Contact from "./Components/Contact/Contact";
import error404 from "./Components/404/404";

// Import of CSS Files
import "./App.css";

function App() {

  return (
    <div className="App">
      <Header />
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={300} classNames="fade">
              <Switch location={location}>
                <Route exact path="/about" component={About} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/" component={Body} />
                <Route component={error404} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </div>
  );
}

export default App;
