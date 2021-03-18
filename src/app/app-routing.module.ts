import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByDoneComponent } from './by-done/by-done.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserDataComponent } from './user-data/user-data.component';



const routes: Routes = [
{path: '', redirectTo : 'home' , pathMatch :"full"},

{path : 'home', component: HomeComponent},
{path : 'user-data', component : UserDataComponent },
{path : 'by-done', component :ByDoneComponent},
{path: '**', component :NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
