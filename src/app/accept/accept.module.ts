import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcceptRoutingModule } from './accept-routing.module';
import { AcceptComponent } from './accept.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [AcceptComponent],
  imports: [CommonModule, AcceptRoutingModule, IonicModule],
})
export class AcceptModule {}
