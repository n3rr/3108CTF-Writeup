# Pantun Pantul
![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/fc776cab-e2c4-4fbf-ab2f-35ff9905d8ff)

## URL
https://pantun.bahterasiber.my/

## Penyelesaian
Akses pautan tersebut.

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/6146393f-ad75-4032-bca4-ee3cfa6a9eb7)

Web tersebut akan memantulkan kembali apa yang kita isi didalam ruangan tersebut.

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/ad12c959-7928-43bf-8e57-62a5a361741c)

Jadi saya cuba lengkapkan pantun itu.

Oh pantun suda betul! Tetapi tidak dikeluarkan bendera yang dimahukan.
![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/2fce84e9-301b-4526-bb31-dbf332354da7)

Mari lihat apa yang ada di inspect element.

Terdapat fungsi `bendera()` disini 

Seperti yang saya lihat, fungsi ini tidak boleh terpanggil dengan sendirinya.

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/165417ac-e1c8-469f-8734-e4f89dd697d9)

Jadi, saya panggil fungsi `bendera()` melalui console dan bendera pun tertera pada skrin.

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/b340cce4-d6ed-46a4-ac4b-69c41826969b)

## Bendera
3108{pantun1337kerat}
