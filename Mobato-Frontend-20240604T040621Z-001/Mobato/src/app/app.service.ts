import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }
  addMobile(data:any){
    return this.http.post("http://localhost:1111/Mobato/add-mobile",data)
  }
  viewMobile(){
    return this.http.get("http://localhost:1111/Mobato/get-all-mobile");
  }
}
