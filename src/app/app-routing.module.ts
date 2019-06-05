import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { PublishersComponent } from './admin/publishers/publishers.component';
import { BooksComponent } from './admin/books/books.component';
import { BorrowersComponent } from './admin/borrowers/borrowers.component';
import { DueDateComponent } from './admin/due-date/due-date.component';
import { BorrowersLoanComponent } from './admin/due-date/borrowers-loan/borrowers-loan.component';
import { AuthorsComponent } from './admin/authors/authors.component';
import { BranchesComponent } from './admin/branches/branches.component';

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
      },
      {
        path: 'branches',
        component: BranchesComponent
      },
      {
        path: 'publishers',
        component: PublishersComponent
      },
      {
        path: 'books',
        component: BooksComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
