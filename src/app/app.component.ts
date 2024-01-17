import {Component, HostListener, inject, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {SkillsComponent} from "../skills/skills.component";
import {ProjectsComponent} from "../projects/projects.component";
import {ContactComponent} from "../contact/contact.component";
import {FooterComponent} from "./footer/footer.component";
import {ScrollVisibilityService} from "../service/scroll.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgOptimizedImage, HeaderComponent, SkillsComponent, ProjectsComponent, ContactComponent, FooterComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  title = 'cvsAngular';
  selected: string = "home";
  scrollPosition:number=0;
  clear = {opacity: 1, transform: 'none'};
  hidden ={
    opacity: 0,
    transform: "translateY(25px) translateZ(0px)"
  }
  scrollVisiService = inject(ScrollVisibilityService);
  setActivePage(page: string) {
    this.selected = page;
  }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', [])
  onScroll():void{
    console.log("siuueuee eennn")
     this.scrollPosition =  window.scrollY || window.document.body.scrollTop || 0;
    console.log(this.scrollPosition)
    if (this.scrollPosition<=400){
      this.selected = "home";
    }
    else if (this.scrollPosition<=700){
      this.selected = "skills"
    }
    else if (this.scrollPosition<=1200){
      this.selected = "projects"
    }
    else if (this.scrollPosition<=1700){
      this.selected = "hire"
    }
  }

}
