import "./App.css";
import Home from "./Components/Home";
import CharacterPage from "./Components/CharacterPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/character/:id">
            <CharacterPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
