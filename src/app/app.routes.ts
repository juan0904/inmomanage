import { provideRouter,  Routes } from '@angular/router';
import { ArrendatarioComponent } from './components/arrendatario/arrendatario.component';
import { MediopagoComponent } from './components/mediopago/mediopago.component';
import { PropiedadComponent } from './components/propiedad/propiedad.component';
import { PropietarioComponent } from './components/propietario/propietario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { provideAnimations } from '@angular/platform-browser/animations';  
import { PersonalComponent } from './components/personal/personal.component';


export const routes: Routes = [
    { path: '', redirectTo: '/arrendatario', pathMatch: 'full' }, 
    { path: 'arrendatario', component: ArrendatarioComponent },
    { path: 'mediopago', component: MediopagoComponent },
    { path: 'propiedades', component: PropiedadComponent },
    { path: 'propietarios', component: PropietarioComponent},
    { path: 'usuario', component: UsuarioComponent},
    { path: 'personal', component: PersonalComponent},
];



export const appConfig = {
    providers: [
      provideRouter(routes),
      provideAnimations()  
    ]
  };