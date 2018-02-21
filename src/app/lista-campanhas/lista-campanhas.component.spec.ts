import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCampanhasComponent } from './lista-campanhas.component';

describe('ListaCampanhasComponent', () => {
  let component: ListaCampanhasComponent;
  let fixture: ComponentFixture<ListaCampanhasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCampanhasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCampanhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
