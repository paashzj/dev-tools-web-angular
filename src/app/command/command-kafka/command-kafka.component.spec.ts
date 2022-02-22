import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandKafkaComponent } from './command-kafka.component';

describe('CommandKafkaComponent', () => {
  let component: CommandKafkaComponent;
  let fixture: ComponentFixture<CommandKafkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandKafkaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandKafkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
