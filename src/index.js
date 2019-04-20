import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Index = () => {
  return <h2>Home</h2>;
}

const About = () => {
  return <h2>About</h2>;
}

const Users = () => {
  return <h2>Users</h2>;
}


const App = () => {
  return (
    <Router basename="/rn-hello-world">
      <div>
        <Link to="/">Home</Link> - 
        <Link to="/about/">About</Link> -
        <Link to="/users/">Users</Link>
      </div>
      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
    </Router>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));

