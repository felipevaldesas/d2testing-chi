import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

    styles = { 
        colWidth: '373px',
        colHeight: '716px',
        colTitleWidth: '90%'
    };

    serviceCards = [
        {
            text: {
                title: 'Advisory & Transaction Services',
                description: 'Asesoramiento y comercialización de activos industriales, oficinas y locales comerciales.',
                backgroundImage: '/assets/images/home/services/card-transaction.jpg',
                url: '/servicios/asesoramiento'
            }
        },
        {
            text: {
                title: 'Management Services',
                description: 'Gestión, estabilización de activos y aumento del valor de cartera.',
                backgroundImage: '/assets/images/home/services/card-management.jpg',
                url: '/servicios/gestion'
            }
        },
        {
            text: {
                title: 'Consulting & Strategy',
                description: 'Búsqueda de oportunidades de inversión, valorización y tasación.',
                backgroundImage: '/assets/images/home/services/card-consulting.jpg',
                url: '/servicios/consultoria'
            }
        }
    ];

    constructor(private router: Router) {}
}