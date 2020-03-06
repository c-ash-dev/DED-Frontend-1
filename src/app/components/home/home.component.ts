import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let rotateMe = Array.from(document.getElementsByClassName('rotate-me') as HTMLCollectionOf<HTMLElement>);
  
    console.log(rotateMe);

    window.addEventListener('mousemove', e => {
  
        rotateMe.forEach(elem => {
              let mouseX = e.clientX;
              let mouseY = e.clientY;
  
              let elemX = elem.getBoundingClientRect().left;
              let elemY = elem.getBoundingClientRect().top;
  
              let lenX = mouseX - elemX;
              let lenY = mouseY - elemY;
  
              let tan = lenY / lenX;
  
              let angle = Math.atan(tan);
              angle *= (180 / Math.PI);
  
              if(lenY > 0 && lenX > 0) {
                  angle += 180; 
              }
              else if(lenY < 0 && lenX > 0) {
                  angle -= 180;
              }
  
              elem.style.transform = "rotate(" + angle + "deg)"
        });
    });

  }

}

    