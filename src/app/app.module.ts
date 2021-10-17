import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VoucherEditorComponent } from './voucher-editor/voucher-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
//import { MatMomentDateModule } from "@angular/material-moment-adapter";

import { VoucherRegisterComponent } from './voucher-register/voucher-register.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { VouchersListComponent } from './vouchers-list/vouchers-list.component';
import { ChessListComponent } from './chess-list/chess-list.component';

const appRoutes: Routes = [
  { path: 'categories-list', component: CategoriesListComponent },
  { path: 'chess-list', component: ChessListComponent },
  { path: 'vouchers-list', component: VouchersListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    VoucherEditorComponent,
    VoucherRegisterComponent,
    CategoriesListComponent,
    UsersListComponent,
    VouchersListComponent,
    ChessListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
