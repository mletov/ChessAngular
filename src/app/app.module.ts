import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { JwtInterceptor} from '@helpers/jwt.interceptor';
import { ErrorInterceptor} from '@helpers/error.interceptor';
//, ErrorInterceptor

import { VoucherEditorComponent } from 'src/app/components/voucher-editor/voucher-editor.component';
import { VoucherRegisterComponent } from 'src/app/components/voucher-register/voucher-register.component';
import { CategoriesListComponent } from 'src/app/components/categories-list/categories-list.component';
import { UsersListComponent } from 'src/app/components/users-list/users-list.component';
import { VouchersListComponent } from 'src/app/components/vouchers-list/vouchers-list.component';
import { ChessListComponent } from 'src/app/components/chess-list/chess-list.component';
import { McstmCalendarComponent } from 'src/app/components/mcstm/mcstm-calendar/mcstm-calendar.component';
import { McstmPopupComponent } from 'src/app/components/mcstm/mcstm-popup/mcstm-popup.component';
import { McstmGridComponent } from 'src/app/components/mcstm/mcstm-grid/mcstm-grid.component';

import { appRoutingModule } from 'src/app/app-routing.module';
import { LoginComponent } from './components/login/login.component';

/*
const appRoutes: Routes = [
  { path: '', component: VoucherRegisterComponent },
  { path: 'categories-list', component: CategoriesListComponent },
  { path: 'chess-list', component: ChessListComponent },
  { path: 'vouchers-list', component: VouchersListComponent },
];*/

@NgModule({
  declarations: [
    AppComponent,
    VoucherEditorComponent,
    VoucherRegisterComponent,
    CategoriesListComponent,
    UsersListComponent,
    VouchersListComponent,
    ChessListComponent,
    McstmCalendarComponent,
    McstmPopupComponent,
    McstmGridComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    //appRoutingModule
    /*
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )*/
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
