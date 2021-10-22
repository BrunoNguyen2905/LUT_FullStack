import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
// import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  constructor(private http:Http) { }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
      .map(res => res.json()) //map method => send back data success true or false with message
  }

}
