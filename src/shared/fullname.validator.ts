import { AbstractControl } from '@angular/forms';

export function validateFullName(control: AbstractControl) {
    var words = control.value.split(' ');

    var nonEmptyWords = words.filter((elem: string | null) => {
        return elem != null && elem != '';
    });

    if (nonEmptyWords.length !== 2) {
        return { invalid: true };
    }
    return null;
}
