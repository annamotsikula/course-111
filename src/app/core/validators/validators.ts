import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";

export function geoPhoneNumber(control: AbstractControl): ValidationErrors | null {
    const fc = control as FormControl<string>;
    const value = fc.value


    if(value && value.includes('+995')) {
        return { georgianNumber: true }
    }

    return null
}