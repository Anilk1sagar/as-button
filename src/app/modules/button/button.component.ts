import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'as-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

	/* Get Inputs And set defaults */
	@Input() link = null;
	@Input() value = 'Button';
	@Input() fontSize = '15px';
	@Input() color = '#fff';
	@Input() bgColor = '#111';
	@Input() padding = '10,15';
	@Input() shadow = 2;
	@Input() borderRadius = '3';

	@ViewChild('button') _button: ElementRef;
	@ViewChild('linkbutton') _linkButton: ElementRef;

	_mIsLinkButton = false;


	constructor() {

	}

	ngOnInit() {

		if (this.link) this._mIsLinkButton = true;
		
		// Create Button
		setTimeout(() => {
			this.createButton();
		});
		
	}

	createButton() {

		let btnStyle: any;
		if (this._mIsLinkButton) {
			btnStyle = this._linkButton.nativeElement.style;
		} else {
			btnStyle = this._button.nativeElement.style;
		}

		const buttonModel = {
			link: this.link,
			value: this.value,
			fontSize: this.fontSize,
			color: this.color,
			bgColor: this.bgColor,
			padding: this.padding,
			shadow: this.shadow,
			borderRadius: this.borderRadius
		};

		console.log('Button Model: ', buttonModel);

		
		// Set Button Padding
		const padding = buttonModel.padding.split(',');
		btnStyle.padding = `${padding[0]}px ${padding[1]}px`;
		

		// Set Button Font Size
		btnStyle.fontSize = buttonModel.fontSize;

		// Set Button Color
		btnStyle.color = buttonModel.color;

		// Set Button Background Color
		btnStyle.backgroundColor = buttonModel.bgColor;
		
		// Set Button Border Randius
		btnStyle.borderRadius = buttonModel.borderRadius+'px';

		// Set Button Shadow
		if(buttonModel.shadow == 1) {
			btnStyle.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)';
		} else if(buttonModel.shadow == 2) {
			btnStyle.boxShadow = '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)';
		} else if(buttonModel.shadow == 3) {
			btnStyle.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)';
		} else if(buttonModel.shadow == 4) {
			btnStyle.boxShadow = '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)';
		} else {
			btnStyle.boxShadow = '0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22)';
		}

		// Set transition
		btnStyle.transition = 'all 0.3s cubic-bezier(.25, .8, .25, 1)';
	}

}
