import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public x:any=[];
  public data: any=[];
  constructor(private http: HttpClient) { }

  update(data){
    console.log(data);
    return this.http.get("/dashboard/"+data);
  }

  send(data){
      this.data=data;
  }
  receive()
  {
    return this.data;
  }

  login(username,password){
    console.log(username,password);
    return this.http.get('/login/'+'{ "username":"'+username+'","password":"'+password+'"}');
  }

  forgotPassword(email){
    return this.http.get('/login/fw/'+'{"username":"'+email+'","vfcode":"","status":"reset"}');
  }

  resetPassword(code){
    console.log('reset');
    console.log('/login/reset/{"vfcode":"'+code+'"}');
    return this.http.get('/login/reset/{"vfcode":"'+code+'"}');
  }

  changePassword(username,password){
    return this.http.get('/reset/{"username":"'+username+'","password":"'+password+'","status":"active"}');
  }
}
