import { Component, EnvironmentInjector, inject } from '@angular/core';
import { 
  IonTabs, 
  IonTabBar, 
  IonTabButton, 
  IonIcon, 
  IonLabel, 
  IonFabButton, 
  IonFab, 
  IonHeader, 
  IonToolbar, 
  IonTitle 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, personOutline, add } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [
    IonTabs, 
    IonTabBar, 
    IonTabButton, 
    IonIcon, 
    IonLabel, 
    IonFab, 
    IonFabButton, 
    IonHeader, 
    IonToolbar, 
    IonTitle
  ],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ homeOutline, personOutline, add });
  }

  onFabClick() {
    console.log('Floating Action Button clicked!');
    // Aquí puedes añadir cualquier funcionalidad, como abrir un modal o navegar a otra página.
  }
}
