import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos'; 

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrl: './management.component.scss'
})
export class ManagementComponent implements AfterViewInit{

    stylesCards = { colWidth: '261px', colMarginStart: '12px', colHeight: '418px', colPadding: '1em', textTitle: '20px', textDesc: '16px', textIcon: '2em'};
    
    stylesTeam = { colWidth: '221px', colHeight: '147px', colPadding: '0.2em', textTitle: '20px', textDesc: '16px', textIcon: '2em', imgMaxWidth: '221px'};
    
    stylesNews = { colWidth: '261px', colMarginStart: '12px', colHeight: '565px', colPadding: '1em', textTitle: '15px', textDesc: '12px', textIcon: '2em'};

    constructor(private router: Router) {}

    ngAfterViewInit() {
        AOS.init({
            duration: 1500,
            once: true // Asegura que la animación ocurra solo una vez
        });
    } 

    managementCards = [
        {
            text: {
                iconName: 'holiday_village',
                title: 'Asset Management',
                description: 'Gestión de Activos Inmobiliarios',
                backgroundImage: '/assets/images/background/cards/img_asset.jpg',
                url: '/servicios/gestion/activos',
                textDark: true
            }
        },
        {
            text: {
                iconName: 'apartment',
                title: 'Facility Management',
                description: 'Gestión de Servicios Complementarios y Mantenimiento',
                backgroundImage: '/assets/images/background/cards/img_facility.jpg',
                url: '/servicios/gestion/mantenimiento',
                textDark: true
            }
        },
        {
            text: {
                iconUrl: '/assets/icons/services/icon_property.svg',
                title: 'Property Management',
                description: 'Gestión de Servicios de Infraestructuras Comunes',
                backgroundImage: '/assets/images/background/cards/img_property.jpg',
                url: '/servicios/gestion/propiedades',
                textDark: true
            }
        },
        {
            text: {
                iconName: 'architecture',
                title: 'Project Management',
                description: 'Gestión de Proyectos',
                backgroundImage: '/assets/images/background/cards/img_project.jpg',
                url: '/servicios/gestion/proyectos',
                textDark: false
            }
        }
    ];

    whyUsData = [
        {
            title: '+ 162.000 m²',
            description: 'Activos en gestión, entre oficinas, <br> locales comerciales y bodegas'
        },
        {
            title: '+ 15 M USD',  
            description: 'Gestión en <br> activos industriales'
        },
        {
          title: '+ 60.000 m²',
          description: 'En gestión de centros de datos en <br> Chile, Argentina y Colombia'
        }
    ];

    teamCards = [
        { imgUrl: '/assets/images/team/claudio.jpg' },
        { imgUrl: '/assets/images/team/leila.jpg' },
        { imgUrl: '/assets/images/team/doris.jpg' },
        { imgUrl: '/assets/images/team/carlos.jpg' },
        { imgUrl: '/assets/images/team/cote.jpg' },  
        { imgUrl: '/assets/images/team/caro_asset.jpg' },   
        { imgUrl: '/assets/images/team/javiera.jpg' },
        { imgUrl: '/assets/images/team/constanza.jpg' },
        { imgUrl: '/assets/images/team/cristobal.jpg' },
        { imgUrl: '/assets/images/team/saul.jpg' }
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
                url: '/servicios/gestion/activos'          
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
                url: '/servicios/gestion/mantenimiento'
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
                url: '/servicios/gestion/propiedades'
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
                url: '/servicios/gestion/proyectos'
            }
        }
    ];

    goProperties() {
        this.router.navigate(['/propiedades']);
    }

}

