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

![image](https://github.com/6D756E6972/3108CTF/assets/129729880/30419684-4cf6-4b8a-8d3b-3614f94cb545)

![image](https://github.com/6D756E6972/3108CTF/assets/129729880/74b7f294-6f04-4218-bab4-ebceee12f169)
![image](https://github.com/6D756E6972/3108CTF/assets/129729880/5186e122-66ce-42e9-9f1a-738ab3ecc840)
![image](https://github.com/6D756E6972/3108CTF/assets/129729880/a4d2c333-ad19-461e-8edf-89372a2fcacc)

Selepas itu, saya terlihat satu lagi hint diberikan oleh 0xm4mbang

![image](https://github.com/6D756E6972/3108CTF/assets/129729880/df8cfdc5-b556-43ac-a06a-37f9edef75a4)

Wah, ini adalah [Baconian](https://rumkin.com/tools/cipher/baconian/)! 

Dekod text tersebut, dan rupanya itu adalah mesej dari Sambanthan

![image](https://github.com/6D756E6972/3108CTF/assets/129729880/9936f0f6-f174-488c-ab2e-c4dda4580bc1)

## Bendera
3108{S3NT14SA_P3KA}
