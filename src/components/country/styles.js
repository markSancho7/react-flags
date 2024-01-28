import { styled } from 'styled-components';

const StyledContainer = styled.div`
	width: 264px;
	height: 400px;
	background-color: #2b3844;
	margin-bottom: 10px;
`;

const StyledContainerInfo = styled.div`
	padding-left: 20px;
`;
const StyledName = styled.p`
	color: #111517;
	font-family: 'Nunito Sans';
	font-size: 18px;
	font-style: normal;
	font-weight: 800;
	line-height: 26px;
	color: white;
`;

const StyledFlag = styled.img`
	height: 190px;
`;

const StyledPopulation = styled.p`
	color: white;
	font-family: 'Nunito Sans';
`;

const StyledRegion = styled.p`
	color: white;
	font-family: 'Nunito Sans';
`;

const StyledCapital = styled.p`
	color: white;
	font-family: 'Nunito Sans';
`;

export {
	StyledContainer,
	StyledName,
	StyledFlag,
	StyledPopulation,
	StyledRegion,
	StyledCapital,
	StyledContainerInfo
};
