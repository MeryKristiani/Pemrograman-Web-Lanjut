# 06. Template-Driven Forms

Membuat Form Bootstrap
---

* Membuat component bernama contact

![](img/06/1.bmp)

* Buka file **contact.component.html** kemudian menambahkan code berikut:

![](img/06/2.bmp)

* Buka file **app.component.html** kemudian menambahkan code berikut:

```html
<app-contact></app-contact>
<router-outlet></router-outlet>
```

* Hasilnya seperti berikut:

![](img/06/3.bmp)

Macam-macam Form
---

* Meng-generate 2 buah component dengan nama **reactive-form** dan **template-driven**

![](img/06/4.bmp)

* Buka file **reactive-form.component.html** dan membuat code seperti berikut:

![](img/06/5.bmp)

* Buka file **app.component.html** kemudian menambahkan code berikut:

```html
<app-reactive-form></app-reactive-form>
<router-outlet></router-outlet>
```

* Hasilnya seperti berikut:

![](img/06/6.bmp)

* Membuat interface dengan nama **mahasiswa.interface.ts** dan menambahkan code berikut

```typescript
export interface mahasiswa {
    nama_mhs:string;
    pendidikan:{
        nama_jurusan:string;
        nama_prodi:string;
    }
}
```

* Menambahkan ` ReactiveFormsModule ` dan ` FormsGroup ` pada **app.module.ts**

![](img/06/7.bmp)

* Buka file **reactive-forms.component.ts** kemudian menambahkan code seperti berikut:

![](img/06/8.bmp)

* Buka file **reactive-form.component.html** kemudian ubah codenya seperti berikut:

![](img/06/9.bmp)


* Hasilnya seperti berikut:

![](img/06/10.bmp)

* Buka file **app.module.ts** kemudian menambahkan code seperti berikut:

![](img/06/11.bmp)

* Buka file **template-driven.component.ts** kemudian menambahkan code seperti berikut:

![](img/06/12.bmp)

* Buka file **template-driven.component.ts** kemudian menambahkan method ` onSubmit() `:

```typescript
  onSubmit() {
    console.log("hasil inputan:");
    console.log(this.mahasiswa)
  }
```

* Buka file **template-driven.component.html** kemudian menambahkan code seperti berikut:

![](img/06/13.bmp)

* Buka file **app.component.html** kemudian ubah codenya seperti berikut:

```html
<app-template-driven></app-template-driven>
<router-outlet></router-outlet>
```

* Hasilnya seperti berikut:

![](img/06/14.bmp)

ngModel
---

* Buka file **contact.component.ts** kemudian menambahkan code seperti berikut:

![](img/06/15.bmp)

* Buka file **contact.component.html** kemudian ubah codenya seperti berikut:

![](img/06/16.bmp)

* Hasilnya seperti berikut:

![](img/06/17.bmp)

* Buka file **contact.component.html** kemudian menambahkan code seperti berikut:

![](img/06/18.bmp)

* Hasilnya seperti berikut:

![](img/06/19.bmp)

* Buka file **contact.component.ts** tambahkan code seperti berikut:

```typescript
  export class ContactComponent {
    log(x) {
      console.log(x);
    }
  }
```

* Buka file **contact.component.html** kemudian ubah codenya seperti berikut:

![](img/06/20.bmp)

* Hasilnya seperti berikut:

![](img/06/21.bmp)

Validasi
---

* Buka file **contact.component.html** kemudian menambahkan code berikut:

![](img/06/22.bmp)


* Hasilnya seperti berikut:

![](img/06/23.bmp)

* Buka file **contact.component.html** kemudian menambahkan code berikut:

```html
        <div 
        class = "alert alert-danger" 
        *ngIf = "firstName.touched &&!firstName.valid"
        >
          Nama harus diisi
        </div>
```

* Hasilnya seperti berikut, jika di klik maka akan muncul alert:

![](img/06/24.bmp)

Spesific validasi error
---

* Buka file **contact.component.html** kemudian menambahkan beberapa code berikut:

![](img/06/25.bmp)

* Hasilnya seperti berikut:

![](img/06/26.bmp)

* Hasil inspect element:

![](img/06/27.bmp)

Stylish Invalid input field
---

* Buka file **contact.component.css** kemudian tambahkan code berikut:

```css
.form-control.ng-touched.ng-invalid {
    border: 4px solid red;
}
```

* Hasilnya seperti berikut:

![](img/06/28.bmp)

ngForm
---

* Buka file **contact.component.ts** kemudian menambahkan sebuah method submit seperti berikut:

![](img/06/29.bmp)

* Buka file **contact.component.html** dan membuat variable template `ngForm` atau property `ngForm` dengan nama `(#form)`.

```html
    <form #form = "ngForm" (ngSubmit) = "submit(form)">
```

* Pada button rubah codenya menjadi seperti berikut

```html
      <button type = "submit" class = "btn btn-primary">
```

* Hasilnya seperti berikut:

![](img/06/30.bmp)

ngModelGroup
---

* Buka file **contact.component.html** kemudian menambahkan code seperti berikut:

```html
<div ngModelGroup = "contact" #contact = "ngModelGroup">
  <div *ngIf = "!contact.valid">contoh validasi pada ngModelGroup</div>
```

Disabling the submit button
---

* Buka file **contact.component.html** kemudian tambahkan code berikut pada tag button:

```html
      <button type = "submit" [disabled] = "!form.valid" class = "btn btn-primary">
```

* Hasilnya seperti berikut:

![](img/06/31.bmp)

* Jika nama diisi maka button akan enable:

![](img/06/32.bmp)

Bekerja dengan check box
---

* Buka file **contact.component.html** dan menambahkan code `check box` seperti pada berikut:

```html
      <div class = "checkbox">
        <label for = "">
          <input type = "checkbox" ngModel name = "isSubscribe">Subscribe jika ingin berlangganan
        </label>
      </div>
      <p>
```

* Hasilnya seperti berikut:

![](img/06/33.bmp)

Bekerja dengan drop-down list
---

* Buka file **contact.component.ts** kemudian menambahkan method `contactMethods`

```typescript
    contactMethods=[
      {id:1, name:'email'},
      {id:2, name:'phone'}
    ]
```

* Buka file **contact.component.html** kemudian menambahkan code seperti berikut:

![](img/06/34.bmp)

* Hasilnya seperti berikut:

![](img/06/35.bmp)

* Menggunakan `[ngValue]`

```html
          <option *ngFor = "let method of contactMethods" [ngValue] = "method">{{method.name}}</option>
```

* Hasilnya seperti berikut:

![](img/06/36.bmp)

* Menggunakan `multiple`

```html
        <select multiple ngModel name = "contactMethod" id = "contactMethod" class = "form-control">
```

* Hasilnya seperti berikut:

![](img/06/37.bmp)

Bekerja dengan radio button
---

* Buka file **contact.component.html** dan menambahkan code seperti berikut:

![](img/06/38.bmp)

* Hasilnya seperti berikut:

![](img/06/39.bmp)

* Tidak menggunakan `ngModel`

![](img/06/40.bmp)

* Menggunakan `ngFor`

![](img/06/41.bmp)

* Hasilnya seperti berikut:

![](img/06/42.bmp)