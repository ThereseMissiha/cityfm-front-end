import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private appConfig: any;
  
  constructor(private http:HttpClient) { }

  loadAppConfig(){
    return this.http.get(`/assets/config-${environment.name}.json`)
            .subscribe(data => {
                this.appConfig = data;
              });
  }
  
  get apiBaseUrl(){
    if(!this.appConfig){
      return "";
    }
    return this.appConfig.apiBaseUrl;
  }
}
