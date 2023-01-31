import './App.css';
import {Routes, Route} from "react-router-dom"


// COMPONENTS
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Menu isAdmin={false}/>} />
        <Route path="/admin" element={<Menu isAdmin={true}/>} />
      </Routes>
    </div>
  );
}

export default App;
