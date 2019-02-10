import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { RegDetails} from './reg';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  username;
  mobile;
  mail;
  password:string;
  x:string;
  firstname:string;
  lastname:string;
	confirmpassword:string;
	model:RegDetails;
	submitted:boolean;
	UsersList:any[]=[];
  count:number=0;
  create: any;
  sample: Boolean;
  constructor(private service: ProductsService,
              private route: ActivatedRoute,
              private router:Router
              ) {
    this.model = new RegDetails('', '','');
    this.submitted = false;
  }

  ngOnInit() {
  }

  // checkValid() {
  // 	if(this.password==this.confirmpassword) {
  // 		this.submitted=true;
  // 		this.UsersList[this.count]=new RegDetails(this.firstname,this.lastname,this.password);
  // 		this.count+=1;
  // 	} else if (this.password!=this.confirmpassword) {
  //     alert("to register enter a valid password");
  //   }
  // }
  // onSubmit() { this.submitted = true;
  // }


  checkValid() {
    if(this.password==this.confirmpassword) {
      this.submitted=true;
      this.count+=1;
    } else if (this.password!=this.confirmpassword) {
      alert("To register enter a valid password");
    }
  }
  onSubmit() {
    this.submitted = true;
    var details = {username:this.username,password:this.password,email:this.mail,success:this.submitted};
    var obj = this.service.newuser(details);
    obj.subscribe((temp) =>{this.create = temp;
      if(this.create) {
        this.activate();
        //this.sample = true;
      } else {
        console.log("hii");
      }
    }, ()=>{
    });
  }
  activate() {
    alert("Registered Sucessfully");
    this.router.navigate(['/login'], {relativeTo: this.route});
  }
}


