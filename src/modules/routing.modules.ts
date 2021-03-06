import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from '../app/app.component';
import {UsersComponent} from '../app/componentes/users/users.component';
import {IndexComponent} from '../app/componentes/index/index.component';
import {InternalLayoutComponent} from '../app/componentes/internal-layout/internal-layout.component';
import {DetalleVueloComponent} from '../app/componentes/detalle-vuelo/detalle-vuelo.component';
import {SearchResultComponent} from '../app/componentes/search-result/search-result.component';
import {ContactUsComponent} from '../app/componentes/contact-us/contact-us.component';
import {PlanesComponent} from '../app/componentes/planes/planes.component';
import {LoginComponent} from '../app/componentes/login/login.component';
import {AboutComponent} from '../app/componentes/about/about.component';
import {HomeComponent} from '../app/componentes-admin/home/home.component';
import {AuthGuard} from '../app/_guards/auth.guard';
import {PlanListComponent} from '../app/componentes-admin/plan/plan-list/plan-list.component';
import {PlanAddComponent} from '../app/componentes-admin/plan/plan-add/plan-add.component';
import { TravelComponent } from '../app/componentes-admin/travel/travel.component';

const routes: Routes = [
  {
    path: 'cibeles',
    component: AppComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'index',
        component: IndexComponent
      },
      {
        path: 'interno',
        component: InternalLayoutComponent,
        children: [
          {
            path: 'detalle-vuelo/:id',
            component: DetalleVueloComponent,
          },
          {
            path: 'resultado-busqueda',
            component: SearchResultComponent
          },
          {
            path: 'contactenos',
            component: ContactUsComponent
          },
          {
            path: 'planes',
            component: PlanesComponent
          },
          {
            path: 'conocenos',
            component: AboutComponent
          }
        ]
      },
      {
        path: 'interno/',
        redirectTo: 'cibeles/interno/contactenos',
        pathMatch: 'full'
      },
      {
        path: 'administracion',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: 'home',
            component: HomeComponent
          },
          {
            path: 'plan',
            component: PlanListComponent
          },
          {
            path: 'plan/nuevo',
            component: PlanAddComponent
          },
          {
            path: 'viajes',
            component: TravelComponent
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/cibeles/index',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule {
}
