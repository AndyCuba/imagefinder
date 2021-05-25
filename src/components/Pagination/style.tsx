import styled, { keyframes } from 'styled-components';

const zoomIn = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.7);
    }
`;

const PaginationWrapper = styled.div`
    position: absolute;
    top: 20%;
    right: 35%;
    transform: translate(50%);
    .pagination {
        display: flex;
        flex-direction: row;
        transition: all 1s;
    }
    .active, .active > a, .active > li {
        transform: scale(1.7);
        color: black;
        animation: 0.5s ${zoomIn} linear;
    }
    li {
        list-style: none;
        padding: 0.1rem 0.5rem;
        margin: 0.5rem;
        cursor: pointer;
        border: 1px solid black;
        &: last-child, &: first-child {
            display:none;
        }
        &: hover {
            a {
                color: black;
            }  
        }
    }
    a {
        text-decoration: none;
        color: grey;
        font-weight: bold;
    }
    @media (max-width: 60rem) {
        top: 12%; 
    }
`;

export { PaginationWrapper };