import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Main from '../components/main /Main';

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet>
				<Main />
			</Outlet>
		</>
	);
};
