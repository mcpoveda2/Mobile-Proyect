import { Component, AfterViewInit } from '@angular/core';
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
    '2025-01-18': [
      'https://educa30.b-cdn.net/wp-content/uploads/2020/04/mejores-bancos-de-imagenes-gratis-860x492.jpg',
    ],
    '2025-01-19': [
      'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?fit=960%2C720',
    ],
  };

  ngAfterViewInit() {
    this.addImagesToCalendar();
  }
  
  onDateSelected(event: any) {
    const isoDate: string = event.detail.value;
    const dateOnly = new Date(isoDate).toISOString().split('T')[0];
    //  console.log(dateOnly);

    if (dateOnly && this.contentByDate[dateOnly]) {
      this.selectedDayContent = this.contentByDate[dateOnly];
    } else {
      this.selectedDayContent = ['No hay contenido disponible'];
    }
  }
  addImagesToCalendar() {
    // Retraso breve para garantizar que el DOM del calendario esté listo
    setTimeout(() => {
      const ionDatetime = document.querySelector('ion-datetime'); // Seleccionar el componente
      const calendarBody = ionDatetime?.shadowRoot?.querySelector('.calendar-body'); // Acceder al cuerpo del calendario
  
      if (calendarBody) {
        const calendarDays = calendarBody.querySelectorAll('.calendar-day-wrapper button'); // Seleccionar los botones de días
  
        calendarDays.forEach((dayButton) => {
          const day = dayButton.getAttribute('data-day'); // Obtener el día
          const month = dayButton.getAttribute('data-month'); // Obtener el mes
          const year = dayButton.getAttribute('data-year'); // Obtener el año
  
          if (day && month && year) {
            // Construir la fecha en formato YYYY-MM-DD
            const date = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  
            // Verificar si hay contenido para esta fecha
            if (this.contentByDate[date]) {
              // Verificar si ya existe una imagen para evitar duplicados
              if (!dayButton.querySelector('img')) {
                const image = document.createElement('img');
                image.src = this.contentByDate[date][0]; // Usar la primera imagen asociada
                image.style.width = '100%';
                image.style.height = '100%';
                image.style.borderRadius = '50%';
                image.style.position = 'absolute';
                image.style.top = '50%';
                image.style.left = '50%';
                image.style.transform = 'translate(-50%, -50%)';
  
                // Agregar la imagen dentro del botón
                dayButton.appendChild(image);
                //dayButton.appendChild(document.createTextNode(day));
              }
            }
          }
        });
      }
    }, 100); // Retraso para asegurarnos de que el DOM esté listo
  }
  
  

  
}

interface Day {
  date: number | '';
  isToday: boolean;
  isSelected: boolean;
}