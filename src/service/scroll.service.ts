import {EventEmitter, HostListener, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollVisibilityService {
  private elements: HTMLElement[] = [];

  constructor() {
    this.handleScroll = this.handleScroll.bind(this)
    window.addEventListener('scroll', this.handleScroll)
  }

  registerElement(element : HTMLElement){
    this.elements.push(element);
    this.checkVisibility(element);
  }
  unregisterElement(element : HTMLElement){
    const index = this.elements.indexOf(element);
    if (index!==-1){
      this.elements.splice(index,1)
    }
    this.checkVisibility(element);
  }


  private handleScroll() {
    this.elements.forEach(el => {
      this.checkVisibility(el);
    })
  }

  checkVisibility(element: HTMLElement) {
    const boundingClientRect = element.getBoundingClientRect();
    const visibleHeight = Math.min(boundingClientRect.bottom, window.innerHeight) - Math.max(boundingClientRect.top, 0);
    const totalHeight = boundingClientRect.bottom - boundingClientRect.top;
    const visibilityRatio = visibleHeight / totalHeight;

    if (visibilityRatio >= .5) {
      console.log("scrollClass-50")
      element.classList.add("scrollClass-50")
    } else if (visibilityRatio >= .75) {
      element.classList.remove("scrollClass-50")
      element.classList.add("scrollClass-70")
    } else if (visibilityRatio >= .90) {
      element.classList.remove("scrollClass-70")
      element.classList.add("scrollClass-90");
    }

  }

}
