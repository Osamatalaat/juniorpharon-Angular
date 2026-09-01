import { FAQ } from '../models/faq.model';


export const FAQS: FAQ[] = [

  {
    id: 1,

    category: 'booking',

    question:
      'How can I book a tour with you?',

    answer:
      'You can book your tour directly through our website by choosing your preferred trip and completing the booking form. You can also contact our team for assistance.'
  },


  {
    id: 2,

    category: 'booking',

    question:
      'Can I customize my tour itinerary?',

    answer:
      'Yes. We offer private customized tours where you can adjust destinations, activities and duration according to your preferences.'
  },


  {
    id: 3,

    category: 'payments',

    question:
      'What payment methods do you accept?',

    answer:
      'We accept several payment methods including credit cards and other secure online payment options.'
  },


  {
    id: 4,

    category: 'tours',

    question:
      'Are your tours private or shared?',

    answer:
      'We provide both private and shared tours depending on your selected experience.'
  },


  {
    id: 5,

    category: 'tours',

    question:
      'Do you provide hotel pickup?',

    answer:
      'Yes. Most tours include pickup and drop-off from hotels, Nile cruises and airports.'
  },


  {
    id: 6,

    category: 'packages',

    question:
      'What is included in your travel packages?',

    answer:
      'Our packages usually include accommodation, transportation, guided tours and other services depending on the package.'
  }

];
