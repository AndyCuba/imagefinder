import { 
  HeaderWrapper, 
  StyledH1,
  StyledProfileIcon, 
  Wrapper
} from './style';

function Header() {
  return (
    <HeaderWrapper >
      <Wrapper>
      <StyledH1>Image Finder</StyledH1>
      <StyledProfileIcon />
      </Wrapper>
    </HeaderWrapper>
  );
};
  
export default Header;