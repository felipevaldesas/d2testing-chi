import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements AfterViewInit{

    styles = { colWidth: '261px', colMarginStart: '12px', colHeight: '418px', colPadding: '1em', textTitle: '20px', textDesc: '16px', textIcon: '2em'};
    
    contactText: string = 'Obtén la ayuda que necesitas.'
    
    constructor(private router: Router) {}

    ngAfterViewInit() {
        AOS.init({
          duration: 1500,
          once: true // Asegura que la animación ocurra solo una vez
        });
    }

    icons = [
        { imgUrl: 'assets/icons/services/list/office.svg', alt: 'Office Consulting', link: '/servicios/asesoramiento/oficinas' },
        { imgUrl: 'assets/icons/services/list/retail.svg', alt: 'Retail Consulting', link: '/servicios/asesoramiento/locales-comerciales' },
        { imgUrl: 'assets/icons/services/list/bodega.svg', alt: 'Industrial Consulting', link: '/servicios/asesoramiento/bodegas-industriales' },
        { imgUrl: 'assets/icons/services/list/land.svg', alt: 'Land Consulting', link: '/servicios/asesoramiento/suelos' },
        { imgUrl: 'assets/icons/services/list/asset.svg', alt: 'Asset Management', link: '/servicios/gestion/activos' },
        { imgUrl: 'assets/icons/services/list/facility.svg', alt: 'Facility Management', link: '/servicios/gestion/mantenimiento' },
        { imgUrl: 'assets/icons/services/list/property.svg', alt: 'Property Management', link: '/servicios/gestion/propiedades' },
        { imgUrl: 'assets/icons/services/list/project.svg', alt: 'Project Management', link: '/servicios/gestion/proyectos' },
        { imgUrl: 'assets/icons/services/list/corporate.svg', alt: 'Corporate Services', link: '/servicios/consultoria/corporativo' },
        { imgUrl: 'assets/icons/services/list/capital.svg', alt: 'Capital Markets', link: '/servicios/consultoria/investigacion'},
        { imgUrl: 'assets/icons/services/list/market.svg', alt: 'Market Research', link: '/servicios/consultoria/mercado' },
        { imgUrl: 'assets/icons/services/list/valuation.svg', alt: 'Valuation & Advisory', link: '/servicios/consultoria/valuacion' }
    ];      

    advisoryCards = [
        {
            text: {
                iconName: 'real_estate_agent',
                title: 'Office Consulting',
                description: 'Consultores de oficinas',
                backgroundImage: '/assets/images/background/cards/img_office.jpg',
                url: '/servicios/asesoramiento/oficinas',
                textDark: false
            }
        },
        {
            text: {
                iconName: 'storefront',
                title: 'Retail Consulting',
                description: 'Consultores de Locales Comerciales',
                backgroundImage: '/assets/images/background/cards/img_retail.jpg',
                url: '/servicios/asesoramiento/locales-comerciales',
                textDark: true
            }
        },
        {
            text: {
                iconName: 'warehouse',
                title: 'Industrial Consulting',
                description: 'Consultores de Bodegas Industriales',
                backgroundImage: '/assets/images/background/cards/img_industrial.jpg',
                url: '/servicios/asesoramiento/bodegas-industriales',
                textDark: true
            }
        },
        {
            text: {
                iconUrl: '/assets/icons/services/icon_white_land.svg',
                title: 'Land Consulting',
                description: 'Consultores de Suelos',
                backgroundImage: '/assets/images/background/cards/img_land.jpg',
                url: '/servicios/asesoramiento/suelos',
                textDark: false
            }
        }
    ]; 

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

    goProperties() {
        this.router.navigate(['/propiedades']);
    }
}