import "./App.css";
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Navigation from "./components/Navigation";
import About from "./components/About";
import Contact from "./components/Contact";
import Terms from "./components/Terms";
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <NavBar/>
      <Switch>
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/terms" component={Terms} exact />
        <Route path="/" component={HomeScreen} exact />
        <Route path="/cart" component={CartScreen} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
