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

  constructor(private plantService: PlantService) {}

  ngOnInit(): void {
    this.plantService.getPlants().subscribe(plants =>
      this.plants = plants
    );
  }
}