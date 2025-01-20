import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, setDoc } from '@angular/fire/firestore';
import { Observable,map } from 'rxjs';

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

  getEntriesPhotosByDate(): Observable<{ [key: string]: string[] }> {
    const collectionRef = collection(this.firestore, this.collectionName);
    return collectionData(collectionRef, { idField: 'id' }).pipe(
      map((entries: any[]) => {
        const photosByDate: { [key: string]: string[] } = {};

        entries.forEach((entry) => {
          const date = entry.date; // Asegúrate de que el campo "date" está en formato 'YYYY-MM-DD'
          const photos = entry.imagePaths || []; // Obtén las imágenes del campo "imagePaths"

          if (!photosByDate[date]) {
            photosByDate[date] = [];
          }

          photosByDate[date].push(...photos); // Agregar las fotos al array correspondiente
        });
        return photosByDate;
      })
    );
  }
}
