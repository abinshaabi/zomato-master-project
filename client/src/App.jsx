//HOC
import temp from "./Components/temp";

//components 
import HomeHOC from "./HOC/Home.HOC";
import Master from "./Components/Master";



function App() {
  return (
    <>
      <HomeHOC path="/" exact component={temp}/>
      <HomeHOC path="/:type" exact component={Master}/>
    </>
  );
}

export default App;
