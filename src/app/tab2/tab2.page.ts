import { Component } from '@angular/core';
import {
  IonContent,
  IonItem,
  IonInput,
  IonIcon,
  IonDatetime,
  IonModal,
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonItem,
    IonInput,
    IonIcon,
    IonDatetime,
    IonModal,
  ],
})
export class Tab2Page {
  public selectedDate: string = ''; // Fecha seleccionada en formato ISO
  public formattedDate: string = ''; // Fecha formateada para el input
  public isDatePickerOpen: boolean = false; // Controla si el modal está abierto

  constructor() {}

  openDatePicker() {
    this.isDatePickerOpen = true; // Abre el modal
  }

  closeDatePicker() {
    this.isDatePickerOpen = false; // Cierra el modal
  }

  onDateChange(event: any) {
    const date = new Date(event.detail.value); // Convierte la fecha seleccionada a un objeto Date
    this.formattedDate = date.toLocaleDateString(); // Formatea la fecha en formato local
    this.closeDatePicker(); // Cierra el modal después de seleccionar la fecha
  }
}
