import { Component, OnInit } from '@angular/core';
import { PlantService } from '../../services/plant.service';
import { Plant } from '../../models/plant';

@Component({
  selector: 'app-plant-list',
  standalone: false,
  templateUrl: './plant-list.component.html',
  styleUrl: './plant-list.component.css'
})
export class PlantListComponent implements OnInit {
  plants: Plant[] = [];
  totalInterior = 0;
  totalExterior = 0;

  constructor(private plantService: PlantService) {}

  ngOnInit(): void {
    this.plantService.getPlants().subscribe(plants => {
      this.plants = plants;
      this.totalInterior = plants.filter(plant => plant.tipo === 'Interior')?.length || 0;
      this.totalExterior = plants.filter(plant => plant.tipo === 'Exterior')?.length || 0;
    });
  }
}