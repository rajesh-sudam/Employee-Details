import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  frmRegister:FormGroup;
  constructor(public http:HttpClient,private route:Router){
    this.frmRegister=this.createFormGroup();
  }
  createFormGroup(){
    return new FormGroup({
      id:new FormControl('',[Validators.required]),
      name :new FormControl('',[Validators.required,Validators.pattern('^([A-Z][a-z]*((\\s[A-Za-z])?[a-z]*)*)$')]),
      email:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      password:new FormControl('',[Validators.required,Validators.minLength(8), Validators.pattern('^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[@#%$!&*])[a-zA-Z0-9@#%$!&*]{8,50}$')]),
      phone_no:new FormControl('',[Validators.required,Validators.pattern('[0-9]{10}')]),
    })
  }
  OnSubmit():void{
    console.log(this.frmRegister.value);

    this.http.post('http://localhost:4200/api/v1',
    this.frmRegister.value)
    .subscribe();
      // console.log(response);
  }
  alert() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Cancel!', 'You Have Cancelled The Process', 'success');
        window.location.reload();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Continue', 'Please Fill The Remaining Details', 'error');
      }
    });
  }
  success(){
    window.alert("Registration Succesfully Done !!!");
    setTimeout(()=>{this.route.navigateByUrl('/table');},300)
  }
  ngOnInit(): void {
    
  }

}
