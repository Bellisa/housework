import { Injectable } from '@angular/core';
import { DataStore } from '@aws-amplify/datastore';
import { UserModel, Eusertype } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

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
}
