import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule,HttpClient} from '@angular/common/http';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { RoutingModule } from './routing.module';
import { RegComponent } from './reg/reg.component';
import { MapComponent } from './map/map.component';
import { TableComponent } from './table/table.component'
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegComponent,
    MapComponent,
    TableComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
