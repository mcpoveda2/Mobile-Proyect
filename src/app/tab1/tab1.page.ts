import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonAvatar, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle, 
  IonSelect, 
  IonSelectOption, 
  IonChip 
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonAvatar,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonSelect,
    IonSelectOption,
    IonChip, 
  ],
})
export class Tab1Page {
  public userName: string = 'Luis Romero'; // Nombre del usuario
  public profilePicture: string = 'assets/images/profile-picture.jpeg'; // Ruta de la imagen del perfil

  public cards = [
    {
      title: "Sunset Stroll",
      place: "Seaside",
      date: "09 July",
      weather: ["Sunny", "Windy"],
      dayDescription: "A beautiful walk along the seaside as the sun set. The breeze made it even more enjoyable.",
      imagePaths: [
        "http://localhost:8100/_capacitor_file_/path/to/seaside1.jpeg",
        "http://localhost:8100/_capacitor_file_/path/to/seaside2.jpeg"
      ]
    },
    {
      title: "Rainy Day Escape",
      place: "Cozy Cabin",
      date: "10 May",
      weather: ["Rainy", "Thunderstorm"],
      dayDescription: "Stayed indoors in a cozy cabin, listening to the thunderstorm and the rain tapping on the windows.",
      imagePaths: [
        "http://localhost:8100/_capacitor_file_/path/to/cabin1.jpeg",
        "http://localhost:8100/_capacitor_file_/path/to/cabin2.jpeg"
      ]
    },
    {
      title: "Snowy Adventure",
      place: "Ski Resort",
      date: "15 December",
      weather: ["Snow", "Overcast"],
      dayDescription: "Hit the slopes for some skiing fun. The snow-covered mountains were stunning despite the overcast sky.",
      imagePaths: [
        "http://localhost:8100/_capacitor_file_/path/to/ski1.jpeg",
        "http://localhost:8100/_capacitor_file_/path/to/ski2.jpeg"
      ]
    }
  ];
  
  public sortOptions = [
    { label: 'Date', value: 'date' },
    { label: 'Title', value: 'title' },
  ];

  public sortedCards = [...this.cards]; 

  constructor() {}

  sortEntries(event: any) {
    const sortBy = event.detail.value;
    if (sortBy === 'date') {
      this.sortedCards = this.cards.sort((a, b) => (a.date > b.date ? -1 : 1));
    } else if (sortBy === 'title') {
      this.sortedCards = this.cards.sort((a, b) => (a.title > b.title ? 1 : -1));
    }
  }
}
