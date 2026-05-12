import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // 🟢 static pages
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
 
  {
    path: 'trips',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'packages',
    renderMode: RenderMode.Prerender
  },

  // 🔵 dynamic SSR pages
  {
    path: 'trips/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'packages/:id',
    renderMode: RenderMode.Server
  },

  // 🟡 runtime pages (auth + booking)
  {
    path: 'booking',
    renderMode: RenderMode.Server
  },
  {
    path: 'auth',
    renderMode: RenderMode.Server
  }
];
