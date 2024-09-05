import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-properties-home',
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss'
})
export class PropertiesHomeComponent {

    constructor(private router: Router) {}

    goProperties() {
        this.router.navigate(['/propiedades']);
    }
}
