import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false
})
export class LoginComponent {

  loginForm: FormGroup;
  submitted = false;
  showLangMenu = false;

  constructor(private fb: FormBuilder , private translate: TranslateService) {

    this.loginForm = this.fb.group({
      UserNameOrEmail: ['', Validators.required],
      Password: ['', Validators.required],
      RememberMe: [false],
      ReturnUrl: ['/']
    });

  }

  get f() {
    return this.loginForm.controls;
  }

  toggleLangMenu() {
    this.showLangMenu = !this.showLangMenu;
  }

  changeLanguage(lang: string) {

    this.translate.use(lang);

    if (lang === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }

    this.showLangMenu = false;
  }

  onSubmit() {

    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    console.log(this.loginForm.value);

    // call login API here
  }

}
