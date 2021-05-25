import styled from 'styled-components';

const HomeWrapper = styled.div`
    height: 85vh;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 6.25rem 1fr;
    max-width: 70rem;
`;

const MainWrapper = styled.div`
   padding: 4rem;
   @media (max-width: 30rem) {
    padding: 4rem 1.5rem 1.5rem; 
    }
`;

const StyledForm = styled.form`
    margin-bottom: 2rem;
    max-width: 20rem;
    height: 2rem;
    input {
        width: 100%;
        height: 100%;
        font-size: 1.5rem;
    }
`;

const CardsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(9rem, 18rem));
    justify-items: center;
    grid-row-gap: 2rem;
`;

export { HomeWrapper, MainWrapper, StyledForm, CardsWrapper };
