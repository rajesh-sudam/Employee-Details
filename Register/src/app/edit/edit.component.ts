import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component ,Input,OnInit} from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  id:any;
  frmEdit:FormGroup; 
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute){
  this.frmEdit=this.creatFormGroup()
  }

  creatFormGroup(){
    return new FormGroup({
      name :new FormControl('',[Validators.required,Validators.pattern('^([A-Z][a-z]*((\\s[A-Za-z])?[a-z]*)*)$')]),
      email:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      phone_no:new FormControl('',[Validators.required,Validators.pattern('[0-9]{10}')]),
    })
  }

  OnSubmit():void{
    console.log(this.frmEdit.value);
    this.http.put("http://localhost:4200/api/v1/"+this.id,this.frmEdit.value).subscribe();

  }
  success(){
    window.alert("Updated Details Succesfully !!!");
    setTimeout(()=>{this.router.navigateByUrl('/map');},300)

  }
  ngOnInit(){
    this.id=this.route.snapshot.paramMap.get(`id`);
  
  }

}




