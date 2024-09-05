import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss'
})
export class PropertiesServicesComponent implements OnInit {
    
    contactText: string = 'Obtén la ayuda que necesitas.'
    
    stylesProperty = { 
        colWidth: '285px', colMarginStart: '12px', colHeight: '240px', colPadding: '2em', colGap: '40px',
        textTitle: '24px', textDesc: '16px', heightDesc: '8em', textIcon: '2em', miniCard: true
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
        heightDesc: '40px', textTitle: '20px', textDesc: '16px', teamCard: true
    };

    stylesNews = { 
        colWidth: '261px', colMarginStart: '12px', colHeight: '565px', colPadding: '1em', 
        textTitle: '15px', textDesc: '12px', textIcon: '2em'
    };

    propertyCards = [
        {
            text: {
                iconName: 'settings',
                description: 'Representamos al propietario y asumimos la gestión completa de activos inmobiliarios.',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'calculate',
                description: 'Gestión contable, RRHH y prevención de riesgos',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'manage_accounts',
                description: 'Administración, costos de operación y gastos comunes',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'engineering',
                description: 'Supervisión de cumplimiento de normativas y renovación de certificaciones.',
                textDark: false
            }
        }  
    ];

    benefitsCards = [
        {
            text: {
                iconName: 'verified',
                title: 'Eficiencia en costos operacionales',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'verified',
                title: 'Cumplimiento Normativo',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'verified',
                title: 'Ahorro de Tiempo',
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
                title: 'Satisfacción de los arrendatarios y propietarios',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'verified',
                title: 'Asesoría experta permanente incluida',
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
                iconName: 'calculate',
                description: 'Administración contable (Control de gestión de ingresos y gastos, recepción de documentos y pagos).', 
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'manufacturing',
                description: ' Control y gestión Gastos Comunes (Emisión, Envío, Cobranza, Recaudación). ',
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'contract',
                description: ' Reportes periódicos y acceso a Dashbord con indicadores de gestión customizables. ',
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'admin_panel_settings',
                description: ' Seguridad y Prevención de Riesgos (Cumplimiento de normativas legales y laborales). ',
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'lock_reset',
                description: ' Asesoría en la Contratación / Renovación de Seguros obligatorios: areas comunes Vida y Accidentes Personales, Guardias y Conserjes ',
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'school',
                description: 'Gestión, Capacitación y “Coaching" del personal de la Administración.',
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'handshake',
                description: 'Reclutamiento, contratación y evaluación del personal.',
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'menu_book',
                description: 'Aseguramiento del fiel y oportuno cumplimiento del Reglamento de Copropiedad, Reglamento Interno, Plan de Emergencia',
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        }
    ];    

    operationCards = [
        {
            text: {
                iconName: 'warehouse',
                description: 'Administración, operación y mantenimiento de equipos, sistemas y áreas comunes de las instalaciones.', 
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'check_circle',
                description: 'Supervisión de cumplimientos de Contratos de Mantención vigentes.',
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'handyman',
                description: 'Gestión y supervisión de reparaciones y obras menores normales.',
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'tactic',
                description: 'Planeación, Proposición y Ejecución de Proyectos de Mejoras de infraestructuras comunes o privadas.',
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'vacuum',
                description: 'Garantizar la ejecución de las tareas de limpieza de áreas comunes.',
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'cell_tower',
                description: 'Supervisión y aseguramiento de operatividad de Sistemas de Comunicaciones y Redes de datos.',
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'roofing',
                description: 'Revisión de estado de infraestructura de edificios y construcciones.',
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'contract_edit',
                description: 'Adquisiciones y Administración de Contratos de terceros.',
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'diversity_3',
                description: 'Supervisión de cumplimiento vigente y actualizado de Certificaciones de equipos.',
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        }
    ];  

    testimoniesMaintenance = [
        {
            iconUrl: 'assets/icons/track-record/campos de chile.svg',
            subtitle: 'Campos de Chile',
            description: 'Empresa desarrolladora de centro de almacenamiento y distribución con 50 años de experiencia.',
            title: 'Avanza Park Enea III - Pudahuel',
            cards: [
                {
                    icon: 'verified',
                    text: 'Property Management de Centro Logístico <br> de 40.033 m²',
                },
                {
                    icon: 'verified',
                    text: 'Selección y Administración de Contratos de Servicios para la operación y Mantenimiento de equipos y sistemas de las instalaciones, quedando 100% habilitados para recepción final de la obra.',
                },
                {
                    icon: 'verified',
                    text: 'Creación e implementación de Manual de Operaciones y Seguridad.',
                },
                {
                    icon: 'verified',
                    text: 'Coordinación de todo el proceso operacional de transferencia del activo a nuevo propietario.',
                }
            ]
        },
        {
            iconUrl: 'assets/icons/track-record/campos de chile azul.svg',
            subtitle: 'Campos de Chile',
            description: 'Empresa desarrolladora de centro de almacenamiento y distribución con 50 años de experiencia.',
            title: 'Avanza Park Lo Espejo – Falabella – San Bernardo',
            cards: [
                {
                    icon: 'verified',
                    text: 'Property Management de Centro Logístico <br> de 170.000 m².',
                },
                {
                    icon: 'verified',
                    text: 'Habilitación de infraestructura operacional post término de obras.',
                },
                {
                    icon: 'verified',
                    text: 'Selección y Administración de Contratos de Servicios y Mantenimiento de equipos y sistemas de las instalaciones.',
                },
                {
                    icon: 'verified',
                    text: 'Puesta en marcha de protocolos de seguridad y operación del centro para cliente Falabella.',
                }
            ]
        },
        {
            iconUrl: 'assets/icons/track-record/inversiones security.svg',
            subtitle: 'Grupo Security – Fénix',
            description: 'Empresa de administración de inversiones y desarrollo de productos financieros para personas, empresas e inversionistas institucionales.',
            title: 'Placa Departamental',
            cards: [
                {
                    icon: 'verified',
                    text: 'Property Management de Centro Comercial compuesto de 5 Locales comerciales a nivel calle y tienda ancla Construmart, con un total de 4.508 m².',
                },
                {
                    icon: 'verified',
                    text: 'Ejecución de amplio Programa de reparación y mantenimiento de infraestructura crítica.',
                },
                {
                    icon: 'verified',
                    text: 'Plan de actualización y mejoramiento de instalaciones de áreas comunes.',
                },
                {
                    icon: 'verified',
                    text: 'Creación e Implementación de Reglamento Interno.',
                },
                {
                    icon: 'verified',
                    text: 'Gestión integral de Gastos Comunes.',
                },
            ]
        },
        {
            iconUrl: 'assets/icons/track-record/inversiones panguipulli.svg',
            subtitle: 'Inversiones Panguipulli',
            description: 'Empresa de administración de inversiones y desarrollo de productos financieros para personas, empresas e inversionistas institucionales.',
            title: 'Condominio Los Libertadores - Colina',
            cards: [
                {
                    icon: 'verified',
                    text: 'Property Management de Condominio de bodegas de 7.187 m², distribuido en 6 unidades arrendables.',
                },
                {
                    icon: 'verified',
                    text: 'Due Diligence de estado de infraestructura y equipamiento del activo, evaluación e implementación del Plan de Mejoras.',
                },
                {
                    icon: 'verified',
                    text: 'Propuesta y selección de proveedores para implementación de servicios operacionales.',
                },
                {
                    icon: 'verified',
                    text: 'Gestión integral de Gastos Comunes.',
                }
            ]
        }
    ];

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
                iconUrl: '/assets/images/team/carlos.jpg', 
                title: 'Carlos Rojas Lemm',
                description: 'Property manager',
                textDark: false    
            },
            socialMedia: [
                {
                    iconName: 'fa-whatsapp',
                    redirectUrl: 'https://api.whatsapp.com/send?phone=56934284582'
                },
                {
                    iconName: 'fa-linkedin',
                    redirectUrl: 'https://www.linkedin.com/in/carlos-guillermo-rojas-lemm-17953927/'
                },
                {
                    iconName: 'fa-envelope',
                    redirectUrl: 'carlos.rojas@diagonal2.com'
                }
            ]
        },
        {
            text: {
                iconUrl: '/assets/images/team/constanza.jpg', 
                title: 'Constanza Curimil',
                description: 'Financial analyst',
                textDark: false    
            },
            socialMedia: [
                {
                    iconName: 'fa-whatsapp',
                    redirectUrl: 'https://api.whatsapp.com/send?phone=56975162957'
                },
                {
                    iconName: 'fa-linkedin',
                    redirectUrl: 'https://www.linkedin.com/in/constanza-curimil-gonz%C3%A1lez-160789124/'
                },
                {
                    iconName: 'fa-envelope',
                    redirectUrl: 'constanza.curimil@diagonal2.com'
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
            this.stylesProperty.colHeight = '200px';
        }
    }

    ngAfterViewInit() {
        AOS.init({
            duration: 1500,
            once: true // Asegura que la animación ocurra solo una vez
        });
    } 
}
