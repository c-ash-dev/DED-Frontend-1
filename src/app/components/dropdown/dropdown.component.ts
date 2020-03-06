import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IgxDropDownComponent, IgxInputGroupComponent, ConnectedPositioningStrategy } from 'igniteui-angular';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() items: Array<any>;
  @Input() itemLabel: string;

  // Parent owns and can see selected item
  @Input() selectedItem: string;

  // Handles to the dropdown options for set type and units
  @ViewChild(IgxDropDownComponent, { static: true }) public igxDropDown: IgxDropDownComponent;
  @ViewChild('inputGroup', { read: IgxInputGroupComponent, static: true }) public inputGroup: IgxInputGroupComponent;

  constructor() { }

  public openDropDown() {
    if (this.igxDropDown.collapsed) {
        this.igxDropDown.open({
            modal: false,
            positionStrategy: new ConnectedPositioningStrategy({
                target: this.inputGroup.element.nativeElement
            })
        });
    }
}

  ngOnInit() {
  }

}
