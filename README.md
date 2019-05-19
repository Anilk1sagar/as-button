# AsButton

The AsButton library exported as angular modules. Required angular version 2+.

![alt text](https://github.com/Anilk1sagar/as-button/blob/master/src/assets/as-button.png)

## Installation

Using npm:

```shell
$ npm i as-button --save
```

## Example 

```javascript
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AsButtonModule } from 'as-button'; //<< Add this

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AsButtonModule //<< Add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```html
<!-- my-component.html -->
<h3>Link Button</h3>
<as-button 
    link="https://thedroid.io"
    value="Button With Link"
    bgColor="#3F51B5"
    color="#fff"
    shadow="2"
    fontSize="14px"
    borderRadius="10"
    padding="10,15"
></as-button>

<h3>Simple Button</h3>
<as-button 
    value="Simple Button"
    bgColor="#3F51B5"
    color="#fff"
    shadow="2"
    fontSize="14px"
    borderRadius="10"
    padding="10,15"
></as-button>
```