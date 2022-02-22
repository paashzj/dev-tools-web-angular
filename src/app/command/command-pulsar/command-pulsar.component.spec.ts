import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandPulsarComponent } from './command-pulsar.component';

describe('CommandPulsarComponent', () => {
  let component: CommandPulsarComponent;
  let fixture: ComponentFixture<CommandPulsarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandPulsarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandPulsarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
