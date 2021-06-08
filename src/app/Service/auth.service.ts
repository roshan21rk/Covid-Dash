import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  checkAuthenticated(){
    return "";
  }
  

  login(token){
    let tokenString='Bearer '+token;
    const headers = new HttpHeaders().set("Authorization",tokenString);
    return this.http.get("http://localhost:8081/", { headers, responseType: 'text' as 'json'});
  }

  public generateToken(request){
    return this.http.post("http://localhost:8081/authenticate",request,{responseType : 'text' as 'json'});
  }


}
