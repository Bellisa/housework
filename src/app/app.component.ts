import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/user.service';
import { Eusertype, UserModel} from '../models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'house-work-app';

  constructor(private userService: UserService){}
  ngOnInit(): void {
    this.userService.getUser('Dan', '123123').then(res => {
      console.log('dan get', res)
      if (!res) {
        this.userService.createUser('Dan', '123123', 'Danya', Eusertype.USER).then(
          result => {
            console.log('dan created', result)
          }
        );
      }
    }
    )
    this.userService.getUser('Dan', '123123').then(res => {
      console.log('Alex get', res)
      if (!res) {
        this.userService.createUser('Alex', '12341234', 'Alexander', Eusertype.USER).then(
          result => {
            console.log('Alexander created', result)
          }
        );
      }
    });
  
    this.userService.getUser('Dan', '123123').then(res => {
      console.log('Olesya get', res)
      if (!res) {
        this.userService.createUser('Olesya', '1234512345', 'Olesya', Eusertype.ADMIN).then(
          result => {
            console.log('Olesya created', result)
          }
        );
      }
    }
    );
  }

  
}
