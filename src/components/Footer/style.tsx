import styled from 'styled-components';

const FooterWrapper = styled.footer`
    background: linear-gradient(42deg, rgba(51,41,224,1) 10%, rgba(12,183,209,1) 60%, rgba(0,212,255,1) 100%);
    width: 100%;
    height: 4rem;
    position: fixed;
    bottom: 0px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(35%, 40%));
    align-items: center;
`;

const StyledH2 = styled.h2`
    color: white;
    justify-self: center;
`;

export { FooterWrapper, StyledH2 };