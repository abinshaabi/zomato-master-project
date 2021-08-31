import { Route, Redirect } from "react-router-dom";

//HOC
import RestaurantHOC from "./HOC/Restaurant.HOC";
import HomeHOC from "./HOC/Home.HOC";

//components 
import temp from "./Components/temp";

//pages
import Home from "./Pages/Home";
import Overview from "./Pages/Restaurant/Overview";


function App() {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/delivery"/>
      </Route>

      <HomeHOC path="/:type" exact component={Home}/>
      <RestaurantHOC path="/restaurant/:id" exact component={temp}/>
      <RestaurantHOC path="/restaurant/:id/overview" exact component={Overview}/>
      <RestaurantHOC path="/restaurant/:id/order-online" exact component={Overview}/>
      <RestaurantHOC path="/restaurant/:id/reviews" exact component={Overview}/>
      <RestaurantHOC path="/restaurant/:id/menu" exact component={temp}/>
      <RestaurantHOC path="/restaurant/:id/photos" exact component={temp}/>
      
    </>
  );
}

export default App;
