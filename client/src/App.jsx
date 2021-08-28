//HOC
import temp from "./Components/temp";

//components 
import HomeHOC from "./HOC/Home.HOC";

//pages
import Home from "./Pages/Home";


function App() {
  return (
    <>
      <HomeHOC path="/" exact component={temp}/>
      <HomeHOC path="/:type" exact component={Home}/>
    </>
  );
}

export default App;
