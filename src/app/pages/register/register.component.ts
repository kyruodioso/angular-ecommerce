import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public registerForm: FormGroup=this.fb.group({
    name:['', [Validators.required, Validators.minLength(4)]],
    lastName:['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]]
  })

 constructor(private fb: FormBuilder, private modalService: MdbModalService){}

 isValidField(field:string):boolean | null{
   return this.registerForm.controls[field].errors 
   && this.registerForm.controls[field].touched;
 }

 getFieldError(field: string):string | null{
   if(!this.registerForm.controls[field]) return null;
   const errors= this.registerForm.controls[field].errors || {};

   for (const key of Object.keys(errors)) {
       switch(key){
        case 'required':
          return 'Is required';
          case 'minlength':
            return `Min ${errors['minlength'].requiredLength} characters.`;
            case 'email':
              return 'Invalid Email Format'
       }    
   }
   return null;
 }

 onSave():void{
  if(this.registerForm.invalid){
    this.registerForm.markAllAsTouched();
    return;
  }
  console.log(this.registerForm.value)
  this.registerForm.reset({name:'', lastName:'', email:'', password:''})
  this.modalService.open(ModalComponent)
 }
}


