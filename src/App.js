import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BarChartScreen from "./screens/BarChartScreen";
import FavoritesListScreen from "./screens/FavoritesListScreen";
import PieChartScreen from "./screens/PieChartScreen";
import SalesTableScreen from "./screens/SalesTableScreen";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={BarChartScreen} />
        <Route exact path="/products" component={PieChartScreen} />
        <Route exact path="/favorites" component={FavoritesListScreen} />
        <Route exact path="/sales" component={SalesTableScreen} />
      </Switch>
    </Router>
  );
}

export default App;
