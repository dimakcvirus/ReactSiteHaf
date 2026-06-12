import { HafMain } from './HafMain/HafMain';
import { Company } from './Company/Company';
import { PvcWindows } from './ProductsPage/PvcWindows/PvcWindows';
import { AluminumWindows } from './ProductsPage/AluminumWindows/AluminumWindows';
import { PvcPartitions } from './ProductsPage/PvcPartitions/PvcPartitions.jsx';
import { BalconiesLoggias } from './ProductsPage/BalconiesLoggias/BalconiesLoggias.jsx';
import {NonStandartWindows } from './ProductsPage/non-standardWindows/NonStandartWindows.jsx'
import { PlasticDoors } from './ProductsPage/PlasticDoors/PlasticDoors.jsx';
import { ProductUslug } from './ProductUslug/ProductUslug.jsx';
import { DoubleGazedWindows} from'./ProductsPage/double-gazedWindows/DoubleGazedWindows.jsx';
import { Fittings } from './ProductsPage/Fittings/Fittings.jsx';
import { WindowSills } from './ProductsPage/WindowSills/WindowSills.jsx';
import { DrainageSystem } from './ProductsPage/DrainageSystems/DrainageSystems.jsx';
import { SlidingDoors } from './ProductsPage/SlidingDoors/SlidingDoors.jsx';
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
						<Route path='/ProductUslug' element={<ProductUslug/>}/>
						<Route path='/DoubleGazedWindows' element={<DoubleGazedWindows/>}/>
						<Route path='/Fittings' element={<Fittings/>}/>
						<Route path='/WindowStill' element={<WindowSills/>}/>
						<Route path='/DrainageSystem' element={<DrainageSystem/>}/>
						<Route path='/SlidingDoors' element={<SlidingDoors/>}/>
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
