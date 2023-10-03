
import Layout from './components/shared/Layout';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import AllCakes from './pages/AllCakes';


function App() {
  return (
    <div className="App">
      <Router>
      <Layout />
      <Routes>
        <Route path='/' element={<AllCakes/>} />
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
