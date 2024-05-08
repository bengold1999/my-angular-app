import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { FormsModule } from '@angular/forms';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';
import { GetContactMovesPipe } from './pipes/get-contact-moves.pipe';
import { MsgComponent } from './cmps/msg/msg.component';
// import { contactResolver } from './services/contact-resolver';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactFilterComponent,
    ContactPageComponent,
    HomePageComponent,
    ContactDetailsComponent,
    StatisticPageComponent,
    ChartComponent,
    AppHeaderComponent,
    ContactEditPageComponent,
    SignupComponent,
    TransferFundComponent,
    MoveListComponent,
    GetContactMovesPipe,
    MsgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
