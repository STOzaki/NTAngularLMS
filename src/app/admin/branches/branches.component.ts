import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewBranchComponent } from './new/new.component';
import { BranchEditComponent } from './edit/edit.component';
import { BranchDeleteComponent } from './delete/delete.component';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {
  constructor(private http: HttpClient, private modalService: NgbModal) {}

  branches: any;

  ngOnInit() {
    this.getAllBranches();
  }

  getAllBranches() {
    this.http
      .get(environment.api_endpoint + environment.get_all_branches)
      .subscribe(res => (this.branches = res));
  }

  openAddModal() {
    const modalRef = this.modalService.open(NewBranchComponent);
    modalRef.result.then(res => this.branches.push(res)).catch(console.log);
  }

  showEditForm(branch: { id: number; name: string; address: string }) {
    const modalRef = this.modalService.open(BranchEditComponent);
    modalRef.componentInstance.branchId = branch.id;
    modalRef.componentInstance.branchName = branch.name;
    modalRef.componentInstance.branchAddress = branch.address;
    modalRef.result
      .then(res => {
        branch.name = res.name;
        branch.address = res.address;
      })
      .catch(console.log);
  }

  confirmDelete(branch: { id: number; name: string; address: string }) {
    const modalRef = this.modalService.open(BranchDeleteComponent);
    modalRef.componentInstance.branchId = branch.id;
    modalRef.componentInstance.branchName = branch.name;
    modalRef.componentInstance.branchAddress = branch.address;
    modalRef.result.then(_ => this.getAllBranches()).catch(console.log);
  }
}
