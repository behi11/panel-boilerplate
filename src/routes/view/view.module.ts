import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule.forChild([
      {
        path: '',
        component: PanelComponent,
        children: [

        ]
      }
    ])
  ]
})
export class ViewModule { }
