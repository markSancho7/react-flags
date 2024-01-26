import { Route, Routes } from 'react-router-dom';
import Main from '../components/main /Main';
import Layout from '../components/layout /Layout';
import CountryDetails from '../pages/countryDetails/CountryDetails';

const Router = () => {
	return (
		<Routes>
			<Layout></Layout>
			<Route path='/' element={<Main />}></Route>
			<Route index element={<Main />}></Route>
			<Route path='/countryDetails/' element={<CountryDetails />}></Route>
		</Routes>
	);
};
export default Router;
