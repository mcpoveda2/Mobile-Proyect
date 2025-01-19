import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonInput, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { EntryService } from '../services/entry.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonContent, IonInput, IonButton, FormsModule, CommonModule],
})
export class Tab2Page {
  formData = {
    title: '',
    place: '',
    date: '',
    weather: [] as string[],
    dayDescription: '',
    imagePaths: [] as string[], // Guardar rutas persistentes
  };

  weatherOptions = ['Sunny', 'Windy', 'Overcast', 'Rain showers', 'Thunderstorm', 'Rainy', 'Snow'];

  constructor(private entryService: EntryService) {
    this.loadSavedImages();
  }

  toggleWeather(condition: string) {
    const index = this.formData.weather.indexOf(condition);
    if (index === -1) {
      this.formData.weather.push(condition);
    } else {
      this.formData.weather.splice(index, 1);
    }
  }

  async selectImage() {
    try {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri, // Obtenemos la imagen como URI
        source: CameraSource.Photos,
        quality: 100,
      });
  
      if (photo.webPath) {
        const base64Data = await this.convertToBase64(photo.webPath); // Convertimos a Base64
        this.formData.imagePaths.push(base64Data); // Guardamos el Base64 en el array
        this.saveImagePathsToLocalStorage(); // Guardamos en LocalStorage
        console.log('Saved Image as Base64:', base64Data);
      }
    } catch (error) {
      console.error('Error selecting image:', error);
    }
  }

  private async convertToBase64(webPath: string): Promise<string> {
    const response = await fetch(webPath);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  convertFilePath(filePath: string): string {
    return Capacitor.convertFileSrc(filePath);
  }

  // Guardar rutas de imágenes en LocalStorage
  saveImagePathsToLocalStorage() {
    localStorage.setItem('formData', JSON.stringify(this.formData));
    console.log('Form data saved to LocalStorage');
  }

  // Cargar rutas de imágenes al iniciar la app
  loadSavedImages() {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      this.formData = JSON.parse(savedData);
      console.log('Loaded saved form data:', this.formData);
    }
  }
  

  async onSubmit() {
    // Agregar la entrada al servicio
    this.entryService.createEntry(this.formData);

    console.log('Entry saved to service:', this.formData);

    // Limpiar todos los campos del formulario
    this.formData = {
      title: '',
      place: '',
      date: '',
      weather: [],
      dayDescription: '',
      imagePaths: [],
    };
  }
}
