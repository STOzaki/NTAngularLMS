import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Borrower } from './borrower';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-borrowers',
  templateUrl: './borrowers.component.html',
  styleUrls: ['./borrowers.component.css']
})
export class BorrowersComponent implements OnInit {

  constructor(
    private adminService: AdminService,
    private modalService: NgbModal) { }
  
    borrowers: any;
  
  editBorrower: any;

  private modalReference: NgbModalRef;

  errorMsg: string = '';

  private closeResult: any;

  newBorrower = new Borrower(0, '', '', '');

  ngOnInit() {
    this.getAllBorrowers();
  }

  getAllBorrowers() {
    console.log("attempting to get all borrowers");
    this.adminService.getAllBorrowers().subscribe(res => {
      console.log("Got all borrowers");
      this.borrowers = res;
    });
  }

  deleteBorrower(id) {
    this.adminService.deleteBorrower(id).subscribe(res => {
      console.log("Successfully deleted!");
      this.adminService.getAllBorrowers().subscribe(res => {
        console.log("updated Borrower Table Successfully!");
        this.borrowers = res;
      });
    });
  }

  createBorrower() {
    console.log("In the process of creating a new borrower");
    this.adminService.createBorrower(this.newBorrower).subscribe(res => {
      console.log("Successfully created a Borrower");
      this.adminService.getAllBorrowers().subscribe(res => {
        console.log("updated Borrower Table Successfully!");
        this.borrowers = res;
        // reset the borrower form
        this.newBorrower = new Borrower(0, '', '', '');
        // also close modal
        this.modalReference.close();
      });
    });
  }

  updateBorrower() {
    console.log("Updating " + this.editBorrower.name);
    this.adminService.updateBorrower(this.editBorrower).subscribe(res => {
      console.log("Successfully updated a borrower");
      this.adminService.getAllBorrowers().subscribe(res => {
        console.log("Refresh borrower table");
        this.borrowers = res;
        // also close modal
        this.modalReference.close();
      });
    });
  }
  
  resetBorrower() {
    this.newBorrower = new Borrower(0, '','','');
  }

  resetEditBorrower() {
    this.editBorrower.name='';
    this.editBorrower.address='';
    this.editBorrower.phone='';
  }

  open(content) {
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
    // this.close;
  }

  editModal(content, selectedBorrower) {
    console.log("starting edit modal");
    this.editBorrower = new Borrower(selectedBorrower.cardNo, selectedBorrower.name,
      selectedBorrower.address, selectedBorrower.phone);
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
}
