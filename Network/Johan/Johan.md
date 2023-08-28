# Johan
![image](https://github.com/6D756E6972/3108CTF/assets/129729880/fefdde8a-298f-451e-acc0-f04cb0117be5)

Kita diberikan file `.pcapng`

Buka file tersebut dan tapis paket `http` kerana Johan melayari sebuah laman sesawang

Terdapat beberapa paket ditunjukkan tetapi hanya satu yang menarik perhatian saya. Iaitu paket kedua terakhir dengan request header `POST`

![image](https://github.com/6D756E6972/3108CTF/assets/129729880/50c7608d-8ca4-4a80-9a8f-0499d80e944f)

Right click pada paket tersebut dan ikuti `HTTP Stream`

Terdapat beberapa perkara menarik disini.

Disebabkan laman sesawang yang Johan layari tersebut adalah dalam HTTP, maka kita dapat lihat apa yang diisi oleh Johan pada ruangan credential.

![image](https://github.com/6D756E6972/3108CTF/assets/129729880/da214c74-0f27-4db3-bd9f-4a3f6af99424)

Seperti yang kita tahu, nombor-nombor itu adalah dalam binary. Jadi, tukarkannya kepada bentuk yang kita boleh baca

Wah, kita berjaya mendapatkan satu pautan! Sedikit modifikasi dilakukan pada pautan tersebut dan mari kita lihat apa yang terkandung disitu

![image](https://github.com/6D756E6972/3108CTF/assets/129729880/0a194457-7943-42cf-9dd0-c07e8a450146)

Dengan sedikit pembacaan dan kesabaran, bendera tersebut menyorok pada gambar di bahagian bawah laman sesawang tersebut
![image](https://github.com/6D756E6972/3108CTF/assets/129729880/82f27c4a-f1ac-4aa2-9053-fb1bd0a0a8ec)

# Bendera
3108{KU4L4_LUMPUR}
