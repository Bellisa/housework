import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private statusUrl = '/api/status';

  constructor(private http: HttpClient) { }

  // Get the status
  getStatus() {
    return this.http.get<any>(this.statusUrl);
              // .toPromise()
              // .then(response:Response => response.json())
              // .catch(this.error);
  }

  // Error handling
  private error (error: any) {
    let message = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(message);
  }
}
