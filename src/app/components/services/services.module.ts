import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services/services.component';
import { AdvisoryComponent } from './advisory/advisory.component';
import { OfficesComponent } from './advisory/offices/offices.component';
import { RetailComponent } from './advisory/retail/retail.component';
import { IndustrialComponent } from './advisory/industrial/industrial.component';
import { LandComponent } from './advisory/land/land.component';
import { ManagementComponent } from './management/management.component';
import { AssetsComponent } from './management/assets/assets.component';
import { ProjectsComponent } from './management/projects/projects.component';
import { MaintenanceComponent } from './management/maintenance/maintenance.component';
import { PropertiesServicesComponent as ManagementPropertiesComponent } from './management/properties/properties.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { CorporateComponent } from './consulting/corporate/corporate.component';
import { ResearchComponent } from './consulting/research/research.component';
import { MarketComponent } from './consulting/market/market.component';
import { ValuationComponent } from './consulting/valuation/valuation.component';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ServicesComponent,
    AdvisoryComponent,
    OfficesComponent,
    RetailComponent,
    IndustrialComponent,
    LandComponent,
    ManagementComponent,
    AssetsComponent,
    ProjectsComponent,
    MaintenanceComponent,
    ManagementPropertiesComponent,
    ConsultingComponent,
    CorporateComponent,
    ResearchComponent,
    MarketComponent,
    ValuationComponent
  ],
  imports: [
    MatIconModule,
    CommonModule,
    SharedModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule {}