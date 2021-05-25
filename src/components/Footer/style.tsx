import styled from 'styled-components';

const FooterWrapper = styled.footer`
    background: linear-gradient(42deg, rgba(51,41,224,1) 10%, rgba(12,183,209,1) 60%, rgba(0,212,255,1) 100%);
    width: 100%;
    position: fixed;
    bottom: 0;
`;

const StyledH2 = styled.h2`
    color: white;
    justify-self: start;
    padding-left: 0.5rem;
`;

const Wrapper = styled.div`
    max-width: 70rem;
    height: 4rem;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(35%, 40%));
    align-items: center;
`;

export { FooterWrapper, StyledH2, Wrapper };