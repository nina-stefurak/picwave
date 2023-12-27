// NOTE:'V8xVkn47IpToiRd6sUOuYtqSltc2'
export function seedDatabase(firebase) {
    const users = [
      {
        userId: 'V8xVkn47IpToiRd6sUOuYtqSltc2',
        username: 'soniacat',
        fullName: 'Sonia cat',
        emailAddress: 'soniacat@gmail.com', //password 123456
        following: ['2'],
        followers: ['2', '3', '4'],
        dateCreated: Date.now()
      },
      {
        userId: '2',
        username: 'raphael',
        fullName: 'Raphael Do ',
        emailAddress: 'raphael@gmail.com',
        following: [],
        followers: ['V8xVkn47IpToiRd6sUOuYtqSltc2'],
        dateCreated: Date.now()
      },
      {
        userId: '3',
        username: 'sali',
        fullName: 'Sali Smith',
        emailAddress: 'sali.smith@gmail.com',
        following: [],
        followers: ['V8xVkn47IpToiRd6sUOuYtqSltc2'],
        dateCreated: Date.now()
      },
      {
        userId: '4',
        username: 'snowball',
        fullName: 'Snow Ball',
        emailAddress: 'snowball@gmail.com',
        following: [],
        followers: ['V8xVkn47IpToiRd6sUOuYtqSltc2'],
        dateCreated: Date.now()
      }
    ];
  
    for (let k = 0; k < users.length; k++) {
      firebase.firestore().collection('users').add(users[k]);
    }
  
    for (let i = 1; i <= 5; ++i) {
      firebase
        .firestore()
        .collection('photos')
        .add({
          photoId: i,
          userId: '2',
          imageSrc: `/images/users/raphael/${i}.jpg`,
          caption: 'Saint George and the Dragon',
          likes: [],
          comments: [
            {
              displayName: 'dali',
              comment: 'Love this place, looks like my animal farm!'
            },
            {
              displayName: 'orwell',
              comment: 'Would you mind if I used this picture?'
            }
          ],
          userLatitude: '40.7128°',
          userLongitude: '74.0060°',
          dateCreated: Date.now()
        });
    }
  }