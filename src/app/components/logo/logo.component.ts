import { Component, OnInit, Input, ɵ_sanitizeStyle, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ded-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})

export class LogoComponent implements OnInit {

  @Input() size: string;

  constructor() { }

  ngOnInit() {
    this.startEyeRotation();
  }


  startEyeRotation() {
    let rotateMe = Array.from(document.getElementsByClassName('eye--rotate') as HTMLCollectionOf<HTMLElement>);

    window.addEventListener('mousemove', e => {
  
        rotateMe.forEach(elem => {
              let mouseX = e.clientX;
              let mouseY = e.clientY;
  
              let elemX = elem.getBoundingClientRect().left + elem.clientWidth / 2;
              let elemY = elem.getBoundingClientRect().top + elem.clientHeight / 2;
  
              let lenX = mouseX - elemX;
              let lenY = mouseY - elemY;
  
              let tan = lenY / lenX;
  
              let angle = Math.atan(tan);
              angle *= (180 / Math.PI);
  
              if(lenX > 0){
                angle += lenY > 0 ? 180 : -180;
              }
  
              elem.style.transform = "rotate(" + angle + "deg)"
        });
    });
  }
}
