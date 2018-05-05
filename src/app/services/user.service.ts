import { Injectable } from '@angular/core';
import { Restangular, RestangularModule } from "ngx-restangular";
import { User } from "../shared/user";
import { baseURL } from "../shared/baseurl";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService {

  constructor(private restang: Restangular) { }

}
