
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { NavbarModule, WavesModule } from 'angular-bootstrap-md';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './shared/footer/footer.component'
import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatPaginatorModule,
  MatTreeModule,
  MatTooltipModule,
  MatSortModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatSidenavModule,
  MatSelectModule,
  MatRippleModule,
  MatRadioModule,
  MatProgressBarModule,
  MatNativeDateModule,
  MatListModule,
  MatGridListModule,
  MatExpansionModule,
  MatDividerModule,
  MatDatepickerModule,
  MatStepperModule,
  MatChipsModule,
  MatCheckboxModule,
  MatButtonToggleModule,
  MatBottomSheetModule,
  MatBadgeModule,
  MatAutocompleteModule,
  MatError,
  MatHint,
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
  MatMenuItem
} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    NavbarModule, WavesModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
