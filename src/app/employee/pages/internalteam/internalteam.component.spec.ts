import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalteamComponent } from './internalteam.component';

describe('InternalteamComponent', () => {
  let component: InternalteamComponent;
  let fixture: ComponentFixture<InternalteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalteamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
