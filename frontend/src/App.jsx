import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import Panels from './components/Panels/Panels';
import StickyWall from './components/Panels/stickywall/StickyWall';
import TodoList from './components/Panels/TodoList/TodoList';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
  <main> 
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<StickyWall />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/sticky" element={<StickyWall />} />
      </Routes>
    </Router>
  </main>
  )
}

export default App
