import { Component } from '@angular/core';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonRange,
  IonButton,
  IonLabel, IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonRow, IonGrid, IonCol, 
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonIcon,
    IonRange,
    IonButton,
    IonLabel,
  ],
})
export class Tab3Page {
  emotions = [
    { label: 'Very Sad', icon: 'sad-outline' },
    { label: 'Sad', icon: 'frown-outline' },
    { label: 'Neutral', icon: 'ellipse-outline' },
    { label: 'Happy', icon: 'happy-outline' },
    { label: 'Very Happy', icon: 'smile-outline' },
  ];

  currentEmotion = this.emotions[3]; // Default: Happy

  onEmotionChange(event: any) {
    this.currentEmotion = this.emotions[event.detail.value];
  }

  onContinue() {
    console.log('Emotion selected:', this.currentEmotion);
    // Lógica adicional para manejar el botón "Continue"
  }
}
