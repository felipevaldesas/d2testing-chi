import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.scss'
})
export class MaintenanceComponent {
    
    contactText: string = 'Obtén la ayuda que necesitas.'
    
    stylesFacility = { 
        colWidth: '420px', colMarginStart: '12px', colHeight: '350px', colPadding: '2em',
        textTitle: '24px', textDesc: '16px', textIcon: '2em', miniCard: true
    };

    stylesBenefitsCards = { 
        colWidth: '300px', colMarginStart: '12px', colHeight: '200px', colPadding: '2em 1em', 
        textTitle: '14px', textDesc: '12px', textIcon: '2em', colorIcon: '#54C47A', ourCard: true
    };

    stylesManagementCards = { 
        colWidth: '300px', colMarginStart: '12px', colHeight: '200px', colPadding: '2em 1em', 
        textTitle: '14px', textDesc: '12px', textIcon: '2em', colorIcon: '#FFD966', ourCard: true, noneBorder: true
    };

    stylesTeam = { 
        colWidth: '221px', colHeight: '280px', colPadding: '0.2em', 
        heightDesc: '55px', textTitle: '20px', textDesc: '16px', teamCard: true
    };

    stylesNews = { 
        colWidth: '261px', colMarginStart: '12px', colHeight: '565px', colPadding: '1em', 
        textTitle: '15px', textDesc: '12px', textIcon: '2em'
    };

    facilityCards = [
        {
            text: {
                iconName: 'hub',
                title: 'Gestión integral',
                description: ' Coordinamos y supervisamos a los proveedores de servicios, ' + 
                            'garantizando el cumplimiento de plazos, normas de calidad y seguridad en todas las operaciones.',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'engineering',
                title: 'Mantenimiento preventivo',
                description: 'Realizamos seguimiento regular y constante del estado de todos los sistemas críticos, mediante una cuidadosa planificación de ' + 
                'mantenciones preventivas que aseguren su continuidad operativa y menores costos por fallos inesperados.',
                textDark: false
            }
        }        
    ];

    benefitsCards = [
        {
            text: {
                iconName: 'verified',
                title: 'Dedicación a su negocio',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'verified',
                title: 'Reducción de costos operativos',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'verified',
                title: 'Contar con un único representante encargado de coordinar múltiples proveedores (agendamientos, reporte, facturación y pago)',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'verified',
                title: 'Asegurar el correcto mantenimiento y funcionamiento de la infraestructuras activos, inmuebles y servicios.',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'verified',
                title: 'Minimizamos los riesgos financieros y legales de los contratos gestionados.',
                textDark: false
            }
        }
    ];

    whyUsData = [
        {
            title: '+ 142.000 m²',
            description: 'Propiedades comerciales <br> gestionadas'
        },
        {
            title: '+ 15 M USD',  
            description: 'En activos <br> de gestión'
        },
        {
            iconUrl: '',
            title: '+ 150',
            description: 'Propiedades <br> administradas'
        }
    ];

    managementCards = [
        {
            text: {
                iconName: 'cleaning',
                title: 'Limpieza y desinfección',
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'verified_user',
                title: 'Supervisación de la seguridad',
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'pest_control',
                title: 'Control de plagas',
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'compost',
                title: 'Mantención de áreas verdes',
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'restaurant',
                title: 'Alimentos y bebidas',
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'desk',
                title: 'Insumos de oficinas',
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        }
    ];    

    maintenanceCards = [
        {
            text: {
                iconName: 'bolt',
                title: 'Electricidad',
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'climate_mini_split',
                title: 'Equipos de Clima',
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'fire_extinguisher',
                title: 'Extintores',
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        },
        {
            text: {
                iconUrl: '/assets/icons/maintenance/sprinkler.svg',
                //iconName: 'sprinkler',
                title: 'Red de incendios',
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'phone_in_talk',
                title: 'Redes de comunicación',
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'valve',
                title: 'Mantenciones y reparaciones menores (gasfitería, pintura, carpintería, muebles, cerraduras, etc.)',
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        }
    ];  

    testimoniesMaintenance = [
        {
            iconUrl: 'assets/icons/track-record/edge connex.svg',
            subtitle: 'EdgeConneX',
            description: 'Empresa global proveedora de centros de datos que opera en más de 30 países.',
            title: 'Chile - Argentina - Colombia',
            cards: [
              {
                icon: 'verified',
                text: 'Property & Facility Management integral de los Data Centers operativos en LATAM (Chile, Argentina y Colombia). +60.000 M2 administrados.',
              },
              {
                icon: 'verified',
                text: 'Apoyo en la definición de estrategias para el cierre de condiciones contractuales de arriendo y compra de activos inmobiliarios en Buenos Aires (USD 20 M), Santiago (USD 80 M), México (USD 50 M) y Bogotá (USD 30 M).',
              },
              {
                icon: 'verified',
                text: 'Servicio de Contract & Vendor Management para los Data Center Chile y Argentina (20+ contratos en gestión por sitio).',
              },
              {
                icon: 'verified',
                text: 'Licitación comercial y técnica del primer proyecto de la firma en Latino América.',
              }
            ]
        }
    ]

    teamCards = [
        {
            text: {
                iconUrl: '/assets/images/team/doris.jpg', 
                title: 'Doris Carcamo',
                description: 'Property & Facility manament director',
                textDark: false        
            },
            socialMedia: [
                {
                    iconName: 'fa-whatsapp',
                    redirectUrl: 'https://api.whatsapp.com/send?phone=56932549448'
                },
                {
                    iconName: 'fa-linkedin',
                    redirectUrl: 'https://linkedin.com/in/doris-carcamo'
                },
                {
                    iconName: 'fa-envelope',
                    redirectUrl: 'doris.carcamo@diagonal2.com'
                }
            ]
        },
        {
            text: {
                iconUrl: '/assets/images/team/leila.jpg', 
                title: 'Leila O’Brien',
                description: 'Facility coordinator',
                textDark: false    
            },
            socialMedia: [
                {
                    iconName: 'fa-whatsapp',
                    redirectUrl: 'https://api.whatsapp.com/send?phone=56975162216'
                },
                {
                    iconName: 'fa-linkedin',
                    redirectUrl: 'https://www.linkedin.com/in/leilan%C3%AD-o-brien-77a20323b/'
                },
                {
                    iconName: 'fa-envelope',
                    redirectUrl: 'leila.obrien@diagonal2.com'
                }
            ]
        },
        {
            text: {
                iconUrl: '/assets/images/team/claudio.jpg', 
                title: 'Claudio Morales',
                description: 'Facility manager',
                textDark: false    
            },
            socialMedia: [
                {
                    iconName: 'fa-whatsapp',
                    redirectUrl: 'https://api.whatsapp.com/send?phone=56939450650'
                },
                {
                    iconName: 'fa-linkedin',
                    redirectUrl: 'https://www.linkedin.com/in/claudio-morales-ruiz-355932278/'
                },
                {
                    iconName: 'fa-envelope',
                    redirectUrl: 'claudio.morales@diagonal2.com'
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
