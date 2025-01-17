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
    
    const res2 = this.userService.getUser('Dan', '123123')
    console.log('dan get', res2);
    res2.then(r=>console.log)
    
    this.userService.getUser('Alex', '12341234').then(res => {
      console.log('Alex get', res)
      
    });
  
    this.userService.getUser('Olesya', '1234512345').then(res => {
      console.log('Olesya get', res)
    }
    );
  }

  
}
