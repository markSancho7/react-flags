import { Link, useLocation } from 'react-router-dom';
import {
	StyledButton,
	StyledCountryName,
	StyledFirstInfo,
	StyledImg,
	StyledInfoAndTabs,
	StyledInfoContainer,
	StyledSecondInfo,
	StyledTabsInfo,
	StyledTotalContainer,
	Styledp,
	StyledImgContainer
} from './styles';
import { StyledContainerInfo } from '../../components/country/styles';

const CountryDetails = () => {
	const { state: country } = useLocation();
	console.log(country);
	return (
		<>
			<div>
				<Link to={'/'}>
					<StyledButton>{`<-- back`}</StyledButton>
				</Link>
			</div>
			<StyledTotalContainer>
				<StyledImgContainer>
					<StyledImg src={country.flags.svg} alt='' />
				</StyledImgContainer>
				<StyledInfoAndTabs>
					<StyledInfoContainer>
						<StyledFirstInfo>
							<StyledCountryName>{country.name.common}</StyledCountryName>
							<p>Population:{country.population}</p>
							<p>Region: {country.continents}</p>
							<p>Sub Region: {country.subregion}</p>
							<p>Capital: {country.capital}</p>
						</StyledFirstInfo>
						<StyledSecondInfo>
							<p>Top Level Domain:{[...country.tld].join(' ')}</p>
							<p>Currencies: {[...Object.keys(country.currencies)]} </p>
							<p>Languages:{[...Object.keys(country.languages)].join(' ')}</p>
						</StyledSecondInfo>
					</StyledInfoContainer>
					<StyledTabsInfo>
						Borders:
						<Styledp>
							{country.borders?.map(border => (
								<p key={border}>{border}</p>
							))}
						</Styledp>
					</StyledTabsInfo>
				</StyledInfoAndTabs>
			</StyledTotalContainer>
		</>
	);
};
export default CountryDetails;
