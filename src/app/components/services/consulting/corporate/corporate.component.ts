import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrl: './corporate.component.scss'
})
export class CorporateComponent implements OnInit {
    
    contactText: string = 'Obtén la ayuda que necesitas.'
    
    stylesCorporate = { 
        colWidth: '220px', colMarginStart: '12px', colHeight: '200px', colPadding: '2em',
        textTitle: '20px', textIcon: '2em', miniCard: true
    };

    stylesStrategyCards = { 
        colWidth: '350px', colMarginStart: '12px', colHeight: '250px', colPadding: '2em 1em', 
        textTitle: '20px', textDesc: '14px', textIcon: '2em', colorIcon: '#FFD966', ourCard: true
    };

    stylesWorkFlowCards = { 
        colWidth: '200px', colMarginStart: '12px', colHeight: '200px', colPadding: '1em', 
        textTitle: '16px', textDesc: '12px', textIcon: '2em', workflowCard: true
    };

    styleServicesCards = { 
        colWidth: '400px', colMarginStart: '12px', colHeight: '300px', colPadding: '2em',
        textTitle: '24px', textDesc: '16px', textIcon: '2em', miniCard: true
    };

    styleProjectServicesCards = { 
        colWidth: '400px', colMarginStart: '12px', colHeight: '350px', colPadding: '2em',
        textTitle: '24px', textDesc: '16px', textIcon: '2em', miniCard: true
    };

    stylesTeam = { 
        colWidth: '240px', colHeight: '280px', colPadding: '0.2em', textTitle: '20px', textDesc: '16px', teamCard: true
    };

    stylesNews = { 
        colWidth: '261px', colMarginStart: '12px', colHeight: '565px', colPadding: '1em', 
        textTitle: '15px', textDesc: '12px', textIcon: '2em'
    };

    corporateCards = [
        {
            text: {
                iconName: 'tactic',
                title: 'Consultoría Estratégica',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'real_estate_agent',
                title: 'Servicios Inmobiliarios',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'calculate',
                title: 'Asesorías Financieras',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'architecture',
                title: 'Project Management',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'copyright',
                title: 'Servicios Legales',
                textDark: false
            }
        }        
    ];

    strategyCards = [
        {
            text: {
                iconName: 'conversion_path',
                title: 'Desarrollo de Estrategias de Negocios',
                description: 'Ayudamos a definir y ejecutar estrategias de crecimiento a largo plazo.',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'query_stats',
                title: 'Análisis de Mercado y Competencia',
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

    workflowCards = [
        {
            text: {
                iconName: 'line_start_circle',
                title: 'Evaluación de <p> necesidades',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'list',
                title: 'Alternativas <p> de locaciones',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'folder_open',
                title: 'Estudios <p> previos',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'handshake',
                title: 'Acuerdo <p> Comercial',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'signature',
                title: 'Firma de <p> Contrato',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'real_estate_agent',
                title: 'Post <p> venta',
                textDark: false
            }
        }
    ]

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
                iconName: 'conversion_path',
                title: 'Planificación y Ejecución',
                description: 'Supervisamos proyectos desde la concepción hasta su finalización, garantizando el cumplimiento de plazos y ' + 
                            'presupuestos. Establecer los objetivos y desafíos del proyecto según estrategia definida.',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'rebase',
                title: 'Optimización de Procesos',
                description: 'Implementamos mejoras en los procesos internos para aumentar la eficiencia operativa. Selección y pre-contratación ' + 
                            'de los proveedores necesario al proyecto, incluido arquitectura, constructora, ITO y especialistas.',
                textDark: false
            }
        }
    ];

    legalCards = [
        {
            text: {
                iconName: 'gavel',
                title: 'Asesoría Jurídica',
                description: 'Brindamos asesoramiento en temas legales y normativos para proteger los intereses de su empresa.',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'contract_edit',
                title: 'Gestión de Contratos',
                description: 'Revisamos y negociamos contratos comerciales.',
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
                iconUrl: '/assets/images/team/ivan.jpg', 
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

    ngOnInit() {
        this.updateStyles(window.innerWidth);
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.updateStyles(event.target.innerWidth);
    }

    private updateStyles(width: number) {
        if (width <= 768) {
            this.stylesCorporate.colHeight = '8em';
            this.styleServicesCards.colHeight = '245px';
        }
    }

    ngAfterViewInit() {
        AOS.init({
            duration: 1500,
            once: true // Asegura que la animación ocurra solo una vez
        });
    } 
}
