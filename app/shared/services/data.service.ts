import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import { Observable } from 'rxjs/Rx';
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators';
//import {catch} from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

import { IForm } from '../interfaces';

@Injectable()
export class DataService {
    
    extractData : any;
    private url: string = 'https://visaeagle.service-now.com/api/now/table/change_request?sysparm_display_value=true';
    
    constructor(private http: Http) { }


   
    updateRequest(form: IForm) { 
        
        console.log("service");
        console.log(form.opened_by);
        var json = JSON.stringify(form); 
        console.log(json);
        var params = json;
        var header = new Headers();
        header.append('Content-Type', 'application/json');  
        console.log("here");
        return this.http.post(this.url, params, {
          headers : header 
        })
        .pipe(map((response : Response) => {
            //console.log(`response!\n${response}`);
            console.log(`response!\n`);
            return response.json();
        }));
    }

    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
     
}


