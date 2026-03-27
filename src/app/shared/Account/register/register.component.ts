import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role } from '../../../core/models/Enums/Role.enum';
import { UserRegister } from '../../../core/models/Create/UserRegister';
import { AccountService } from '../../../core/Services/Account.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: false
})
export class RegisterComponent implements OnInit {

  role = Role;
  registerForm!: FormGroup;

  countries = [
    { name: 'Egypt', flag: '🇪🇬', code: '+20' },
    { name: 'Saudi Arabia', flag: '🇸🇦', code: '+966' },
    { name: 'UAE', flag: '🇦🇪', code: '+971' },
    { name: 'United States', flag: '🇺🇸', code: '+1' },
    { name: 'United Kingdom', flag: '🇬🇧', code: '+44' }
  ];

  selectedFile: File | null = null;

  isLoading = false;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private AccountSrc: AccountService,
    private translate: TranslateService
  ) {

    // تحديد اللغة الافتراضية
    this.translate.setDefaultLang('en');

    this.registerForm = this.fb.group({
      FirstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      LastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      UserName: ['', [Validators.required, Validators.minLength(5)]],
      PhoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      CountryCode: ['', Validators.required],
      Nationality: ['', Validators.required],
      Gender: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(8)]],
      ConfirmPassword: ['', Validators.required],
      Role: [Role.Client, Validators.required],
      ImageFile: [null]
    });

  }

  ngOnInit() {}

  // تغيير اللغة حسب اختيار المستخدم
//  changeLanguage(event: Event) {
//   const selectElement = event.target as HTMLSelectElement;
//   if (selectElement) {
//     this.translate.use(selectElement.value);
//   }
// }
showLangMenu = false;

toggleLangMenu() {
  this.showLangMenu = !this.showLangMenu;
}

changeLanguage(lang: string) {
  this.translate.use(lang);
  this.showLangMenu = false;
}

  onSubmit() {

    this.submitted = true;
    this.isLoading = true;

    if (this.registerForm.valid) {

      const formData = new FormData();
      const formValue: UserRegister = this.registerForm.value;

      formData.append('FirstName', formValue.FirstName);
      formData.append('LastName', formValue.LastName ?? '');
      if (formValue.Email) formData.append('Email', formValue.Email);

      formData.append('Password', formValue.Password);
      formData.append('Gender', formValue.Gender.toString());
      formData.append('Role', formValue.Role);

      if (this.selectedFile) {
        formData.append('ImageFile', this.selectedFile);
      }

      this.AccountSrc.Register(formData).subscribe({

        next: (res) => {
          this.isLoading = false;
          if (res.succeeded) {
            console.log(this.translate.instant('MESSAGES.REGISTER_SUCCESS', {
              name: formValue.FirstName + ' ' + formValue.LastName
            }));
          } else {
            console.log(this.translate.instant('MESSAGES.REGISTER_FAILED', {
              name: formValue.FirstName + ' ' + formValue.LastName
            }));
          }
        },

        error: (err) => {
          this.isLoading = false;
          console.error(this.translate.instant('MESSAGES.REGISTER_ERROR'), err);
        }

      });

    } else {

      Object.keys(this.registerForm.controls).forEach(key => {
        const control = this.registerForm.get(key);
        if (control?.invalid) {
          console.log(key + " is invalid");
          console.log(control.errors);
        }
      });

      this.isLoading = false;

    }

  }

  get f() {
    return this.registerForm.controls;
  }

}
