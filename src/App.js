import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignIn } from "./component/SignIn";
import {EmployeePage} from "./component/Employee";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/employee" element={<EmployeePage />} />
      </Routes>
    </Router>
  );
}

export default App;
