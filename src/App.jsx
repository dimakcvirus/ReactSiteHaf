import { HafMain } from './HafMain/HafMain';
import { Company } from './Company/Company';
import { PvcWindows } from './ProductsPage/PvcWindows/PvcWindows';
import { AluminumWindows } from './ProductsPage/AluminumWindows/AluminumWindows';
import { BalconiesLoggias } from './ProductsPage/BalconiesLoggias/BalconiesLoggias.jsx';
import { BrowserRouter, Routes, Router, Link, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<div>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<HafMain />} />
						<Route path="/company" element={<Company />} />
						<Route path="/pvcWindows" element={<PvcWindows />} />
						<Route path='/AluminumWindows' element={<AluminumWindows/>}/> 
						<Route path='/BalconiesLoggias' element={<BalconiesLoggias/>}/>
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
