import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.scss']
})
export class TestimoniesComponent implements OnInit {
    isMobile: boolean = false;

    testimonies = [
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
            icon: '/assets/icons/track-record/work plaza.svg',
            text: 'Diagonal2 fue esencial en el arriendo de nuestra sucursal en el strip center La Dehesa WorkPlaza. Carolina Contreras con su asesoría experta y habilidades de negociación nos llevó al éxito. ¡Mil gracias!',
            name: 'María Alejandra Rodriguez',
            title: 'Dueña de Kouzy.'
        },
        {
            id: 6,
            icon: '/assets/icons/track-record/ocrcamp.svg',
            text: 'Diagonal2 fue clave en el arriendo de nuestra octava sucursal de centros de entrenamiento físico. Su servicio y dedicación fueron clave en nuestra expansión.',
            name: 'Dante Prado',
            title: 'Fundador, OCR Camp.'
        },
        {
            id: 7,
            icon: '/assets/icons/track-record/bellme-clinic.svg',
            text: 'Estamos super contentos con el proceso de arriendo que ofrece Diagonal2, todo fue muy expedito, estuvimos siempre asesorados y en contacto, muy recomendados.',
            name: 'Ricardo Mellad',
            title: 'Fundador, Bellme Clinic.'
        }
    ];

    ngOnInit() {
        this.checkScreenSize();
    }

    @HostListener('window:resize')
    onResize() {
        this.checkScreenSize();
    }

    private checkScreenSize() {
        this.isMobile = window.innerWidth < 768;
    }

    getTestimonyPairs() {
        const pairs = [];
        for (let i = 0; i < this.testimonies.length; i += 2) {
            pairs.push(this.testimonies.slice(i, i + 2));
        }
        return pairs;
    }

    trackByFn(index: number, item: any) {
        return item.id;
    }
}
