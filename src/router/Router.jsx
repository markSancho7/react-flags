import { Route, Routes } from 'react-router-dom';
import Main from '../components/main /Main';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layaut />}>
				<Route index element={<Main />}></Route>
			</Route>
		</Routes>
	);
};
export default Router;
