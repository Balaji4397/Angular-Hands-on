import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponentComponent } from '../app/new-component/new-component.component'
import { LinkCompComponent} from '../app/link-comp/link-comp.component'

const routes: Routes = [
  {path:'new_comp',component:NewComponentComponent},
  {path:'link_comp',component:LinkCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
