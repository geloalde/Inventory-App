import React, {Component} from "react";
import AnchorTag from "../../components/Anchortag";
import Table from "../../components/table/Table";
import InputFormGroup from "../input/InputFormGroup";


class InvoiceList extends Component{
    constructor(props){
        super(props);
        this.columnList = ["ID", "Customer", "Invoice ID", "Total", "Paid", "Date", "Action"];
        this.tableData = [
            {"id": 1, "customer": "Akari Kito", "invoice_id": "201256", "total": "238.00", "is_paid": "Yes", "date": "20th July, 2022"},
            {"id": 2, "customer": "Evangeline Kimishima", "invoice_id": "201255", "total": "980.00", "is_paid": "Yes", "date": "8th July, 2022"},
            {"id": 3, "customer": "Kate Mirror", "invoice_id": "201254", "total": "305.00", "is_paid": "Yes", "date": "11th May, 2022"},
            {"id": 4, "customer": "Reiko Honda", "invoice_id": "201253", "total": "139.00", "is_paid": "No", "date": "1st April, 2022"},
        ]
    }


    render(){
        return (
            <div className="admin-content mx-auto">
                <div className="w-100 mb-5">
                    <AnchorTag link="/app/shop/invoice/create" className="btn btn-sm btn-warning float-right" itemValue="Create Invoice"></AnchorTag>
                    <h4>Invoice List</h4>
                </div>
                <div className="row mb-5">
                    <div className="col-12">
                        <p><b>Search Invoice</b></p>
                    </div>
                    <div className="col-2">
                        <InputFormGroup labelClassName="sr-only" inputClassName="form-control form-control-sm" placeholder="Customer Name"/>
                    </div>
                    <div className="col-2">
                        <InputFormGroup labelClassName="sr-only" inputClassName="form-control form-control-sm" placeholder="Invoice ID"/>
                    </div>
                    <div className="col-2">
                        <div className="form-group">
                            <input type="submit" className="btn btn-sm btn-success" value="Search"/>
                        </div>
                    </div>
                </div>
                <Table className="table table-striped" columnList={this.columnList} tableData={this.tableData} actionLinkPrefix=""></Table>
            </div>
        ) 
    }
}

export default InvoiceList;
