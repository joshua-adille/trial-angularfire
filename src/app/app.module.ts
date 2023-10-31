import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBuNcAzI9iRKqwGkfRd2Y3ENX9bMbuanBs',
  authDomain: 'test-projects-aabaa.firebaseapp.com',
  projectId: 'test-projects-aabaa',
  storageBucket: 'test-projects-aabaa.appspot.com',
  messagingSenderId: '138482524389',
  appId: '1:138482524389:web:fdd5ac0e6815f87f56b40c',
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
