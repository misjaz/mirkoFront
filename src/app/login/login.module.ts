import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatInputModule,
    MatSnackBarModule, MatCardModule,
    MatButtonModule, MatListModule, MatIconModule,
    MatTooltipModule
} from '@angular/material';
import { CovalentLayoutModule, CovalentExpansionPanelModule, CovalentLoadingModule } from '@covalent/core';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';

import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        CovalentLayoutModule,
        CovalentDynamicFormsModule,
        MatInputModule,
        MatSnackBarModule,
        MatCardModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        CovalentExpansionPanelModule,
        CovalentLoadingModule,
        MatTooltipModule
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent],
    providers: []
})
export class LoginModule { }
