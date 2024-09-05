import { AfterViewInit, Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos'; 

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit {
    contactText: string = 'Obtén la ayuda que necesitas.'

    stylesFounders = { colWidth: '315px', colHeight: '147px', colPadding: '0.2em', textTitle: '20px', textDesc: '16px', textIcon: '2em', imgWidth: '180px', ourCard: true, noneBorder: true};

    stylesCountryCards = { 
        colWidth: '261px', colMarginStart: '12px', colHeight: '300px', colPadding: '1em', 
        textTitle: '20px', textDesc: '16px', textIcon: '2em'
    };

    stylesAbout = { 
        colWidth: '520px', colMarginStart: '12px', colHeight: '470px', colPadding: '2em',
        textTitle: '24px', textDesc: '16px', textIcon: '2em', miniCard: true
    };

    stylesOurCards = { 
        colWidth: '230px', colMarginStart: '12px', colHeight: '220px', colPadding: '1em', 
        textTitle: '16px', heightDesc:'100px', textDesc: '12px', textIcon: '2em', ourCard: true
    };
    
    stylesTeam = { colWidth: '221px', colHeight: '147px', colPadding: '0.2em', textTitle: '20px', textDesc: '16px', textIcon: '2em', imgMaxWidth: '221px'};
    
    stylesNews = { colWidth: '261px', colMarginStart: '12px', colHeight: '565px', colPadding: '1em', textTitle: '15px', textDesc: '12px', textIcon: '2em'};

    foundersCards = [
        {
            text: {
                iconUrl: '/assets/images/team/phillipe.jpg',
                title: 'Philippe Bourlon <br> de Rouvre',
                description: 'CEO and Founder',
                textDark: false
            }
        },
        {
            text: {
                iconUrl: '/assets/images/team/marco.jpg',
                title: 'Marco Ferrando',
                description: 'Managing Partner and Founder',
                textDark: false
            }
        }
    ];    

    countryCards = [
        {
            text: {
                title: 'Perú',
                listDesc: [
                    { text: 'Advisory & Transaction' },
                    { text: 'Market Research' },
                    { text: 'Corporate Services' },
                    { text: 'Capital Markets' }
                ],
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        },
        {
            text: {
                title: 'Chile',
                listDesc: [
                    { text: 'Advisory & Transaction' },
                    { text: 'Project Management' },
                    { text: 'Facility & Property' },
                    { text: 'Valuation & Advisory' },
                    { text: 'Market Research' },
                    { text: 'Asset Management' },
                    { text: 'Corporate Services' },
                    { text: 'Capital Markets' }
                ],
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        },
        {
            text: {
                title: 'Colombia',
                listDesc: [
                    { text: 'Advisory & Transaction' },
                    { text: 'Project Management' },
                    { text: 'Facility & Property' },
                    { text: 'Valuation & Advisory' },
                    { text: 'Market Research' },
                    { text: 'Asset Management' },
                    { text: 'Corporate Services' },
                    { text: 'Capital Markets' }
                ],
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        },
        {
            text: {
                title: 'Argentina',
                listDesc: [
                    { text: 'Facility & Property' },
                    { text: 'Valuation & Advisory' },
                    { text: 'Asset Management' },
                    { text: 'Advisory & Transaction' },
                    { text: 'Market Research' }
                ],
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        },
        {
            text: {
                title: 'España',
                listDesc: [ 
                    { text: 'Advisory & Transaction' },
                    { text: 'Corporate Services' },
                    { text: 'Capital Markets' }
                ],
                backgroundColor: '#1B1A1D',
                textDark: false
            }
        }
    ];

    aboutCards = [
        {
            text: {
                iconName: 'flag',
                title: 'Misión',
                description: 'En Diagonal2, nos enorgullecemos de nuestro sólido posicionamiento en el mercado, impulsado por nuestra eficiencia <em> y capacidad para resolver problemas. </em> Nos adaptamos a las necesidades únicas del mercado inmobiliario. <br><br>' + 
                            'Nuestro equipo, con profundos conocimientos y experiencia, ofrece <em> soluciones innovadoras </em> y sostenibles, transformando espacios y forjando relaciones duraderas basadas en la confianza y el compromiso.',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'star',
                title: 'Visión',
                description: 'Aspiramos a ser líderes globales en servicios inmobiliarios, sinónimo de innovación, tecnología y calidad. Queremos ser pioneros en la transformación de la industria, anticipándonos a las necesidades del mercado y expandiendo nuestra presencia internacional. <br><br>' + 
                            'Imaginamos un Diagonal2 que va más allá de las transacciones inmobiliarias, <em> siendo el socio de confianza que supera expectativas </em> con soluciones vanguardistas y redefine los estándares del sector.',
                textDark: false
            }
        }
    ];

    ourCards = [   
        {
            text: {
                title: 'Eficiencia',
                description: 'Nos destacamos por nuestra capacidad para resolver problemas de manera rápida y efectiva.',
                textDark: false
            }
        },
        {
            text: {
                title: 'Adaptabilidad',
                description: 'Nos ajustamos a los cambios del mercado y necesidades del cliente con flexibilidad y rapidez.',
                textDark: false
            }
        },  
        {
            text: {
                title: 'Conocimiento y Experiencia',
                description: 'Nuestro equipo ofrece asesoría precisa y soluciones efectivas.',
                textDark: false
            }
        },  
        {
            text: {
                title: 'Innovación',
                description: 'Aplicamos tecnologías avanzadas para crear soluciones que superan las expectativas.',
                textDark: false
            }
        },  
        {
            text: {
                title: 'Multiculturalidad',
                description: 'Valoramos y promovemos la diversidad cultural dentro de nuestro equipo, enriqueciendo nuestras perspectivas y soluciones.',
                textDark: false
            }
        },  
        {
            text: {
                title: 'Confianza y Compromiso',
                description: 'Construimos relaciones duraderas basadas en la transparencia y honestidad.',
                textDark: false
            }
        },  
        {
            text: {
                title: 'Excelencia',
                description: 'Nos esforzamos por superar los estándares de la industria.',
                textDark: false
            }
        },  
        {
            text: {
                title: 'Liderazgo',
                description: 'Promovemos el liderazgo en todos los niveles, siendo referencia en el mercado.',
                textDark: false
            }
        }
    ];

    timelineEvents = [
        { year: 2018, description: 'Establecimiento de la división de Corporate Services', img: 'assets/icons/properties/logo_D2.svg' },
        { year: 2019, description: 'Creación de la división Advisory & Transactions, cubriendo las áreas de       oficinas, retail e industrial consulting.', icon: 'looks_one' },
        { year: 2020, description: 'Lanzamiento de la versión 1.0 del sistema informático dedicado, con integrador automático a portales comerciales', icon: 'apartment' },
        { year: 2021, description: 'Arrendamiento del edificio Entel', icon: 'flag' },
        { year: 2022, description: 'Expansión de servicios de Facility Management en Chile y Argentina.', icon: 'flag' },
        { year: 2022, description: 'Creación del Área de Innovación & Tecnología', icon: 'holiday_village' },
        { year: 2022, description: 'Transacción de Propiedad Comercial para fines Habitacionales MINVU, 33,000 m²', icon: '' },
        { year: 2022, description: 'Transacción de Suelo Industrial para fines Tecnológicos Texora, 25,000 m²', img: 'assets/icons/services/icon_grey_land.svg' },
        { year: 2023, description: 'Apertura de la casa matriz Bogotá, Colombia', icon: 'account_tree' },
        { year: 2024, description: 'Nuevo proyecto comercial bajo gestión de Asset Management', icon: 'device_hub' },
        { year: 2024, description: 'Integración de la división Land Consultant en la división de Advisory & Transactions', icon: 'device_hub' },
        { year: 2024, description: 'Nueva gestión Property Management', icon: 'device_hub' },
        { year: 2024, description: 'Implementación del Sistema de Asset Management', icon: 'device_hub' },
        { year: 2024, description: 'Puesta en marcha del Sistema Colombia', icon: 'device_hub' },

    ];     

    teamCards = [
        { imgUrl: '/assets/images/team/marco.jpg' },
        { imgUrl: '/assets/images/team/phillipe.jpg' },
        { imgUrl: '/assets/images/team/ale.jpg' },
        { imgUrl: '/assets/images/team/alix.jpg' },
        { imgUrl: '/assets/images/team/ana.jpg' },
        { imgUrl: '/assets/images/team/antonia.jpg' },
        { imgUrl: '/assets/images/team/camilo.jpg' },
        { imgUrl: '/assets/images/team/carlos.jpg' },
        { imgUrl: '/assets/images/team/caro_asset.jpg' },
        { imgUrl: '/assets/images/team/caro_retail.jpg' },
        { imgUrl: '/assets/images/team/claudio.jpg' },
        { imgUrl: '/assets/images/team/constanza.jpg' },
        { imgUrl: '/assets/images/team/cote.jpg' },
        { imgUrl: '/assets/images/team/cristian.jpg' },
        { imgUrl: '/assets/images/team/cristobal.jpg' },
        { imgUrl: '/assets/images/team/doris.jpg' },
        { imgUrl: '/assets/images/team/felipe.jpg' },
        { imgUrl: '/assets/images/team/guillermo.jpg' },
        { imgUrl: '/assets/images/team/italo.jpg' },
        { imgUrl: '/assets/images/team/ivan.jpg' },
        { imgUrl: '/assets/images/team/javiera.jpg' },
        { imgUrl: '/assets/images/team/jonathan.jpg' },
        { imgUrl: '/assets/images/team/jose.jpg' },
        { imgUrl: '/assets/images/team/juan_lira.jpg' },
        { imgUrl: '/assets/images/team/juan_pedro.jpg' },
        { imgUrl: '/assets/images/team/guillermo.jpg' },
        { imgUrl: '/assets/images/team/laura.jpg' },
        { imgUrl: '/assets/images/team/leila.jpg' },
        { imgUrl: '/assets/images/team/manuel_colombia.jpg' },
        { imgUrl: '/assets/images/team/manuel_chile.jpg' },
        { imgUrl: '/assets/images/team/nicolas.jpg' },
        { imgUrl: '/assets/images/team/paula.jpg' },
        { imgUrl: '/assets/images/team/saul.jpg' },
        { imgUrl: '/assets/images/team/valeria.jpg' },
        { imgUrl: '/assets/images/team/viviana_canas.jpg' },
        { imgUrl: '/assets/images/team/viviana_salazar.jpg' },
        { imgUrl: '/assets/images/team/francisco_pleguezuelos.jpg' },
        { imgUrl: '/assets/images/team/ignacio.jpg' }           
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
            this.stylesFounders.colHeight = '250px';
            this.stylesOurCards.colWidth = '200px';
        }
    }

    ngAfterViewInit() {
        AOS.init({
            duration: 1500,
            once: true // Esto evita que AOS se reejecute al hacer scroll hacia arriba
        });
    }         

    goProperties() {
        this.router.navigate(['/propiedades']);
    }

}
