﻿import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { DialogResultDialog } from '../../common/dialog/dialog';
import { ServiceRequest } from '../../Models/serviceRequest.model';
import { ServiceRequestService } from '../../Services/serviceRequest.service';
import { StaticDataLoaderService } from './../../Services/staticDataLoader.service';

@Component({
    selector: 'service-request',
    templateUrl: 'serviceRequest.component.html'
})

export class ServiceRequestComponent implements OnInit{
    Button: string;
    statusList: any;
    requestType: any;
    serviceType: any;
    ErrorMessage: string;
    serviceRequestList: any;
    serviceRequest: ServiceRequest;

    constructor(public dialog: MdDialog,
                private serviceRequestService: ServiceRequestService,
                private staticDataLoaderService: StaticDataLoaderService) { };

    ngOnInit() {
        this.serviceRequest = {
            ServiceRequestId: null,
            SrNumber: null,
            ServiceType: '',
            RequestedBy: '',
            RequestType: '',
            Customer: {
                CustomerId: 0
            },
            CreatedDate: new Date(),
            StartDate: null,
            EndDate: null,
            Status: null,
            Location: ''
        };

        this.Button = 'Create';
        this.getAllServiceRequests();
        this.serviceType = this.staticDataLoaderService.serviceType;
        this.statusList = this.staticDataLoaderService.statusList;
        this.requestType = this.staticDataLoaderService.requestType;
    }

    getAllServiceRequests() {
        this.serviceRequestService
            .getAllServiceRequestDetails()
            .subscribe(response => {
                this.serviceRequestList = response;
            },
                error => this.ErrorMessage = <any>error,
                () => console.log('Get all Items complete'));
    }

    validateDate() {
        this.ErrorMessage = null;
        if (!this.serviceRequest.StartDate) {
            this.ErrorMessage = 'Please Select Start Date';
        }else if (this.serviceRequest.EndDate && (this.serviceRequest.EndDate <= this.serviceRequest.StartDate)) {
            this.ErrorMessage = 'End Date should be greater than Start Date';
        }
    }

    openDialog() {
        let dialogRef = this.dialog.open(DialogResultDialog);
        dialogRef.afterClosed()
                 .subscribe(result => {
            this.getAllServiceRequests();
        });
    }

    createServiceRequest() {
        this.serviceRequestService
            .addServiceRequest(this.serviceRequest)
            .subscribe(response => { this.openDialog(); },
                       error => this.ErrorMessage = <any>error,
                       () => console.log('Get all Items complete'));
    }

    updateServiceRequest() {
        this.serviceRequestService
            .updateServiceRequest(this.serviceRequest)
            .subscribe(response => { this.openDialog(); },
                       error => this.ErrorMessage = <any>error,
                       () => console.log('Get all Items complete'));
    }

    onUpdate(valid): void {
      this.ErrorMessage = null;
      if (this.Button === 'Create')  {
        this.createServiceRequest();
      } else {
        this.updateServiceRequest();
      }
    };

    private onSelectedRow(serviceRequest): void {
        console.log(serviceRequest);
        this.serviceRequest.SrNumber = serviceRequest.ServiceRequestId;
        this.serviceRequest.RequestedBy = serviceRequest.CreatedBy == null ? 0 : serviceRequest.CreatedBy.EmployeeId;
        this.serviceRequest.ServiceType = serviceRequest.ServiceType;
        this.serviceRequest.RequestType = serviceRequest.RequestType;
        this.serviceRequest.Customer.CustomerId = serviceRequest.Customer.CustomerId;
        this.serviceRequest.Location = serviceRequest.Location;
        this.serviceRequest.CreatedDate = new Date(serviceRequest.CreatedDate);
        this.serviceRequest.StartDate = new Date(serviceRequest.StartDate);
        this.serviceRequest.EndDate = new Date(serviceRequest.EndDate);
        this.serviceRequest.Status = serviceRequest.Status;
        this.Button = 'Update';
    }
}
