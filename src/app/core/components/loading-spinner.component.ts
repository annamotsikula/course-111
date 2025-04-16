import { Component } from "@angular/core";

@Component({
    selector: 'app-loading-spinner',
    template: `
    <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    `
}) export class SpinnerComponent {

}