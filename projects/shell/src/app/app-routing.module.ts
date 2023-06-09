import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { NotFoundComponent } from './not-found/not-found.component';
import { startsWith, WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { DashboardComponent } from './dashboard/dashboard.component';

let URL = 'http://localhost:3000/remoteEntry.js';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },

  {
    path: 'react',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './web-components',
      elementName: 'react-element'
    } as WebComponentWrapperOptions
  },

  {
    path: 'angular1',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'https://nice-grass-018f7d910.azurestaticapps.net/remoteEntry.js',
      remoteName: 'angular1',
      exposedModule: './web-components',
      elementName: 'angular1-element'
    } as WebComponentWrapperOptions
  },

  {
    path: 'vue',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'https://mango-field-0d0778c10.azurestaticapps.net/remoteEntry.js',
      remoteName: 'vue',
      exposedModule: './web-components',
      elementName: 'vue-element'
    } as WebComponentWrapperOptions
  },

  {
    path: 'dashboard',
    component: DashboardComponent
  },

  {
    path: '**',
    component: NotFoundComponent
  }

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.

];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, {})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
