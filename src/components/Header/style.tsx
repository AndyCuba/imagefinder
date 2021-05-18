import styled from 'styled-components';
import profileIcon from '../../images/profileicon.svg';

const HeaderWrapper = styled.header`
    background: linear-gradient(42deg, rgba(51,41,224,1) 10%, rgba(12,183,209,1) 33%, rgba(0,212,255,1) 100%);
    color: white;
    height: 4rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(35%, 40%));
    align-items: center;
`;

const StyledH1 = styled.h1`
    justify-self: center;
`;

const StyledProfileIcon = styled.div`
  
  width: 2.5rem;
    height: 2.5rem;    border: 1px solid white;
    border-radius: 50%;
    background: url(${profileIcon}) center/cover;
    justify-self: end;
    cursor: pointer;
`;

export { HeaderWrapper, StyledH1, StyledProfileIcon };