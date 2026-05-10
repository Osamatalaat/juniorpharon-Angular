import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface Language {
  name: string;
  code: string;
  flag: string;
}

@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css'],
  standalone: false
})
export class NavbarComponent implements OnInit {

  // =========================
  // Mobile Menu
  // =========================
  menuOpen = false;

  // =========================
  // Language Dropdown
  // =========================
  isLangOpen = false;

  languages: Language[] = [
    {
      name: 'English',
      code: 'en',
      flag: '🇺🇸'
    },
    {
      name: 'العربية',
      code: 'ar',
      flag: '🇪🇬'
    },
    {
      name: 'Français',
      code: 'fr',
      flag: '🇫🇷'
    },
    {
      name: 'Español',
      code: 'es',
      flag: '🇪🇸'
    }
  ];

  selectedLanguage!: Language;

  // =========================
  // Constructor
  // =========================
  constructor(private translate: TranslateService) {}

  // =========================
  // Init
  // =========================
  ngOnInit(): void {

    // Default Language
    this.selectedLanguage = this.languages[0];

    this.translate.setDefaultLang(this.selectedLanguage.code);
    this.translate.use(this.selectedLanguage.code);

    document.documentElement.lang = this.selectedLanguage.code;
    document.body.dir = 'ltr';
  }

  // =========================
  // Mobile Menu Functions
  // =========================
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  // =========================
  // Language Dropdown Functions
  // =========================
  toggleLanguageMenu() {
    this.isLangOpen = !this.isLangOpen;
  }

  changeLanguage(lang: Language) {

    this.selectedLanguage = lang;

    // ngx-translate
    this.translate.use(lang.code);

    // HTML lang attribute
    document.documentElement.lang = lang.code;

    // RTL / LTR
    if (lang.code === 'ar') {
      document.body.dir = 'rtl';
    } else {
      document.body.dir = 'ltr';
    }

    // Close Dropdown
    this.isLangOpen = false;

    console.log('Selected language:', lang.code);
  }
}
