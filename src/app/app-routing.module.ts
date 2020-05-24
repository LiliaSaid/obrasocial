import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent} from './components/header/header.component';
import { FooterComponent} from './components/footer/footer.component';
import { HomeComponent} from './components/home/home.component';
import { RegistroComponent} from './components/registro/registro.component';
import { GaleriaComponent} from './components/galeria/galeria.component';

const routes: Routes = [
  {path:'Punto 1', component: HomeComponent },
  {path:'Punto 2', component: RegistroComponent },
  {path:'Punto 3', component: GaleriaComponent },
  {path:'Header', component: HeaderComponent },
  {path:'Footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
