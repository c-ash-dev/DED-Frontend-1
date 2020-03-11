import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { IgxDropDownComponent, IgxInputGroupComponent, ConnectedPositioningStrategy, AutoPositionStrategy } from 'igniteui-angular';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  public overlaySettings = {
    positionStrategy: new AutoPositionStrategy()
  };

  @Input() items: Array<any>;
  @Input() itemLabel: string;

  // Parent owns and can see selected item
  @Output() selectedItemEmitter = new EventEmitter<string>();

  // Handles to the dropdown options for set type and units
  @ViewChild(IgxDropDownComponent, { static: true }) public dropDown: IgxDropDownComponent;
  @ViewChild('inputGroup', { read: IgxInputGroupComponent, static: true }) public inputGroup: IgxInputGroupComponent;

  constructor() { }

  public openDropDown() {
    if (this.dropDown.collapsed) {
        this.dropDown.open({
            modal: false,
            positionStrategy: new ConnectedPositioningStrategy({
                target: this.inputGroup.element.nativeElement
            })
        });
    }
}

  public sendSelectedItem() {
    // only send the selected item if one has been selected
    if (this.dropDown.selectedItem) {
      this.selectedItemEmitter.emit(this.dropDown.selectedItem.value);
    }
  }

  ngOnInit() {
  }

}
