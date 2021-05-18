import styled from 'styled-components';

const HomeWrapper = styled.div`
    height: 85vh;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 100px 1fr;
`;

const MainWrapper = styled.div`
   padding: 4rem;
`;

const StyledForm = styled.form`
    margin-bottom: 2rem;
    width: 20rem;
    height: 2rem;
    input {
        width: 100%;
        height: 100%;
        font-size: 1.5rem;
    }
`;

const CardsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    grid-row-gap: 2rem;
`;

export { HomeWrapper, MainWrapper, StyledForm, CardsWrapper };
