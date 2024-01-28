import { styled } from 'styled-components';

const StyledInput = styled.input`
	width: 400px;
	height: 40px;
	font-size: 20px;
	margin-left: 20px;
	background-color: #2b3844;
	color: white;
`;

const StyledSelect = styled.select`
	width: 200px;
	font-size: 20px;
	margin-right: 90px;
	background-color: #202c36;
	color: white;
`;

const StyledTotalContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 20px;
`;

export { StyledInput, StyledSelect, StyledTotalContainer };
