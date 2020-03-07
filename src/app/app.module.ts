
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxCarouselModule } from 'ngx-carousel';
import { MDBBootstrapModule, SlideComponent } from 'angular-bootstrap-md';
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
import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './pages/test/test.component';
import { BannerSliderComponent } from './components/slideshow/banner-slideshow/banner-slider/banner-slider.component';
import { BannerSlideshowComponent } from './components/slideshow/banner-slideshow/banner-slideshow.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrandSliderComponent } from './components/slideshow/brand-slider/brand-slider.component';
import { ItemSliderComponent } from './components/slideshow/item-slider/item-slider.component';
import { ShopComponent } from './pages/shop/shop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    TestComponent,
    BannerSliderComponent,
    BannerSlideshowComponent,
    BrandSliderComponent,
    ItemSliderComponent,
    ShopComponent,
    TestComponent,
    RegisterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    NavbarModule, WavesModule,
    SlickCarouselModule,
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
    NgxCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
