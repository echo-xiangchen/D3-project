
import { 
  BrowserRouter,
  Route, 
  Routes 
} from "react-router-dom";
import DashBorad from './DashBorad';
import MainPage from './MainPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/848-visual-project' element={<MainPage />} />
        <Route path='/848-visual-project/dashborad' element={<DashBorad />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
