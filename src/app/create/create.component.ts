import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/services/crud.service';
import { Movie } from './movie'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  //newMovie: Movie;
  newMovie: any = {};

  constructor(private crudService: CrudService, private router: Router) {  }

  ngOnInit(): void {
    console.log(this.crudService.movies)
  }

  createMovie(form: NgForm): void {
    if(form.valid && this.newMovie.nameMovie && this.newMovie.imgMovie){
      console.log(this.newMovie)
      this.crudService.createMovie(this.newMovie);
      console.log(this.newMovie)
      //this.newMovie = "";
      console.log(this.crudService.movies)
    }
    else{ 
      alert('Preencha os campos abaixo');
      this.router.navigate(['create'])
    }
  }
}
