import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';


const modules = [
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSnackBarModule,
];

@NgModule({
    imports: modules,
    exports: modules,
})
export class MaterialModule { }