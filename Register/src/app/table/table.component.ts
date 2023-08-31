import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  temp:any;
  id:any;
  constructor(private http:HttpClient,private router:Router){}
  ngOnInit(): void {
    this.temp=this.http.get("http://localhost:4200/api/v1");
  }
  byId(id:any){
      this.router.navigateByUrl(`table/${id}`);
      this.temp=this.http.get("http://localhost:4200/api/v1/"+id);
  }
  
  delete(id:any){

    console.log(id);
    // this.http.delete(`http://localhost:4200/api/v1/${id}`).subscribe();
    this.http.delete("http://localhost:4200/api/v1/"+id).subscribe(temp=>{
      console.log(temp);
    })
    
  }
  edit(id:any){
    this.router.navigateByUrl(`/edit/${id}`);

  }
}

