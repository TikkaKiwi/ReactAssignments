import './App.css';
import { Layout } from './components/layout.js';
import { List } from './components/list.js';
import { Home } from './components/home.js';

function App() {
  return (
    <>
      <Layout/>
      <List/>
      <Home/>
    </>
  );
}

export default App;