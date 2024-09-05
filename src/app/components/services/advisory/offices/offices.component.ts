import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrl: './offices.component.scss'
})
export class OfficesComponent implements AfterViewInit{

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

	officeCards = [
		{
			text: {
				iconName: 'apartment',
				title: 'Servicio para propietarios',
				description: 'Ayudamos a los propietarios a maximizar sus utilidades, ' + 
							 'seleccionando a los arrendatarios adecuados, y evaluando su reputación financiera.',
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
				title: 'Experiencia y conocimiento del mercado de oficinas',
				textDark: false
			}
		},
		{
			text: {
				iconName: 'contact_phone',
				title: 'Amplia red de contactos',
				textDark: false
			}
		},
		{
			text: {
				iconName: 'handshake',
				title: 'Negociaciones efectivas',
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
				iconName: 'desk',
				title: 'Amplia cartera de oficinas ',
				textDark: false
			}
		}
	];

	whyUsData = [
        {
          title: '+ 30 M USD',
          description: 'Comercializados en <br> oficinas'
        },
        {
          title: '+ 35.000 m²',  
          description: 'En oficina <br> arrendadas'
        },
        {
          title: '+ 1.500',
          description: 'Oficinas <br> en cartera'
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
				description: 'Enviamos un listado con varias oficinas acorde  para el cliente.',
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

	testimoniesOffice = [
        {
            id: 1,
            icon: '/assets/icons/track-record/hunter.svg',
            text: 'De todas las corredoras que vi, la única que realmente escucho el requerimiento que necesitaba fue Paula. Me llevo a varias oficinas que tenían lo que necesitaba y eso agilizo el proceso. Además, siempre tuvo buena disposición en guiarme y ayudarme hasta el final del proceso.',
            name: 'Victoria Romero Garurevich',
            title: 'Gerente de Desarrollo de Negocios, Hunter Chile.'
        },
        {
            id: 2,
            icon: '/assets/icons/track-record/fresenius.svg',
            text: 'Mi experiencia en el proceso de arriendo de oficina para Fresenius con ustedes fue excepcional. Desde el primer contacto, el equipo demostró profesionalismo y eficiencia. La atención personalizada y la transparencia en cada etapa del proceso me brindaron confianza. Además, la flexibilidad y disposición para adaptarse a nuestras necesidades específicas fueron invaluables.',
            name: 'Joselyn Morales',
            title: 'Gerencia General y encargada del proceso de arriendo, Fresenius Kabi.'
        },
        {
            id: 3,
            icon: '/assets/icons/track-record/inbox.svg',
            text: 'El comentario que tengo para hacer sobre la operación es excelente. Diagonal2 (Paula) fue el único bróker de los 6 que contactamos que hizo seguimiento comercial sobre las distintas unidades que habíamos visto como debe hacerse, llamadas, mensajes, video call todo para ayudar a INBOX a elegir la mejor alternativa.',
            name: 'Juan Ignacio Rufino',
            title: 'Gerente General, Inbox Technology.'
        },
        {
        id: 4,
            icon: '/assets/icons/track-record/bIzland.svg',
            text: 'No quería dejar pasar la oportunidad para agradecer tu gestión y acompañamiento constante en el proceso de arriendo, tu tarea (Paula Martinez -  Office Consultant) ha sido impecable estando encima de cada detalle.',
            name: 'Rodrigo Benitez',
            title: 'General Manager, Bizland.'
        },
        {
            id: 5,
            icon: '/assets/icons/track-record/bellme-clinic.svg',
            text: 'Estamos super contentos con el proceso de arriendo que ofrece Diagonal2, todo fue muy expedito, estuvimos siempre asesorados y en contacto, muy recomendados.',
            name: 'Ricardo Mellad',
            title: 'Fundador, Bellme Clinic.'
        }
	]

	teamCards = [
		{
			text: {
				iconUrl: '/assets/images/team/paula.jpg', 
				title: 'Paula Martínez',
				description: 'Office consultant',
				textDark: false        
			},
			socialMedia: [
				{
                    iconName: 'fa-whatsapp',
                    redirectUrl: 'https://api.whatsapp.com/send?phone=56953348579'
                },
                {
                    iconName: 'fa-linkedin',
                    redirectUrl: 'https://linkedin.com/in/paula-martinez-aa21021ab'
                },
                {
                    iconName: 'fa-envelope',
                    redirectUrl: 'paula.martinez@diagonal2.com'
                }
			]
		},
		{
			text: {
				iconUrl: '/assets/images/team/valeria.jpg', 
				title: 'Valeria Silva',
				description: 'Office consultant',
				textDark: false    
			},
			socialMedia: [
				{
                    iconName: 'fa-whatsapp',
                    redirectUrl: 'https://api.whatsapp.com/send?phone=56938611108'
                },
                {
                    iconName: 'fa-linkedin',
                    redirectUrl: 'https://linkedin.com/in/valericsc'
                },
                {
                    iconName: 'fa-envelope',
                    redirectUrl: 'valeria.silva@diagonal2.com'
                }
			]
		},
		{
			text: {
				iconUrl: '/assets/images/team/viviana_salazar.jpg', 
				title: 'Viviana Salazar',
				description: 'Portfolio manager',
				textDark: false    
			},
			socialMedia: [
				{
                    iconName: 'fa-whatsapp',
                    redirectUrl: 'https://api.whatsapp.com/send?phone=56975940040'
                },
                {
                    iconName: 'fa-linkedin',
                    redirectUrl: 'https://linkedin.com/in/viviana-salazar-salazar'
                },
                {
                    iconName: 'fa-envelope',
                    redirectUrl: 'viviana.salazar@diagonal2.com'
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

    contactText: string = '¿Listo para encontrar tu próxima oficina?'     

	constructor(private router: Router) {}

	ngAfterViewInit() {
		AOS.init({
			duration: 1500,
			once: true // Asegura que la animación ocurra solo una vez
		});
	} 
}
