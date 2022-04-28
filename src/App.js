import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';
import Organisation from './components/Organisation';
import Procedure from './components/Procedure';
import Landing from './components/Landing';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
     <Header/>
     <Landing/>
     <Services/>
     <Slider/>
     <Organisation/>
     <Procedure/>
     <Footer/> 
    </div>
  );
}

export default App;
