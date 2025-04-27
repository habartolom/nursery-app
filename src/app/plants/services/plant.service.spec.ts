import { TestBed } from '@angular/core/testing';
import { PlantService } from './plant.service';
import { provideHttpClient } from '@angular/common/http';

describe('PlantService', () => {
  let service: PlantService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PlantService,
        provideHttpClient()
      ]
    });
    service = TestBed.inject(PlantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
