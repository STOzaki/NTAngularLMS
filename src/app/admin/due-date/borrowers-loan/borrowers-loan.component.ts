import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-borrowers-loan',
  templateUrl: './borrowers-loan.component.html',
  styleUrls: ['./borrowers-loan.component.css']
})
export class BorrowersLoanComponent implements OnInit {
  constructor(private adminService: AdminService) {}

  borrowers: any;

  ngOnInit() {
    this.getAllBorrowersWithLoans();
  }

  getAllBorrowersWithLoans() {
    // console.log('attempting to get all borrowers');
    this.adminService.getAllBorrowers().subscribe(
      res => {
        // console.log('Got all borrowers');
        this.borrowers = res;
      },
      error => console.log(error)
    );
  }
}
