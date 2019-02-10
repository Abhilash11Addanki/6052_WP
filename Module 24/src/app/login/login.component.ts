import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isvalid = true;
  username = "";
  password = "";
  //form;
  check:any;

  constructor(
    private route:ActivatedRoute,
    private location: Location,
    private router: Router,
    private formBuilder: FormBuilder,
    private service: ProductsService

  ) { }

  ngOnInit() {
  }

  valid() {
      //return this.isvalid;
      var details = {username: this.username, password: this.password}
      var det = this.service.checkuser(details);
      det.subscribe((temp) =>{this.check = temp;
        if(this.check.check == 1) {
          var user = {user: this.check.username, email: this.check.emailid, sucess: this.check.sucess };
          this.service.currentuser(user);
          this.activate();
          //this.sample = true;
        } else {
          alert("please Signup");
        }
      }, ()=>{
      });
    }
    
    //   det.subscribe(temp => this.check = temp, ()=>{
    //     console.log(this.check);
    //     if(this.check) {
    //       this.activate();
    //     }
    //   });
    // }

  activate() {
    this.router.navigate(['/home'], { relativeTo: this.route });
  }
}
