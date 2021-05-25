import styled from 'styled-components';
import profileIcon from '../../images/profileicon.svg';

const HeaderWrapper = styled.header`
    background: linear-gradient(42deg, rgba(51,41,224,1) 10%, rgba(12,183,209,1) 33%, rgba(0,212,255,1) 100%);
    color: white;
    width: 100%;
`;

const StyledH1 = styled.h1`
    justify-self: start;
    padding-left: 0.5rem;
    @media (max-width: 32rem) {
        font-size: 1.5rem; 
    }
`;

const StyledProfileIcon = styled.div`
    width: 2.5rem;
    height: 2.5rem;    
    border: 0.06rem solid white;
    border-radius: 50%;
    background: url(${profileIcon}) center/cover;
    justify-self: end;
    cursor: pointer;
`;

const Wrapper = styled.div`
    max-width: 70rem;
    height: 4rem;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(35%, 40%));
    align-items: center;
`;

export { HeaderWrapper, StyledH1, StyledProfileIcon, Wrapper };