import { Injectable, Inject } from '@angular/core';

import { Title, Meta } from '@angular/platform-browser';

import { DOCUMENT } from '@angular/common';

interface BreadcrumbItem {
  label: string;

  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly siteName = 'Junior Pharon Tours';

  private readonly siteUrl = 'https://www.juniorpharontours.com';

  constructor(
    private readonly titleService: Title,

    private readonly metaService: Meta,

    @Inject(DOCUMENT)
    private readonly document: Document,
  ) {}

  /* ============================================================
     ABOUT PAGE SEO
  ============================================================ */

  setAboutUsSeo(): void {
    const title =
      'About Us | Junior Pharon Tours – Egypt Tours & Travel Experts';

    const description =
      'Learn more about Junior Pharon Tours, a local Egyptian travel company offering private Egypt tours, Nile cruises, Egypt tour packages, day tours, and customized vacations across Egypt.';

    const image = `${this.siteUrl}/assets/images/og/about-us-cover.jpg`;

    const url = `${this.siteUrl}/about-us`;

    this.titleService.setTitle(title);

    this.metaService.updateTag({
      name: 'description',

      content: description,
    });

    this.metaService.updateTag({
      name: 'keywords',

      content:
        'Egypt Tours, Private Egypt Tours, Nile Cruises, Cairo Tours, Luxor Tours, Aswan Tours, Egypt Travel Agency',
    });

    this.metaService.updateTag({
      name: 'robots',

      content: 'index, follow',
    });

    /* =========================
       OPEN GRAPH
    ========================== */

    this.metaService.updateTag({
      property: 'og:type',

      content: 'website',
    });

    this.metaService.updateTag({
      property: 'og:title',

      content: title,
    });

    this.metaService.updateTag({
      property: 'og:description',

      content: description,
    });

    this.metaService.updateTag({
      property: 'og:url',

      content: url,
    });

    this.metaService.updateTag({
      property: 'og:image',

      content: image,
    });

    /* =========================
       TWITTER
    ========================== */

    this.metaService.updateTag({
      name: 'twitter:card',

      content: 'summary_large_image',
    });

    this.metaService.updateTag({
      name: 'twitter:title',

      content: title,
    });

    this.metaService.updateTag({
      name: 'twitter:description',

      content: description,
    });

    this.metaService.updateTag({
      name: 'twitter:image',

      content: image,
    });

    this.setCanonical(url);

    this.setAboutSchema();
  }

  /* ============================================================
     CANONICAL
  ============================================================ */

  private setCanonical(url: string): void {
    let link = this.document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );

    if (!link) {
      link = this.document.createElement('link');

      link.setAttribute('rel', 'canonical');

      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  /* ============================================================
     JSON-LD
  ============================================================ */

  private setAboutSchema(): void {
    const schemaId = 'about-us-jsonld';

    const oldSchema = this.document.getElementById(schemaId);

    oldSchema?.remove();

    const schema = {
      '@context': 'https://schema.org',

      '@graph': [
        {
          '@type': 'TravelAgency',

          '@id': `${this.siteUrl}/#organization`,

          name: this.siteName,

          url: this.siteUrl,

          logo: `${this.siteUrl}/assets/images/logo.png`,

          description:
            'Egypt travel company offering private tours, Nile cruises and customized Egypt vacations.',

          areaServed: {
            '@type': 'Country',

            name: 'Egypt',
          },
        },

        {
          '@type': 'AboutPage',

          '@id': `${this.siteUrl}/about-us/#about`,

          url: `${this.siteUrl}/about-us`,

          name: 'About Junior Pharon Tours',

          about: {
            '@id': `${this.siteUrl}/#organization`,
          },
        },
      ],
    };

    const script = this.document.createElement('script');

    script.type = 'application/ld+json';

    script.id = schemaId;

    script.textContent = JSON.stringify(schema);

    this.document.head.appendChild(script);
  }
}
