import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users=[];
  addUserData(ref){
    let userObj=ref.value;

    this.users.push(userObj);
    ref.reset();
  }

  deleteData(ind){
    this.users.splice(ind,1);
  }


}

