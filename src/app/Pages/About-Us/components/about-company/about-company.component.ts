import { Component } from '@angular/core';


@Component({
  selector: 'app-about-company',
  templateUrl: './about-company.component.html',
  styleUrls: ['./about-company.component.css'],
  standalone: false,
})
export class AboutCompanyComponent {


  readonly paragraphs: string[] = [

    `JuniorPharon Tours is a licensed Egyptian travel company
    specializing in private Egypt tours, Nile cruises, Egypt tour
    packages, day tours, and tailor-made travel experiences.`,


    `Our goal is to help travelers discover the history, culture,
    landscapes, and timeless beauty of Egypt through carefully
    planned and personalized journeys.`,


    `With a team of passionate local experts and Egyptologist guides,
    we provide authentic travel experiences across Cairo, Giza,
    Luxor, Aswan, Alexandria, Hurghada, Marsa Alam, Sharm El Sheikh,
    and other destinations throughout Egypt.`,


    `Whether you are visiting Egypt for the first time, planning a
    family vacation, looking for a romantic honeymoon, or searching
    for a luxury Nile cruise, we create an itinerary that matches
    your interests, travel style, and budget.`,

  ];


}
