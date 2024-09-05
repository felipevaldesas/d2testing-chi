import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-cards',
  templateUrl: './generic-cards.component.html',
  styleUrls: ['./generic-cards.component.scss']
})
export class GenericCardsComponent {
    @Input() data: { 
        imgUrl?: string, 
        text?: {
            iconUrl?: string, 
            iconName?: string, 
            title?: string, 
            description?: string,
            listDesc?: {
                text?: string
            }[],
            backgroundImage?: string,
            backgroundColor?: string,
            textDark?: boolean,
            url?: string 
        }, 
        newsInfo?: {
            section?: string,
            date?: string,
            userInfo?: {
                iconUrl: string,
                name: string,
                role: string
            },
            url?: string 
        },
        socialMedia?: {
            iconName?: string, 
            redirectUrl?: string
        }[];
    }[] = [];

    @Input() styles?: {
        colWidth?: string,
        colHeight?: string,
        colPadding?: string,
        colTitleWidth?: string,
        colGap?: string,
        imgMaxWidth?: string,
        imgWidth?: string,
        textTitle?: string,
        textDesc?: string,
        heightDesc?: string,
        textIcon?: string,
        colorIcon?: string,
        noneBorder?: boolean,
        miniCard?: boolean,
        processCard?: boolean,
        ourCard?: boolean,
        teamCard?: boolean,
        workflowCard?: boolean
    };

    isImageOnly(cards: any[]): boolean {
        return cards.every(card => !card.text);
    } 

    isNewsCard(cards: any[]): boolean {
        return cards.every(card => card.newsInfo);
    }

    isCard(cards: any[]): boolean {
        return cards.every(card => card.newsInfo);
    }
}