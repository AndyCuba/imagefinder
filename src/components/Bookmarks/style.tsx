import styled from 'styled-components';

const BookmarksWrapper = styled.div`
    height: 120vh;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 6.25rem 1fr;
    max-width: 70rem;
`;


const CardsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(9rem, 20rem));
    justify-items: center;
    grid-row-gap: 2rem;
`;

export { BookmarksWrapper, CardsWrapper };