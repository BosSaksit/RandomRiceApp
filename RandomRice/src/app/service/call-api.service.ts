import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {
  
  public static host:string = "https://localhost:5001/api/";

  constructor(public http:HttpClient) { }

  public GetAllRice(){
    return this.http.get<any>(CallApiService.host + 'MenuRice/GetAllMenuRice');
  }

  public AddRice(data){
    return this.http.post<any>(CallApiService.host + 'MenuRice/AddPoll', data);
  }

}
