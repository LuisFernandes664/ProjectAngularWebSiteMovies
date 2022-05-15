import { Injectable } from "@angular/core";

@Injectable()
export class CrudService {
  
  movies: any ;


  constructor() {
    this.movies = [
      {
        imgMovie: 'https://i.pinimg.com/originals/0b/02/27/0b022725aedc2a4e29a31f0e175a2a30.jpg',
        nameMovie: 'Spider Man',
        descMovie: 'Peter Parker is unmasked and no longer able to separate his normal...',
        category: 'Ação',
        classfication: '3'
      },
      {
        imgMovie: 'https://cdn.wallpapersafari.com/8/27/84P0tG.png',
        nameMovie: 'The Batman',
        descMovie: 'In his second year of fighting crime, Batman uncovers corruption in...',
        category: 'Ação',
        classfication: '6'
      },
      {
        imgMovie: 'https://images.hdqwalls.com/download/joker-4k2020-ot-800x1280.jpg',
        nameMovie: 'Joker',
        descMovie: 'During the 1980s, a failed stand-up comedian is driven insane...',
        category: 'Ação',
        classfication: '10'
      },
      {
        imgMovie: 'https://cellularnews.com/wp-content/uploads/2020/04/deadpool-standing-325x485.jpg',
        nameMovie: 'Deadpool',
        descMovie: 'The origin story of former Special Forces operative turned mercenary...',
        category: 'Ação',
        classfication: '5'
      },
      {
        imgMovie: 'https://cdna.artstation.com/p/assets/images/images/013/870/972/large/ruan-mota-iron-man.jpg?1541453039',
        nameMovie: 'Iron Man',
        descMovie: 'After being held captive in an Afghan cave, billionaire engineer Tony...',
        category: 'Ação',
        classfication: '8'
      },
      {
        imgMovie: 'https://s4.wallpapermoderna.com/wallpaper/6929/945/dune-2021-sci-fi-movies-2685-hd-download-movies-comics-2685-preview.jpeg',
        nameMovie: 'Dune',
        descMovie: 'Paul Atreides, a brilliant and gifted young man born into a great...',
        category: 'Ação',
        classfication: '6'
      },
      {
        imgMovie: 'https://wallpapercave.com/wp/wp6409693.jpg',
        nameMovie: 'Venom',
        descMovie: 'After finding a host body in investigative reporter Eddie Brock...',
        category: 'Ação',
        classfication: '9'
      },
      {
        imgMovie: 'https://cdn.wallpapersafari.com/48/8/Vrtbfi.jpg',
        nameMovie: 'Star Wars',
        descMovie: 'Princess Leia is captured and held hostage by the evil Imperial...',
        category: 'Ação',
        classfication: '9'
      },
    ];
  }

  createMovie(newMovie: any) : void {
    //let aux: any = JSON.stringify(newMovie);
    this.movies.push(newMovie);
    console.log(newMovie);
    //localStorage.setItem(newMovie.nameMovie, JSON.stringify(newMovie));
  }

  removeMovie(indiceMovie: number) : void {
    this.movies.splice(indiceMovie, 1);
  }
}