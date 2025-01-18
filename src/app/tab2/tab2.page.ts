import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonInput, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonInput,
    IonButton,
    FormsModule,
    CommonModule, // Asegúrate de agregarlo aquí
  ],
})
export class Tab2Page {
  // Datos del formulario
  formData = {
    title: '',
    place: '',
    weather: '', // Campo para almacenar el clima seleccionado
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

  // Método para seleccionar el clima
  selectWeather(condition: string) {
    this.formData.weather = condition;
    console.log('Selected Weather:', condition);
  }

  onSubmit() {
    console.log('Form Data:', this.formData);
  }
}
