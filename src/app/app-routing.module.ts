import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ContactResolver } from './shared/contact.resolver';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    resolve: {
      contacts: ContactResolver,
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
