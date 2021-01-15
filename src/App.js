import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/Header";
import SignInSignUp from "./components/SignInSignUp";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
