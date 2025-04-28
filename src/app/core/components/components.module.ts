import { NgModule } from "@angular/core";
import { SpinnerComponent } from "./loading-spinner.component";
import { AlertComponent } from './alert/alert.component';
import { NgClass } from "@angular/common";

@NgModule({
    declarations: [
        SpinnerComponent,
        AlertComponent
    ],
    imports: [NgClass],
    exports: [SpinnerComponent, AlertComponent]
}) export class SharedComponentsModule {

}