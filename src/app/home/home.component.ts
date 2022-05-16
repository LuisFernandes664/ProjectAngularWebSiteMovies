import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CrudService } from 'src/services/crud.service';
import { Movie } from '../create/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //filme = new CrudService();
  movieParse: Movie[] = [];
  movie: {name: string}

  constructor(private crudService: CrudService, private activeRoute: ActivatedRoute, private router: Router) { }
   

  ngOnInit(): void {
    //search dados / Movies
    this.movieParse = this.crudService.retriveAll()
    console.log(this.movieParse)
    //console.log(this.filme.movies)
    //this.movieParse = JSON.parse(JSON.stringify(this.filme))
    
  }

  redirect(): void{
    let moviesName = this.crudService.retriveAll()
    this.router.navigate(['details'])
    //(click)="redirect()"
    //this.router.navigate([this.movie.name]);
  }

}
