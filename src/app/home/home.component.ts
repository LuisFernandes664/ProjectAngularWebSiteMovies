import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/services/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filme = new CrudService();
  movieParse: any;

  constructor() {
    
   }

  ngOnInit(): void {
    console.log(this.filme.movies)
    this.movieParse = JSON.parse(JSON.stringify(this.filme))
  }

}
