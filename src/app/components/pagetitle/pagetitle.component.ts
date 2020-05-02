import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ded-pagetitle',
  templateUrl: './pagetitle.component.html',
  styleUrls: ['./pagetitle.component.scss']
})
export class PageTitleComponent implements OnInit {

  @Input() navLink: string;
  @Input() pageTitle: string;
  @Input() showBack: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
