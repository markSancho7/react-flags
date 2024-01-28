import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledTotalContainer = styled.div`
	background-color: white;
	display: flex;
	height: 350px;
	width: 1200px;
	margin-left: auto;
	margin-right: auto;
	border-radius: 10px;
`;
const StyledImgContainer = styled.div`
	height: 350px;
`;
const StyledImg = styled.img`
	width: 400px;
	height: 350px;
`;
const StyledInfoContainer = styled.div`
	display: flex;
`;
const StyledInfoAndTabs = styled.div``;
const StyledFirstInfo = styled.div`
	margin-left: 90px;
`;

const StyledCountryName = styled.p`
	font-size: 30px;
`;

const StyledSecondInfo = styled.div`
	margin-top: 75px;
	margin-left: 90px;
`;

const StyledTabsInfo = styled.div`
	margin-top: 30px;
	margin-left: 90px;
	display: flex;
`;
const Styledp = styled.p`
	display: flex;
	gap: 30px;
	margin-left: 20px;
	margin-top: -16px;
`;
const StyledButton = styled.button`
	border: none;
	background-color: #202c36;
	color: white;
	margin-left: 98px;
`;

export {
	StyledTotalContainer,
	StyledImg,
	StyledFirstInfo,
	StyledSecondInfo,
	StyledTabsInfo,
	StyledCountryName,
	StyledInfoContainer,
	StyledInfoAndTabs,
	Styledp,
	StyledButton,
	StyledImgContainer
};
