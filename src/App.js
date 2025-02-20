
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from './components/employeeList';
import Viewdata from './components/viewdata';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<EmployeeList/>} />
            <Route path="/view" element={<Viewdata/>} />
          </Routes>
        </Router>

      </Provider>
    </div>
  );
}

export default App;
