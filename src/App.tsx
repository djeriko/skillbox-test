import './App.scss';
import Header from './features/header';
import Body from './features/content';
import Sidebar from './features/sidebar';

const App = () => {
  return (
    <div className="app">
      <Header/>   
      <div className='app__body'>
        <Sidebar/>
        <Body/>
      </div>
    </div>
  );
}

export default App;
