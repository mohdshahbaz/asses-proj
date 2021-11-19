import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './component/add-user/add-user.component';
import { UserViewComponent } from './component/user-view/user-view.component';

const routes: Routes = [
  {
    path: "",
    component: UserViewComponent
  },

  {
    path: "add",
    component: AddUserComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
