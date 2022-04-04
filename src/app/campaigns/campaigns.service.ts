import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICampaign } from './campaign.entity';

@Injectable({
  providedIn: 'root'
})
export class CampaignsService {

  constructor(private http: HttpClient) { }

  getCampaigns(): Observable<ICampaign[]> {
    return this.http.get<ICampaign[]>('api/campaigns');
  }

}
