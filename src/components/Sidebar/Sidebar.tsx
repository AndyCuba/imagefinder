import { useLocation } from 'react-router-dom';
import { SidebarWrapper, StyledBookmarksIcon, StyledHomeIcon } from './style';

function Sidebar() {
  const {pathname} = useLocation();
  
  return (
    <SidebarWrapper >
      <StyledHomeIcon to='/' pathname={pathname} />
      <StyledBookmarksIcon to='/bookmarks' pathname={pathname} />
    </SidebarWrapper>
  );
}
  
export default Sidebar;