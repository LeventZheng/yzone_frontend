import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicManageComponent } from './music-manage.component';

describe('MusicManageComponent', () => {
  let component: MusicManageComponent;
  let fixture: ComponentFixture<MusicManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
