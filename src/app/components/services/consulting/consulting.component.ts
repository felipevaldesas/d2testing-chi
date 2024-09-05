import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos'; 

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrl: './consulting.component.scss'
})
export class ConsultingComponent  implements AfterViewInit{

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

    consultingCards = [
        {
            text: {
                iconName: 'account_balance',
                title: 'Corporate Services',
                description: 'Servicios Corporativos',
                backgroundImage: '/assets/images/background/cards/img_corporate.jpg',
                url: '/servicios/consultoria/corporativo',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'bar_chart_4_bars',
                title: 'Capital Markets',
                description: 'Mercado de Capitales',
                backgroundImage: '/assets/images/background/cards/img_capital.jpg',
                url: '/servicios/consultoria/mercado',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'query_stats',
                title: 'Market Research',
                description: 'Investigación de Mercado',
                backgroundImage: '/assets/images/background/cards/img_research.jpg',
                url: '/servicios/consultoria/investigacion',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'balance',
                title: 'Valuation & Advisory',
                description: 'Valoración de Activos',
                backgroundImage: '/assets/images/background/cards/img_valuation.jpg',
                url: '/servicios/consultoria/valuacion',
                textDark: true
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

    teamCards = [
        { imgUrl: '/assets/images/team/marco.jpg' },
        { imgUrl: '/assets/images/team/phillipe.jpg' },
        { imgUrl: '/assets/images/team/nicolas.jpg' },
        { imgUrl: '/assets/images/team/ivan.jpg' },
        { imgUrl: '/assets/images/team/jose.jpg' },
        { imgUrl: '/assets/images/team/manuel_colombia.jpg' },
        { imgUrl: '/assets/images/team/manuel_chile.jpg' },
        { imgUrl: '/assets/images/team/felipe.jpg' },
        { imgUrl: '/assets/images/team/jonathan.jpg' },
        { imgUrl: '/assets/images/team/guillermo.jpg' },
        { imgUrl: '/assets/images/team/francisco_pleguezuelos.jpg' },
        { imgUrl: '/assets/images/team/ignacio.jpg' }          
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
                url: '/servicios/consultoria/corporativo'          
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
                url: '/servicios/consultoria/mercado'
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
                url: '/servicios/consultoria/investigacion'
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
                url: '/servicios/consultoria/valuacion'
            }
        }
    ];

    goProperties() {
        this.router.navigate(['/propiedades']);
    }
}
