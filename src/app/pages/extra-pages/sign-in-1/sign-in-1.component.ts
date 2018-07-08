import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {AuthService} from "../../../services/auth.service";
import {TokenStorageService} from "../../../services/token-storage.service";

@Component({
  selector: 'page-sign-in-1',
  templateUrl: './sign-in-1.component.html',
  styleUrls: ['./sign-in-1.component.scss']
})
export class PageSignIn1Component implements OnInit {
  username : string ;
  password : string;

  constructor(private router: Router, private authService : AuthService, private token : TokenStorageService) {}

  ngOnInit() { }

  onSubmit() {

    this.authService.login(this.username,this.password).subscribe((data)=> {
      console.log(this.username + this.password)
      console.log(data)
      this.token.saveToken(data.token);
      this.router.navigate(['/default-layout/filtering-table']);

    },(error) =>{

      console.log("----------------------------")
      console.log(error)
    });

  }
}
