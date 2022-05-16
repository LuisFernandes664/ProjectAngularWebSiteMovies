import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CrudService } from 'src/services/crud.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsRemoveComponent } from './details-remove/details-remove.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create', component: CreateComponent},
  {path: 'details', component: DetailsRemoveComponent, children: [
    {path: ':name', component: DetailsRemoveComponent}
  ]}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    DetailsRemoveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [
    CrudService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
