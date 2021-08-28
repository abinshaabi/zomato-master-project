import { Route, Redirect } from "react-router-dom";

//HOC
import temp from "./Components/temp";

//components 
import HomeHOC from "./HOC/Home.HOC";
import RestaurantHOC from "./HOC/Restaurant.HOC";

//pages
import Home from "./Pages/Home";


function App() {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/delivery"/>
      </Route>

      <HomeHOC path="/:type" exact component={Home}/>
      <RestaurantHOC path="/restaurant/:id" exact component={temp}/>
      
    </>
  );
}

export default App;
