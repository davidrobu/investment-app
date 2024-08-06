import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { InvestmentCalculatorComponent } from './routes/investment-calculator/investment-calculator.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'calculate',
    component: InvestmentCalculatorComponent,
  },
  // Add more routes here

  {
    path: '', // If route is empty "", redirect back to home
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**', // ** means invalid route, redirect back to home
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  // Preload strategy gives us an ability to load all or some of modules in the background.
  // Params inheritance strategy is to get the parent params to child routes.
  // Bind to component inputs is to enables binding information from the Router state directly to the inputs of the component in Route configurations.
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      enableViewTransitions: true,
      initialNavigation: 'enabledBlocking',
      paramsInheritanceStrategy: 'always',
      scrollPositionRestoration: 'enabled',
      bindToComponentInputs: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
