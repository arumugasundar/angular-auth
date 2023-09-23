import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router
    ) {
      sessionStorage.clear();
    }

  user:any;

  form = this.builder.group({
    name: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
  })

  loginUser(){
    if(this.form.valid){
      this.service.getByCode('?name=' + this.form.value.name).subscribe(res => {
        this.user = res;
        if(this.user[0]?.password === this.form.value.password){
          sessionStorage.setItem('user_id', this.user[0].id)
          this.router.navigate(['']);
        } else {
          this.toastr.error('Invalid Credentials');
        }

      })
    } else {
      this.toastr.warning('Please enter valid data');
    }
  }

}
