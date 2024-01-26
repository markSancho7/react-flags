import { styled } from 'styled-components';

const StyledContainer = styled.div`
	width: 264px;
	height: 370px;
	box-shadow: 0px 0px 10px 0px grey;
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

const StyledFlag = styled.img``;

const StyledPopulation = styled.p`
	color: white;
`;

const StyledRegion = styled.p`
	color: white;
`;

const StyledCapital = styled.p`
	color: white;
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
