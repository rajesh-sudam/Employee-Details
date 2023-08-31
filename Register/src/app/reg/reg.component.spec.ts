import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RegComponent } from './reg.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('RegComponent', () => {
  let component: RegComponent;
  let fixture: ComponentFixture<RegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegComponent ],
      imports:[HttpClientTestingModule],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
