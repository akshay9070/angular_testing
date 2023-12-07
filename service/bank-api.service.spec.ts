import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BankApiService } from './bank-api.service';
import { HttpStatusCode } from '@angular/common/http';

describe('BankApiService', () => {
  let service: BankApiService;
  let httpController:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[BankApiService]
    });
    service = TestBed.inject(BankApiService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
    httpController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a POST request to create account',()=>{
    const customer= {name:"akshay"};

    service.createAccount(customer).subscribe(response=>{
      expect(response).toBeDefined;
    });

    // specify the required endpoint by createAccount method 
    const req = httpController.expectOne('https://localhost:7158/bankAPI/v1/add');
    expect(req.request.method).toBe('POST');

    // send response
    req.flush(HttpStatusCode.Ok);

  });

  it('should make a GET request to find account',()=>{
    const mobileNumber = '1234567890';

    service.findAccount(mobileNumber).subscribe(response=>{
      expect(response).toBeDefined;
    });


      const req = httpController.expectOne(`https://localhost:7158/bankAPI/v1/check/${mobileNumber}`);
      expect(req.request.method).toBe('GET');
      req.flush(HttpStatusCode.Ok);
    
  });

  it('should make a GET request to perform KYC',()=>{
    const mobileNumber = '1234567890';

    service.doKyc(mobileNumber).subscribe(response=>{
      expect(response).toBeDefined;
    });

    const req = httpController.expectOne(`https://localhost:7158/bankAPI/v1/kyc/${mobileNumber}`);
    expect(req.request.method).toBe('GET');
    req.flush(HttpStatusCode.Ok);

  });
});
