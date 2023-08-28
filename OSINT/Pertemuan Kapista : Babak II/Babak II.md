# Pertemuan Kapista : Babak II
![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/60c57054-d10f-4433-8ccc-d11bdbcc533d)

## Petunjuk
1. Ring.. Ring.. Ring.. Intel masuk!
2. Anda perlu gabung & dekod rahsia di X

## Penyelesaian
Tugasan ini ada kaitan dengan tugasan Babak I.

Pada Babak I, kita diberikan username `madah4arjuna` di media sosial X.
Sedikit penilitian dibuat di profile beliau dan saya mendapati terdapat dua post yang mempunyai nombor yang agak pelik.

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/e2b0bea7-a2ab-4488-818b-0f387735c721)
![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/3b1e9162-a36e-4f7e-8ae3-560083921a20)

Ambil nombor ini dan masukkan ke laman sesawang [dcode](https://www.dcode.fr/) dan kita dapat tahu bahawa nombor tersebut adalah dienkod menggunakan [Multi-tap Phone Code (SMS)](https://en.wikipedia.org/wiki/Multi-tap).

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/62df3d0f-40f7-4d0f-a059-60c2270bfdf2)

Lakukan sedikit modifikasi pada kedudukan dua nombor tersebut, kita dapat text yang boleh dibaca.

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/dcab9c3c-6025-461b-a391-f66b88956dff)

SABAH TANGO HASSAN TELEGRAM LANANG KUSRANI
Oh? Telegram?

Setelah mencari username tersebut, bendera sudah tertera pada ruangan chat telegram.

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/4d1e44a4-1418-47e6-847f-3ca184989080)

## Bendera
3108{Hassan_Tapa}
