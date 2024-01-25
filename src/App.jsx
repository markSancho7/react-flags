import { BrowserRouter } from 'react-router-dom';
import Main from './components/main /Main';
import Router from './router/Router';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
			<Main />
		</>
	);
};

export default App;
