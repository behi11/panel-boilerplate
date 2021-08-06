import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material';



@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthComponent
      }
    ])
  ]
})
export class AuthModule { }
