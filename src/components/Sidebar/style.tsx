import styled from 'styled-components';
import { Link } from 'react-router-dom';
import cloudIcon from '../../images/cloud.svg';
import bookmarkIcon from '../../images/bookmark.svg';

type LinkPropsType = {
    pathname: string
};

const SidebarWrapper = styled.div`
    border-right: 0.25rem solid grey;
    background: white;
    width: 6.25rem;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    a {
        margin-top: 1rem;
    }
    @media (max-width: 25rem) {
        width: 5rem; 
    }
`;

const StyledHomeIcon = styled(Link)`
    width: 3.5rem;
    height: 3.5rem;
    background: url(${cloudIcon}) no-repeat center/80%;
    cursor: pointer;
    &:active {
        transform: scale(0.95);
    }
    border: ${(props: LinkPropsType) => 
        props.pathname === '/' ? '0.15rem solid black' : 'none'};
    border-radius: 0.3rem;
`;

const StyledBookmarksIcon = styled(Link)`
    width: 3.5rem;
    height: 3.5rem;
    background: url(${bookmarkIcon}) no-repeat center/80%;
    cursor: pointer;
    &:active {
        transform: scale(0.95);
    }
    border: ${(props: LinkPropsType) => 
        props.pathname === '/bookmarks' ? '0.15rem solid black' : 'none'};
    border-radius: 0.3rem;
`;

export { SidebarWrapper, StyledHomeIcon, StyledBookmarksIcon };