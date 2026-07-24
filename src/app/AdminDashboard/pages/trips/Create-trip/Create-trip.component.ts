import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LanguageCode } from '../../../../core/models/Enums/LanguageCode.enum';
import { TripsService } from '../../../../core/Services/Trips.service';
import { pricingTierValidator } from '../validators/pricing-tier.validator';
import { TripType } from '../../../../core/models/Enums/TripType.enum';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css'],
  standalone: false,
})
export class CreateTripComponent {
  constructor(
    private fb: FormBuilder,
    private tripService: TripsService,
    private router: Router,
  ) {
  this.tripForm = this.fb.group({
  location: ['', Validators.required],

  city: ['', Validators.required],

  tripType: [0, Validators.required],

  durationValue: [
    1,
    [Validators.required, Validators.min(1)]
  ],

  durationUnit: [0, Validators.required],

  maxCapacity: [
    1,
    [Validators.required, Validators.min(1)]
  ],

  isFeatured: [false],

  pricingTiers: this.fb.array([]),

  tripContents: this.fb.array([]),

  tripImages: this.fb.array([]),

  itineraries: this.fb.array([])
});
  }

ngOnInit(): void {
  this.addContent();

  this.addItinerary();

  this.addPricingTier();
}
  //====================================================

  isLoading = false;
  TripType = TripType;

  LanguageCode = LanguageCode;

  tripForm: FormGroup;

tripTypes = [
  { value: TripType.Historical, name: 'Historical' },
  { value: TripType.NileCruise, name: 'Nile Cruise' },
  { value: TripType.Adventure, name: 'Adventure' },
  { value: TripType.Beach, name: 'Beach' },
  { value: TripType.Museum, name: 'Museum' },
  { value: TripType.Religious, name: 'Religious' }
];
  languages = [
    { value: LanguageCode.Ar, name: 'Arabic' },

    { value: LanguageCode.En, name: 'English' },

    { value: LanguageCode.Fr, name: 'French' },

    { value: LanguageCode.De, name: 'German' },

    { value: LanguageCode.Es, name: 'Spanish' },

    { value: LanguageCode.It, name: 'Italian' },
  ];

  //====================================================
  // Getters
  //====================================================

  get tripContents(): FormArray {
    return this.tripForm.get('tripContents') as FormArray;
  }

  get itineraries(): FormArray {
  return this.tripForm.get('itineraries') as FormArray;
}

  get tripImages(): FormArray {
    return this.tripForm.get('tripImages') as FormArray;
  }

  get coverImage(): any {
  return this.tripImages.value.find((x: any) => x.isCover);
}

get galleryImages(): any[] {
  return this.tripImages.value.filter((x: any) => !x.isCover);
}

  //====================================================
  // Trip Contents
  //====================================================

  addContent(): void {
    this.tripContents.push(
      this.fb.group({
        name: ['', Validators.required],

        description: ['', Validators.required],

        languageCode: [LanguageCode.Ar, Validators.required],
      }),
    );
  }

  removeContent(index: number): void {
    this.tripContents.removeAt(index);
  }

  isLanguageUsed(language: LanguageCode, currentIndex: number): boolean {
    return this.tripContents.controls.some(
      (control, index) =>
        index !== currentIndex &&
        control.get('languageCode')?.value === language,
    );
  }


  //====================================================
  // Itineraries
  //====================================================
  addItinerary(): void {

  this.itineraries.push(

    this.fb.group({

      dayNumber: [this.itineraries.length + 1],

      title: ['', Validators.required],

      description: ['', Validators.required]

    })

  );

}


removeItinerary(index: number): void {

  this.itineraries.removeAt(index);

  this.itineraries.controls.forEach((x, i) => {

    x.get('dayNumber')?.setValue(i + 1);

  });

}

  //====================================================
  // Images
  //====================================================

  onCoverSelected(event: any): void {
    const file = event.target.files[0];

    if (!file) return;

    // حذف أى Cover قديم
    for (let i = this.tripImages.length - 1; i >= 0; i--) {
      if (this.tripImages.at(i).value.isCover) {
        this.tripImages.removeAt(i);
      }
    }

    this.tripImages.push(
      this.fb.group({
        image: [file, Validators.required],

        isCover: [true],

        preview: [URL.createObjectURL(file)],
      }),
    );
  }

  onGallerySelected(event: any): void {
    const files: FileList = event.target.files;

    if (!files) return;

    for (let i = 0; i < files.length; i++) {
      this.tripImages.push(
        this.fb.group({
          image: [files[i], Validators.required],

          isCover: [false],

          preview: [URL.createObjectURL(files[i])],
        }),
      );
    }
  }

  removeImage(index: number): void {
    this.tripImages.removeAt(index);
  }


  //====================================================
  // pricing Tier
  //====================================================

  get pricingTiers(): FormArray {
  return this.tripForm.get('pricingTiers') as FormArray;
}

addPricingTier(): void {

  this.pricingTiers.push(

   this.fb.group(
  {
    minPeople: [1, [Validators.required, Validators.min(1)]],

    maxPeople: [1, [Validators.required, Validators.min(1)]],

    pricePerPerson: [
      1,
      [Validators.required, Validators.min(0.01)]
    ],

    discountPercentage: [
      0,
      [Validators.min(0), Validators.max(100)]
    ]
  },
  {
    validators: pricingTierValidator
  }
   )

);

}

removePricingTier(index: number): void {

  this.pricingTiers.removeAt(index);

}




  // Save
  //====================================================

  save(): void {
    console.log("Trip Form Value:", this.tripForm.value);
    console.log("Trip Form Valid:", this.tripForm.valid);
    console.log("Trip Form Errors:", this.tripForm.errors);

Object.keys(this.tripForm.controls).forEach(key => {
  const control = this.tripForm.get(key);

  console.log(
    key,
    control?.status,
    control?.errors,
    control?.value
  );
});
    if (this.tripForm.invalid) {
      this.tripForm.markAllAsTouched();

      alert('Please fill all required fields');

      return;
    }

    if (this.tripContents.length === 0) {
      alert('Please add at least one content');

      return;
    }
    if (this.itineraries.length === 0) {

  alert('Please add at least one itinerary');

  return;

}

    if (!this.coverImage) {
      alert('Please upload cover image');

      return;
    }

    const formValue = this.tripForm.value;

    const formData = new FormData();

    //--------------------------------------------------
    // Basic Information
    //--------------------------------------------------

    formData.append('Location', formValue.location);

    formData.append('City', formValue.city);


formData.append(
  'DurationValue',
  formValue.durationValue.toString()
);

formData.append(
  'DurationUnit',
  formValue.durationUnit
);


formData.append(
  'TripType',
  formValue.tripType
);

formData.append(
  'MaxCapacity',
  formValue.maxCapacity
);

formData.append(
  'IsFeatured',
  formValue.isFeatured.toString()
);
    //--------------------------------------------------
    // Trip Contents
    //--------------------------------------------------

    this.tripContents.controls.forEach((content, index) => {
      formData.append(`TripContents[${index}].Name`, content.value.name);

      formData.append(
        `TripContents[${index}].Description`,
        content.value.description,
      );

      formData.append(
        `TripContents[${index}].LanguageCode`,
        content.value.languageCode.toString(),
      );
    });


    //--------------------------------------------------
// Itineraries
//--------------------------------------------------

this.itineraries.controls.forEach((item, index) => {

  formData.append(
    `Itineraries[${index}].DayNumber`,
    item.get('dayNumber')?.value
  );

  formData.append(
    `Itineraries[${index}].Title`,
    item.get('title')?.value
  );

  formData.append(
    `Itineraries[${index}].Description`,
    item.get('description')?.value
  );

});
    //--------------------------------------------------
    // Trip Images
    //--------------------------------------------------

    this.tripImages.controls.forEach((image, index) => {
      formData.append(
        `TripImages[${index}].Image`,
        image.value.image,
        image.value.image.name,
      );

      formData.append(
        `TripImages[${index}].IsCover`,
        image.value.isCover.toString(),
      );
    });

    //--------------------------------------------------
    // Pricing Tiers
    //--------------------------------------------------

    this.pricingTiers.controls.forEach((tier, index) => {

  formData.append(
    `PricingTiers[${index}].MinPeople`,
    tier.get('minPeople')?.value
  );

  formData.append(
    `PricingTiers[${index}].MaxPeople`,
    tier.get('maxPeople')?.value
  );

  formData.append(
    `PricingTiers[${index}].PricePerPerson`,
    tier.get('pricePerPerson')?.value
  );

  formData.append(
    `PricingTiers[${index}].DiscountPercentage`,
    tier.get('discountPercentage')?.value ?? 0
  );

});

    //--------------------------------------------------
    // API
    //--------------------------------------------------

    this.isLoading = true;

    this.tripService.createTrip(formData).subscribe({
      next: (res: any) => {
        console.log(res);

        this.isLoading = false;

        alert('Trip Created Successfully');

        this.tripForm.reset();

        this.tripContents.clear();
        this.itineraries.clear();

        this.tripImages.clear();

        this.router.navigate(['/admin/trips']);
      },

      error: (err: any) => {
        console.error(err);

        this.isLoading = false;

        alert('Something went wrong');
      },
    });
  }
}
