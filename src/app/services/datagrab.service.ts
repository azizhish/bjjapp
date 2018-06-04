import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular/dist/esm/src/ngx-restangular';
import { User } from "../shared/user";
import { Observable } from 'rxjs/Observable';
import { Sub } from "../shared/sub";

@Injectable()

@Injectable()
export class DatagrabService {

  constructor(private restang: Restangular) { }

  getSubs(userId: number): Observable<Sub[]> {
    return this.restang.one('users', userId).get()
      .map(user => user.subs);
  }
  
  getNumSubs(userId: number): Observable<number> {
    return this.restang.one('users', userId).get()
      .map(user => user.subs.length);
  }

}
