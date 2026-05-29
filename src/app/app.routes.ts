import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Billing } from './pages/billing/billing';
import { Inventory } from './pages/inventory/inventory';
import { TaxReports } from './pages/tax-reports/tax-reports';
import { Vendor } from './pages/vendor/vendor';
import { Registration } from './pages/registration/registration';
import { Employee } from './pages/employee/employee';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'billing', component: Billing },
  { path: 'inventory', component: Inventory },
  { path: 'tax-reports', component: TaxReports },
  { path: 'vendor', component: Vendor },
  { path: 'registration', component: Registration },
  { path: 'employee', component: Employee }
];
