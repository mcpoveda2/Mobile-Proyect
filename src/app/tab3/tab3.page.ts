import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
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
  IonLabel, IonCol, IonGrid, IonRow, IonDatetime } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonDatetime, IonRow, IonGrid, IonCol, 
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
    CommonModule
  ],
})
export class Tab3Page {

  selectedDate: string | null = null; // Fecha seleccionada
  selectedDayContent: string[] | null = null; // Contenido del día

  // Contenido de ejemplo para cada día
  contentByDate: { [key: string]: string[] } = {
    '2025-01-18': ['Evento 1', 'Tarea 2', 'Nota importante'],
    '2025-01-19': ['Reunión', 'Cita con el doctor', 'Recordatorio'],
    // Agrega más fechas y contenido aquí
  };

  onDateSelected(event: any) {
    this.selectedDate = event.detail.value; // Fecha seleccionada
    if (this.selectedDate && this.contentByDate[this.selectedDate]) {
      this.selectedDayContent = this.contentByDate[this.selectedDate];
    } else {
      this.selectedDayContent = ['No hay contenido disponible'];
    }
  }
}

interface Day {
  date: number | '';
  isToday: boolean;
  isSelected: boolean;
}