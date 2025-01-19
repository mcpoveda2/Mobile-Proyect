import { Component } from '@angular/core';
import { EntryService } from '../services/entry.service';
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
  IonChip, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonList, 
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

  public entries: any[] = [];
  
  public sortOptions = [
    { label: 'Date', value: 'date' },
    { label: 'Title', value: 'title' },
  ];


  constructor(private entryService: EntryService) {}

  ionViewWillEnter() {
    // Cargar las entradas desde el servicio
    this.entryService.getEntries().subscribe((entries) => {
      this.entries = entries;
      console.log('Entries loaded from Firebase:', this.entries);
    });
    this.sortEntries({ detail: { value: 'date' } }); // Ordenar por fecha por defecto
  }

  sortEntries(event: any) {
    const sortBy = event.detail.value;

    if (sortBy === 'date') {
      this.entries = this.entries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sortBy === 'title') {
      this.entries = this.entries.sort((a, b) => a.title.localeCompare(b.title));
    }
  }
}
