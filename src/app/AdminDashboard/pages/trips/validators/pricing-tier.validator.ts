import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const pricingTierValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {

  const min = control.get('minPeople')?.value;
  const max = control.get('maxPeople')?.value;

  if (min == null || max == null) {
    return null;
  }

  if (max < min) {
    return {
      maxLessThanMin: true
    };
  }

  return null;
};
