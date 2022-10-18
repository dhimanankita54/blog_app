import logo from './logo.svg';
import './App.css';
import DrawerAppBar from './Components/Navbar';

import { Routes, Route } from 'react-router';
import { BlogDetail } from './Components/BlogDetail';
import { Home } from './Components/Home';

function App() {
  return (
    <div className="App">
      <DrawerAppBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/blog_detail' element={<BlogDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
