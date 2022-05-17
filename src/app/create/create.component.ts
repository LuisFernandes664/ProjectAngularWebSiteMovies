import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/services/crud.service';
import { Movie } from './movie'
import { UUID } from 'angular2-uuid';

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
      this.newMovie.id = UUID.UUID()
      //console.log(this.newMovie.id)
      this.crudService.createMovie(this.newMovie);
      console.log(this.newMovie)
      //console.log(String(this.newMovie.id))
    }
    else{ 
      alert('Preencha os campos abaixo');
      this.router.navigate(['create'])
    }
  }
}
