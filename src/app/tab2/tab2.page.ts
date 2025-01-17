import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para el uso de ngModel
import { IonContent, IonInput, IonButton } from '@ionic/angular/standalone'; // Importa los componentes necesarios de Ionic

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonInput,
    IonButton,
    FormsModule // Importa FormsModule para usar ngModel
  ],
})
export class Tab2Page {
  // Propiedades para gestionar los datos del formulario
  formData = {
    title: '',
    place: '',
  };

  // Método para manejar el envío del formulario
  onSubmit() {
    console.log('Form Data:', this.formData);
    // Aquí puedes añadir lógica adicional, como enviar los datos a una API
  }
}
