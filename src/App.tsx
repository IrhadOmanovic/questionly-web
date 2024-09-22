import { Outlet } from 'react-router-dom';
import Header from './components/custom/header';
import './App.css';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet /> {/* Render the nested routes */}
      </main>
    </div>
  );
};

export default App;
