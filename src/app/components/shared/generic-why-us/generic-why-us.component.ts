import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-why-us',
  templateUrl: './generic-why-us.component.html',
  styleUrls: ['./generic-why-us.component.scss']
})
export class GenericWhyUsComponent {
  @Input() data: {
    iconUrl?: string;
    iconName?: string;
    title?: string;
    description?: string;
  }[] = [];

  getColClass(): string {
    const length = this.data.length;
    const colClassMap: { [key: number]: string } = {
      3: 'col-md-4',
      4: 'col-md-3'
    };
    return colClassMap[length] || 'col-md-3'; // valor predeterminado
  }
}
