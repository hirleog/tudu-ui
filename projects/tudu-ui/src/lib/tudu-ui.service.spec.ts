import { TestBed } from '@angular/core/testing';

import { TuduUiService } from './tudu-ui.service';

describe('TuduUiService', () => {
  let service: TuduUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TuduUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
