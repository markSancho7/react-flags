import { Link, useLocation } from 'react-router-dom';

const CountryDetails = () => {
	const { state } = useLocation();
	console.log(state);
	return (
		<div>
			<div>
				<Link to={'/'}>
					<button>Back</button>
				</Link>
			</div>
			<div>
				<p>{state.name.common}</p>
				<p>Population:{state.population}</p>
				<p>Region: {state.continents}</p>
				<p>Sub Region: {state.subregion}</p>
				<p>Capital: {state.capital}</p>
			</div>
			<div>
				<p>Top Level Domain:{[...state.tld].join(' ')}</p>
				<p>Currencies: {[...Object.keys(state.currencies)]} </p>
				<p>Languages:{[...Object.keys(state.languages)].join(' ')}</p>
				<p>
					Borders:
					{state?.borders?.map(border => (
						<p key={border}>{border}</p>
					))}
				</p>
			</div>
		</div>
	);
};
export default CountryDetails;
