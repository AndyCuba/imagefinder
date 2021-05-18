import styled from 'styled-components';

const BookmarksWrapper = styled.div`
    height: 120vh;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 100px 1fr;
`;


const CardsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    grid-row-gap: 2rem;
`;

export { BookmarksWrapper, CardsWrapper };