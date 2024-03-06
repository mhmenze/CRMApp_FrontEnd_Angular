//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v14.0.0.0 (NJsonSchema v11.0.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

export interface ICustomersClient {
    getCustomersWithPagination(customerId: number, pageNumber: number, pageSize: number): Observable<PaginatedListOfCustomerBriefDto>;
    createCustomer(command: CreateCustomerCommand): Observable<number>;
    updateCustomer(id: number, command: UpdateCustomerCommand): Observable<void>;
    deleteCustomer(id: number): Observable<void>;
}

@Injectable({
    providedIn: 'root'
})
export class CustomersClient implements ICustomersClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ?? "";
    }

    getCustomersWithPagination(customerId: number, pageNumber: number, pageSize: number): Observable<PaginatedListOfCustomerBriefDto> {
        let url_ = this.baseUrl + "/api/Customers?";
        if (customerId === undefined || customerId === null)
            throw new Error("The parameter 'customerId' must be defined and cannot be null.");
        else
            url_ += "CustomerId=" + encodeURIComponent("" + customerId) + "&";
        if (pageNumber === undefined || pageNumber === null)
            throw new Error("The parameter 'pageNumber' must be defined and cannot be null.");
        else
            url_ += "PageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize === undefined || pageSize === null)
            throw new Error("The parameter 'pageSize' must be defined and cannot be null.");
        else
            url_ += "PageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetCustomersWithPagination(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetCustomersWithPagination(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<PaginatedListOfCustomerBriefDto>;
                }
            } else
                return _observableThrow(response_) as any as Observable<PaginatedListOfCustomerBriefDto>;
        }));
    }

    protected processGetCustomersWithPagination(response: HttpResponseBase): Observable<PaginatedListOfCustomerBriefDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = PaginatedListOfCustomerBriefDto.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    createCustomer(command: CreateCustomerCommand): Observable<number> {
        let url_ = this.baseUrl + "/api/Customers";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processCreateCustomer(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processCreateCustomer(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<number>;
                }
            } else
                return _observableThrow(response_) as any as Observable<number>;
        }));
    }

    protected processCreateCustomer(response: HttpResponseBase): Observable<number> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    updateCustomer(id: number, command: UpdateCustomerCommand): Observable<void> {
        let url_ = this.baseUrl + "/api/Customers/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
            })
        };

        return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processUpdateCustomer(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processUpdateCustomer(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<void>;
                }
            } else
                return _observableThrow(response_) as any as Observable<void>;
        }));
    }

    protected processUpdateCustomer(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return _observableOf(null as any);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    deleteCustomer(id: number): Observable<void> {
        let url_ = this.baseUrl + "/api/Customers/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
            })
        };

        return this.http.request("delete", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processDeleteCustomer(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processDeleteCustomer(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<void>;
                }
            } else
                return _observableThrow(response_) as any as Observable<void>;
        }));
    }

    protected processDeleteCustomer(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return _observableOf(null as any);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }
}

export class PaginatedListOfCustomerBriefDto implements IPaginatedListOfCustomerBriefDto {
    items?: CustomerBriefDto[];
    pageNumber?: number;
    totalPages?: number;
    totalCount?: number;
    hasPreviousPage?: boolean;
    hasNextPage?: boolean;

    constructor(data?: IPaginatedListOfCustomerBriefDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["items"])) {
                this.items = [] as any;
                for (let item of _data["items"])
                    this.items!.push(CustomerBriefDto.fromJS(item));
            }
            this.pageNumber = _data["pageNumber"];
            this.totalPages = _data["totalPages"];
            this.totalCount = _data["totalCount"];
            this.hasPreviousPage = _data["hasPreviousPage"];
            this.hasNextPage = _data["hasNextPage"];
        }
    }

    static fromJS(data: any): PaginatedListOfCustomerBriefDto {
        data = typeof data === 'object' ? data : {};
        let result = new PaginatedListOfCustomerBriefDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        data["pageNumber"] = this.pageNumber;
        data["totalPages"] = this.totalPages;
        data["totalCount"] = this.totalCount;
        data["hasPreviousPage"] = this.hasPreviousPage;
        data["hasNextPage"] = this.hasNextPage;
        return data;
    }
}

export interface IPaginatedListOfCustomerBriefDto {
    items?: CustomerBriefDto[];
    pageNumber?: number;
    totalPages?: number;
    totalCount?: number;
    hasPreviousPage?: boolean;
    hasNextPage?: boolean;
}

export class CustomerBriefDto implements ICustomerBriefDto {
    id?: number;
    customerId?: number;
    title?: string | undefined;
    done?: boolean;

    constructor(data?: ICustomerBriefDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.customerId = _data["customerId"];
            this.title = _data["title"];
            this.done = _data["done"];
        }
    }

    static fromJS(data: any): CustomerBriefDto {
        data = typeof data === 'object' ? data : {};
        let result = new CustomerBriefDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["customerId"] = this.customerId;
        data["title"] = this.title;
        data["done"] = this.done;
        return data;
    }
}

export interface ICustomerBriefDto {
    id?: number;
    customerId?: number;
    title?: string | undefined;
    done?: boolean;
}

export class CreateCustomerCommand implements ICreateCustomerCommand {
    id?: number;
    firstName?: string | undefined;
    lastName?: string | undefined;
    email?: string | undefined;
    phoneNumber?: string | undefined;
    address?: string | undefined;
    priority?: CustomerType;

    constructor(data?: ICreateCustomerCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.firstName = _data["firstName"];
            this.lastName = _data["lastName"];
            this.email = _data["email"];
            this.phoneNumber = _data["phoneNumber"];
            this.address = _data["address"];
            this.priority = _data["priority"];
        }
    }

    static fromJS(data: any): CreateCustomerCommand {
        data = typeof data === 'object' ? data : {};
        let result = new CreateCustomerCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["firstName"] = this.firstName;
        data["lastName"] = this.lastName;
        data["email"] = this.email;
        data["phoneNumber"] = this.phoneNumber;
        data["address"] = this.address;
        data["priority"] = this.priority;
        return data;
    }
}

export interface ICreateCustomerCommand {
    id?: number;
    firstName?: string | undefined;
    lastName?: string | undefined;
    email?: string | undefined;
    phoneNumber?: string | undefined;
    address?: string | undefined;
    priority?: CustomerType;
}

export enum CustomerType {
    SalesLead = 0,
    Client = 1,
    FormerClient = 2,
    ColdCall = 3,
}

export class UpdateCustomerCommand implements IUpdateCustomerCommand {
    id?: number;
    firstName?: string | undefined;
    lastName?: string | undefined;
    email?: string | undefined;
    phoneNumber?: string | undefined;
    address?: string | undefined;
    priority?: CustomerType;
    done?: boolean;

    constructor(data?: IUpdateCustomerCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.firstName = _data["firstName"];
            this.lastName = _data["lastName"];
            this.email = _data["email"];
            this.phoneNumber = _data["phoneNumber"];
            this.address = _data["address"];
            this.priority = _data["priority"];
            this.done = _data["done"];
        }
    }

    static fromJS(data: any): UpdateCustomerCommand {
        data = typeof data === 'object' ? data : {};
        let result = new UpdateCustomerCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["firstName"] = this.firstName;
        data["lastName"] = this.lastName;
        data["email"] = this.email;
        data["phoneNumber"] = this.phoneNumber;
        data["address"] = this.address;
        data["priority"] = this.priority;
        data["done"] = this.done;
        return data;
    }
}

export interface IUpdateCustomerCommand {
    id?: number;
    firstName?: string | undefined;
    lastName?: string | undefined;
    email?: string | undefined;
    phoneNumber?: string | undefined;
    address?: string | undefined;
    priority?: CustomerType;
    done?: boolean;
}

export class SwaggerException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new SwaggerException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((event.target as any).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}