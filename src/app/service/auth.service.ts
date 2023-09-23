import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  apiurl = 'http://localhost:3000/user';

  getAll(){
    return this.http.get(this.apiurl);
  }

  getByCode(code: any){
    return this.http.get(this.apiurl + '/' + code);
  }

  registerUser(data: any){
    return this.http.post(this.apiurl, data);
  }

  updateUser(code: any, data: any){
    return this.http.put(this.apiurl + '/' + code , data);
  }

  isLoggedIn(){
    return sessionStorage.getItem('user_id')!=null;
  }
}
