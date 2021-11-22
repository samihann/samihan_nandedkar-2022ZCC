import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Home from './components/Home';
import GlobalStyle from './globalStyles';
import SingleView from './components/SingleView';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutMe from './components/AboutMe';
import Footer from './components/footer';
function App() {
  return (
    <>
    <Router>
    <GlobalStyle />
    <Navbar />
    <Switch>
        <Route path="/"  exact component={Home} />
        <Route path="/alltickets" component={Hero} />
        <Route path="/singleticket" component={SingleView} />
        <Route path="/aboutme" component={AboutMe} />
    </Switch>
    <br/>
    <Footer />
    </Router>
    </>
  );
}

export default App;
