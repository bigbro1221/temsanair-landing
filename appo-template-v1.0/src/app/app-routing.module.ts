import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemeSixComponent } from './themes/theme-six/theme-six.component';
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
  // {path: 'theme-six', component: ThemeSixComponent},
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
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
