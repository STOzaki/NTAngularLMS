import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { PagerService } from '../../service/pager.service';
import { AdminService } from '../../service/admin.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.css']
})
export class PublishersComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private pagerService: PagerService,
    private adminService: AdminService,
    private modalService: NgbModal
  ) {
    this.publishers = [];
  }
  publishers: any;
  publishersSize = 1;
  private allItems: any[];
  pager: any = {};
  pagedItems: any[];
  private modalReference: NgbModalRef;
  errorMsg = '';
  private closeResult: any;

  publisher = {
    id: '',
    name: '',
    address: '',
    phone: ''
  };

  editPublisher = {
    id: '',
    name: '',
    address: '',
    phone: ''
  };

  ngOnInit() {
    this.getAllPublishers();
  }

  getAllPublishers() {
    this.adminService.getAllPublishers('').subscribe(res => {
      this.publishers = res;
      this.publishersSize = this.publishers.length;
      this.setPage(1);
    });
  }

  searchPublishers(event) {
    this.adminService.getAllPublishers(event.target.value).subscribe(res => {
      this.publishers = res;
      this.publishersSize = this.publishers.length;
      this.setPage(1);
    });
  }

  deletePublisher(id) {
    this.adminService.deletePublisher(id).subscribe(res => {
      this.publishers = this.publishers.filter(it => it.id !== id);
      this.publishersSize = this.publishers.length;
      this.setPage(1);
    });
  }

  createPublisher() {
    this.adminService
      .createPublisher(
        this.publisher.name,
        this.publisher.address,
        this.publisher.phone
      )
      .subscribe(res => {
        this.publishers.push(res);
        this.publishersSize = this.publishers.length;
        this.setPage(1);
      });
    this.modalReference.close();
  }

  updatePublisher() {
    this.adminService
      .updatePublisher(
        this.editPublisher.id,
        this.editPublisher.name,
        this.editPublisher.address,
        this.editPublisher.phone
      )
      .subscribe(res => {
        var index = this.publishers.findIndex(
          it => it.id === this.editPublisher.id
        );
        this.publishers[index].name = this.editPublisher.name;
        this.publishers[index].address = this.editPublisher.address;
        this.publishers[index].phone = this.editPublisher.phone;
        this.setPage(1);
      });
    this.modalReference.close();
  }
  setPage(page: number) {
    this.pager = this.pagerService.getPager(this.publishers.length, page);
    this.pagedItems = this.publishers.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
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
  edit(content, publisher) {
    this.editPublisher = {
      id: publisher.id,
      name: publisher.name,
      address: publisher.address,
      phone: publisher.phone
    };
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
