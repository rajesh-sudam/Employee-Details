import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { Routes ,RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegComponent } from './reg/reg.component';
import { MapComponent } from './map/map.component';
import { TableComponent } from './table/table.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path:'',redirectTo:"/login",pathMatch:'full'}, 
  {path:'login',component:LoginComponent} ,
  {path:'home',component:HomeComponent},
  {path:'reg',component:RegComponent},
  {path:'map',component:MapComponent},
  {path:'table',component:TableComponent},
  {path:'table/:id',component:TableComponent},
  {path:'edit/:id',component:EditComponent},
];



@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class RoutingModule { }