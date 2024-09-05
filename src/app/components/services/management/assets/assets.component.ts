import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrl: './assets.component.scss'
})
export class AssetsComponent {
    
    contactText: string = 'Obtén la ayuda que necesitas.'
    
    stylesAsset = { 
        colWidth: '350px', colMarginStart: '12px', colHeight: '380px', colPadding: '2em',
        textTitle: '24px', textDesc: '16px', textIcon: '2em', miniCard: true
    };

    stylesBenefitsCards = { 
        colWidth: '350px', colMarginStart: '12px', colHeight: '200px', colPadding: '2em 1em', 
        textTitle: '14px', textDesc: '12px', textIcon: '2em', colorIcon: '#54C47A', ourCard: true
    };

    stylesManagementCards = { 
        colWidth: '350px', colMarginStart: '12px', colHeight: '200px', colPadding: '2em 1em', 
        textTitle: '14px', textDesc: '12px', textIcon: '2em', colorIcon: '#FFD966', ourCard: true
    };

    stylesTeam = { 
        colWidth: '245px', colHeight: '280px', colPadding: '0.2em', textTitle: '20px', textDesc: '16px', teamCard: true
    };

    stylesNews = { 
        colWidth: '261px', colMarginStart: '12px', colHeight: '565px', colPadding: '1em', 
        textTitle: '15px', textDesc: '12px', textIcon: '2em'
    };

    assetCards = [
        {
            text: {
                iconName: 'holiday_village',
                title: 'Comercialización de espacios',
                description: ' Nuestro enfoque se centra en maximizar la ' + 
                            'ocupación a corto y mediano plazo, estableciendo una base sólida para optimizar el flujo de renta a largo plazo.',
                textDark: false
            } 
        },
        {
            text: {
                iconName: 'supervised_user_circle',
                title: 'Representación del propietario',
                description: 'Representamos al propietario y asumimos la gestión completa de activos inmobiliarios. ',
                textDark: false
            }
        }     ,
        {
            text: {
                iconName: 'manage_accounts',
                title: 'Administración de arriendos',
                description: 'Nuestra administración integral del activo anticipa disponibilidades y reduce los tiempos de vacancia. ' + 
                'Con un equipo experimentado, cubrimos todos los aspectos de la gestión de activos inmobiliarios.',
                textDark: false
            }
        } ,
        {
            text: {
                iconName: 'verified',
                title: 'Cierre de contratos',
                description: 'Gestionamos los contratos de arrendamiento para maximizar la  rentabilidad y el valor del proyecto.',
                textDark: false
            }
        }    
    ];

    benefitsCards = [
        {
            text: {
                iconName: 'verified',
                title: 'Baja vacancia',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'verified',
                title: 'Reducción de costos',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'verified',
                title: 'Incremento del valor y la rentabilidad de las propiedades',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'verified',
                title: 'Mitigación de Riesgos',
                textDark: false
            }
        }
    ];

    whyUsData = [
        {
            title: '+ 20.000 m²',
            description: 'Activos en gestión, entre <br> oficinas y locales comerciales'
        },
        {
            title: '+ 8.500 UF',  
            description: 'Mensuales gestionados <br> en arriendo'
        }
    ];

    teamCards = [
        {
            text: {
                iconUrl: '/assets/images/team/cote.jpg', 
                title: 'María José Gandarillas',
                description: 'Asset manager',
                textDark: false        
            },
            socialMedia: [
                {
                    iconName: 'fa-whatsapp',
                    redirectUrl: 'https://api.whatsapp.com/send?phone=56997728195'
                },
                {
                    iconName: 'fa-linkedin',
                    redirectUrl: 'https://linkedin.com/in/mjosegandarillas'
                },
                {
                    iconName: 'fa-envelope',
                    redirectUrl: 'maria.gandarillas@diagonal2.com'
                }
            ]
        },
        {
            text: {
                iconUrl: '/assets/images/team/caro_asset.jpg', 
                title: 'Carolina Wanderley',
                description: 'Asset manager',
                textDark: false    
            },
            socialMedia: [
                {
                    iconName: 'fa-whatsapp',
                    redirectUrl: 'https://api.whatsapp.com/send?phone=56932642876'
                },
                {
                    iconName: 'fa-linkedin',
                    redirectUrl: 'https://linkedin.com/in/carolina-wanderley-413889136'
                },
                {
                    iconName: 'fa-envelope',
                    redirectUrl: 'carolina.wanderley@diagonal2.com'
                }
            ]
        },
        {
            text: {
                iconUrl: '/assets/images/team/javiera.jpg', 
                title: 'Javiera Palma',
                description: 'Financial analyst',
                textDark: false    
            },
            socialMedia: [
                {
                    iconName: 'fa-whatsapp',
                    redirectUrl: 'https://api.whatsapp.com/send?phone=56934283995'
                },
                {
                    iconName: 'fa-linkedin',
                    redirectUrl: 'https://www.linkedin.com/in/javierapalmacr/'
                },
                {
                    iconName: 'fa-envelope',
                    redirectUrl: 'javiera.palma@diagonal2.com'
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
