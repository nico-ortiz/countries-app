import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public isComponentDark!: string;

  constructor(private sharedService: SharedService) {
    sharedService.mode.subscribe(mode => this.isComponentDark = mode)
  }

  public swtichTheme():void {
    this.sharedService.switchMode(this.isComponentDark === 'dark' ? 'light' : 'dark');
  }
}
