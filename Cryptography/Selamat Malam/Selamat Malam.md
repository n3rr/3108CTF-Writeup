# Selamat Malam
![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/9728120f-d453-41da-b791-c5ce6401a08a)

## Petunjuk
1. Dalam rangkap kataku, ada terselit sebuah mesej untukmu dariku, walau ada jarak antaranya.

## Penyelesaian
Diberi file `.txt`

Mari kita lihat

Apakah ini? Saya pun bingung pada awalnya. Lirik lagu kah?

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/ae49ef14-a55b-4804-9fbf-f899828dc0df)

Tanpa ragu-ragu saya masukkan text tersebut ke Recognize Cipher di website [dcode](https://www.dcode.fr/).

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/e4a16097-a84c-4562-b7f2-24c81f11d1f6)

Didapati text tersebut adalah [Atbash Cipher](https://www.geeksforgeeks.org/implementing-atbash-cipher/)

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/4c556b36-cc2a-4c3b-820e-28153c9f9049)

Apabila ditukarkan, akhirnya text tersebut dapat dibaca.

Dengan penilitian yang lebih mendalam, saya mendapati terdapat beberapa nombor dan huruf yang dibesarkan.

Rupa-rupanya bendera tersebut diletakkan di merata-rata tempat, diasingkan setiap huruf, tetapi tetap dalam format bendera.

Jadi sedikit script dibuat untuk memudahkan urusan.

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/5859bbea-70d2-4b9e-8968-264026d7f18c)

Maka, dapatlah bendera. Semoga Malaysia kekal aman dalam lindugan tuhan 😄👍

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/97fc7882-b3f3-451b-ba9c-8d40a0387810)

## Bendera
3108{MALAYSIAAMAN}
