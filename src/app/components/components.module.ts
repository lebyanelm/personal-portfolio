import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, HeroComponent, HeaderComponent],
  exports: [HeroComponent, HeaderComponent],
})
export class ComponentsModule {}
