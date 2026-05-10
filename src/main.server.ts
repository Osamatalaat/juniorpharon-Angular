import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

// التعديل هنا: تأكد أنك بتعمل export لـ bootstrap كـ function
// وأن الـ config ممرر بشكل سليم
const bootstrap = (context: BootstrapContext) =>
  bootstrapApplication(AppComponent, config, context);

export default bootstrap;
