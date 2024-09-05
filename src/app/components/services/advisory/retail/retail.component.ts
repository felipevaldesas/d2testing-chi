import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-retail',
  templateUrl: './retail.component.html',
  styleUrl: './retail.component.scss'
})
export class RetailComponent {
    
    stylesOffice = { 
        colWidth: '400px', colMarginStart: '12px', colHeight: '300px', colPadding: '2em',
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

    retailCards = [
        {
            text: {
                iconName: 'storefront',
                title: 'Servicio para propietarios',
                description: 'Ayudamos a los propietarios a maximizar sus locales, ' + 
                            'encontrando a arrendatarios adecuados, evaluando la reputación financiera.',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'account_circle',
                title: 'Servicios para usuarios',
                description: 'Te ayudamos a encontrar la propiedad que se adapte a las necesidades de tu empresa y en la mejor ubicación.',
                textDark: false
            }
        }
    ];

    ourCards = [
        {
            text: {
                iconName: 'conversion_path',
                title: 'Experiencia del sector de retail',
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
                iconName: 'storefront',
                title: 'Amplia cartera de locales comerciales',
                textDark: false
            }
        }
    ];

    whyUsData = [
        {
            title: '+ 7 M USD',
          description: 'Comercializados en <br> locales comerciales'
        },
        {
            title: '+ 15.000 m²',  
            description: 'En locales comerciales <br> arrendados'
        },
        {
            title: '+ 500',
            description: 'Locales comerciales <br> en cartera'
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
                description: 'Enviamos un listado con varios locales comerciales acorde para el cliente.',
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

    testimoniesRetail = [
        {
            id: 1,
            icon: '/assets/icons/track-record/work plaza.svg',
            text: 'Diagonal2 fue esencial en el arriendo de nuestra sucursal en el strip center La Dehesa WorkPlaza. Carolina Contreras con su asesoría experta y habilidades de negociación nos llevó al éxito. ¡Mil gracias!',
            name: 'María Alejandra Rodriguez',
            title: 'Dueña de Kouzy.'
        },
        {
            id: 2,
            icon: '/assets/icons/track-record/ocrcamp.svg',
            text: 'Diagonal2 fue clave en el arriendo de nuestra octava sucursal de centros de entrenamiento físico. Su servicio y dedicación fueron clave en nuestra expansión.',
            name: 'Dante Prado',
            title: 'Fundador, OCR Camp.'
        }
    ]

    teamCards = [
        {
            text: {
                iconUrl: '/assets/images/team/caro_retail.jpg', 
                title: 'Carolina Contreras',
                description: 'Retail consultant',
                textDark: false        
            },
            socialMedia: [
                {
                    iconName: 'fa-whatsapp',
                    redirectUrl: 'https://api.whatsapp.com/send?phone=56940534153'
                },
                {
                    iconName: 'fa-linkedin',
                    redirectUrl: 'https://linkedin.com/in/carolina-contreras-sepúlveda-7b9687144'
                },
                {
                    iconName: 'fa-envelope',
                    redirectUrl: 'carolina.contreras@diagonal2.com'
                }
            ]
        },
        {
            text: {
                iconUrl: '/assets/images/team/antonia.jpg', 
                title: 'Antonia Nieto',
                description: 'Retail consultant',
                textDark: false    
            },
            socialMedia: [
                {
                    iconName: 'fa-whatsapp',
                    redirectUrl: 'https://api.whatsapp.com/send?phone=569771213094'
                },
                {
                    iconName: 'fa-linkedin',
                    redirectUrl: 'https://linkedin.com/in/antonia-nieto-langevin-a44280147'
                },
                {
                    iconName: 'fa-envelope',
                    redirectUrl: 'antonia.nieto@diagonal2.com'
                }
            ]
        },
        {
            text: {
                iconUrl: '/assets/images/team/alix.jpg', 
                title: 'Alix Soto',
                description: 'Portfolio manager',
                textDark: false    
            },
            socialMedia: [
                {
                    iconName: 'fa-whatsapp',
                    redirectUrl: 'https://api.whatsapp.com/send?phone=56940022633'
                },
                {
                    iconName: 'fa-linkedin',
                    redirectUrl: 'linkedin.com/in/alix-michel-soto-andrade-b371a910b'
                },
                {
                    iconName: 'fa-envelope',
                    redirectUrl: 'alix.soto@diagonal2.com'
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

    contactText: string = '¿Listo para encontrar tu próximo local comercial?'     

    constructor(private router: Router) {}

    ngAfterViewInit() {
        AOS.init({
            duration: 1500,
            once: true // Asegura que la animación ocurra solo una vez
        });
    } 
}

