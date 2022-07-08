import { Injectable } from '@angular/core';
import { DataStore } from '@aws-amplify/datastore';
import { UserModel, Eusertype } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: UserModel | null;

  constructor() { this.user = null;}

  async createUser(login: string, password: string, name: string, user_type: Eusertype) {
    return await DataStore.save(
      new UserModel({
        login,
        password,
        name,
        user_type
      })
    );
  }

  async getUser(login: string, password: string):Promise<UserModel | null> {
    console.log('getUser', login, password)
    const [result] = await DataStore.query(UserModel, (user) => user.login('eq', login).password('eq', password));
    console.log('result2', result)
   if(result){
    console.log('result', result.login)
    this.user = result;
    return result;
   }
		
    return null;
  }
  isAdmin(){
    return this.user && this.user.user_type === Eusertype.ADMIN;
  }

  getUserDetails() {
    return this.user;
  }
}
