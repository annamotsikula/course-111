import { NgModule } from "@angular/core";
import { SpinnerComponent } from "./loading-spinner.component";

@NgModule({
    declarations: [
        SpinnerComponent
    ],
    exports: [SpinnerComponent]
}) export class SharedComponentsModule {

}