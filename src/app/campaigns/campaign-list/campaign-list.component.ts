import { Component, OnInit } from '@angular/core';
import { CampaignsService } from '../campaigns.service';
import { ICampaign } from '../campaign.entity';

@Component({
  selector: 'rpgm-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss']
})
export class CampaignListComponent implements OnInit {
  campaigns: ICampaign[] = [];

  constructor(private campaignsService: CampaignsService) { }

  ngOnInit(): void {
    this.campaignsService.getCampaigns().subscribe((campaigns: ICampaign[]) => {
      this.campaigns = campaigns;

      console.log(this.campaigns)
    });
  }


}
