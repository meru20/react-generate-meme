import Meme from './components/Memes'
import './App.css';
const App = () => {
  return (
    <div className="container">
      <div className='row text-center'>
        <div className='col'>
          <h1>Make Generate Meme!So Cool!</h1>
        </div>
      </div>
      <Meme/>
    </div>
  );
}

export default App;
