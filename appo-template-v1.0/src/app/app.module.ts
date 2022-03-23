import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgwWowModule } from 'ngx-wow';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSixComponent } from './components/hero/hero-six/hero-six.component';
import { PromoTwoComponent } from './components/promo/promo-two/promo-two.component';
import { AboutComponent } from './components/about/about.component';
import { FeaturesComponent } from './components/features/features.component';
import { DownloadComponent } from './components/download/download.component';
import { ContactComponent } from './components/contact/contact.component';
import { ScrollupComponent } from './components/scrollup/scrollup.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeSixComponent } from './themes/theme-six/theme-six.component';
import { HeaderTwoComponent } from './components/header/header-two/header-two.component';
import { MapComponent } from './components/map/map.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import {MatButtonModule} from "@angular/material/button";
import {Products} from "./components/products/products";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {ProductDialog} from "./components/products/product-dialog";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {NgxUiLoaderModule,NgxUiLoaderConfig,SPINNER,POSITION,PB_DIRECTION, NgxUiLoaderRouterModule} from "ngx-ui-loader";
import {AutomationSolutions} from "./components/automation-solutions/automation-solutions";
import {ProductImgZoom} from "./components/products/product-img-zoom";
import {Projects} from "./components/projects/projects";
import {NgxYoutubePlayerModule} from "ngx-youtube-player";
import { OwlModule } from 'ngx-owl-carousel';
import {MatTableModule} from "@angular/material/table";
import {MatMenuModule} from "@angular/material/menu";
import {MatTooltipModule} from "@angular/material/tooltip";
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import { HttpLoaderFactory } from './configs/common.configs';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: "yellow",
  bgsPosition: POSITION.topCenter,
  bgsSize: 40,
  overlayColor: 'rgba(0,0,0,1)',
  bgsType: SPINNER.cubeGrid, // background spinner type
  fgsType: SPINNER.ballSpinClockwiseFadeRotating, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
};

//   @Injectable()  comment this code
@NgModule({
  declarations: [
    AppComponent,
    HeroSixComponent,
    PromoTwoComponent,
    AboutComponent,
    FeaturesComponent,
    DownloadComponent,
    ContactComponent,
    ScrollupComponent,
    PreloaderComponent,
    FooterComponent,
    ThemeSixComponent,
    HeaderTwoComponent,
    MapComponent,
    AboutUsComponent,
    Products,
    AutomationSolutions,
    ProductDialog,
    ProductImgZoom,
    Projects
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({loader: {provide: TranslateLoader, useFactory: (HttpLoaderFactory), deps: [HttpClient]}}),
    AppRoutingModule,
    BrowserAnimationsModule,
    NgwWowModule,
    HttpClientModule,
    // NgSelectModule,
    SlickCarouselModule,
    NgxYoutubePlayerModule.forRoot(),
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    MatIconModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    OwlModule,
    MatTableModule,
    MatMenuModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
