# Johan
![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/2474c9c5-c9a9-456a-96a5-2568b4b54389)

Kita diberikan file `.pcapng`

Buka file tersebut dan tapis paket `http` kerana Johan melayari sebuah laman sesawang

Terdapat beberapa paket ditunjukkan tetapi hanya satu yang menarik perhatian saya. Iaitu paket kedua terakhir dengan request header `POST`

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/18257b62-6563-453b-bec3-4b361a095457)

Right click pada paket tersebut dan ikuti `HTTP Stream`

Terdapat beberapa perkara menarik disini.

Disebabkan laman sesawang yang Johan layari tersebut adalah dalam HTTP, maka kita dapat lihat apa yang diisi oleh Johan pada ruangan credential.

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/620f58b5-b5f5-45b0-947a-7fdf15ac6d52)

Seperti yang kita tahu, nombor-nombor itu adalah dalam binary. Jadi, tukarkannya kepada bentuk yang kita boleh baca

Wah, kita berjaya mendapatkan satu pautan! Sedikit modifikasi dilakukan pada pautan tersebut dan mari kita lihat apa yang terkandung disitu

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/fa3d6bf3-08bb-4bba-95d1-f0ae6a450939)

Dengan sedikit pembacaan dan kesabaran, bendera tersebut menyorok pada gambar di bahagian bawah laman sesawang tersebut
![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/af6051b3-99aa-4ed5-bcc4-74174cbbf365)

# Bendera
3108{KU4L4_LUMPUR}
