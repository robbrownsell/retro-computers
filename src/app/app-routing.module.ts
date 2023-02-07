import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchResultsComponent} from "./components/search-results/search-results.component";
import {HomeComponent} from "./components/home/home.component";
import {AdminComponent} from "./admin/admin.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'search', component: SearchResultsComponent},
  {path: 'admin', component: AdminComponent},
  {path: '**/**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
