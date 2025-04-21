import './App.css';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skill from './Components/Skills/Skill';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skill/>
    </div>
  );
}

export default App;
