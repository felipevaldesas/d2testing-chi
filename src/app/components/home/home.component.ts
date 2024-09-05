import { Component, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

    whyUsData = [
        {
            iconUrl: '/assets/icons/why-us/icon-world.svg',
            description: 'Presencia Internacional <br> en 5 países'
        },
        {
            title: '+ 320.000 m²',
            description: 'De propiedades <br> comerciales arrendadas'
        },
        {
            title: '+ 100 M USD',
            description: 'Comercializados <br> en propiedades'
        },
        {
            title: '+ 3.400',
            description: 'Propiedades comerciales <br> en cartera'
        }
    ];
    contactText: string = 'Obtén la ayuda que necesitas.'

    constructor() {}

    ngAfterViewInit() {
        AOS.init({
        duration: 1500,
        once: true // Asegura que la animación ocurra solo una vez
        });
    }
}
