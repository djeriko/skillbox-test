import './App.scss';
import Header from './features/header';
import Content from './features/content';
import Sidebar from './features/sidebar';

const App = () => {
  
  return (
    <div className="app">
      <Header/>   
      <div className='app__body'>
        <Sidebar />
        <Content/>
      </div>
    </div>
  );
}

export default App;
