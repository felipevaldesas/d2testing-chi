import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';


@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrl: './research.component.scss'
})
export class ResearchComponent {
    
    contactText: string = 'Obtén la ayuda que necesitas.'

    styleServicesCards = { 
        colWidth: '400px', colMarginStart: '12px', colHeight: '370px', colPadding: '2em',
        textTitle: '24px', textDesc: '16px', textIcon: '2em', miniCard: true
    };

    stylesTeam = { 
        colWidth: '240px', colHeight: '280px', colPadding: '0.2em', textTitle: '20px', textDesc: '16px', teamCard: true
    };

    stylesNews = { 
        colWidth: '261px', colMarginStart: '12px', colHeight: '565px', colPadding: '1em', 
        textTitle: '15px', textDesc: '12px', textIcon: '2em'
    };

   
    financeCards = [
        {
            text: {
                iconName: 'equalizer',
                title: 'Estudios de mercado',
                description:    'Realizamos estudios de mercado especializados para oficinas, locales comerciales, bodegas industriales y suelos para desarrollo, ' + 
                                'proporcionando un análisis detallado y estratégico para cada tipo de propiedad. ',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'query_stats',
                title: 'Análisis de Mercado <br> y Competencia',
                description: 'Proporcionamos información valiosa sobre tendencias de mercado y análisis competitivo.',
                textDark: false
            }
        }
    ];

    whyUsData = [
        {
            iconUrl: '/assets/icons/why-us/icon-world.svg',
            description: 'Presencia <br> Internacional'
        },
        {
            iconName: 'handshake',
            description: 'Partnerships <br> Globales'
        },
        {
            iconName: 'groups',
            description: 'Equipo <br> multidisciplinario'
        }
    ];

    teamCards = [
        {
            text: {
                iconUrl: '/assets/images/team/nicolas.jpg', 
                title: 'Nicolás Hartard',
                description: 'Director Transaction Services',
                textDark: false        
            },
            socialMedia: [
                {
                    iconName: 'fa-whatsapp',
                    redirectUrl: 'https://api.whatsapp.com/send?phone=56957449902'
                },
                {
                    iconName: 'fa-linkedin',
                    redirectUrl: 'https://linkedin.com/in/nicolas-hartard-morales-8b65321b3'
                },
                {
                    iconName: 'fa-envelope',
                    redirectUrl: 'nicolas.hartard@diagonal2.com'
                }
            ]
        },
        {
            text: {
                iconUrl: '/assets/images/team/antonia.jpg', 
                title: 'Iván León Izquierdo',
                description: 'Global Corporate Services',
                textDark: false    
            },
            socialMedia: [
                {
                    iconName: 'fa-whatsapp',
                    redirectUrl: 'https://api.whatsapp.com/send?phone=56939538862'
                },
                {
                    iconName: 'fa-linkedin',
                    redirectUrl: 'https://linkedin.com/in/ivan-alejandro-leon-izquierdo-37426571'
                },
                {
                    iconName: 'fa-envelope',
                    redirectUrl: 'ivan.leon@diagonal2.com'
                }
            ]
        }
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

    constructor(private router: Router) {}

    ngAfterViewInit() {
        AOS.init({
            duration: 1500,
            once: true // Asegura que la animación ocurra solo una vez
        });
    } 
}
