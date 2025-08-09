import './App.css';
import { Menuu } from './Menu/Menuu.jsx';


import menuList from './Menu.json'
import { MenuuList } from './Pageboard/Pageboard.jsx';

function App() {
  return (
    <div className="App">
      <MenuuList />
    </div>
  );
}

export default App;