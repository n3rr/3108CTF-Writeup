# Lemah
![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/2602289a-ac94-4e69-a8a7-330a645838bd)

## URL
https://lemah.bahterasiber.my

## Penyelesaian
Mari kita lihat apa yang ada pada website tersebut

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/0d939ee3-8e27-42c7-858c-29d446d79544)

Wow ianya adalah "Login Page" yang biasa kita lihat.

`robots.txt` tidak memberikan apa-apa.

Mari kita lihat di sources, mungkin ada yang menarik di situ?

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/81435bfa-4858-4984-8084-93473d80f27e)

Betul tekaan saya. Diberi `auth.js` adalah satu code javascript kepada login page tersebut.

Kita dapat lihat pada baris ke 5 yang mengandungi if statement dengan parameter `u === "Jati" dan` `p === String.fromCharCode(51,49,48,56,123,112,52,115,115,119,48,114,100,95,108,51,109,52,104,33,125)`

Baris ke 4 sudah mengatakan bahawa `u` adalah username dan `p` adalah password

Kita dapat lihat bahawa password adalah dalam decimal number, jadi tukarkan sahaja nombor tersebut kepada ascii.

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/ada2137b-37f9-4914-910c-2678a0a2ba56)

Oh, passwordnya adalah bendera kita! Terbaik 👍

## Bendera
3108{p4ssw0rd_l3m4h!}
