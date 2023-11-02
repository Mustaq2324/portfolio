import Header from "./header";
import Biodata from "./biodata";
import Services from "./services"
import './index.css';
import Another from "./another";
import Portfolio from "./Portfolio";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Header />
      <Biodata />
      <Services/>
      <Another/>
      <Portfolio/>
      <Navbar/>
    </div>
  );
}

export default App;
