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
  IonSelectOption 
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
  ],
})
export class Tab1Page {
  public userName: string = 'Anna'; // Nombre del usuario
  public profilePicture: string = 'assets/images/profile-picture.jpeg'; // Ruta de la imagen del perfil

  public cards = [
    {
      title: 'Trip to Skagen',
      subtitle: '10 May',
      content: `Today was awesome! Went to Skagen with Petra and John. 
        Skagen is so calm and relaxing city, first we saw the city and then we went to the beach...`,
    },
    {
      title: 'Birthday Party',
      subtitle: '7 May',
      content: `Today I was invited to Lucas birthday party, he’s gonna have birthday in 6 days. 
        I need to buy him some gift. Need to write down some ideas. The day was usual...`,
    },
    {
      title: 'Vet Visit',
      subtitle: '5 May',
      content: `I woke up, ate breakfast and made some coffee. 
        The day started as usual until I found out that my Max is sick! 
        I had to take him to the vet. I was really worried...`,
    },
  ];

  public sortOptions = [
    { label: 'Date', value: 'date' },
    { label: 'Title', value: 'title' },
  ];

  public sortedCards = [...this.cards]; // Tarjetas ordenadas

  constructor() {}

  sortEntries(event: any) {
    const sortBy = event.detail.value;
    if (sortBy === 'date') {
      this.sortedCards = this.cards.sort((a, b) => (a.subtitle > b.subtitle ? -1 : 1));
    } else if (sortBy === 'title') {
      this.sortedCards = this.cards.sort((a, b) => (a.title > b.title ? 1 : -1));
    }
  }
}
