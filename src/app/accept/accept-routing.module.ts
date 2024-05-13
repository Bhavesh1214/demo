import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceptComponent } from './accept.component';

const routes: Routes = [
  {
    path: '',
    component: AcceptComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceptRoutingModule {}
