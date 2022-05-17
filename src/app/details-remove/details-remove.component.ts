import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CrudService } from 'src/services/crud.service';
import { Movie } from '../create/movie';

@Component({
  selector: 'app-details-remove',
  templateUrl: './details-remove.component.html',
  styleUrls: ['./details-remove.component.css']
})
export class DetailsRemoveComponent implements OnInit {
  showMovie: any;
  movie: {name: string}
  movieParse: any;

  allMovies: any;
  atualName:any;

  constructor(private crudService: CrudService, private activeRoute: ActivatedRoute) {  }

  ngOnInit(): void {
    
    let name = this.activeRoute.snapshot.children[0].params["name"];
    this.showMovie = name;


    this.allMovies = this.crudService.retriveAll()

    //console.log(this.allMovies)

    for (let i = 0; i < this.allMovies.length; i++) {
      //console.log(JSON.stringify((this.allMovies[i].nameMovie)))
      if(String(this.allMovies[i].nameMovie) == this.showMovie){
        //console.log(this.allMovies[i].nameMovie)
        this.atualName = this.allMovies[i]
        let ind = i
        console.log(ind)
      }
    }

    /*else{
      let atualName = this.allMovies[i]
      console.log(atualName)
    }*/
    //console.log(this.allMovies.find(this.showMovie))


    this.activeRoute.params.subscribe((params : Params) => {
      this.movie = {
        name: params['name']
      }
    });
    
  }

  removeMovie(removefilmeName: any): void {

    console.log(removefilmeName)
    this.crudService.removeMovie(removefilmeName);
    //this.newMovie = "";
  }
}
