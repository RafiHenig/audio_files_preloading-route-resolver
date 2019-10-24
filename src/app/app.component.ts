import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IncludeComponent } from './components/dialogs/include/include.component';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Words Frequency Interface';

  // constructor(private dialog: MatDialog) { }

  // include() {
  //   this.dialog.open(IncludeComponent, {
  //     height: '60vh',
  //     width: '60vw',
  //   })
  // }

}
