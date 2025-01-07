import './App.css';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header className='main-header' />
        <div className='main-body'>
          <Home />
        </div>        
      <Footer className= 'main-footer'/>
    </div>
  );
}

export default App;
