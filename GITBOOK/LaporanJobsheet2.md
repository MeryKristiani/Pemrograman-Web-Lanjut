# Jobsheet 2 - TypeScript

### Praktikum – Bagian 1: Instalasi Typescript

- Cara mengistal **typescript** dengan perintah berikut `npm install -g typescript`

![](image/Jobsheet2/1.png)


- Cek version dari typescript yang terinstall `tsc --version`

![](image/Jobsheet2/2.png)

- Membuat folder **ts-hello** menggunakan `mkdir ts-hello`
- Tulisakan file **main.ts** dengan code berikut:

```typescript
function log(message) {
    console.log(message);
}

let message = "Hello World";

log(message);
```

- Kemudian ketik perintah `tsc main.ts` untuk melakukan transpile file **typescript** kedalam **javascript**

- Cek apakah sudah terbuat file **main.js**, lakukan perintah `ls`

![](image/Jobsheet2/3.png)


- Buka file javascript, perhatikan apakah sama isi dari file **main.ts** dan `main.js`

![](image/Jobsheet2/4 main js.PNG)

- Lakukan execute pada file **main.js** dengan perintah `node main.js`

![](image/Jobsheet2/5.png)

### Praktikum – Bagian 2: Declaring Variables
- Buka file **main.ts**, kemudian tulis code berikut:
```typescript
function doSomething(){
    for (let i = 0; i < 5; i++){
        console.log(i);
    }
    console.log('Finally: ' + i);
}
doSomething();
```

- Remove file **main.js** hasil praktikum bagian 1 dengan perintah `rm main.js`

![](image/Jobsheet2/6.png)

- Lakukan transpile file **main.ts** dengan perintah yang ada pada praktikum bagian 1 langkah no 10

![](image/Jobsheet2/7.png)

- Execute file javascript dengan perintah `node main.ts`

![](image/Jobsheet2/8.png)

### Praktikum - Bagian 3: Types

- Buka file **main.ts**, kemudian tuliskan listing program berikut:

```typescript
let count =5;
count = 'a';
```
- Akan terdapat masalah pada file **main.ts**

- Lakukan proses transpile file **main.ts** dengan perintah `tsc main.ts` 

![](image/Jobsheet2/9.png)

- Hasil transpile file **main.ts**, menghasilkan file **main.js** seperti berikut:

```typescript
var count = 5;
count = 'a'; 
```

### Praktikum – Bagian 4: Type Assertion

- Buka file **main.ts**, kemudian tuliskan code berikut:

```typescript
let pesan;
pesan='abc';
let percobaan=(<string>pesan).endsWith('c');
let alternative=(pesan as string).endsWith('c');
```

### Praktikum – Bagian 5: Arrow Function

- Buka file **main.ts**, kemudian tuliskan code berikut:

```typescript
let log = function pesan(){
    console.log();
}

let doLog=(pesan)=>{
    console.log(pesan);
}

let doLog1=(pesan)=>console.log(pesan);
```

### Praktikum – Bagian 6: Interface

- Buka file **main.ts**, kemudian tuliskan code berikut:

```typescript
interface Point{
    x:number;
    y:number;
}

let drawPoint=(point:Point)=>{
    //...
}

drawPoint({
    x:1,
    y:3,
})
```

### Praktikum – Bagian 7: Classes

- Buka file **main.ts**, kemudian tuliskan code berikut:

```typescript
class Pointku{
    a:number;
    b:number;

    draw(){
        //...
    }

    getDistance(another:Pointku){
        //...
    }
}
```

### Praktikum – Bagian 8: Objects

- Buka file **main.ts**, kemudian tuliskan code berikut:

```typescript
class Pointku{
    a:number;
    b:number;

    draw(){
        console.log('X' + this.a + ',Y' + this.b);
    }

    getDistance(another:Pointku){
        //...
    }
}
```
