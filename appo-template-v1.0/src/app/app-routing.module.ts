import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemeSixComponent } from './themes/theme-six/theme-six.component';
import {AboutUsComponent} from "./components/about-us/about-us.component";
import {Products} from "./components/products/products";
import {AutomationSolutions} from "./components/automation-solutions/automation-solutions";
import {Projects} from "./components/projects/projects";

const routes: Routes = [
  {path: '', component: ThemeSixComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'product-range', component: Products},
  {path: 'our-projects', component: Projects},
  {path: 'automation-solutions', component: AutomationSolutions},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
