import { addPhotoAction, RecievedPhotoObjType, removePhotoAction } from '../../ducks/imagesReducer';
import { useAppDispatch } from '../../hooks/hooks';
import { CardWrapper, StyledButton, StyledImage } from './style';

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
  const findImage = bookmarkedImages.findIndex((item: RecievedPhotoObjType) => item.id === id);

  const handleAddClick = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if(e.target !== null) {
      const target = e.target as HTMLButtonElement;
      const sibling = target.previousSibling as HTMLDivElement;
      dispatch(addPhotoAction(sibling.id))
    }
  };

  const handleDeleteClick = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if(e.target !== null) {
      const target = e.target as HTMLButtonElement;
      const sibling = target.previousSibling as HTMLDivElement;
      dispatch(removePhotoAction(sibling.id))
    }
  };

  return (
    <CardWrapper>
      <StyledImage farm={farm} server={server} id={id} secret={secret} title={title}/>
      {findImage === -1 ? <StyledButton onClick={handleAddClick}>Bookmark it</StyledButton> :
        <StyledButton onClick={handleDeleteClick}>Remove it</StyledButton>}
    </CardWrapper>
  );
}
  
export default Card;