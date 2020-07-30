import { Component, OnInit } from '@angular/core';
import { GridOptions, IDatasource, IGetRowsParams, GridApi } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { AgGridServicesService } from '../ag-grid-services.service'
@Component({
  selector: 'app-grid-functionality',
  templateUrl: './grid-functionality.component.html',
  styleUrls: ['./grid-functionality.component.scss']
})
export class GridFunctionalityComponent implements OnInit {



  private gridOptions: Partial<GridOptions>;
  private gridApi: GridApi;
  private gridColumnApi;
  private columnDefs;
  private cacheOverflowSize;
  private maxConcurrentDatasourceRequests;
  private infiniteInitialRowCount;
  userSubscriber: Subscription;

  rowData: any;




  dataSource: IDatasource = {
    getRows: (params: IGetRowsParams) => {
      params.context = { "userinfo": "prcv", "role": "COM" };
      params.context.pageNo = Number(this.gridApi.paginationGetCurrentPage()) + 1;
      console.log("Component Params:" + JSON.stringify(params));
      this._agGridServicesService.getUsers(params).subscribe(val => {
        console.log("Inside component service");
        let data: any = val;
        params.successCallback(data["users"], data["totalRecords"])
      });
      // this.apiService().subscribe(val => {

      //   let data: any = val;
      //   params.successCallback(data, 101)
      // }
      // )
    }
  }
  constructor(private httpclient: HttpClient, private _agGridServicesService: AgGridServicesService) {
    this.columnDefs = [
      {
        headerName: "ID",
        field: "id",
        sortable: true
      },
      {
        headerName: "First Name",
        field: "first_name",
        sortable: true
      },
      {
        headerName: ":Last Name",
        field: "last_name",
        sortable: true
      },
      {
        headerName: "Email",
        field: "email",
        sortable: true
      },
      {
        headerName: "Gender",
        field: "gender",
        sortable: true
      },
      {
        headerName: "Company",
        field: "company",
        sortable: true
      }
    ];
    this.cacheOverflowSize = 2;
    this.maxConcurrentDatasourceRequests = 2;
    this.infiniteInitialRowCount = 2;

    this.gridOptions = {
      headerHeight: 45,
      rowHeight: 30,
      cacheBlockSize: 20,
      rowModelType: 'infinite',
      paginationPageSize: 20
    };
  }

  ngOnInit() {
  }
  /**
     * This is where you call your server,
     * you can pass your start page and end page
     */
  apiService() {
    return this.httpclient.get('http://localhost:3000/userDetails');//https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json')
  }
  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
    this.gridApi.setDatasource(this.dataSource)
  }

}
