import { Component } from '@angular/core';
import { ViewerService } from './../../components/viewer/viewer.service';
import { Pet } from './../../models/general.models'

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.scss'
})
export class ViewerComponent {
  petsList: Pet[] = []
  successMessage: string | null = null;
  errorMessage: string | null = null;
  constructor(private viewerService: ViewerService) {}

  ngOnInit(): void {
    this.getPets();
  }

  getPets(): void {
    this.viewerService.getAllPets().subscribe(pet => {
      this.petsList = pet;
    })
  }

  deletePet(): void {
    const selectedPets = this.petsList.filter(pet => pet.selected);
    if (selectedPets.length > 0) {
      this.errorMessage = null;
      selectedPets.forEach(pet => {
        this.viewerService.deletePet(pet.id).subscribe({
          next: () => {
            this.petsList = this.petsList.filter(p => p.id !== pet.id);
            this.successMessage = 'Mascota eliminada exitosamente.';
          },
          error: (error) => {
            this.errorMessage = 'Error al eliminar la mascota: ' + error.message;
            this.successMessage = null;
          }
        });
      });
    } else {
      this.errorMessage = 'No se ha seleccionado ninguna mascota';
      this.successMessage = null;
    }
  }

  clearAlert(type: 'success' | 'error'): void {
    if (type === 'success') {
      this.successMessage = null;
    } else {
      this.errorMessage = null;
    }
  }
}
