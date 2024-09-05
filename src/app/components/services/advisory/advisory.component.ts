import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-advisory',
  templateUrl: './advisory.component.html',
  styleUrl: './advisory.component.scss'
})
export class AdvisoryComponent implements AfterViewInit{

    stylesCards = { colWidth: '261px', colMarginStart: '12px', colHeight: '418px', colPadding: '1em', textTitle: '20px', textDesc: '16px', textIcon: '2em'};
    
    stylesTeam = { colWidth: '221px', colHeight: '147px', colPadding: '0.2em', textTitle: '20px', textDesc: '16px', textIcon: '2em', imgMaxWidth: '221px'};
    
    stylesNews = { colWidth: '261px', colMarginStart: '12px', colHeight: '565px', colPadding: '1em', textTitle: '15px', textDesc: '12px', textIcon: '2em'};

    constructor(private router: Router) {}

    ngAfterViewInit() {
        AOS.init({
            duration: 1500,
            once: true // Asegura que la animación ocurra solo una vez
        });
    } 

    advisoryCards = [
        {
            text: {
                iconName: 'real_estate_agent',
                title: 'Office Consulting',
                description: 'Consultores de oficinas',
                backgroundImage: '/assets/images/background/cards/advisory/asesoramiento_oficina.jpg',
                url: '/servicios/asesoramiento/oficinas',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'storefront',
                title: 'Retail Consulting',
                description: 'Consultores de Locales Comerciales',
                backgroundImage: '/assets/images/background/cards/advisory/asesoramiento_retail.jpg',
                url: '/servicios/asesoramiento/locales-comerciales',
                textDark: true
            }
        },
        {
            text: {
                iconName: 'warehouse',
                title: 'Industrial Consulting',
                description: 'Consultores de Bodegas Industriales',
                backgroundImage: '/assets/images/background/cards/advisory/asesoramiento_industrial.jpg',
                url: '/servicios/asesoramiento/bodegas-industriales',
                textDark: true
            }
        },
        {
            text: {
                iconUrl: '/assets/icons/services/icon_white_land.svg',
                title: 'Land Consulting',
                description: 'Consultores de Suelos',
                backgroundImage: '/assets/images/background/cards/advisory/asesoramiento_suelos.jpg',
                url: '/servicios/asesoramiento/suelos',
                textDark: false
            }
        }
    ];

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

    teamCards = [
        { imgUrl: '/assets/images/team/nicolas.jpg' },
        { imgUrl: '/assets/images/team/paula.jpg' },
        { imgUrl: '/assets/images/team/valeria.jpg' },
        { imgUrl: '/assets/images/team/viviana_salazar.jpg' },
        { imgUrl: '/assets/images/team/alix.jpg' },
        { imgUrl: '/assets/images/team/caro_retail.jpg' },
        { imgUrl: '/assets/images/team/antonia.jpg' },
        { imgUrl: '/assets/images/team/juan_lira.jpg' },
        { imgUrl: '/assets/images/team/juan_pedro.jpg' },
        { imgUrl: '/assets/images/team/viviana_canas.jpg' },
        { imgUrl: '/assets/images/team/italo.jpg' },
        { imgUrl: '/assets/images/team/cristian.jpg' }          
    ];

    newsCards = [
        {
            text: {
                iconUrl: '/assets/icons/track-record/hunter.svg', 
                title: 'Titulo del artículo o noticia',
                description: 'De todas las corredoras que vi, la única que realmente escucho el requerimiento que necesitaba fue Paula.' + 
                             'Me llevo a varias oficinas que tenían lo que necesitaba y eso agilizo el proceso. Además, siempre tuvo buena disposición en guiarme y ayudarme hasta el final del proceso.',
                textDark: false        
            },
            newsInfo: {
                section: 'Noticia | Oficina',
                date: '01 de Junio del 2024',
                userInfo: {
                    iconUrl: '/assets/images/team/italo.jpg',
                    name: 'Italo Descalzi',
                    role: 'Cargo'
                },
                url: '/servicios/asesoramiento/oficinas'
            }
        },
        {
            text: {
                iconUrl: '/assets/icons/track-record/hunter.svg', 
                title: 'Caso de éxito',
                description: 'De todas las corredoras que vi, la única que realmente escucho el requerimiento que necesitaba fue Paula.' + 
                             'Me llevo a varias oficinas que tenían lo que necesitaba y eso agilizo el proceso. Además, siempre tuvo buena disposición en guiarme y ayudarme hasta el final del proceso.',
                textDark: false
            },
            newsInfo: {
                section: 'Testimonio | Oficina',
                date: '01 de Junio del 2024',
                userInfo: {
                    iconUrl: '/assets/images/team/paula.jpg',
                    name: 'Paula Martínez',
                    role: 'Office Consultant'
                },
                url: '/servicios/asesoramiento/locales-comerciales'
            }
        },
        {
            text: {
                iconUrl: '/assets/icons/track-record/hunter.svg', 
                title: 'Porque las personas ...',
                description: 'De todas las corredoras que vi, la única que realmente escucho el requerimiento que necesitaba fue Paula.' + 
                             'Me llevo a varias oficinas que tenían lo que necesitaba y eso agilizo el proceso. Además, siempre tuvo buena disposición en guiarme y ayudarme hasta el final del proceso.',
                textDark: false
            },
            newsInfo: {
                section: 'Artículo | Retail',
                date: '01 de Junio del 2024',
                userInfo: {
                    iconUrl: '/assets/images/team/paula.jpg',
                    name: 'Paula Martínez',
                    role: 'Office Consultant'
                },
                url: '/servicios/asesoramiento/locales-comerciales'
            }
        },
        {
            text: {      
                iconUrl: '/assets/icons/track-record/hunter.svg',   
                title: 'Titulo del artículo o noticia',
                description: 'De todas las corredoras que vi, la única que realmente escucho el requerimiento que necesitaba fue Paula.' + 
                             'Me llevo a varias oficinas que tenían lo que necesitaba y eso agilizo el proceso. Además, siempre tuvo buena disposición en guiarme y ayudarme hasta el final del proceso.',
                textDark: false
            },
            newsInfo: {
                section: 'Reporte | Industrial',
                date: '01 de Junio del 2024',
                userInfo: {
                    iconUrl: '/assets/images/team/antonia.jpg',
                    name: 'Antonia Nieto',
                    role: 'Retail Consultant'
                },
                url: '/servicios/asesoramiento/bodegas-industriales'
            }
        }
    ];

    goProperties() {
        this.router.navigate(['/propiedades']);
    }
}
