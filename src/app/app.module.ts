import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommandComponent } from './command/command.component';
import { Base64Component } from './base64/base64.component';
import { CommandBaseComponent } from './command/command-base/command-base.component';
import { CommandKafkaComponent } from './command/command-kafka/command-kafka.component';
import { CommandPulsarComponent } from './command/command-pulsar/command-pulsar.component';

@NgModule({
  declarations: [
    AppComponent,
    CommandComponent,
    Base64Component,
    CommandBaseComponent,
    CommandKafkaComponent,
    CommandPulsarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
