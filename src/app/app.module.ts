import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { HeaderComponent } from './admin/layout/header/header.component';
import { MenuComponent } from './admin/layout/menu/menu.component';
import { AuthorsComponent } from './admin/authors/authors.component';
import { BooksComponent } from './admin/books/books.component';
import { BorrowersComponent } from './admin/borrowers/borrowers.component';
import { BranchesComponent } from './admin/branches/branches.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DueDateComponent } from './admin/due-date/due-date.component';
import { PublishersComponent } from './admin/publishers/publishers.component';

import { BorrowerComponent } from './borrower/borrower.component';
import { CheckoutComponent } from './borrower/checkout/checkout.component';
import { ReturnComponent } from './borrower/return/return.component';
import { BorrowerBooksComponent } from './borrower/books/books.component';
import { BorrowerBranchesComponent } from './borrower/branches/branches.component';
import { BorrowerDashboardComponent } from './borrower/dashboard/dashboard.component';
import { BorrowerLayoutComponent } from './borrower/layout/layout.component';
import { BorrowerHeaderComponent } from './borrower/layout/header/header.component';
import { BorrowerLoginComponent } from './borrower/login/login.component';

import { LibrarianComponent } from './librarian/librarian.component';
import { CopiesComponent } from './librarian/copies/copies.component';
import { LibrarianBranchesComponent } from './librarian/branches/branches.component';
import { LibrarianLayoutComponent } from './librarian/layout/layout.component';
import { LibrarianHeaderComponent } from './librarian/layout/header/header.component';
import { LibrarianLoginComponent } from './librarian/login/login.component';

import { LoginComponent } from './admin/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BorrowersLoanComponent } from './admin/due-date/borrowers-loan/borrowers-loan.component';
import { NewAuthorComponent } from './admin/authors/new/new.component';
import { AuthorEditComponent } from './admin/authors/edit/edit.component';
import { AuthorDeleteComponent } from './admin/authors/delete/delete.component';
import { NewBranchComponent } from './admin/branches/new/new.component';
import { BranchEditComponent } from './admin/branches/edit/edit.component';
import { BranchDeleteComponent } from './admin/branches/delete/delete.component';
import { PagerService } from './service/pager.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AdminComponent,
    LayoutComponent,
    HeaderComponent,
    MenuComponent,
    AuthorsComponent,
    BooksComponent,
    BorrowersComponent,
    BranchesComponent,
    DashboardComponent,
    DueDateComponent,
    PublishersComponent,
    BorrowerComponent,
    CheckoutComponent,
    ReturnComponent,
    LibrarianComponent,
    CopiesComponent,
    LoginComponent,
    BorrowersLoanComponent,
    NewAuthorComponent,
    AuthorEditComponent,
    AuthorDeleteComponent,
    NewBranchComponent,
    BranchEditComponent,
    BranchDeleteComponent,
    BorrowerBooksComponent,
    BorrowerBranchesComponent,
    BorrowerDashboardComponent,
    BorrowerLayoutComponent,
    BorrowerHeaderComponent,
    BorrowerLoginComponent,
    LibrarianBranchesComponent,
    LibrarianLayoutComponent,
    LibrarianHeaderComponent,
    LibrarianLoginComponent
  ],
  entryComponents: [
    NewAuthorComponent,
    AuthorEditComponent,
    AuthorDeleteComponent,
    NewBranchComponent,
    BranchEditComponent,
    BranchDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgbModule, // TODO: just import the modules we use
    AppRoutingModule
  ],
  providers: [PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
