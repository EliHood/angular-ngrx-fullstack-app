import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { User } from "../models/user";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: Http) {}
  private url: string = "/api/v1/users/";

  getUsers = (): Observable<User[]> => {
    return this.http.get(this.url + "getUsers").pipe(map(res => res.json()));
  };

  login = (user): Observable<any> => {
    return this.http.post(this.url + "login", user);
  };
  register = (user): Observable<any> => {
    return this.http.post(this.url + "register", user);
  };
}
