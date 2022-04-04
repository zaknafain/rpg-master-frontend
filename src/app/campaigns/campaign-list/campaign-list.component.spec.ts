import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MaterialModule } from '../../material/material.module';
import { CampaignsService } from '../campaigns.service';

import { CampaignListComponent } from './campaign-list.component';

describe('ListComponent', () => {
  let component: CampaignListComponent;
  let fixture: ComponentFixture<CampaignListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MaterialModule,
      ],
      declarations: [
        CampaignListComponent,
      ],
      providers: [
        { provide: CampaignsService, useValue: { getCampaigns: () => { return of([]) }} },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
