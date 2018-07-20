import { NgModule }from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from '../app/app.component';
import { UsersComponent } from '../app/componentes/users/users.component';
import { IndexComponent } from '../app/componentes/index/index.component';
import { InternalLayoutComponent } from '../app/componentes/internal-layout/internal-layout.component';
import { DetalleVueloComponent } from '../app/componentes/detalle-vuelo/detalle-vuelo.component';

const routes: Routes = [
    {
        path:'cibeles',
        component: AppComponent,
        children:[
            {
                path:'login',
                component: UsersComponent
            },
            {
                path:'index',
                component: IndexComponent
            },
            {
                path:'interno',
                component: InternalLayoutComponent,
                children:[
                    {                        
                        path:'detalle-vuelo',
                        component: DetalleVueloComponent,
                    }
                ]
            }
        ]
    },
    {
        path:'',
        redirectTo:'/cibeles/index',
        pathMatch: 'full'
    },
    {
        path:'cibeles/interno',
        redirectTo:'cibeles/interno/detalle-vuelo',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutingModule{}