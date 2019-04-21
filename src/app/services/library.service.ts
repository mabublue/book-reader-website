import { Injectable } from '@angular/core'

@Injectable()
export class LibraryService {
  getAuthors() {
    return AUTHORS.sort((a1, a2) => {
        if (a1.lastname.toLowerCase() > a2.lastname.toLowerCase()) {
          return 1;
        }
        if (a1.lastname.toLowerCase() < a2.lastname.toLowerCase()) {
          return -1;
        }
        return 0;
      });
  }

  getAuthor(id:number) {
    return AUTHORS.find(a => a.id === id);
  }
}

const AUTHORS = [
  {
    id: 1,
    firstname: 'David',
    lastname: 'Gemmell',
    fullname: 'David Gemmell',
    imageUrl: '/assets/images/angularconnect-shield.png',
    books: [
      {
         title: 'Legend',
         image: '/assets/images/bookcovers/David Gemmell-Legend.png',
         description: 'The story of Druss at Delnoch'
      }
    ]
  },
  {
    id: 2,
    firstname: 'Peter',
    middlename: 'F',
    lastname: 'Hamilton',
    fullname: 'Peter F Hamilton',
    imageUrl: '/assets/images/angularconnect-shield.png',
    books: [
      {
         title: 'Mindstar Rising',
         image: '/assets/images/bookcovers/Peter F Hamilton-Mindstar Rising.png',
         description: 'The first Greg Mandell story'
      },
      {
        title: 'A Quantum Murder',
        image: '/assets/images/bookcovers/Peter F Hamilton-A Quantum Murder.png',
        description: 'Greg Mandell investigates a murder'
      }

    ]
  },
  {
    id: 3,
    firstname: 'Neal',
    lastname: 'Asher',
    fullname: 'Neal Asher',
    imageUrl: '/assets/images/angularconnect-shield.png',
    books: [
      {
         title: 'Gridlinked',
         image: '/assets/images/bookcovers/Neal Asher-Gridlinked.png',
         description: 'Ian Cormac chasing the bad guy'
      }
    ]
  },
  {
    id: 4,
    firstname: 'Isaac',
    lastname: 'Asimov',
    fullname: 'Isaac Asimov',
    imageUrl: '/assets/images/angularconnect-shield.png',
    books: [
      {
         title: 'Foundation',
         image: '/assets/images/bookcovers/Isaac Asimov-Foundation.png',
         description: 'Tell the future with math'
      }
    ]
  },
  {
    id: 5,
    firstname: 'Robin',
    lastname: 'Hobb',
    fullname: 'Robin Hobb',
    imageUrl: '/assets/images/authors/Robin Hobb.png',
    books: [
      {
         title: 'Assassins Apprentice',
         image: '/assets/images/bookcovers/Robin Hobb-Assassins Apprentice.png',
         description: 'Growing up as an assassin'
      }
    ]
  }
]
