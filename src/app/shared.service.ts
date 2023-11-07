import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  doc,
  collection,
  collectionData,
  deleteDoc,
  updateDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private fs: Firestore) {}
  getNotes() {
    let notesCollection = collection(this.fs, 'notes');
    return collectionData(notesCollection, { idField: 'id' });
  }
  addNote(desc: string) {
    let data = { description: desc, moveToArchive: false };
    let notesCollection = collection(this.fs, 'notes');
    return addDoc(notesCollection, data);
  }
  deleteNote(id: string) {
    let docRef = doc(this.fs, 'notes/' + id);
    return deleteDoc(docRef);
  }
  updateNote(desc: string, id: string) {
    let data = { description: desc };
    let notesCollection = doc(this.fs, 'notes/' + id);
    return updateDoc(notesCollection, data);
  }
  getCategory() {
    let notesCollection = collection(this.fs, 'category');
    return collectionData(notesCollection, { idField: 'id' });
  }
  updateCategory(category: string, id: string) {
    let data = { type: category };
    let notesCollection = doc(this.fs, 'notes/' + id);
    return updateDoc(notesCollection, data);
  }
  markDone(status: boolean, id: string) {
    let data = { status: status };
    let notesCollection = doc(this.fs, 'notes/' + id);
    return updateDoc(notesCollection, data);
  }
}
