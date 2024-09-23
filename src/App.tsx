import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRoute} from '../src/components/PrivateRoute'
import {Main} from '../src/pages/Main'
import {LogIn} from '../src/pages/Login'
import {LogOut} from '../src/pages/Logout'


import { MyProfile } from './pages/MyProfile';
import PublicRoute from './components/PublicRoute';


export const App: React.FC = () => {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LogIn />}></Route>
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<MyProfile />}></Route>
          <Route path="/logout" element={<LogOut />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
