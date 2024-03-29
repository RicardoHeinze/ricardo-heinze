import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ 
    HeaderComponent,
    FooterComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ 
    HeaderComponent,
    FooterComponent,
    AsideComponent
  ]
})
export class PartialsModule { }
