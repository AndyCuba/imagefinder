import { 
  addPhotoAction, 
  RecievedPhotoObjType, 
  removePhotoAction 
} from '../../redux/reducers/imagesReducer';
import { useAppDispatch } from '../../hooks/hooks';
import { 
  CardWrapper, 
  StyledButton, 
  StyledImage 
} from './style';

type CardPropsType = {
  title: string,
  farm: number,
  server: string,
  id: string,
  secret: string,
  bookmarkedImages: RecievedPhotoObjType[]
};

function Card(props: CardPropsType) {
  const { farm, server, id, secret, title, bookmarkedImages } = props;
  const dispatch = useAppDispatch();
  const findImageIndex = bookmarkedImages.findIndex((item: RecievedPhotoObjType) => item.id === id);
  const isBookmarked = findImageIndex !== -1;

  const handleClick = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if(e.target !== null) {
      const target = e.target as HTMLButtonElement;
      const sibling = target.previousSibling as HTMLDivElement;
      if(isBookmarked) {
        dispatch(removePhotoAction(sibling.id));
      } else {
        dispatch(addPhotoAction(sibling.id));
      };
    };
  };

  return (
    <CardWrapper>
      <StyledImage farm={farm} server={server} id={id} secret={secret} title={title}/>
      <StyledButton onClick={handleClick}>
        {isBookmarked ? 'Remove it' : 'Bookmark it'}
      </StyledButton>
    </CardWrapper>
  );
};
  
export default Card;