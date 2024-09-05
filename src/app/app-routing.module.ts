import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ContactComponent } from "./components/contact/contact.component";
import { PropertiesNavBarComponent } from "./components/properties/properties.component";
import { AboutComponent } from "./components/about/about.component";
import { SiteMapComponent } from "./components/site-map/site-map.component";
import { NewsArticlesComponent } from "./components/news-articles/news-articles.component";
import { PoliticPrivacityComponent } from "./components/politic-privacity/politic-privacity.component";
import { CookiesPoliticComponent } from "./components/cookies-politic/cookies-politic.component";
import { TermsConditionComponent } from "./components/terms-condition/terms-condition.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'propiedades', component: PropertiesNavBarComponent },
  { path: 'nosotros', component: AboutComponent },
  { path: 'noticias', component: NewsArticlesComponent },
  { path: 'mapa-sitio', component: SiteMapComponent },
  { path: 'politicas-de-privacidad', component: PoliticPrivacityComponent },
  { path: 'terminos-y-condiciones', component: TermsConditionComponent },
  { path: 'politica-de-cookies', component: CookiesPoliticComponent },
  { 
    path: 'servicios', 
    loadChildren: () => import('./components/services/services.module').then(m => m.ServicesModule) 
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}