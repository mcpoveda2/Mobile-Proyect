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
import { Router } from '@angular/router'; // Importa el enrutador de Angular

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

  constructor(private router: Router) { // Inyecta el enrutador en el constructor
    addIcons({ homeOutline, personOutline, add });
  }

  onFabClick() {
    this.router.navigate(['/tabs/tab2']); // Navega al Tab 2
  }
}
