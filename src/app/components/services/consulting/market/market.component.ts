import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';


@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrl: './market.component.scss'
})
export class MarketComponent {
    
    contactText: string = 'Obtén la ayuda que necesitas.'
    
    stylesCorporate = { 
        colWidth: '280px', colMarginStart: '12px', colHeight: '200px', colPadding: '2em',
        textTitle: '20px', textIcon: '2em', miniCard: true
    };

    styleServicesCards = { 
        colWidth: '400px', colMarginStart: '12px', colHeight: '300px', colPadding: '2em',
        textTitle: '24px', textDesc: '16px', textIcon: '2em', miniCard: true
    };

    styleProjectServicesCards = { 
        colWidth: '400px', colMarginStart: '12px', colHeight: '300px', colPadding: '2em',
        textTitle: '24px', textDesc: '16px', textIcon: '2em', miniCard: true
    };

    stylesTeam = { 
        colWidth: '240px', colHeight: '350px', colPadding: '0.2em', textTitle: '20px', textDesc: '16px', teamCard: true
    };

    stylesNews = { 
        colWidth: '261px', colMarginStart: '12px', colHeight: '565px', colPadding: '1em', 
        textTitle: '15px', textDesc: '12px', textIcon: '2em'
    };

    corporateCards = [
        {
            text: {
                iconName: 'search_insights',
                title: 'Análisis financiero del activo',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'tactic',
                title: 'Estrategias de comercialización',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'balance',
                title: 'Comparación con el mercado',
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

    financeCards = [
        {
            text: {
                iconName: 'finance',
                title: 'Planificación Financiera',
                description: 'Ayudamos a estructurar y gestionar planes financieros a corto y largo plazo. ',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'emergency',
                title: 'Gestión de Riesgos',
                description: 'Ofrecemos análisis y estrategias para mitigar riesgos financieros y operativos.',
                textDark: false
            }
        }
    ];

    projectCards = [
        {
            text: {
                iconName: 'mountain_flag',
                title: 'Posicionamiento Estratégico',
                description: 'Creamos estrategias de mercado que optimizan la visibilidad y atractivo de tus activos.',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'search_check',
                title: 'Segmentación Efectiva',
                description: 'Identificamos y enfocamos los esfuerzos en los segmentos clave para maximizar el impacto comercial.',
                textDark: false
            }
        }
    ];

    legalCards = [
        {
            text: {
                iconName: 'leaderboard',
                title: 'Análisis Comparativo',
                description: 'Evaluamos el rendimiento de tus activos en relación con otros similares en el mercado.',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'price_check',
                title: 'Optimización de valor',
                description: 'Identificamos áreas de mejora para asegurar que tus propiedades se mantengan competitivas y rentables.',
                textDark: false
            }
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
                iconUrl: '/assets/images/team/phillipe.jpg', 
                title: 'Phillipe Bourlon de Rouvre',
                description: 'CEO',
                textDark: false    
            },
            socialMedia: [
                {
                    iconName: 'fa-whatsapp',
                    redirectUrl: 'https://api.whatsapp.com/send?phone=56994763258'
                },
                {
                    iconName: 'fa-linkedin',
                    redirectUrl: 'https://www.linkedin.com/in/philippe-de-rouvre-69b23729/'
                },
                {
                    iconName: 'fa-envelope',
                    redirectUrl: 'contacto@diagonal2.com'
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
