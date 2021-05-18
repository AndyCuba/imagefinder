import { useRef } from 'react';
import { debounce } from 'debounce';

import { 
  bookmarkedImagesSelector,
  fetchData, 
  recievedImagesSelector, 
  RecievedPhotoObjType, 
  serchfieldSelector,
  setSearchfield, 
  totalItemsCountSelector
} from '../../ducks/imagesReducer';
import { offsetSelector, pageLimitSelector, pageNumberSelector } from '../../ducks/paginationReducer';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { Card, Sidebar, Paginations } from '../index';
import { 
  HomeWrapper, 
  CardsWrapper, 
  MainWrapper, 
  StyledForm 
} from './style';

function Home() {
  const dispatch = useAppDispatch();
  const recievedImages = useAppSelector(recievedImagesSelector);
  const currentSearchfield = useAppSelector(serchfieldSelector);
  const currentPageNumber = useAppSelector(pageNumberSelector);
  const totalItemsCount = useAppSelector(totalItemsCountSelector);
  const pageLimit = useAppSelector(pageLimitSelector);
  const offset = useAppSelector(offsetSelector);
  const bookmarkedImages = useAppSelector(bookmarkedImagesSelector);
  const input = useRef<HTMLInputElement | null>(null);
  

  const handleSubmit = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();
    if(input.current && input.current.value !== '') {
      dispatch(setSearchfield(input.current.value));
      fetchData(dispatch, input.current.value, currentPageNumber);
    }    
  };

  return (
    <HomeWrapper>
      <Sidebar />
      
      <MainWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <input ref={input} onChange={debounce(handleSubmit, 1500)}/>
          <button type="submit">Search</button>
        </StyledForm>
        {recievedImages[0] && <Paginations 
          pageLimit={pageLimit} 
          searchfield={currentSearchfield} 
          currentPageNumber={currentPageNumber}
          totalItemsCount={+totalItemsCount}/>}
      {!recievedImages[0] ? <p>No images here. Would you try to search for anything else?</p> : 
        <CardsWrapper>{recievedImages.slice(offset, offset + pageLimit).map((image: RecievedPhotoObjType, index: number) => <Card key={index} title={image.title} farm={image.farm} server={image.server}
          id={image.id} secret={image.secret} bookmarkedImages={bookmarkedImages}/>)}</CardsWrapper>}
      </MainWrapper>
      
    </HomeWrapper>
  );
  }
  
export default Home;