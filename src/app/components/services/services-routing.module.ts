import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ServicesComponent } from "./services/services.component";
import { AdvisoryComponent } from "./advisory/advisory.component";
import { OfficesComponent } from "./advisory/offices/offices.component";
import { RetailComponent } from "./advisory/retail/retail.component";
import { IndustrialComponent } from "./advisory/industrial/industrial.component";
import { LandComponent } from "./advisory/land/land.component";
import { ManagementComponent } from "./management/management.component";
import { AssetsComponent } from "./management/assets/assets.component";
import { ProjectsComponent } from "./management/projects/projects.component";
import { MaintenanceComponent } from "./management/maintenance/maintenance.component";
import { PropertiesServicesComponent as ManagementPropertiesComponent } from "./management/properties/properties.component";
import { ConsultingComponent } from "./consulting/consulting.component";
import { CorporateComponent } from "./consulting/corporate/corporate.component";
import { ResearchComponent } from "./consulting/research/research.component";
import { MarketComponent } from "./consulting/market/market.component";
import { ValuationComponent } from "./consulting/valuation/valuation.component";

const routes: Routes = [
  { path: '', component: ServicesComponent },
  { path: 'asesoramiento', component: AdvisoryComponent }, 
  { path: 'asesoramiento/oficinas', component: OfficesComponent },
  { path: 'asesoramiento/locales-comerciales', component: RetailComponent },
  { path: 'asesoramiento/bodegas-industriales', component: IndustrialComponent },
  { path: 'asesoramiento/suelos', component: LandComponent },
  { path: 'gestion', component: ManagementComponent }, 
  { path: 'gestion/activos', component: AssetsComponent },
  { path: 'gestion/proyectos', component: ProjectsComponent },
  { path: 'gestion/mantenimiento', component: MaintenanceComponent },
  { path: 'gestion/propiedades', component: ManagementPropertiesComponent },
  { path: 'consultoria', component: ConsultingComponent }, 
  { path: 'consultoria/corporativo', component: CorporateComponent },
  { path: 'consultoria/investigacion', component: ResearchComponent },
  { path: 'consultoria/mercado', component: MarketComponent },
  { path: 'consultoria/valuacion', component: ValuationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}