import { EstabelecimentoService } from './estabelecimento/estabelecimento.service'
import { ProfissionalService } from './profissional/profissional.service'
import { ROUTES } from './app.routes'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { ProfissionalComponent } from './profissional/profissional.component'
import { EstabelecimentoComponent } from './estabelecimento/estabelecimento.component'
import { HomeComponent } from './home/home.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { AppBootstrapModule } from './app-bootstrap.module'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ProfissionalComponent,
    EstabelecimentoComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    AppBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ProfissionalService, EstabelecimentoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
