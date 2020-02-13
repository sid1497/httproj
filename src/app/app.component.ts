import { Component,OnInit } from '@angular/core';
import{UserService}from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent implements OnInit {

PageTitle:string="Users";
users:any;
constructor(private userService:UserService)
{

}
ngOnInit(){


  this.userService.getAllUsers().subscribe((data)=>{

    this.users  = data;
  });
}


}
