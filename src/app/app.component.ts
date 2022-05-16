import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/services/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  movies: any[];

  constructor(private CrudService: CrudService) { }
  
  ngOnInit(): void {
    this.movies = this.CrudService.movies;
  }

}
