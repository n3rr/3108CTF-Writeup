# Pa+rio+ik
![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/c0a1fd40-6f1d-4723-8e60-fd25442864bb)

## Petunjuk
1. Sebahagian sahaja sudah cukup untuk buatkan anda sedar

## Penyelesaian
Diberi file `ELF 64-bit` bernama chall yang meminta kita memasukkan flag.

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/9102c85d-74a0-4074-97d7-b9291bd6b563)

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/f13509b2-e71d-43a6-9662-7cb14d5dee59)

Analisa file tersebut menggunakan ghidra, kita mendapati bahawa bendera tersebut diencrypt di fungsi [encrypt](https://github.com/6D756E6972/3108CTF/blob/main/Reverse%20Engineering/Pa%2Brio%2Bik/encrypt) lalu dibandingkan dengan bendera sebenar yang telah diencrypt pada [main](https://github.com/6D756E6972/3108CTF/blob/main/Reverse%20Engineering/Pa%2Brio%2Bik/main) program.

Salah satu cara menyelesaikan tugasan ini adalah dengan dekod semula bendera sebenar.

Satu cara lagi adalah dengan bruteforce. Saya sedar bahawa apabila kita memasukkan format bendera yang bermula dengan `3108{`, program tersebut mengucapkan terima kasih, bermaksud bendera kita adalah betul

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/11b0b57c-5a3c-4ac8-9ebb-b7a2f373819c)

Maka, saya bruteforce program tersebut secara manual menggunakan deskripsi yang diberikan pada soalan iaitu "Bangsa" sehingga mendapatkan bendera yang sebenar 😄

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/b33480e8-19e7-4086-a967-c843b9d12e34)

## Bendera
3108{B4NG5A_M3RD3K4}
