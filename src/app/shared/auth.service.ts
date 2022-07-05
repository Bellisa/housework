import { Injectable } from '@angular/core';
import { Eusertype } from 'src/models';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService) { }

  isAuthenticated(userType: Eusertype | Eusertype.USER): boolean {
    console.log('isAuthenticated', userType)
    const user = this.userService.getUserDetails() || null;
    console.log('user', user)
    if(!user) {
      return false;
    }

    return (user.user_type === userType);
  }
}
