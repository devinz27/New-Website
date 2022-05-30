import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import Main from './Main'

function App() {
  return (
    <div className="App">
      <div className='app-wrapper'>
        <Nav/>
        <div className='left-border'></div>
        <div className='right-border'></div>
        <Main/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
