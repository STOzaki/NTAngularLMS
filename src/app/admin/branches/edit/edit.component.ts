import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class BranchEditComponent implements OnInit {
  constructor(private http: HttpClient, public activeModal: NgbActiveModal) {}

  @Input() branchId: number;
  @Input() branchName: string;
  @Input() branchAddress: string;

  ngOnInit() {}

  closeModal() {
    this.activeModal.close('Edit Branch modal closed');
  }

  applyBranchChanges() {
    if (!this.branchName || !this.branchAddress) {
      return false;
    }
    return this.http
      .put(
        environment.api_endpoint +
          environment.single_branch +
          '/' +
          this.branchId,
        JSON.stringify({ name: this.branchName, address: this.branchAddress }),
        { headers: { 'Content-Type': 'application/json' } }
      )
      .subscribe(res => this.activeModal.close(res), console.log);
  }
}
