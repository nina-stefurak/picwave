import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';
import { getPhotos, getUserByUserId } from '../services/firebase';

export default function usePhotos(user) {
  const [photos, setPhotos] = useState(null);
  const {
   user: { uid: userId  = '' }
  } = useContext(UserContext);

  useEffect(() => {
  async function getTimelinePhotos() {
    const [{following}] = await getUserByUserId(userId);
    let followedUserPhotos = [];

    console.log('following', following);
   // проверка, подписан ли юзер на кого-то
    if (following.length > 0) {
        followedUserPhotos = await getPhotos(userId, following);
    }

    followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated)
    .forEach(photo => {
      console.log(JSON.stringify(photo));
    });
    setPhotos(followedUserPhotos);

  }
   getTimelinePhotos();
  }, [userId]);

return { photos };
}