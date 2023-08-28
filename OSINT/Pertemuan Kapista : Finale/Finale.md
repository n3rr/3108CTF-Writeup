# Pertemuan Kapista : Finale
![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/18276d63-bdd6-4c40-9d0f-016207f41635)

## Penyelesaian
Kita dikehendaki mencari lokasi pertemuan suspek.

Berdasarkan Babak II, kita telah dapat telegram Lanang Kusrani, disitu, ada dinyatakan akaun media sosial Instagram yang dimilik oleh Hassan Tapa.

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/f3efaf93-78c9-40bf-ad2e-18750ccbea07)

Pergi ke akaun beliau.

Terdapat 6 gambar yang berbeza.

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/4d232d8b-8018-4994-a565-c35d556edd47)

Perhati setiap satu gambar tersebut, saya sedar bahawa 5 daripada 6 gambar tersebut mempunyai tarikh posting yang sama, cuma gambar matahari terbenam tersebut mempunyai tarikh yang berbeza.

Saya teliti gambar tersebut dan akhirnya terjumpa sesuatu pada gambar tersebut.

Terdapat enkod base64 yang tertera pada bahagian bawah gambar iaitu `aHR0cHM6Ly9wYXN0ZWJpbi5jb20vd3ZheHhFMGI=`

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/f778bc1a-0dbf-41f2-85a5-c354daf3e3b5)

Dekod daripada base64 dan kita dapat satu pautan ke pastebin

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/88c84767-4033-4137-94dc-b0e6271135e6)

Pergi ke pautan tersebut dan masukkan password `31082023`, kerana pada salah satu posting Hassan Tapa tertera suatu tarikh yang mungkin adalah kata laluan untuk pastebin ini.

Dengan itu, kita tahu bahawa Hassan Tapa ingin berjumpa Ketua Pengganas Sulu di Pulau Mabul :desert_island:

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/5d367661-cf0d-4512-9b3f-27dc8cf5e1db)

## Bendera
3108{Pulau_Mabul}
