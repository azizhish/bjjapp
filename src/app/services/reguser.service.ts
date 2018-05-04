import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular/dist/esm/src/ngx-restangular';
import { User } from "../shared/user";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegUserService {

  constructor(private restang: Restangular) { }

  registerUser(user: User): Observable<User> {
    return this.restang.all('users').post(user);
  }

  getCounterStatus(): Observable<any> {
    return this.restang.one('master').get();
  }

  checkUserName(uname: string) {
    return this.restang.all('users').getList()
      .map(users => (users.filter(user => user.uname === uname)))
      .map(users => !users.length);
  }

  setCounter(count: number): void {
    this.restang.all('master').post({ id: count }); 
  }
}
