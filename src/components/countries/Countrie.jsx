import {
	StyledCapital,
	StyledContainer,
	StyledFlag,
	StyledName,
	StyledPopulation,
	StyledRegion,
	StyledContainerInfo
} from './styles';

const Countrie = ({ name, flag, population, region, capital }) => {
	return (
		<StyledContainer>
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
