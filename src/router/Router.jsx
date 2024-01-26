import { Route, Routes } from 'react-router-dom';
import Main from '../components/main/Main';
import CountryDetails from '../pages/countryDetails/CountryDetails';
import Layout from '../layouts/Layout';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Main />}></Route>
				<Route path='/countryDetails/' element={<CountryDetails />}></Route>
			</Route>
		</Routes>
	);
};
export default Router;
