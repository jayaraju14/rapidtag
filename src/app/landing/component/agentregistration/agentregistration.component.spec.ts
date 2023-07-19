import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentregistrationComponent } from './agentregistration.component';
import { RegistrationService } from 'src/app/_services/registration.service';

describe('AgentregistrationComponent', () => {
  let component: AgentregistrationComponent;
  let fixture: ComponentFixture<AgentregistrationComponent>;
  let userService:RegistrationService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentregistrationComponent ],
      providers: [{ provide: userService, useValue: userService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should mark email control as invalid when it is empty', () => {
    const first_name = component.regForm.get('first_name');
    first_name?.setValue('');
    expect(first_name?.invalid).toBeTruthy();
    expect(first_name?.errors?.required).toBeTruthy();
  });
});
