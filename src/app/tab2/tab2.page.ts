import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonInput, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
// import { Filesystem, Directory } from '@capacitor/filesystem'; // Comentado para pruebas en navegador
import { Capacitor } from '@capacitor/core';

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

  constructor() {
    // Cargar las rutas guardadas al iniciar la app
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
        resultType: CameraResultType.Uri,
        source: CameraSource.Photos,
        quality: 100,
      });

      if (photo.webPath) {
        // Para pruebas en navegador, solo guardar la ruta webPath directamente
        this.formData.imagePaths.push(photo.webPath);

        // Guardar las rutas actualizadas en LocalStorage
        this.saveImagePathsToLocalStorage();
        console.log('Saved Image Path:', photo.webPath);
      }
    } catch (error) {
      console.error('Error selecting image:', error);
    }
  }

  // private async saveImage(photo: Photo): Promise<string> { // Comentado para pruebas en navegador
  //   const base64Data = await this.convertToBase64(photo.webPath!);
  //   const fileName = `IMG_${Date.now()}.jpeg`;

  //   const savedFile = await Filesystem.writeFile({
  //     path: `images/${fileName}`,
  //     data: base64Data,
  //     directory: Directory.Data,
  //   });

  //   return savedFile.uri;
  // }

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
    localStorage.setItem('imagePaths', JSON.stringify(this.formData.imagePaths));
    console.log('Image paths saved to LocalStorage');
  }

  // Cargar rutas de imágenes al iniciar la app
  loadSavedImages() {
    const savedPaths = localStorage.getItem('imagePaths');
    if (savedPaths) {
      this.formData.imagePaths = JSON.parse(savedPaths);
      console.log('Loaded saved image paths:', this.formData.imagePaths);
    }
  }

  onSubmit() {
    const payload = {
      title: this.formData.title,
      place: this.formData.place,
      date: this.formData.date,
      weather: this.formData.weather,
      dayDescription: this.formData.dayDescription,
      imagePaths: this.formData.imagePaths,
    };

    console.log('Payload to send:', JSON.stringify(payload, null, 2));
  }
}
