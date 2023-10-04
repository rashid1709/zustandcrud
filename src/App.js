
import Layout from './components/shared/Layout';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import AllCakes from './pages/AllCakes';
import AddCake from './pages/AddCake';
import EditCake from './pages/EditCake';


function App() {
  return (
    <div className="App">
      <Router>
      <Layout />
      <Routes>
        <Route path='/' element={<AllCakes/>} />
        <Route path='/addcake' element={<AddCake/>} />
        <Route path='/editcake/:id' element={<EditCake/>} />
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
