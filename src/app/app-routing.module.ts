import { Routes, RouterModule } from '@angular/router';


import { AuthGuard } from 'src/app/helpers/auth.guard';
import { Role } from 'src/app/models/role';


import { LoginComponent } from 'src/app/components/login/login.component';
import { VoucherEditorComponent } from 'src/app/components/voucher-editor/voucher-editor.component';
import { VoucherRegisterComponent } from 'src/app/components/voucher-register/voucher-register.component';
import { CategoriesListComponent } from 'src/app/components/categories-list/categories-list.component';
import { UsersListComponent } from 'src/app/components/users-list/users-list.component';
import { VouchersListComponent } from 'src/app/components/vouchers-list/vouchers-list.component';
import { ChessListComponent } from 'src/app/components/chess-list/chess-list.component';
import { ChatComponent } from 'src/app/components/chat/chat.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    { 
      path: 'voucher-register', 
      component: VoucherRegisterComponent,
      canActivate: [AuthGuard],
      data: { roles: [Role.Admin] } 
    },
    { 
      path: 'categories-list', 
      component: CategoriesListComponent,
      canActivate: [AuthGuard],
      data: { roles: [Role.Admin] } 
    },
    { 
      path: 'chess-list', 
      component: ChessListComponent,
      canActivate: [AuthGuard],
      data: { roles: [Role.Admin] } 
    },
    { 
      path: 'vouchers-list', 
      component: VouchersListComponent,
      canActivate: [AuthGuard],
      data: { roles: [Role.Admin] }
    },
    { 
      path: 'chat', 
      component: ChatComponent,
      canActivate: [AuthGuard],
      data: { roles: [Role.Admin] }
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);