import { HafMain } from './HafMain/HafMain';
import { Company } from './Company/Company';
import { PvcWindows } from './ProductsPage/PvcWindows/PvcWindows';
import { AluminumWindows } from './ProductsPage/AluminumWindows/AluminumWindows';
import { PvcPartitions } from './ProductsPage/PvcPartitions/PvcPartitions.jsx';
import { BalconiesLoggias } from './ProductsPage/BalconiesLoggias/BalconiesLoggias.jsx';
import {NonStandartWindows } from './ProductsPage/non-standardWindows/NonStandartWindows.jsx'
import { PlasticDoors } from './ProductsPage/PlasticDoors/PlasticDoors.jsx';
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
						<Route path='/NonStandartWindows' element={<NonStandartWindows/>}/>
						<Route path='/PvcPartitions' element={<PvcPartitions/>}/>
						<Route path='/PlasticDoors' element={<PlasticDoors/>}/>
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
