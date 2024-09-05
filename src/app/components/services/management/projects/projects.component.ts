import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
    
    contactText: string = 'Obtén la ayuda que necesitas.'
    
    stylesProject = { 
        colWidth: '540px', colMarginStart: '12px', colHeight: '350px', colPadding: '2em',
        textTitle: '24px', textDesc: '16px', textIcon: '2em', miniCard: true
    };

    stylesBenefitsCards = { 
        colWidth: '300px', colMarginStart: '12px', colHeight: '200px', colPadding: '2em 1em', 
        textTitle: '14px', textDesc: '12px', textIcon: '2em', colorIcon: '#54C47A', ourCard: true
    };

    stylesProcessCards = { 
        colWidth: '250px', colMarginStart: '12px', colHeight: '250px', colPadding: '3em 1em', 
        textTitle: '18px', textIcon: '2em', colorIcon: '#FFD966', ourCard: true, noneBorder: true, processCard: true
    };

    stylesTeam = { 
        colWidth: '245px', colHeight: '280px', colPadding: '0.2em', textTitle: '20px', textDesc: '16px', teamCard: true
    };

    stylesNews = { 
        colWidth: '261px', colMarginStart: '12px', colHeight: '565px', colPadding: '1em', 
        textTitle: '15px', textDesc: '12px', textIcon: '2em'
    };

    projectCards = [
        {
            text: {
                iconName: 'architecture',
                title: 'Planificación y desarrollo del proyecto',
                description:  'Mejoramos los procesos internos para incrementar la eficiencia operativa. Seleccionamos y pre-contratamos a los proveedores ' +
                                'necesarios para el proyecto, incluyendo arquitectos, constructoras, inspectores técnicos de obra (ITO) y especialistas.',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'rebase_edit',
                title: 'Optimización de los procesos',
                description:  'Gestionamos proyectos desde la fase inicial hasta su culminación, asegurando que se cumplan los plazos y ' +
                                'el presupuesto establecidos. Definimos los objetivos y desafíos del proyecto de acuerdo con la estrategia trazada.',
                textDark: false
            }
        } 
    ];

    benefitsCards = [
        {
            text: {
                iconName: 'verified',
                title: 'Planificación y organización ',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'verified',
                title: 'Gestión y cumplimiento de plazos',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'verified',
                title: 'Optimización de recursos y control de costos',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'verified',
                title: 'Toma de decisiones informadas y resolución de problemas',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'verified',
                title: 'Resultados tangibles y ventajas competitivas',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'verified',
                title: 'Identificar y mitigar riesgos',
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

    processCards = [
        {
            text: {
                iconName: 'diversity_3',
                title: 'Captación de requerimientos',
                backgroundImage: '/assets/images/background/cards/project/process_1.svg',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'architecture',
                title: 'Layout de diseño',
                backgroundImage: '/assets/images/background/cards/project/process_2.svg',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'folder_copy',
                title: 'Expediente de proyectos',
                backgroundImage: '/assets/images/background/cards/project/process_3.svg',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'tactic',
                title: 'Gestión de licitación',
                backgroundImage: '/assets/images/background/cards/project/process_4.svg',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'mystery',
                title: 'Seguimiento y coordinación',
                backgroundImage: '/assets/images/background/cards/project/process_5.svg',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'verified',
                title: 'Recepción y entrega final',
                backgroundImage: '/assets/images/background/cards/project/process_6.svg',
                textDark: false
            }
        }
    ];    

    teamCards = [
        {
            text: {
                iconUrl: '/assets/images/team/cristobal.jpg', 
                title: 'Cristóbal Bruna',
                description: 'Project manager',
                textDark: false        
            },
            socialMedia: [
                {
                    iconName: 'fa-whatsapp',
                    redirectUrl: 'https://api.whatsapp.com/send?phone=56956674802'
                },
                {
                    iconName: 'fa-linkedin',
                    redirectUrl: 'https://www.linkedin.com/in/crist%C3%B3balbrunaferrer/'
                },
                {
                    iconName: 'fa-envelope',
                    redirectUrl: 'cristobal.bruna@diagonal2.com'
                }
            ]
        },
        {
            text: {
                iconUrl: '/assets/images/team/marco.jpg', 
                title: 'Marco Ferrando',
                description: 'Global Corporate Services',
                textDark: false        
            },
            socialMedia: [
                {
                    iconName: 'fa-whatsapp',
                    redirectUrl: 'https://api.whatsapp.com/send?phone=56994763258'
                },
                {
                    iconName: 'fa-linkedin',
                    redirectUrl: 'https://www.linkedin.com/in/marco-ferrando-79b932/'
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
