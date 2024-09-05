import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
    contactText: string = 'Obtén la ayuda que necesitas.'
    
    public title: string = 'Diagonal2 Chile';
    public lat: number = -33.418878;
    public lng: number = -70.609100;
    public isMapApiLoaded: boolean = false;
    public markerOptions = {
        icon: {
           url: 'assets/icons/map/d2_mapa.svg',
        }
    };
  
    constructor() {}
  
    ngOnInit(): void {
        this.loadGoogleMapsApi();
    }
  
    loadGoogleMapsApi(): void {
        const loader = new Loader({
           apiKey: environment.googleMapsApiKey,
           version: 'weekly',
           libraries: ['places']
        });
  
        loader.load().then(() => {
           this.isMapApiLoaded = true;
        }).catch((error) => {
           console.error('Error loading Google Maps', error);
        });
    }

    goBureau() {
        window.open('https://bureau.cl', '_blank');
    }

}
