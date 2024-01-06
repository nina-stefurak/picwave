import Skeleton from 'react-loading-skeleton';
import usePhotos from '../hooks/use-photos';
import Post from './post';

export default function Timeline() {
    // нам нужно полуить фото юзера, который залогинился
  const { photos } = usePhotos();
  
  console.log('photos', photos);

    // при загрузке фото нам нужно использовать скелетон
    // если у нас есть фото, покажите их
    // если у юзера нет фоток, скажите ему их создать (парочку фото)
return (
    <div className="container col-span-2">
        {!photos ? (
               <Skeleton count={4} width={640} height={500} className="mb-5" />
        ) : photos?.length > 0 ? (
            photos.map((content) => <Post key={content.docId} content={content} />)
        ) : (
            <p className="text-center text-2xl">Follow people to see photos</p> 
        )}
    </div>
    );
}
