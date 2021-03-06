import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'userconfig',
    loadChildren: () => import('./userconfig/userconfig.module').then( m => m.UserconfigPageModule)
  },
  {
    path: 'explorar',
    loadChildren: () => import('./explorar/explorar.module').then( m => m.ExplorarPageModule)
  },
  {
    path: 'alquileres',
    loadChildren: () => import('./alquileres/alquileres.module').then( m => m.AlquileresPageModule)
  },
  {
    path: 'reservar',
    loadChildren: () => import('./reservar/reservar.module').then( m => m.ReservarPageModule)
  },
  {
    path: 'publicar',
    loadChildren: () => import('./publicar/publicar.module').then( m => m.PublicarPageModule)
  },
  {
    path: 'publicar/:id',
    loadChildren: () => import('./publicar/publicar.module').then( m => m.PublicarPageModule)
  },
  {
    path: 'categorias/:id',
    loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'categoria-list',
    loadChildren: () => import('./categorias/categoria-list/categoria-list.module').then( m => m.CategoriaListPageModule)
  },
  {
    path: 'publicar-list',
    loadChildren: () => import('./publicar-list/publicar-list.module').then( m => m.PublicarListPageModule)
  },
  {
    path: 'rol',
    loadChildren: () => import('./rol/rol.module').then( m => m.RolPageModule)
  },
  {
    path: 'rol/:id',
    loadChildren: () => import('./rol/rol.module').then( m => m.RolPageModule)
  },
  {
    path: 'rol-list',
    loadChildren: () => import('./rol-list/rol-list.module').then( m => m.RolListPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
