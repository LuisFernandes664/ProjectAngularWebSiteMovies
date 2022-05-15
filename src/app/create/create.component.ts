import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CrudService } from 'src/services/crud.service';
import { Movie } from './movie'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  //newMovie: Movie;
  newMovie: any = this.crudService.movies;

  constructor(private crudService: CrudService ) {  }

  ngOnInit(): void {
    console.log(this.crudService.movies)
  }

  createMovie(form: NgForm): void {
    if(form.valid){
      console.log(this.newMovie)
      this.crudService.createMovie(this.newMovie);
      console.log(this.newMovie)
      this.newMovie = "";
    }
    else{ 
      console.log('Nao consegui')
    }
    //console.log(this.newMovie)
    //this.crudService.createMovie(this.newMovie);
    //this.CrudService.createMovie(this.newMovie);
    //this.newMovie = "";
    //console.log(this.newMovie)
  }
}
