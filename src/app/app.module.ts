import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';

// Modules
import { AsButtonModule } from './modules/button/button.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AsButtonModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
