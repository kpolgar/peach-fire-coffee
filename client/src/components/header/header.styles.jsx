import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width: 800px) {
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;
    }
    `;


export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 0px;  
    margin-right: 5px;
    transform: rotate(45deg); 

    @media screen and (max-width: 800px) {
        width: 50px;
        padding: 0;
    }
`;

export const OptionsContainer = styled.div`
    width: 92%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 600px) {  
        justify-content: flex-end;
    }
`;
export const ClickOptions = styled(Link)`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media screen and (max-width: 600px) {
        width: 92%;
    }
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;

export const TitleContainer = styled.div`
@import url("https://fonts.googleapis.com/css?family=Architects+Daughter&display=swap");
    color: #221c17;
    font-size: 1.3vw;
    font-family: 'Architects Daughter', sans-serif;
    letter-spacing: 0.2em;
    @media screen and (max-width: 600px) {
        display: none;
    }
`;

