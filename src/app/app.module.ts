import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
// import {HttpParams} from "@angular/common/http";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchRestaurantsService } from './search-restaurants.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, MatMenuModule, MatIconModule, MatSidenavModule} from '@angular/material';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CardsComponent } from './cards/cards.component';
import { MatGridListModule} from '@angular/material/grid-list';
import { ShowCollectionsComponent } from './show-collections/show-collections.component';
import { SearcRestaurantsComponent } from './searc-restaurants/searc-restaurants.component';
import { FeaturedPlacesComponent } from './featured-places/featured-places.component';
import { ExoticRestaurantsComponent } from './exotic-restaurants/exotic-restaurants.component';
// import {MatIconModule} from '@angular/material/icon';
// import { Observable} from '/rxjs/Observable';

@NgModule({
  declarations: [
    AppComponent,
        HomeComponent,
        SettingsComponent,
        PageNotFoundComponent,
        NavBarComponent,
        SideBarComponent,
        CardsComponent,
        ShowCollectionsComponent,
        SearcRestaurantsComponent,
        FeaturedPlacesComponent,
        ExoticRestaurantsComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule
    // HttpParams
  ],
  providers: [SearchRestaurantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
