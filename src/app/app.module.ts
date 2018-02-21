import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule,
  MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule,
  MatSidenavModule, MatToolbarModule,
  MatListModule, MatGridListModule, MatCardModule, MatTabsModule, MatExpansionModule,
  MatButtonModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule,
  MatDialogModule, MatTooltipModule, MatSnackBarModule,
  MatTableModule, MatSortModule, MatPaginatorModule, MatPaginatorIntl } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NovaCampanhaComponent } from './nova-campanha/nova-campanha.component';
import { TodasCampanhasComponent } from './todas-campanhas/todas-campanhas.component';
import { ListaCampanhasComponent } from './lista-campanhas/lista-campanhas.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'nova-campanha', component: NovaCampanhaComponent },
  { path: 'lista-campanhas', component: ListaCampanhasComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NovaCampanhaComponent,
    ListaCampanhasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatAutocompleteModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule,
    MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule,
    MatSidenavModule, MatToolbarModule,
    MatListModule, MatGridListModule, MatCardModule, MatTabsModule, MatExpansionModule,
    MatButtonModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule, MatProgressBarModule,
    MatDialogModule, MatTooltipModule, MatSnackBarModule,
    MatTableModule, MatSortModule, MatPaginatorModule,
    MatMenuModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
