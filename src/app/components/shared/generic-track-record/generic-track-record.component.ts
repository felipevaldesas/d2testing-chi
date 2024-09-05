import { Component, Input, OnInit } from '@angular/core';

interface Icon {
    imgUrl: string;
    alt?: string;
    link?: string;
}

@Component({
    selector: 'app-generic-track-record',
    templateUrl: './generic-track-record.component.html',
    styleUrls: ['./generic-track-record.component.scss']
})
export class GenericTrackRecordComponent implements OnInit {
    @Input() icons: Icon[] = [];

    topIcons: Icon[] = [];
    bottomIcons: Icon[] = [];

    ngOnInit(): void {
        this.initializeIcons();
    }

    initializeIcons(): void {
        const half = Math.ceil(this.icons.length / 2);
        this.topIcons = this.icons.slice(0, half);
        this.bottomIcons = this.icons.slice(half);
    }
}