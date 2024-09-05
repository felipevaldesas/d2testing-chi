import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private titleService: Title, private metaService: Meta, private router: Router) {}

    ngOnInit() {
        this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd)
            )
            .subscribe(() => {
                this.setTitleAndDescription(this.router.url);
                window.scrollTo(0, 0);
            });
    }

    setTitleAndDescription(url: string) {
        let title = 'Diagonal2 Chile';
        let description = 'Descripción predeterminada para Diagonal2 Chile.';

        switch (url) {
            case '/':
                title = 'Inicio | Diagonal2 - Gestión de Activos Inmobiliarios Comerciales';
                description = 'Líderes en servicios e inversiones inmobiliarias comerciales, con experiencias y datos creamos soluciones personalizadas para cada cliente.';
                break;
            case '/contacto':
                title = 'Contacto | Diagonal2 - Conéctate con Nosotros';
                description = 'Ponte en contacto con el equipo de Diagonal2 para resolver tus consultas sobre nuestros servicios.';
                break;
            case '/propiedades': 
                title = 'Propiedades | Diagonal2 - Arriendo y Venta de Oficinas, Locales Comerciales, Bodegas y Suelos';
                description = 'Explora nuestras cartera de Oficinas, Locales Comerciales, Bodegas Industriales y Suelos disponibles en arriendo y venta en Chile.';
                break;
            case '/mapa-sitio': 
                title = 'Mapa del Sitio | Diagonal2';
                description = 'Encuentra todas las páginas y secciones de Diagonal2 en nuestro mapa del sitio, una guía completa de nuestra oferta de servicios y más.     ';
                break;
            case '/nosotros':
                title = 'Nosotros | Diagonal2 - Nuestra Historia y Valores';
                description = 'Conoce la historia, misión y valores de Diagonal2, líder en gestión inmobiliaria.';
                break;
            case '/servicios':
                title = 'Servicios | Diagonal2 - Soluciones Integrales en Gestión de Activos';
                description = 'Servicios de asesoramiento, transacción y gestión de activos inmobiliarios comerciales. ';
                break;
            case '/servicios/asesoramiento':
                title = 'Asesoramiento | Diagonal2 - Inversión y Desarrollo Inmobiliario';
                description = 'Combinando análisis de mercado con estudios de viabilidad, En Diagonal2  gestionamos operaciones de arrendamiento, venta, reubicación y expansión para instalaciones industriales, almacenes y centros de distribución en toda la región.';
                break;
            case '/servicios/asesoramiento/oficinas':
                title = 'Asesoramiento de Oficinas | Diagonal2';
                description = 'Ofrecemos a propietarios y arrendatarios estrategias para encontrar, arrendar y vender sus oficinas, a través de evaluaciones financieras, campañas de marketing e innovación en sistemas tecnológicos.';
                break;
            case '/servicios/asesoramiento/locales-comerciales':
                title = 'Asesoramiento de Locales Comerciales | Diagonal2';
                description = 'Entregamos a propietarios, franquicias y pymes estrategias para encontrar, arrendar y vender la propiedad necesaria, a través de evaluaciones financieras, campañas de marketing e innovación en sistemas tecnológicos.';
                break;
            case '/servicios/asesoramiento/bodegas-industriales':
                title = 'Asesoramiento de Bodegas Industriales | Diagonal2';
                description = 'Brindamos a propietarios y arrendatarios estrategias para encontrar, arrendar, vender y desarrollar bodegas industriales, a través de evaluaciones financieras, campañas de marketing e innovación en sistemas tecnológicos.';
                break;
            case '/servicios/asesoramiento/suelos':
                title = 'Asesoramiento de Suelos | Diagonal2';
                description = 'Entregamos a propietarios estrategias para encontrar, arrendar,  vender o desarrollar proyectos de suelos, a través de evaluaciones financieras, campañas de marketing e innovación en sistemas tecnológicos.';
                break;
            case '/servicios/gestion':
                title = 'Gestión | Diagonal2 - Administración de Activos y Proyectos';
                description = 'Nos dedicamos a diseñar soluciones estratégicas personalizadas, enfocándonos en satisfacción, riesgos, sostenibilidad y costos. Gestionamos activos inmobiliarios, optimizando ocupación e ingresos, y minimizando gastos, asegurando un servicio profesional y exhaustivo.';
                break;
            case '/servicios/gestion/activos':
                title = 'Gestión de Activos | Diagonal2 - Maximización del Valor Inmobiliario';
                description = 'Representamos a propietarios y gestionamos sus activos inmobiliarios comerciales, ocupando las  propiedades con los arrendatarios adecuados, asegurando una gestión integral por medio de la comercialización, administración, evaluación, marketing, finanzas y TI de sus activos.';
                break;
            case '/servicios/gestion/proyectos':
                title = 'Gestión de Proyectos | Diagonal2 - Ejecución y Supervisión';
                description = 'Nos hacemos cargo de la gestión de tus proyectos, acompañándote en cada etapa. Desde la idea y primeros requerimientos, hasta concretar la habilitación de tus espacios.';
                break;
            case '/servicios/gestion/mantenimiento':
                title = 'Gestión de Mantenimiento | Diagonal2 - Administración Integral de Inmuebles';
                description = 'Optimizamos entornos laborales para maximizar bienestar y productividad, gestionando sistemas, contratos y recursos con un enfoque seguro, sustentable e innovador, garantizando eficiencia energética y altos estándares de servicio';
                break;
            case '/servicios/gestion/propiedades':
                title = 'Gestión de Propiedades | Diagonal2 - Administración Integral de Inmuebles';
                description = 'Gestionamos las propiedades de nuestros clientes enfocándonos en todos los aspectos operacionales, reglamentarios, contables, legales y recursos humanos de los inmuebles administrados, garantizando su optimo funcionamiento y la mayor valorización en el tiempo para los propietarios e inversionistas.';
                break;  
            case '/servicios/consultoria':
                title = 'Consultoría | Diagonal2 - Estrategias para el Sector Inmobiliario';
                description = 'Servicios de consultoría y estrategia para optimizar tus inversiones inmobiliarias';
                break;
            case '/servicios/consultoria/corporativo':
                title = 'Servicios Corporativos | Diagonal2 - Soluciones para Empresas';
                description = 'Ofrecemos servicios corporativos que apoyan a empresas en todas sus etapas, desde la creación hasta la expansión, asegurando una gestión eficiente y adaptada a sus necesidades dinámicas.';
                break;
            case '/servicios/consultoria/investigacion':
                title = 'Consultoría en Investigación | Diagonal2 - Análisis y Tendencias del Mercado';
                description = 'Ofrecemos servicios de investigación de mercado inmobiliario comercial, con análisis, pronósticos y estrategias que respaldan decisiones informadas y planificación para inversores y ocupantes.';
                break;
            case '/servicios/consultoria/mercado':
                title = 'Mercado de Capitales | Diagonal2 - Insights para Decisiones Informadas';
                description = 'Especializados en la intermediación de propiedades y carteras de inversión en Sudamérica, creamos oportunidades en adquisición, desinversión y Sale & Lease Back, conectando capital nacional e internacional.';
                break;
            case '/servicios/consultoria/valuacion': 
                title = 'Valorización de Activos | Diagonal2 - Evaluación Precisa de Activos Inmobiliarios';
                description = 'Nuestra división de Valuación y Consultoría ofrece tasaciones precisas y asesoramiento estratégico en transacciones inmobiliarias, análisis de inversiones y optimización de carteras, con enfoque en precisión y visión estratégica';
                break;
            default:
                title = 'Diagonal2 Chile';
                description = 'Diagonal2 ofrece soluciones integrales en gestión de activos inmobiliarios comerciales.';
        }

        this.titleService.setTitle(title);
        this.metaService.updateTag({ name: 'description', content: description });
    }
}