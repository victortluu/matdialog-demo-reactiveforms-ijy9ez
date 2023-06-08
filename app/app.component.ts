import {Component} from '@angular/core';
import {VERSION, MatDialog, MatDialogRef} from '@angular/material';
import { FileNameDialogComponent } from './file-name-dialog.component';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html'
})
export class AppComponent { 
  version = VERSION;

  fileNameDialogRef: MatDialogRef<FileNameDialogComponent>;

  constructor(private dialog: MatDialog) {}

  files = [
    { name: 'foo.js', content: ''},
    { name: 'bar.js', content: ''}
  ];
  
  openAddFileDialog() {
    this.fileNameDialogRef = this.dialog.open(FileNameDialogComponent,{
      minHeight:'400px',
      minWidth:'300px'
    });
  }
}

/**
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */