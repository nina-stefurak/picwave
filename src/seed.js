// NOTE:'V8xVkn47IpToiRd6sUOuYtqSltc2'
export function seedDatabase(firebase) {
    const users = [
      {
        userId: 'V8xVkn47IpToiRd6sUOuYtqSltc2',
        username: 'soniacat',
        fullName: 'Sonia cat',
        emailAddress: 'soniacat@gmail.com', //password 123456
        following: ['2'],
        followers: ['2'],
        dateCreated: Date.now()
      },
      {
        userId: '2',
        username: 'taylor',
        fullName: 'Taylor Do',
        emailAddress: 'taylor@gmail.com',
        following: ['V8xVkn47IpToiRd6sUOuYtqSltc2'],
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
  
    firebase.firestore().collection('users').limit(1).get()
    .then(snapshot => {
      if (snapshot.empty) {
        // The 'users' collection is empty
        console.log("'users' collection is empty. Adding users...");
  
        for (let k = 0; k < users.length; k++) {
          firebase.firestore().collection('users').add(users[k])
            .then(() => console.log(`User ${k} added`))
            .catch(error => console.error("Error adding user: ", error));
        }
      } else {
        // The 'users' collection does not exist
        console.log("'users' collection already initialized.");
      }
    })
    .catch(error => console.error("Error checking collection: ", error));

    firebase.firestore().collection('photos').limit(1).get()
    .then(snapshot => {
      if (snapshot.empty) {
        // The 'photos' collection is empty
        console.log("'photos' collection is empty. Adding users...");
  
    for (let i = 1; i <= 3; ++i) {
      firebase
        .firestore()
        .collection('photos')
        .add({
          photoId: i,
          userId: '2',
          imageSrc: `/images/users/taylor/${i}.jpg`,
          caption: 'Saint George and the Dragon',
          likes: [],
          comments: [
            {
              displayName: 'sali',
              comment: 'Love this photo!'
            },
            {
              displayName: 'snowball',
              comment: 'Hi, cool picture!'
            }
          ],
          userLatitude: '40.7128°',
          userLongitude: '74.0060°',
          dateCreated: Date.now()
        });
    }
      } else {
        // The 'photos' collection does not exist
        console.log("'photos' collection already initialized.");
      }
    })
    .catch(error => console.error("Error checking collection: ", error));

  }