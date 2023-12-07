import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BankApiService {

  private defaultTimeout = 5000; 
  
  private baseURL = "https://localhost:7158/bankAPI/v1/";
  constructor(private http:HttpClient) { }

  createAccount(customer:any): Observable<any>{
    const url = this.baseURL+'add';
    return this.http.post(url, customer);
  }

  findAccount(mobileNumber:string) :Observable<any>{
    const url = `${this.baseURL}check/${mobileNumber}`;
    return this.http.get(url);
  }

  doKyc(mobileNumber:string):Observable<any>{
    const url = `${this.baseURL}kyc/${mobileNumber}`
    return this.http.get(url);

  }
}
