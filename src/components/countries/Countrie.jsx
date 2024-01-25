import { Link, useNavigate } from 'react-router-dom';
import {
	StyledCapital,
	StyledContainer,
	StyledFlag,
	StyledName,
	StyledPopulation,
	StyledRegion,
	StyledContainerInfo
} from './styles';

const Countrie = ({ data, name, flag, population, region, capital }) => {
	const navigate = useNavigate();
	return (
		<StyledContainer
			onClick={() => navigate('/countryDetails/', { state: data })}
		>
			<StyledFlag src={flag} alt='' />
			<StyledContainerInfo>
				<StyledName>{name}</StyledName>
				<StyledPopulation>Population:{population}</StyledPopulation>
				<StyledRegion>Region:{region}</StyledRegion>
				<StyledCapital>Capital:{capital}</StyledCapital>
			</StyledContainerInfo>
		</StyledContainer>
	);
};
export default Countrie;
