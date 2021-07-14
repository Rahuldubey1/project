import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilelistComponent } from './profilelist.component';

describe('ProfilelistComponent', () => {
  let component: ProfilelistComponent;
  let fixture: ComponentFixture<ProfilelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
