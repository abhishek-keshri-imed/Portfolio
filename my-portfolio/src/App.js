import './App.css';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skill from './Components/Skills/Skill';
import Exp from './Components/Experience/Exp';
import Project from './Components/Project/Project';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skill/>
      <Exp/>
      <Project/>
    </div>
  );
}

export default App;
