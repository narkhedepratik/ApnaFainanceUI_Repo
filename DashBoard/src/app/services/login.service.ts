import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


   baseurl:string="http://localhost:9090/employee/"


  authenticateUser(username:string,password:string)
  {
      return this.http.get(this.baseurl+'login/'+username+'/'+password)
  }
}
