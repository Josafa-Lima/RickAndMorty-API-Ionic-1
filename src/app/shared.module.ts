import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlideDirective } from './diretivas/slide.directive';
import { LowPipe } from './pipes/low.pipe';
import { HeaderComponent } from './components/header/header.component';
import { HighlightDirective } from './diretivas/highlight.directive';






@NgModule({
  declarations: [
     MainComponent, FooterComponent, SlideDirective, LowPipe, HeaderComponent, HighlightDirective
   
  ],
  imports: [
    CommonModule, IonicModule, RouterModule,
  ],
  exports: [
     IonicModule, RouterModule , MainComponent, FooterComponent, 
    SlideDirective, LowPipe,HeaderComponent, HighlightDirective
  ]
    
  
})
export class SharedModule { }
