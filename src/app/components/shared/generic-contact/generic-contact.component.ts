import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-generic-contact',
  templateUrl: './generic-contact.component.html',
  styleUrl: './generic-contact.component.scss'
})
export class GenericContactComponent {

  @Input() text?: string;

  contactForm!: FormGroup;

  constructor(
      private formBuilder: FormBuilder, 
      private contactService: ContactService,
      private toastr: ToastrService
  ) 
  {
      this.contactForm = this.formBuilder.group({
          name: ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern(/^[A-Za-záéíóúÁÉÍÓÚñÑüÜ\-\'\s]+$/) ]],
          email: ['', [ Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/), Validators.minLength(9), Validators.maxLength(50)]],
          telf: ['', [ Validators.required, Validators.minLength(8), Validators.maxLength(15), Validators.pattern(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/) ]],
          message: ['', [Validators.minLength(5)]],
      });
  }

  submitForm() {
      if (this.contactForm.valid) {
          const formData = this.contactForm.value;
          this.contactService.sendFormContact(formData).pipe(take(1)).subscribe({
              next: () => {
                  this.toastr.success('¡Enviado con éxito!', 'Éxito');
                  this.contactForm.reset();
              },
              error: () => {
                  this.toastr.error('¡Error al enviar el mensaje!', 'Error');
              }
          });
      }
  }
}
