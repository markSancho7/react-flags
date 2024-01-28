import { StyledInput, StyledSelect, StyledTotalContainer } from './styles';

const Filters = ({ currentCountry, currentRegion }) => {
	return (
		<StyledTotalContainer>
			<StyledInput
				onChange={event => currentCountry(event)}
				placeholder='Escribe tu pais'
			></StyledInput>
			<StyledSelect onChange={event => currentRegion(event)}>
				<option value='All'>All</option>
				<option value='Africa'>Africa</option>
				<option value='Americas'>Americas</option>
				<option value='Asia'>Asia</option>
				<option value='Europe'>Europe</option>
				<option value='Oceania'>Oceanía</option>
			</StyledSelect>
		</StyledTotalContainer>
	);
};
export default Filters;
