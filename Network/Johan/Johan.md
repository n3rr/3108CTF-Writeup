Johan telah melayari sebuah laman sesawang dan telah mendaftar masuk. Dapatkah anda mencari apakah perkataan yang tersembunyi disebalik informasi yang telah Johan masukkan?

Kita diberikan file .pcapng
Buka file tersebut dan terus filter paket http kerana Johan melayari sebuah laman sesawang

![image](https://github.com/6D756E6972/3108CTF/assets/129729880/50c7608d-8ca4-4a80-9a8f-0499d80e944f)
Terdapat beberapa paket ditunjukkan tetapi hanya satu yang menarik perhatian saya. Iaitu paket kedua terakhir dengan request header POST

Right click pada paket tersebut dan ikuti HTTP stream

![image](https://github.com/6D756E6972/3108CTF/assets/129729880/da214c74-0f27-4db3-bd9f-4a3f6af99424)
Terdapat beberapa perkara menarik disini.
Disebabkan laman sesawang yang Johan layari tersebut adalah dalam HTTP, maka kita dapat lihat apa yang diisi oleh Johan pada ruangan credential.

Seperti yang kita tahu, nombor-nombor itu adalah dalam binary. Jadi, tukarkannya kepada bentuk yang kita boleh baca

![image](https://github.com/6D756E6972/3108CTF/assets/129729880/0a194457-7943-42cf-9dd0-c07e8a450146)
Wah, kita berjaya mendapatkan satu pautan! Sedikit modifikasi dilakukan pada pautan tersebut dan mari kita lihat apa yang terkandung disitu

Dengan sedikit pembacaan dan kesabaran, bendera tersebut menyorok pada gambar di bahagian bawah laman sesawang tersebut
![image](https://github.com/6D756E6972/3108CTF/assets/129729880/82f27c4a-f1ac-4aa2-9053-fb1bd0a0a8ec)
