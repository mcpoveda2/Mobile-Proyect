import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar],
})
export class Tab1Page {
  public userName: string = 'Anna'; // Nombre del usuario
  public profilePicture: string = 'assets/img/profile-picture.jpg'; // Ruta de la imagen del perfil

  constructor() {}
}
