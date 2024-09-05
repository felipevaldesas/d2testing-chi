import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as AOS from 'aos'; 
import { FINANCE_OPERATIONS, PROPERTY_TYPES } from '../../constants/constants';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss'
})
export class PropertiesNavBarComponent implements OnInit, AfterViewInit {

    searchForm!: FormGroup;
    propertyTypes = PROPERTY_TYPES;
    financeOperations = FINANCE_OPERATIONS;

    constructor(
        private formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {
        this.initForm() 
    }

    ngAfterViewInit() {
        AOS.init({
            duration: 1500,
            once: true // Asegura que la animación ocurra solo una vez
        });
    } 

    private initForm() {
        this.searchForm = this.formBuilder.group({
            search: new FormControl('', [Validators.min(1)]),
            property_type: new FormControl(''),
            finance_operation: new FormControl('')
        });
    }

}
