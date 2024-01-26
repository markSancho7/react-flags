import { useEffect, useState } from 'react';
import Country from '../country/Country';
import Filters from '../filters/Filters';
import { StyledGrid } from './styles';

const Main = () => {
	const [countries, setCountries] = useState([]);
	const [currentRegion, setCurrentRegion] = useState('');
	const [currentCountry, setCurrentCountry] = useState('');

	useEffect(() => {
		getCountries(setCountries);
	}, []);

	if (!countries) return <h1>Cargando Paises</h1>;

	let filteredCountries = filterByName(countries, currentCountry);
	filteredCountries = filterByRegion(filteredCountries, currentRegion);

	return (
		<>
			<Filters
				currentCountry={event => changeNameCountry(event, setCurrentCountry)}
				currentRegion={event => changeRegion(event, setCurrentRegion)}
			></Filters>
			<StyledGrid>
				{filteredCountries.map(country => (
					<Country
						key={country.name.common}
						name={country.name.common}
						flag={country.flags.svg}
						population={country.population}
						region={country.region}
						capital={country.capital}
						data={country}
					/>
				))}
			</StyledGrid>
		</>
	);
};
const getCountries = async setCountries => {
	const response = await fetch('https://restcountries.com/v3.1/all');
	const data = await response.json();
	setCountries(data);
};
const changeRegion = (event, setCurrentRegion) => {
	setCurrentRegion(event.target.value);
};
const changeNameCountry = (value, setCurrentCountry) => {
	setCurrentCountry(value.target.value);
};

const filterByName = (countries, currentCountry) => {
	if (!currentCountry) {
		return [...countries];
	} else {
		return countries.filter(country =>
			country.name.common.toLowerCase().includes(currentCountry.toLowerCase())
		);
	}
};
const filterByRegion = (countries, currentRegion) => {
	if (currentRegion === 'All') {
		return [...countries];
	} else {
		return countries.filter(country =>
			country.region.toLowerCase().includes(currentRegion.toLowerCase())
		);
	}
};

export default Main;
