//HOC
import temp from "./Components/temp";

//components 
import HomeHOC from "./HOC/Home.HOC";



function App() {
  return (
    <>
      <HomeHOC path="/" exact component={temp}/>
    </>
  );
}

export default App;
