import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Esto asegura que el servicio sea singleton en toda la app
})
export class EntryService {
  private collectionName = 'entries'; // Nombre de la colección en Firestore

  constructor(private firestore: AngularFirestore) {}

  /**
   * Crear una nueva entrada.
   * @param entry Datos de la entrada a guardar.
   * @returns Una promesa que resuelve cuando la entrada es guardada.
   */
  createEntry(entry: any): Promise<void> {
    const id = this.firestore.createId(); // Genera un ID único
    return this.firestore
      .collection(this.collectionName)
      .doc(id)
      .set({ ...entry, id });
  }

  /**
   * Obtener todas las entradas.
   * @returns Un Observable con los datos de todas las entradas.
   */
  getEntries(): Observable<any[]> {
    return this.firestore
      .collection(this.collectionName, (ref) => ref.orderBy('date', 'desc')) // Ordena por fecha
      .valueChanges();
  }

  /**
   * Actualizar una entrada existente.
   * @param id ID de la entrada a actualizar.
   * @param entry Nuevos datos de la entrada.
   * @returns Una promesa que resuelve cuando la entrada es actualizada.
   */
  updateEntry(id: string, entry: any): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).update(entry);
  }

  /**
   * Eliminar una entrada.
   * @param id ID de la entrada a eliminar.
   * @returns Una promesa que resuelve cuando la entrada es eliminada.
   */
  deleteEntry(id: string): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }
}
