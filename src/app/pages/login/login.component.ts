import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginForm: FormGroup = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder, private modalService: MdbModalService) {}

  isValidField(field: string): boolean | null {
    return (
      this.loginForm.controls[field].errors &&
      this.loginForm.controls[field].touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.loginForm.controls[field]) return null;
    const errors = this.loginForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Is required';
        case 'minlength':
          return `Min ${errors['minlength'].requiredLength} characters.`;
        case 'email':
          return 'Invalid Email Format';
      }
    }
    return null;
  }

  onSave(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    console.log(this.loginForm.value);
    this.loginForm.reset({ email: '', password: '' });
    this.modalService.open(ModalComponent);
  }
}
