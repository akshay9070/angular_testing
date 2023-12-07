import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { CreateAccountComponent } from './create-account.component';
import { BankApiService } from '../service/bank-api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('CreateAccountComponent', () => {
  let component: CreateAccountComponent;
  let fixture: ComponentFixture<CreateAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAccountComponent],
      imports: [HttpClientModule,FormsModule],
      providers:[BankApiService]
    });
    fixture = TestBed.createComponent(CreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should display error message for invalid form fields', fakeAsync(() => {
  //   expect(component.customerForm).toBeDefined();


  //   if (component.customerForm) {
  //     component.customerForm.controls['firstName'].setValue('John');
  //     component.customerForm.controls['lastName'].setValue('Doe');
  //     // Set values for other form fields
  //   }

  // }));
});
