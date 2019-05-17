import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { BorrowersComponent } from './admin/borrowers/borrowers.component';
import { DueDateComponent } from './admin/due-date/due-date.component';
import { BorrowersLoanComponent } from './admin/due-date/borrowers-loan/borrowers-loan.component';
import { AuthorsComponent } from './admin/authors/authors.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: []
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'borrowers',
        component: BorrowersComponent
      },
      {
        path: 'borrowers/:id/dueDate',
        component: DueDateComponent
      },
      {
        path: 'borrowerDueDate',
        component: BorrowersLoanComponent
      },
      {
        path: 'authors',
        component: AuthorsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
