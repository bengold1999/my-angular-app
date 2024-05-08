import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component'
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component'
import { ContactPageComponent } from './pages/contact-page/contact-page.component'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component'
import { contactResolver } from './services/contact-resolver'
import { SignupComponent } from './pages/signup/signup.component'
import { noAuthGuard } from './guards/no-auth.guard'
import { authGuard } from './guards/auth.guard'

const routes: Routes = [
    {
        path: 'contacts', component: ContactPageComponent,
        canActivate: [authGuard]
    },
    {
        path: 'contacts/edit',
        component: ContactEditPageComponent,
        canActivate: [authGuard]
    },
    {
        path: 'contacts/edit/:id',
        component: ContactEditPageComponent,
        resolve: { contact: contactResolver },
        canActivate: [authGuard]
    },
    {
        path: 'contacts/:id',
        component: ContactDetailsComponent,
        resolve: { contact: contactResolver },
        canActivate: [authGuard]
    },

    {
        path: 'statistic',
        component: StatisticPageComponent,
        canActivate: [authGuard],
    },
    {
        path: 'signup',
        component: SignupComponent,
        canActivate: [noAuthGuard],
        // data: { isNoAuth: true }
    },

    {
        path: '',
        component: HomePageComponent,
        canActivate: [authGuard]
    },
]


@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
