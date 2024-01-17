import {Component, OnInit} from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  val:number=14;



  ngOnInit(): void {
    gsap.from("svg_footer",{
      x:14
    })
  }

}
