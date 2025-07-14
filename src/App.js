import './App.css';
import myPhoto from './asset/IMG_4792 2.jpg';

function App() {
  return (
    <div className="App">
      <div className="center-container">
        <img src={myPhoto} alt="My Icon" className="center-logo" />
        <p className="greeting">안녕하세요!</p>
      </div>
    </div>
  );
}

export default App;