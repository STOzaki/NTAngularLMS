import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAllBorrowers() {
    return this.http.get(
      environment.api_endpoint +
      environment.admin_endpoint +
      environment.get_all_borrowers
    );
  }

  deleteBorrower(id) {
    return this.http.delete(
      environment.api_endpoint +
      environment.admin_endpoint +
      environment.borrower_api +
      id
    );
  }

  createBorrower(body) {
    return this.http.post(
      environment.api_endpoint +
      environment.admin_endpoint +
      environment.borrower_api,
      // Second parameter is an object you want to pass to the server,
      // it does not have to be JSON stringify
      {
        name:body.name,
        address:body.address,
        phone:body.address
      },
      {headers: {'Content-Type': 'application/json'}}
    );
  }

  updateBorrower(borrower) {
    return this.http.put(
      environment.api_endpoint +
      environment.admin_endpoint +
      environment.borrower_api +
      borrower.cardNo,
      borrower
    );
  }

  getAllLoans(cardNo) {
    return this.http.get(
      environment.api_endpoint +
      environment.admin_endpoint +
      '/' + 'admin' +
      environment.get_all_borrowers + '/' +
      cardNo +
      environment.get_all_loans
    );
  }

  updateLoan(bookId: number, branchId: number, cardNo: number, overrideDate) {
    return this.http.put(
      environment.api_endpoint +
      environment.admin_endpoint + '/loan' +
      environment.book_api + bookId +
      environment.branch_api + branchId +
      environment.borrower_api + cardNo + '/due',
      // + '/due?dueDate=' + overrideDate,
      // Second parameter is an object you want to pass to the server,
      // it does not have to be JSON stringify
      {
        dueDate:overrideDate
      }
    );
  }
}
