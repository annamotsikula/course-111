import { FormArray, FormControl, FormGroup } from "@angular/forms";

export interface RegisterForm {
    emailAddress: FormControl<string | null>,
    fullName: FormControl<string |null>,
    address: FormGroup<AddressGroup>,
    skills: FormArray<any>,
    phoneNumber?: FormControl<string | null>,
    countryCode?: FormControl<string | null>,
    restrictedUser: FormControl<boolean>
}

export interface AddressGroup {
    street: FormControl<string>,
    city: FormControl<string>,
    country: FormControl<string>,
}