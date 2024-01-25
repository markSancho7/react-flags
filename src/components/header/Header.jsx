const Header = ({ changeRegion, changeNameOfCountries }) => {
	return (
		<>
			<input onChange={event => changeNameOfCountries(event)}></input>
			<select onChange={event => changeRegion(event)}>
				<option value='All'>All</option>
				<option value='Africa'>Africa</option>
				<option value='Americas'>Americas</option>
				<option value='Asia'>Asia</option>
				<option value='Europe'>Europe</option>
				<option value='Oceania'>Oceanía</option>
			</select>
		</>
	);
};
export default Header;
