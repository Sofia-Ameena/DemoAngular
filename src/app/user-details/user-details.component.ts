import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../models/users-interface.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails;

  constructor(private uObj:UsersService,private ar:ActivatedRoute) { }

  ngOnInit(): void {
    
    event.preventDefault();
    let id=this.ar.snapshot.params.id;
    console.log(id);

    this.uObj.getUsersId(id).subscribe(
      obj=>{
        this.userDetails=obj;
      },
      err=>{
        console.log("Error in user-details");
      }
    )
  }
}

