# Wantujus
![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/209ae668-b0f1-4a67-b127-35a46816ea84)

## URL
https://wantujus.bahterasiber.my

## Penyelesaian
![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/e84561c1-059b-4faf-b97f-e690a12ee577)

Wah, apakah ini? Permainan wantujus? hahaha

Mari kita lihat apa yang menarik disini

Terdapat `script.js` pada sources page ini.

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/70c9e821-6588-4d19-989e-f5df22ef54b7)

Untuk mendapatkan bendera, kita harus memastikan `winCount===10`.

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/a3f1ae84-ff86-4916-8943-d35fe0b0faae)

Jadi bagaimana?

Jika dilihat pada cebisan code ini, menang sekali dapat menambahkan `winCount` sebanyak `1`.

Code ini juga tidak mengatakan bahawa nilai winCount akan reset jika kita kalah. 

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/c444d8ac-f4ef-428f-b2a7-fa488b985e16)

Jadi tekanlah mana-mana butang yang disediakan hingga menang sebanyak `10` kali

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/4c79a23a-a42e-4bab-986c-466a24b7f5b7)

Mudah. Sekarang, dinyatakan "Tahniah anda menang ! Nikmati biskut anda."

Biskut didalam bahasa inggeris adalah cookies.

Jadi, apa salahnya kita menikmati biskut tengah malam ini dan menukarnya dari base64😋

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/6657ceed-2750-43ca-a333-381cab9e3994)
![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/ad0e5e93-4ae8-4ce5-b8d8-c405cb9837b1)

## Bendera
3108{biskut_marie}
