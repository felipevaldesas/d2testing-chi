import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/home/footer/footer.component';
import { RouterModule } from '@angular/router';
import { GenericCardsComponent } from './generic-cards/generic-cards.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { GenericWhyUsComponent } from './generic-why-us/generic-why-us.component';
import { GenericCarouselComponent } from './generic-carousel/generic-carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { GenericContactComponent } from './generic-contact/generic-contact.component';
import { GenericTrackRecordComponent } from './generic-track-record/generic-track-record.component';

@NgModule({
    declarations: [
        FooterComponent,
        GenericWhyUsComponent,
        GenericCardsComponent,
        GenericTrackRecordComponent,
        GenericContactComponent,
        GenericCarouselComponent
    ],
    imports: [
        MatIconModule,
        MatCardModule,
        NgbModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule 
    ],
    exports: [
        FooterComponent,
        GenericWhyUsComponent,
        GenericCardsComponent,
        GenericTrackRecordComponent,
        GenericContactComponent,
        GenericCarouselComponent
    ]
})
export class SharedModule { }