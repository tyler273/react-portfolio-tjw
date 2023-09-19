// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Background from './components/Background';
import Footer from './components/Footer';
import "./styles/App.css";

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div className="App">
      <Header />
      <Background />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;