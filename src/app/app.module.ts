import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { HomeComponent } from './components/home/home.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './components/home/header/header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ServicesComponent } from './components/home/services/services.component';
import { TrackRecordComponent } from './components/home/track-record/track-record.component';
import { TestimoniesComponent } from './components/home/testimonies/testimonies.component';
import { PropertiesHomeComponent } from './components/home/properties/properties.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { environment } from '../environments/environment';
import { SharedModule } from './components/shared/shared.module';
import { SiteMapComponent } from './components/site-map/site-map.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PropertiesNavBarComponent } from './components/properties/properties.component';
import { NewsArticlesComponent } from './components/news-articles/news-articles.component';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        HeaderComponent,
        ServicesComponent,
        TrackRecordComponent,
        TestimoniesComponent,
        PropertiesHomeComponent,
        PropertiesNavBarComponent,
        NewsArticlesComponent,
        SiteMapComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        MatMenuModule,
        GoogleMapsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        CdkAccordionModule,
        MatSidenavModule,
        MatDialogModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,
        MatListModule,
        SharedModule
    ],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule {
  constructor() {
    if (typeof window !== 'undefined') {
      (window as any)['__googleMapsApiKey'] = environment.googleMapsApiKey;
    }
  }
}