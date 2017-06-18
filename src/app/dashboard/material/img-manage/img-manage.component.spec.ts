import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgManageComponent } from './img-manage.component';

describe('ImgManageComponent', () => {
  let component: ImgManageComponent;
  let fixture: ComponentFixture<ImgManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
