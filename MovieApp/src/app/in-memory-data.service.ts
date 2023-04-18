import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      {
        id: 1,
        name: 'The Silence of The Lambs',
        description:
          'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.',
        imageUrl: '1.jpg',
      },
      {
        id: 2,
        name: 'Prometheus',
        description:
          'Millions of years ago, a spacecraft of an advanced humanoid alien race arrives on a primordial planet, possibly Earth. One of the aliens consumes a dark liquid, causing its body to disintegrate and fall into a nearby waterfall.',
        imageUrl: '2.jpg',
      },
      {
        id: 3,
        name: 'The Dark Knight',
        description:
          'The plot follows the vigilante Batman, police lieutenant James Gordon, and district attorney Harvey Dent, who form an alliance to dismantle organized crime in Gotham City. Their efforts are derailed by the Joker, an anarchistic mastermind who seeks to test how far Batman will go to save the city from chaos.',
        imageUrl: '3.jpg',
      },
      {
        id: 4,
        name: 'Lord of War',
        description:
          'The film was released in the United States on September 16, 2005, to positive reviews and grossed $72.6 million at the box office. Cage plays a fictional illegal arms dealer, inspired by the stories of several real-life arms dealers and smugglers, primarily Viktor Bout.',
        imageUrl: '4.jpg',
      },
      {
        id: 5,
        name: 'The Shining',
        description:
          'A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.',
        imageUrl: '5.jpg',
      },
      {
        id: 6,
        name: 'The Shawshank Redemption',
        description:
          'In 1947, Andy Dufresne (Tim Robbins), a banker in Maine, is convicted of murdering his wife and her lover, a golf pro. Since the state of Maine has no death penalty, he is given two consecutive life sentences and sent to the notoriously harsh Shawshank Prison.',
        imageUrl: '6.jpg',
      },
      {
        id: 7,
        name: 'Once Upon A Time In Holltwood',
        description:
          "A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood's Golden Age in 1969 Los Angeles.",
        imageUrl: '7.jpg',
      },
    ];
    return { movies };
  }
  constructor() {}
}
