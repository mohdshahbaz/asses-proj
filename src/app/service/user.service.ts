import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL = "http://demo.apirodata.io:6001/client/auth";

  constructor(
    private http: HttpClient
  ) { }


  CreateUser(data: any) {
    return this.http.post(this.BASE_URL + '/save', data);
  }

  GetAllUsers() {
    return this.http.get(this.BASE_URL + '/getall');
  }

}
