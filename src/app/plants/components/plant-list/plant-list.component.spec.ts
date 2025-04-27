import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantListComponent } from './plant-list.component';
import { PlantService } from '../../services/plant.service';
import { provideHttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Plant } from '../../models/plant';

describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;
  let plantService: jasmine.SpyObj<PlantService>;
  
  const mockPlants: Plant[] = [
    {
      id: 1,
      nombre_comun: "Pata de vaca",
      nombre_cientifico: "Bauhinia forficata",
      tipo: "Interior",
      altura_maxima: 15,
      clima: "Templado, cálido",
      sustrato_siembra: "Tierra orgánica"
    },
    {
      id: 2,
      nombre_comun: "Chachafruto",
      nombre_cientifico: "Erythrina edulis",
      tipo: "Exterior",
      altura_maxima: 8,
      clima: "Todos",
      sustrato_siembra: "Tierra negra"
    },
    {
      id: 3,
      nombre_comun: "Espatifilo",
      nombre_cientifico: "Spathiphyllum wallisii",
      tipo: "Interior",
      altura_maxima: 1,
      clima: "Templado, cálido",
      sustrato_siembra: "Sustrato especial"
    }
  ];

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('PlantService', ['getPlants']);
    spy.getPlants.and.returnValue(of(mockPlants));

    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        { provide: PlantService, useValue: spy }
      ],
      declarations: [ PlantListComponent ]
    }).compileComponents();

    plantService = TestBed.inject(PlantService) as jasmine.SpyObj<PlantService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a table with 3 plants plus header', () => {
    const tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toBe(4);
  });

  it('should display correct plant information in table', () => {
    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(3);

    const firstRow = rows[0];
    expect(firstRow.cells[1].textContent).toContain('Pata de vaca');
    expect(firstRow.cells[2].textContent).toContain('Interior');
    expect(firstRow.cells[3].textContent).toContain('Templado, cálido');
  });
});
