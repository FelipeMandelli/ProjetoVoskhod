import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoencasPageComponent } from './components/doencas-page/doencas-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MedidasPageComponent } from './components/medidas-page/medidas-page.component';
import { MenuTemplateComponent } from './components/menu-template/menu-template.component';
import { PanoramaPageComponent } from './components/panorama-page/panorama-page.component';

const routes: Routes = [{
  path: '',
  component: MenuTemplateComponent,
  children: [
    {
      path: '',
      component: HomePageComponent
    },
    {
      path: 'doencas',
      component: DoencasPageComponent
    },
    {
      path: 'panorama',
      component: PanoramaPageComponent
    },
    {
      path: 'medidas',
      component: MedidasPageComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
