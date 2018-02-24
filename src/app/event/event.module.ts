import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FormioResource, FormioResourceRoutes, FormioResourceConfig, FormioResourceService } from 'angular-formio/resource';

import { ParticipantModule } from './participant/participant.module';

const eventResourceRoutes: Routes = FormioResourceRoutes({});

eventResourceRoutes[2].children.push({
  path: 'participant',
  loadChildren: () => ParticipantModule
});

@NgModule({
  imports: [
    CommonModule,
    FormioResource,
    RouterModule.forChild(eventResourceRoutes)
  ],
  declarations: [],
  providers: [
    FormioResourceService,
    {provide: FormioResourceConfig, useValue: {
        name: 'event',
        form: 'event'
      }}
  ]
})
export class EventModule { }
