import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonInput, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonContent, IonInput, IonButton, FormsModule, CommonModule],
})
export class Tab2Page {
  // Datos del formulario
  formData = {
    title: '',
    place: '',
    weather: [] as string[], // Array para almacenar múltiples opciones seleccionadas
    dayDescription: '', // Nueva propiedad para la descripción del día
  };

  // Opciones de clima
  weatherOptions = [
    'Sunny',
    'Windy',
    'Overcast',
    'Rain showers',
    'Thunderstorm',
    'Rainy',
    'Snow',
  ];

  // Método para seleccionar/deseleccionar un clima
  toggleWeather(condition: string) {
    const index = this.formData.weather.indexOf(condition);
    if (index === -1) {
      // Si no está seleccionado, agregarlo
      this.formData.weather.push(condition);
    } else {
      // Si ya está seleccionado, eliminarlo
      this.formData.weather.splice(index, 1);
    }
    console.log('Selected Weather:', this.formData.weather);
  }

  onSubmit() {
    console.log('Form Data:', this.formData);
  }
}
