import { ChangeDetectionStrategy, Component, HostListener, Input, OnInit } from '@angular/core';

interface Testimony {
  id?: number;
  icon?: string;
  text?: string;
  name?: string;
  title?: string;
  action?: () => void;
}

interface Card {
  icon?: string;
  text?: string;
}

interface Slide {
  iconUrl?: string;
  subtitle?: string;
  description?: string;
  title?: string;
  cards?: Card[];
}

@Component({
  selector: 'app-generic-carousel',
  templateUrl: './generic-carousel.component.html',
  styleUrls: ['./generic-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericCarouselComponent implements OnInit {
    isMobile: boolean = false;

    @Input() data: Testimony[] = [];
    @Input() extendedData: Slide[] = [];

    ngOnInit() {
        this.checkScreenSize();
        console.log('extended data: ', this.extendedData);
    }

    @HostListener('window:resize')
    onResize() {
        this.checkScreenSize();
    }

    private checkScreenSize() {
        this.isMobile = window.innerWidth < 768;
    }

    getTestimonyPairs(): Testimony[][] {
        const pairs: Testimony[][] = [];
        if (!this.isMobile) {
            for (let i = 0; i < this.data.length; i += 2) {
                pairs.push(this.data.slice(i, i + 2));
            }
        } else {
            for (let i = 0; i < this.data.length; i++) {
                pairs.push([this.data[i]]);
            }
        }
        return pairs;
    }

    getCardLayout(cards: Card[] = []): Card[][] {
        if (!cards || cards.length === 0) return [];
        const layout: Card[][] = [];
    
        if (this.isMobile)
            cards.forEach(card => layout.push([card]));
        else {
            switch (cards.length) {
                case 4:
                    layout.push(cards.slice(0, 2));
                    layout.push(cards.slice(2, 4));
                    break;
                case 5:
                    layout.push(cards.slice(0, 3));
                    layout.push(cards.slice(3, 5));
                    break;
                default:
                    layout.push(cards);
            }
        }
        return layout;
    }    

    trackByTestimonyPair(index: number, pair: Testimony[]): number {
        return index;
    }
}