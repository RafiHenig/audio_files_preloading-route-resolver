import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatStepperModule,
  MatIconModule,
  MatDialogModule,
  MatListModule,
  MatInputModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { IncludeComponent } from './components/dialogs/include/include.component'
import { FlexLayoutModule } from '@angular/flex-layout';
import { PlayerComponent } from './components/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    IncludeComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule,
    MatStepperModule,
    MatIconModule,
    FlexLayoutModule ,
    MatDialogModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
  ],
  providers: [],
  entryComponents:[IncludeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
