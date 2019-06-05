import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class AuthorDeleteComponent implements OnInit {
  constructor(private http: HttpClient, public activeModal: NgbActiveModal) {}

  @Input() currentAuthorId: number;
  @Input() currentAuthorName: string;

  ngOnInit() {}

  closeModal() {
    this.activeModal.close('Delete Author modal closed');
  }

  applyDelete() {
    return this.http
      .delete(
        environment.api_endpoint +
          environment.single_author +
          '/' +
          this.currentAuthorId
      )
      .subscribe(res => this.activeModal.close(res), err => console.log(err));
  }
}
