import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AppService } from '../app.service';

@Component({
  selector: 'app-add-mobile-component',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,NgIf,MatButtonModule],
  templateUrl: './add-mobile-component.component.html',
  styleUrl: './add-mobile-component.component.css'
})
export class AddMobileComponentComponent {
  myForm!: FormGroup;

  constructor (private fb:FormBuilder,private appService:AppService){};
  ngOnInit(): void {
    this.myForm = this.fb.group({
      brand: ['',Validators.required,Validators.minLength(2)],
      model: ['',Validators.required,Validators.minLength(2)],
      price: [,Validators.required,this.priceValidator],
      color: ['',Validators.required,Validators.minLength(2)],
      storage: ['',Validators.required,this.priceValidator],
      description: ['']
    })
  }
   onSubmit(form: FormGroup){
    console.log(form.value.brand+" "+form.value.model+" "+form.value.price+" "+
      form.value.color+" "+form.value.storage+" "+form.value.description);
      const storageValue = parseInt(form.value.storage);
    form.value.storage = storageValue;
      this.appService.addMobile(form.value).subscribe({
        next:form=>{
          console.log(form);
        }
      })
   }
   priceValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const price = control.value;
    if (price <= 0) {
      return { 'invalidPrice': true };
    }
    return null;
  }

}

