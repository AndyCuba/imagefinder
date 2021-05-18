import { RecievedPhotoObjType } from '../ducks/imagesReducer';


function getUniquePhotos(arr: RecievedPhotoObjType[])  {
    
    let tmpArray: Array<string> = [];
     function photoCheck(photo: RecievedPhotoObjType) {
         if (tmpArray.indexOf(photo.id) === -1) {
            tmpArray.push(photo.id);
            return true
         }
         return false;
    };

    if(arr !== null) {
       return arr.filter((photo: RecievedPhotoObjType): photo is RecievedPhotoObjType => photoCheck(photo)); 
    } else { return arr }
    
};

export { getUniquePhotos };