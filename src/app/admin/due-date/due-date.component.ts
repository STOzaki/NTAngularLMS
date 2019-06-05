import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-due-date',
  templateUrl: './due-date.component.html',
  styleUrls: ['./due-date.component.css']
})
export class DueDateComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  loans: any;

  editLoan: any;

  private href: string;

  public cardNo: number;

  private modalReference: NgbModalRef;

  errorMsg: '';

  private closeResult: any;

  ngOnInit() {
    this.href = this.router.url;
    this.cardNo = this.parseUrlForId();
    this.getAllLoansForBorrower();
  }

  parseUrlForId() {
    // the fourth item in the array will allways be the cardNo for the borrower
    const cardNoString = this.href.split('/')[3];
    let cardNoTemp = parseInt(cardNoString, 10);
    if (isNaN(cardNoTemp)) {
      console.error('The cardNo given in the url is incorrect!');
      cardNoTemp = 0;
    }
    return cardNoTemp;
  }

  getAllLoansForBorrower() {
    // console.log('attempting to get all loans');
    this.adminService.getAllLoans(this.cardNo).subscribe(
      res => {
        // console.log('Got all loans');
        this.loans = res;
      },
      error => console.log(error)
    );
  }

  updateLoan() {
    // console.log(this.editLoan.dueDate);
    const bookId = this.editLoan.book.id;
    const branchId = this.editLoan.branch.id;
    const cardNo = this.editLoan.borrower.cardNo;
    const overrideDate = this.editLoan.dueDate;
    this.adminService
      .updateLoan(bookId, branchId, cardNo, overrideDate)
      .subscribe(
        res => {
          // console.log('Successfully updated a borrower');
          this.adminService.getAllLoans(cardNo).subscribe(
            getRes => {
              // console.log('Refresh borrower table');
              this.loans = getRes;
              // also close modal
              this.modalReference.close();
            },
            error => console.log(error)
          );
        },
        error => console.log(error)
      );
  }

  editModal(content, selectedLoan) {
    // console.log('starting edit modal');
    console.log(selectedLoan);
    this.editLoan = Object.assign({}, selectedLoan);
    this.modalReference = this.modalService.open(content);
    this.modalReference.result.then(
      result => {
        this.errorMsg = '';
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.errorMsg = '';
        this.closeResult = `Dismissed '`;
      }
    );
  }

  close(content) {
    this.modalReference.close();
  }
}
