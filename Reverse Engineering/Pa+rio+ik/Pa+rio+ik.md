# Pa+rio+ik
![image](https://github.com/6D756E6972/3108CTF/assets/129729880/04e5740c-4420-4038-836e-8f5184a30715)

Diberi file `ELF 64-bit` bernama chall yang meminta kita memasukkan flag.

![image](https://github.com/6D756E6972/3108CTF/assets/129729880/90527fec-d9b6-4f59-8097-81a0bbcc5ed7)

![image](https://github.com/6D756E6972/3108CTF/assets/129729880/e30e222f-c2c2-4f88-945c-506076f0a528)

Analisa file tersebut menggunakan ghidra, kita mendapati bahawa bendera tersebut diencrypt di fungsi [encrypt](https://github.com/6D756E6972/3108CTF/blob/main/Reverse%20Engineering/Pa%2Brio%2Bik/encrypt) lalu dibandingkan dengan bendera sebenar yang telah diencrypt pada [main](https://github.com/6D756E6972/3108CTF/blob/main/Reverse%20Engineering/Pa%2Brio%2Bik/main) program.

Salah satu cara menyelesaikan tugasan ini adalah dengan dekod semula bendera sebenar.

Satu cara lagi adalah dengan bruteforce. Saya sedar bahawa apabila kita memasukkan format bendera yang bermula dengan `3108{`, program tersebut mengucapkan terima kasih, bermaksud bendera kita adalah betul

![image](https://github.com/6D756E6972/3108CTF/assets/129729880/27afe831-2421-4860-9a37-42a24188a6db)

Maka, saya bruteforce program tersebut secara manual menggunakan deskripsi yang diberikan pada soalan iaitu "Bangsa" sehingga mendapatkan bendera yang sebenar 😄

![image](https://github.com/6D756E6972/3108CTF/assets/129729880/2e28b24c-9ac1-4c78-8a29-dc0af1b4a0ee)

# Bendera
3108{B4NG5A_M3RD3K4}
