import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogButton } from './dialog.component';

describe('DialogButton', () => {
  let component: DialogButton;
  let fixture: ComponentFixture<DialogButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
