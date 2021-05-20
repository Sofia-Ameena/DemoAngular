import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Users } from '../models/users-interface.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{


  //mySubscription:Subscription;
  usersData:Users[]=[];
  constructor(private usObj:UsersService,private router:Router) { }

  ngOnInit(): void {
    this.usObj.getUsers().subscribe(
      user=>{
        this.usersData=user;
        console.log(this.usersData);
      },
      err=>{
        console.log("Error in users data",err);
      }
    )
  }

  onSelectId(id){
    this.router.navigateByUrl('users/'+id);
  }
}
