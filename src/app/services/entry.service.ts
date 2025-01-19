import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EntryService {
  private collectionName = 'entries'; // Nombre de la colección

  constructor(private firestore: Firestore) {}

  // Crear una entrada
  async createEntry(entry: any): Promise<void> {
    const collectionRef = collection(this.firestore, this.collectionName);
    await addDoc(collectionRef, entry);
  }

  // Obtener todas las entradas como un observable
  getEntries(): Observable<any[]> {
    const collectionRef = collection(this.firestore, this.collectionName);
    return collectionData(collectionRef, { idField: 'id' }) as Observable<any[]>;
  }
}
