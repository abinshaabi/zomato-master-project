import { Route, Redirect } from "react-router-dom";

//HOC
import RestaurantHOC from "./HOC/Restaurant.HOC";
import HomeHOC from "./HOC/Home.HOC";

//components 
import temp from "./Components/temp";

//pages
import Home from "./Pages/Home";
import Overview from "./Pages/Restaurant/Overview";
import OrderOnline from "./Pages/Restaurant/OrderOnline";
import Reviews from "./Pages/Restaurant/Reviews";
import Menu from "./Pages/Restaurant/Menu";
import Photos from "./Pages/Restaurant/Photos";


function App() {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/delivery"/>
      </Route>
      <Route path="/restaurant/:id" exact>
        <Redirect to="/restaurant/:id/order-online"/>
      </Route>

      <HomeHOC path="/:type" exact component={Home}/>
      
      <RestaurantHOC path="/restaurant/:id/overview" exact component={Overview}/>
      
      <RestaurantHOC path="/restaurant/:id/order-online" exact component={OrderOnline}/>
      
      <RestaurantHOC path="/restaurant/:id/reviews" exact component={Reviews}/>
      
      <RestaurantHOC path="/restaurant/:id/menu" exact component={Menu}/>
      
      <RestaurantHOC path="/restaurant/:id/photos" exact component={Photos}/>
      
    </>
  );
}

export default App;
