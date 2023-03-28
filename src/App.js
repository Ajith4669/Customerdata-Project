import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CusListing from './CusListing';
import CusCreate from './CusCreate';
import CusDetail from './CusDetail';
import CusEdit from './CusEdit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CusListing />}></Route>
          <Route path='/customer/create' element={<CusCreate />}></Route>
          <Route path='/customer/view/:cusid' element={<CusDetail />}></Route>
          <Route path='/customer/edit/:cusid' element={<CusEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
