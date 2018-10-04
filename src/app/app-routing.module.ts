import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import {  PageNotFoundComponent} from  './page-not-found/page-not-found.component';
import {ShowCollectionsComponent} from './show-collections/show-collections.component';
// import { ShowCollectionsComponent } from './show-collections/show-collections.component';
import { SearcRestaurantsComponent } from './searc-restaurants/searc-restaurants.component';
import { FeaturedPlacesComponent } from './featured-places/featured-places.component';
import { ExoticRestaurantsComponent } from './exotic-restaurants/exotic-restaurants.component';

// import { SettingsContactComponent} from './settings-contact/settings-contact.component';
// import { SettingsProfileComponent} from './settings-profile/settings-profile.component';

const routes: Route[] = [
 // {path:'', redirectTo:'/home', pathMatch:'prefix'},
  {path: '', component: HomeComponent},
  // {path: '', redirectTo:'/show-collections', pathMatch:'full'},
  {path:'show-collections', component: ShowCollectionsComponent},
  {path: 'exotic-restaurants', component: ExoticRestaurantsComponent},
  {path: 'featured-places', component:FeaturedPlacesComponent },
  {path:'searc-restaurants', component: SearcRestaurantsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
