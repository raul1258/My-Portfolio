import AboutMe from "./components/AboutMe";
import Header from "./components/header";
import Intro from "./components/intro";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Intro/>
        <AboutMe/>
      </div>
      
    </div>
  );
}

export default App;

