# Mencari Rahsia Si Dia
![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/3ef24cee-f00b-43f9-8f54-1e92ebf37316)

## Penyelesaian
Diberi file `.txt` yang mengandungi mesej yang agak berulang dan menyakitkan mata 😆

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/e458b3ad-ae24-4432-9ee0-5415f75c04b7)

Saya terfikir, adakah terdapat satu pattern yang membentuk bendera didalam text ini? Tidak.

Saya lihat semula nama file yang diberi iaitu `penyepaman.txt`. Oh ini adalah spam.

Jadi saya terus ke [Spam Decoder](https://www.spammimic.com/decode.cgi
), masukkan text tersebut, voilà, bendera terhasil

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/3558574a-af29-417c-a2b1-f1089b1cb60a)

## Bendera
3108{sebuah_erti_pengorbanan}
