import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  templateUrl:'file-name-dialog.component.html',
  styleUrls:['file-name-dialog.component.css'
  ]

})
export class FileNameDialogComponent {
  
    form: FormGroup;
    stores;

    constructor(
        private formBuilder: FormBuilder,
        private dialogRef: MatDialogRef<FileNameDialogComponent>,
      
    ) {}

    ngOnInit() {
     
        this.stores==['arun','reddy'];
        this.form = this.formBuilder.group({
            devicename: '',
            devicedesc: '',
            store: ['']
        });
        this.form.patchValue({
            store: this.stores ? this.stores[0] : 'None'
        });
    }
    onCloseDialog() {
        this.dialogRef.close();
    }
    submit() {
      this.dialogRef.close(this.form.value);
    }
}