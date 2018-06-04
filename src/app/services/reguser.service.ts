import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular/dist/esm/src/ngx-restangular';
import { User } from "../shared/user";
import { Observable } from 'rxjs/Observable';
import { Sub } from "../shared/sub";

@Injectable()
export class RegUserService {

  constructor(private restang: Restangular) { }

  registerUser(user: User): Observable<User> {
    return this.restang.all('users').post(user);
  }

  getUsers(): Observable<User[]> {
    return this.restang.all('users').getList();
  }

  getUser(userid: number): Observable<User> {
    return this.restang.one('users', userid).get();
   }

  getCounterStatus(): Observable<any> {
    return this.restang.one('master').get();
  }

  checkUserName(uname: string): Observable<User[]> {
    return this.restang.all('users').getList()
      .map(users => (users.filter(person => person.uname === uname)));
   }

  // checkUserName(uname: string) {
  //   return this.restang.all('users').getList()
  //     .map(users => { return users.filter(user => user.uname === uname).length == 0 });
      
  //     //users => (users.filter(user => user.uname === uname))).length
  // }

  checkLogin(username: string, pass: string) {
    return this.restang.all('users').getList()
      .map(users => (users.filter(user => user.uname === username)))
      .map(users => (users.filter(user => user.pass === pass)))
      .map(users => { if (users.length == 1) return users[0].id; else return -1; });
  }

  setCounter(count: number): void {
    this.restang.all('master').post({ id: count }); 
  }

  addSub(userID: number, sub: Sub): Observable<User> {
    console.log(userID);
    return this.restang.one('users', userID).post({ lname: 'test' });
  }
}
