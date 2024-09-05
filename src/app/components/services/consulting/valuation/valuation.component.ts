import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';


@Component({
  selector: 'app-valuation',
  templateUrl: './valuation.component.html',
  styleUrl: './valuation.component.scss'
})
export class ValuationComponent {
    
    contactText: string = 'Obtén la ayuda que necesitas.'
    
    stylesCorporate = { 
        colWidth: '230px', colMarginStart: '12px', colHeight: '230px', colPadding: '2em',
        textTitle: '20px', textIcon: '2em', miniCard: true
    };

    styleServicesCards = { 
        colWidth: '400px', colMarginStart: '12px', colHeight: '300px', colPadding: '2em',
        textTitle: '24px', textDesc: '16px', textIcon: '2em', miniCard: true
    };

    styleProjectServicesCards = { 
        colWidth: '400px', colMarginStart: '12px', colHeight: '350px', colPadding: '2em',
        textTitle: '24px', textDesc: '16px', textIcon: '2em', miniCard: true
    };

    stylesNews = { 
        colWidth: '261px', colMarginStart: '12px', colHeight: '565px', colPadding: '1em', 
        textTitle: '15px', textDesc: '12px', textIcon: '2em'
    };

    corporateCards = [
        {
            text: {
                iconName: 'tactic',
                title: 'Tasación Inmobiliaria',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'tactic',
                title: 'Análisis de contribuciones y sobretasas',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'real_estate_agent',
                title: 'Asesoría financiera',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'calculate',
                title: 'Due Diligence Inmobiliaria',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'architecture',
                title: 'Auditoría de Propiedades',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'copyright',
                title: 'Análisis de Viabilidad',
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
                iconName: 'gavel',
                title: 'Optimización Fiscal',
                description: 'Evaluamos las contribuciones y sobretasas para maximizar la eficiencia tributaria de tus propiedades. ',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'tactic',
                title: 'Planificación Proactiva',
                description: 'Identificamos oportunidades de ahorro y mitigación de riesgos fiscales para asegurar la rentabilidad de tus activos.',
                textDark: false
            }
        }
    ];

    assistanceCards = [
        {
            text: {
                iconName: 'troubleshoot',
                title: 'Valoración',
                description: 'Realizamos tasaciones detalladas que reflejan el valor real de tus activos en el mercado actual.',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'insert_chart',
                title: 'Análisis Objetivo',
                description: 'Proveemos informes claros y fundamentados para respaldar decisiones estratégicas.',
                textDark: false
            }
        }
    ];

    diligenceCards = [
        {
            text: {
                iconName: 'apartment',
                title: 'Evaluación Integral',
                description: 'Realizamos un análisis exhaustivo de propiedades antes de la compra o venta, identificando riesgos y oportunidades.',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'contract',
                title: 'Informe de Conformidad',
                description: 'Proveemos un reporte detallado que asegura la transparencia y solidez de las transacciones inmobiliarias.',
                textDark: false
            }
        }
    ];

    propertyCards = [
        {
            text: {
                iconName: 'mystery',
                title: 'Revisión Exhaustiva',
                description: 'Evaluamos el estado físico, legal y financiero de las propiedades para identificar áreas de mejora.',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'forum',
                title: 'Recomendaciones Estratégicas',
                description: 'Sugerimos acciones correctivas y optimizaciones para maximizar el valor de los activos.',
                textDark: false
            }
        }
    ];

    viabilityCards = [
        {
            text: {
                iconName: 'query_stats',
                title: 'Estudios de Mercado',
                description: 'Analizamos la demanda y oferta del mercado para determinar la viabilidad de nuevos proyectos.',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'finance',
                title: 'Proyecciones Financieras',
                description: 'Elaboramos escenarios financieros para asegurar un retorno óptimo de la inversión.',
                textDark: false
            }
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
