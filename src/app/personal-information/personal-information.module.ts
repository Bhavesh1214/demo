import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalInformationRoutingModule } from './personal-information-routing.module';
import { PersonalInformationComponent } from './personal-information.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [PersonalInformationComponent],
  imports: [CommonModule, PersonalInformationRoutingModule, IonicModule],
})
export class PersonalInformationModule {}
