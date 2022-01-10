import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThemeOneComponent } from './themes/theme-one/theme-one.component';
import { ThemeTwoComponent } from './themes/theme-two/theme-two.component';
import { ThemeThreeComponent } from './themes/theme-three/theme-three.component';
import { ThemeFourComponent } from './themes/theme-four/theme-four.component';
import { ThemeFiveComponent } from './themes/theme-five/theme-five.component';
import { ThemeSixComponent } from './themes/theme-six/theme-six.component';
import { ThemeSevenComponent } from './themes/theme-seven/theme-seven.component';
import { ThemeEightComponent } from './themes/theme-eight/theme-eight.component';
import { ThemeNineComponent } from './themes/theme-nine/theme-nine.component';
import { LoginComponent } from './components/accounts/login/login.component';
import { SignupComponent } from './components/accounts/signup/signup.component';
import { ResetComponent } from './components/accounts/reset/reset.component';
import { AboutPageComponent } from './components/inner-pages/about-page/about-page.component';
import { PricingPageComponent } from './components/inner-pages/pricing-page/pricing-page.component';
import { ReviewsPageComponent } from './components/inner-pages/reviews-page/reviews-page.component';
import { FaqPageComponent } from './components/inner-pages/faq-page/faq-page.component';
import { DownloadPageComponent } from './components/inner-pages/download-page/download-page.component';
import { ThankYouComponent } from './components/inner-pages/thank-you/thank-you.component';
import { NewsletterPageComponent } from './components/inner-pages/newsletter-page/newsletter-page.component';
import { ErrorOneComponent } from './components/inner-pages/error-page/error-one/error-one.component';
import { ErrorTwoComponent } from './components/inner-pages/error-page/error-two/error-two.component';
import { ContactPageComponent } from './components/inner-pages/contact-page/contact-page.component';
import { MaintenanceComponent } from './components/inner-pages/maintenance/maintenance.component';
import { ComingSoonComponent } from './components/inner-pages/coming-soon/coming-soon.component';
import { BlogTwoColumnComponent } from './components/blogs/blog-two-column/blog-two-column.component';
import { BlogThreeColumnComponent } from './components/blogs/blog-three-column/blog-three-column.component';
import { BlogLeftSidebarComponent } from './components/blogs/blog-left-sidebar/blog-left-sidebar.component';
import { BlogRightSidebarComponent } from './components/blogs/blog-right-sidebar/blog-right-sidebar.component';
import { BlogDetailsLeftSidebarComponent } from './components/blogs/blog-details-left-sidebar/blog-details-left-sidebar.component';
import { BlogDetailsRightSidebarComponent } from './components/blogs/blog-details-right-sidebar/blog-details-right-sidebar.component';
import {AboutUsComponent} from "./components/about-us/about-us.component";
import {Products} from "./components/products/products";


const routes: Routes = [
  {path: '', component: ThemeSixComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'product-range', component: Products, children:[
      {path: 'axial-fan', component: Products},
      {path: '', redirectTo: 'axial-fan', pathMatch: 'full'},
      {path: '**', redirectTo: 'axial-fan', pathMatch: 'full'}
  ]},
  {path: 'theme-six', component: ThemeSixComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'reset', component: ResetComponent},
  {path: 'about-page', component: AboutPageComponent},
  {path: 'pricing-page', component: PricingPageComponent},
  {path: 'reviews-page', component: ReviewsPageComponent},
  {path: 'faq-page', component: FaqPageComponent},
  {path: 'download-page', component: DownloadPageComponent},
  {path: 'thank-you', component: ThankYouComponent},
  {path: 'newsletter-page', component: NewsletterPageComponent},
  {path: 'error-one', component: ErrorOneComponent},
  {path: 'error-two', component: ErrorTwoComponent},
  {path: 'contact-page', component: ContactPageComponent},
  {path: 'maintenance', component: MaintenanceComponent},
  {path: 'coming-soon', component: ComingSoonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
