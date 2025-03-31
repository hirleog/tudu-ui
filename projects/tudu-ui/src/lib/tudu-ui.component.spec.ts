import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuduUiComponent } from './tudu-ui.component';

describe('TuduUiComponent', () => {
  let component: TuduUiComponent;
  let fixture: ComponentFixture<TuduUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuduUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuduUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
