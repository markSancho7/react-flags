import { Link, useLocation } from 'react-router-dom';

const CountryDetails = () => {
	const { state: country } = useLocation();
	console.log(country);
	return (
		<div>
			<div>
				<Link to={'/'}>
					<button>Back</button>
				</Link>
			</div>
			<div>
				<p>{country.name.common}</p>
				<p>Population:{country.population}</p>
				<p>Region: {country.continents}</p>
				<p>Sub Region: {country.subregion}</p>
				<p>Capital: {country.capital}</p>
			</div>
			<div>
				<p>Top Level Domain:{[...country.tld].join(' ')}</p>
				<p>Currencies: {[...Object.keys(country.currencies)]} </p>
				<p>Languages:{[...Object.keys(country.languages)].join(' ')}</p>
				<p>
					Borders:
					{country.borders?.map(border => (
						<p key={border}>{border}</p>
					))}
				</p>
			</div>
		</div>
	);
};
export default CountryDetails;
