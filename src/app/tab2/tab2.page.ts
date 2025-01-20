import { Component } from '@angular/core';
import { IonContent, IonInput, IonButton, IonImg, IonChip } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { EntryService } from '../services/entry.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonChip, IonImg, IonContent, IonInput, IonButton, CommonModule, ReactiveFormsModule, FormsModule],
  providers: [EntryService]
})
export class Tab2Page {
  formData = {
    title: '',
    place: '',
    date: '',
    weather: [] as string[],
    dayDescription: '',
    imagePaths: [] as string[],
  };

  weatherOptions = ['Sunny', 'Windy', 'Overcast', 'Rain showers', 'Thunderstorm', 'Rainy', 'Snow'];

  constructor(private entryService: EntryService) {
    this.resetForm(); // Asegura que el formulario esté vacío al iniciar
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
        const base64Data = await this.convertToBase64(photo.webPath);
        this.formData.imagePaths.push(base64Data);
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

  onDateChange(event: any) {
    this.formData.date = event.detail.value.split('T')[0];
  }

  async onSubmit() {
    try {
      if (!this.formData.date) {
        console.error('La fecha es requerida');
        return;
      }

      await this.entryService.createEntry(this.formData);
      console.log('Entry saved:', this.formData);
      this.resetForm();
    } catch (error) {
      console.error('Error saving entry:', error);
    }
  }

  resetForm() {
    this.formData = {
      title: '',
      place: '',
      date: '',
      weather: [],
      dayDescription: '',
      imagePaths: [],
    };
    console.log('Formulario reiniciado');
  }
}
