import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[onSale]'
})
export class OnsaleDirective {

  @Input({ alias: "onSale", required: true }) appOnsale: boolean = false;
  private _saleBlock: HTMLDivElement | undefined

  constructor(private _elem: ElementRef<HTMLDivElement>, private _renderer: Renderer2) { }

  @HostListener("mouseenter") onMouseEnter() {
    this.appOnsale && this.attachElem();

  }
  @HostListener("mouseleave") onMouseLeave() {
    this.removeElem();
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

  attachElem() {
    this._saleBlock = this.createElem();
    this._renderer.appendChild(this._elem.nativeElement, this._saleBlock)

  }
  removeElem() {
    this._saleBlock && this._renderer.removeChild(this._elem.nativeElement, this._saleBlock);
  }







}
