![image](https://github.com/6D756E6972/3108CTF/assets/129729880/cbe1ebd9-c1c8-4db7-b73d-8df24d941c4a)

URL: https://lemah.bahterasiber.my

Mari kita lihat apa yang ada pada website tersebut

![image](https://github.com/6D756E6972/3108CTF/assets/129729880/45935fa4-f9c0-4a24-afd3-49832c9f697c)

Wow ianya adalah "Login Page" yang biasa kita lihat.

robots.txt tidak memberikan apa-apa.

Mari kita lihat di sources, mungkin ada yang menarik di situ?

![image](https://github.com/6D756E6972/3108CTF/assets/129729880/84d3f1d6-d0fd-4afc-ab8a-b3f0acdfe00e)

Betul tekaan saya. Diberi auth.js adalah satu code javascript kepada login page tersebut.

Kita dapat lihat pada baris ke 5 yang mengandungi if statement dengan parameter u === "Jati" dan p === String.fromCharCode(51,49,48,56,123,112,52,115,115,119,48,114,100,95,108,51,109,52,104,33,125)

Baris ke 4 sudah mengatakan bahawa u adalah username dan p adalah password

Kita dapat lihat bahawa password adalah dalam decimal number, jadi tukarkan sahaja nombor tersebut kepada ascii.

![image](https://github.com/6D756E6972/3108CTF/assets/129729880/9d4cf6dc-76bb-4c4c-8c79-68d8d3708a20)

Oh, passwordnya adalah bendera kita! Terbaik 👍
