import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingInRoutingModule } from './sing-in-routing.module';
import { SingInComponent } from './sing-in.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [SingInComponent],
  imports: [CommonModule, SingInRoutingModule, IonicModule],
})
export class SingInModule {}
