import { Card } from '../index';
import { useAppSelector } from '../../hooks/hooks';
import Sidebar from '../Sidebar/Sidebar';
import { BookmarksWrapper, CardsWrapper } from './style';
import { bookmarkedImagesSelector, RecievedPhotoObjType } from '../../ducks/imagesReducer';

function Bookmarks() {
  const bookmarkedImages = useAppSelector(bookmarkedImagesSelector);

    return (
      <BookmarksWrapper >
        <Sidebar />
        {bookmarkedImages[0] && <CardsWrapper>{bookmarkedImages.map((image: RecievedPhotoObjType, index: number) => 
        <Card key={index} title={image.title} farm={image.farm} server={image.server}
            id={image.id} secret={image.secret} bookmarkedImages={bookmarkedImages}/>)}</CardsWrapper>}
      </BookmarksWrapper>
    );
  }
  
export default Bookmarks;