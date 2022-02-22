import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandBaseComponent } from './command-base.component';

describe('CommandBaseComponent', () => {
  let component: CommandBaseComponent;
  let fixture: ComponentFixture<CommandBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
