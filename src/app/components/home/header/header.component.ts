import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
    images = [
        { src: 'assets/images/home/banner/banner-home-uno.jpg', alt: 'Image 1', text: 'Construimos alianzas duraderas con nuestros partners, contribuyendo a su éxito en la región' },
        { src: 'assets/images/home/banner/banner-home-dos.jpg', alt: 'Image 2', text: 'Te acompañamos en todas las fases del proceso, desde la búsqueda y desarrollo hasta la instalación' },
        { src: 'assets/images/home/banner/banner-home-tres.jpg', alt: 'Image 3', text: 'Aseguramos la máxima disponibilidad operativa de toda la infraestructura común y de servicios' },
        { src: 'assets/images/home/banner/banner-home-cuatro.jpg', alt: 'Image 4', text: 'Administramos tus contratos de arriendo, maximizando la rentabilidad y valor de tus activos inmobiliarios' }
    ];  
    currentIndex = 0;
    interval: any;
    highlights = ['éxito', 'Te acompañamos en todas las fases', 'máxima disponibilidad', 'maximizando la rentabilidad y valor'];

    ngOnInit(): void {
        this.startImageCarousel();
    }

    ngOnDestroy(): void {
        clearInterval(this.interval);
    }

    startImageCarousel(): void {
        this.interval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        }, 10000); // Change image every 10 seconds
    }

    splitText(text: string): { before: string, highlighted: string, after: string } {
        for (const highlight of this.highlights) {
            const index = text.indexOf(highlight);
            if (index !== -1) {
                return {
                    before: text.slice(0, index),
                    highlighted: highlight,
                    after: text.slice(index + highlight.length)
                };
            }
        }
        return { before: text, highlighted: '', after: '' };
    }
}