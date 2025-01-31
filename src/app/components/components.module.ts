import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { HeaderComponent } from './header/header.component';
import { ScrollProgressComponent } from './scroll-progress/scroll-progress.component';
import { ScrollProgressService } from '../services/scroll-progress.service';
import { MyWorkComponent } from './my-work/my-work.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeroComponent,
    HeaderComponent,
    ScrollProgressComponent,
    MyWorkComponent,
  ],
  exports: [
    HeroComponent,
    HeaderComponent,
    ScrollProgressComponent,
    MyWorkComponent,
  ],
  providers: [ScrollProgressService],
})
export class ComponentsModule {}
