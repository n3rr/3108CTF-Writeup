# Tugasan II : Tali Barut
![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/dcc58903-f91d-403c-a1f6-963b8860ff89)

## Petunjuk
1. https://rumkin.com/tools/cipher/baconian/
2. Media sosial video pendek

## Penyelesaian
Tugasan ini adalah sambungan dari Tugasan 1.

Klu diberikan adalah "Media sosial video pendek".

Seperti yang kita tahu media sosial yang paling terkenal dengan video-video pendek adalah Tiktok.

Mencari username ITSLOKI adalah agak mustahil kerana terlalu banyak dan susah untuk diteka.

Jadi saya mencari akaun milik Bahtera Siber.

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/f769e39c-6c30-41b2-8fdd-743c48323448)

dan melihat followers akaun tersebut.

Tanpa sengaja, saya terjumpa satu akaun bernama p3tualang

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/e7aedc86-8d37-4290-a2fa-0ddc5827d799)

Tanpa ragu-ragu, saya pergi ke akaun tersebut dan mendapati satu link ke discord server ITSLOKI pada salah satu videonya

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/68d5ccf2-786c-45f2-8911-6110cd9dc8eb)

Okay, tapi kenapa p3tualang? Pada Tugasan 1, terdapat satu gambar yang diberi apabila kita ekstrak file `.eml` tersebut. Saya dapati beberapa nama terpapar pada gambar tersebut yang berkemungkinan ada hubungan dengan ITSLOKI, dan salah satunya adalah p3tualang

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/ea5c694c-b101-4628-88f7-94bf23b83f68)

Pergi ke discord server tersebut, pada channel ddos, social-enginnering dan ransomware saya mendapati bahawa terdapat mesej pelik yang dihantar oleh 0xm4mbang

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/f48c1fc8-dca7-4539-9e5d-dc846430824b)

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/68bf0c96-c507-47dd-9768-b35001f8ee89)
![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/5c17d93f-a669-4118-83f3-2f1e3812f094)
![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/4df44ad4-e9bb-4ad6-a86b-d2bb50dcfd41)

Selepas itu, saya terlihat satu lagi hint diberikan oleh 0xm4mbang

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/cb4310c9-d170-4796-aa56-4c1dfc6fdca8)

Wah, ini adalah [Baconian](https://rumkin.com/tools/cipher/baconian/)! 

Dekod text tersebut, dan rupanya itu adalah mesej dari Sambanthan

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/dc5a6c7e-9b2e-413e-b27d-f59710addd17)

## Bendera
3108{S3NT14SA_P3KA}
