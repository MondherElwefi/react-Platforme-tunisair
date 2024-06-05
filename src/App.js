import './App.css';
import SignIn from './pages/signIn/SignIn';
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp';
import Profil from './components/profil/Profil';

function App() {

	return (
    <>
		<Router>
			<Routes>
				<Route path='/' element={<SignIn />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/profil' element={<Profil/>} />
			</Routes>
		</Router>
	</>
  );
}

export default App;
