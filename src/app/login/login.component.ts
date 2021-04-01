import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginform = this.formBuilder.group({
    username: '',
    password: ''
  });
  message: any;
  isVisible: any;
 
  
  constructor(private formBuilder: FormBuilder,private route:Router) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.isVisible = false;
    
    if(this.loginform.get("username")?.value=="admin" && this.loginform.get("password")?.value=="admin"){
     this.route.navigate(['home'])
    }
    else{
      this.isVisible = true;
      this.message="username or password is incorrect";
      this.route.navigate(['login'])
    }
    
  }




}

