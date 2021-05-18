import styled from 'styled-components';
import cloudIcon from '../../images/cloud.svg';
import bookmarkIcon from '../../images/bookmark.svg';

const SidebarWrapper = styled.div`
    border-right: 4px solid grey;
    background: white;
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    div {
        margin-top: 2rem;
    }
`;

const StyledHomeIcon = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    background: url(${cloudIcon}) center/cover;
    cursor: pointer;
    &:active {
        transform: scale(0.95);
    }
`;

const StyledBookmarksIcon = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    background: url(${bookmarkIcon}) center/cover;
    cursor: pointer;
    &:active {
        transform: scale(0.95);
    }
`;

export { SidebarWrapper, StyledHomeIcon, StyledBookmarksIcon };