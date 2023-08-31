import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:any;
  password:any;
  forms:FormGroup;
  user:any;
  constructor(private http:HttpClient,private router:Router){
    this.forms=this.createFormGroup();
  }
  createFormGroup(){
    return new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }
  onSubmit():void{
    let currentMail=this.forms.value.email;
    let currentPassword=this.forms.value.password;
      if(currentMail==this.user[0].email && currentPassword==this.user[0].password){
        localStorage.setItem('Validuser',currentMail);
        this.router.navigateByUrl('/table');
        // console.log("yesss")
        // alert('YES');
      }
      else{
        alert('NO');
        console.log(this.user[0].email);
        console.log(this.user[0].password);
        window.location.reload();
      }
  }
  ngOnInit(): void {
    this.http.get('http://localhost:4200/api/v1').subscribe(data=>{
    this.user=data;
    console.log(this.user);
    })

    }

  }


