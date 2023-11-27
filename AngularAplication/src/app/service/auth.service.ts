import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseAPI='http://localhost:3000/user'
  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get(this.baseAPI);
  }
  getById(id:any){
    return this.http.get(this.baseAPI+'/'+id);
  
  }
  registerData(inputData:any){
    return this.http.post(this.baseAPI,inputData);
  }
  updateData(id:any,inputData:any){
return this.http.put(this.baseAPI+'/'+id,inputData)
  }
}
