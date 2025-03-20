import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOnsale]'
})
export class OnsaleDirective {

  @Input() appOnsale : boolean = false
  constructor(private _elem: ElementRef, private _renderer: Renderer2) {}

   ngOnInit() {
    if(this.appOnsale) {
      this._renderer.appendChild(this._elem.nativeElement, this.createElem())
    }
   }


   createElem() {
    const div = this._renderer.createElement("div");
    ["badge", "bg-danger"].forEach(i => div.classList.add(i))
    div.style.position = "absolute"
    div.style.top = "-10px"
    div.style.left = "-16px"
    div.innerText = 'ON SALE'
    return div
   }

 





}
