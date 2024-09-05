import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrl: './land.component.scss'
})
export class LandComponent {

    stylesLand = { 
        colWidth: '400px', colMarginStart: '12px', colHeight: '350px', colPadding: '2em',
        textTitle: '24px', textDesc: '16px', textIcon: '2em', miniCard: true
    };

    stylesOurCards = { 
        colWidth: '230px', colMarginStart: '12px', colHeight: '200px', colPadding: '2em 1em', 
        textTitle: '16px', textDesc: '12px', textIcon: '2em', ourCard: true
    };

    stylesWorkFlowCards = { 
        colWidth: '190px', colMarginStart: '12px', colHeight: '230px', colPadding: '1em', 
        textTitle: '16px', textDesc: '12px', textIcon: '2em', ourCard: true, workflowCard: true
    };

    stylesTeam = { 
        colWidth: '221px', colHeight: '280px', colPadding: '0.2em', textTitle: '20px', textDesc: '16px', teamCard: true
    };

    stylesNews = { 
        colWidth: '261px', colMarginStart: '12px', colHeight: '565px', colPadding: '1em', 
        textTitle: '15px', textDesc: '12px', textIcon: '2em'
    };

    landCards = [
        {
            text: {
                iconUrl: '/assets/icons/services/icon_grey_land.svg',
                title: 'Servicio para propietarios',
                description: 'Ayudamos a los propietarios a maximizar el valor de sus suelos, facilitando ' + 
                            'la venta o desarrollo, evaluando la reputación financiera de los potenciales inversionistas.',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'account_circle',
                title: 'Servicios para usuarios',
                description: 'Te ayudamos a encontrar y adquirir el suelo ideal que se adapte a tus necesidades, en la mejor ubicación para su desarrollo y crecimiento.',
                textDark: false
            }
        }
    ];

    ourCards = [
        {
            text: {
                iconName: 'conversion_path',
                title: 'Experiencia del sector de industrial',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'contact_phone',
                title: 'Red extensa de contactos',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'handshake',
                title: 'Estrategias de negociación',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'emoji_objects',
                title: 'Soluciones personalizadas',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'calculate',
                title: 'Evaluaciones financieras de los prospectos',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'campaign',
                title: 'Campañas de marketing personalizadas',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'display_settings',
                title: 'Sistema tecnológico',
                textDark: false
            }
        },
        {
            text: {
                iconUrl: '/assets/icons/services/icon_white_land.svg',
                title: 'Amplia cartera de suelos para desarrollos',
                textDark: false
            }
        }
    ];

    whyUsData = [
        {
            title: '+ 20 M USD',
            description: 'Comercializados en suelos <br> para desarrollo'
        },
        {
            title: '+ 120.000 m²',  
            description: 'En suelos <br> vendidos'
        },
        {
            title: '+ 300',
            description: 'Suelos para desarrollo <br> en cartera'
        }
    ];

    workflowCards = [
        {
            text: {
                iconName: 'line_start_circle',
                title: 'Evaluación de necesidades',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'list',
                title: 'Long <p> List',
                description: 'Enviamos un listado con varios suelos para desarrollo acorde para el cliente.',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'visibility',
                title: 'Visitas a los inmuebles',
                description: 'Tour guiado por los inmuebles seleccionados.',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'sort',
                title: 'Short <p> List',
                description: 'Listado reducido con opciones más acordes a las necesidades del cliente.',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'task_alt',
                title: 'Selección de preferidos',
                description: 'Selección por parte del cliente sobre las opciones preferidas.',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'mark_email_read',
                title: 'Envío de oferta de negociación',
                description: 'Comienzo de negociación para conseguir la mejor oferta para el cliente.',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'contract',
                title: 'Borrador de contrato',
                description: 'Redacción del borrador de contrato con los términos más favorables.',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'signature',
                backgroundColor: '#23D567',
                title: 'Cierre de acuerdo y firma de contrato',
                textDark: true
            }
        },
        {
            text: {
                iconName: 'line_end_circle',
                title: 'Post <p> venta',
                description: 'Proveemos soporte continuo después de la transacción.',
                textDark: false
            }
        }
    ]

    teamCards = [
        {
            text: {
                iconUrl: '/assets/images/team/italo.jpg', 
                title: 'Italo Descalzi',
                description: 'Land consultant',
                textDark: false        
            },
            socialMedia: [
                {
                    iconName: 'fa-whatsapp',
                    redirectUrl: 'https://api.whatsapp.com/send?phone=56981517127'
                },
                {
                    iconName: 'fa-linkedin',
                    redirectUrl: 'https://linkedin.com/in/italo-descalzi-a-08798b24'
                },
                {
                    iconName: 'fa-envelope',
                    redirectUrl: 'italo.descalzi@diagonal2.com'
                }
            ]
        },
        {
            text: {
                iconUrl: '/assets/images/team/cristian.jpg', 
                title: 'Cristian Reyes ',
                description: 'Land developer',
                textDark: false    
            },
            socialMedia: [
                {
                    iconName: 'fa-whatsapp',
                    redirectUrl: 'https://api.whatsapp.com/send?phone=56932573762'
                },
                {
                    iconName: 'fa-linkedin',
                    redirectUrl: 'linkedin.com/in/cristián-reyes-briones-28449696'
                },
                {
                    iconName: 'fa-envelope',
                    redirectUrl: 'cristian.reyes@diagonal2.com'
                }
            ]
        },
        {
            text: {
                iconUrl: '/assets/images/team/viviana_canas.jpg', 
                title: 'Viviana Cañas',
                description: 'Portfolio manager',
                textDark: false    
            },
            socialMedia: [
                {
                    iconName: 'fa-whatsapp',
                    redirectUrl: 'https://api.whatsapp.com/send?phone=56958794809'
                },
                {
                    iconName: 'fa-linkedin',
                    redirectUrl: 'linkedin.com/in/viviana-cañas-jimenez-7ab958b8'
                },
                {
                    iconName: 'fa-envelope',
                    redirectUrl: 'viviana.canas@diagonal2.com'
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
  
    contactText: string = '¿Listo para encontrar el suelo que necesitas?'  

    constructor(private router: Router) {}

    ngAfterViewInit() {
        AOS.init({
            duration: 1500,
            once: true // Asegura que la animación ocurra solo una vez
        });
    } 
}
