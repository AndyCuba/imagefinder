import { Link } from 'react-router-dom';
import { SidebarWrapper, StyledBookmarksIcon, StyledHomeIcon } from './style';

function Sidebar() {
    return (
      <SidebarWrapper >
        <Link to='/'><StyledHomeIcon/></Link>
        <Link to='/bookmarks'><StyledBookmarksIcon /></Link>
      </SidebarWrapper>
    );
  }
  
export default Sidebar;