Lapangan Cybersecurity Malaysia telah dikejutkan dengan sebuah ancaman daripada kumpulan penggodam tidak dikenali. Pasukan Cybersecurity Malaysia telah menerima video ancaman tersebut dan menguar-uarkannya di media sosial youtube. Ancaman tersebut berbentuk rakaman video yang menyatakan serangan bakal dilancarkan mereka iaitu ITSLOKI. Ini adalah misi balas dendam mereka terhadap agensi keselamatan kerajaan kerana mematahkan usaha mereka bagi menawan sebuah kota rahsia di Malaysia 5 tahun lalu. Seorang pakar keselamatan siber Malaysia, Lee bertindak untuk mengintip kumpulan ITSLOKI dan menghantar satu mesej kepada perwira-perwira IT Malaysia untuk bekerjasama menghalang serangan ITSLOKI.

Lee: “Perwira! Kita tak boleh biarkan ITSLOKI lakukan serangan! Sebagai langkah mula, aku akan berikan satu FAIL UNTUK DIANALISIS. Cari mereka melalui analisis ni. Bantu kami!”

Petak Mula : https://youtu.be/DFBNEsKJW6I

Klik pada pautan Youtube tersebut, dan kita diberi satu file untuk dimuatnaik dan dianalisis.
![image](https://github.com/6D756E6972/3108CTF/assets/129729880/7f6913e1-09c1-493c-a70c-ee50690f5963)

Apabila selesai mengestrek file.zip tersebut, ia terdapat file .eml dengan nama file dalam bentuk morse code.
Seterusnya, buka file tersebut. Dengan penuh ketelitian, saya sedar bahawa ini adalah satu email yang diberikan dari Lee kepada Perwira dan terdapat beberapa morse code berada pada konten email tersebut.

![image](https://github.com/6D756E6972/3108CTF/assets/129729880/0a8b89b5-fce0-4431-bfb3-eb4a5b683ca4)

Dengan ini, kita tak dapat memahami sepenuhnya apa yang ada pada email tersebut, maka saya analisis lebih lanjut menggunakan EML Analyzer dan mendapati bahawa terdapat satu lagi file .zip yang terkandung dalam email tersebut.

![image](https://github.com/6D756E6972/3108CTF/assets/129729880/dc80182c-771c-48c8-8d8a-e01299ae481f)
Muatnaik file tersebut, ekstrak dengan password 3108, dan cari bendera dalam file .txt tersebut.

![image](https://github.com/6D756E6972/3108CTF/assets/129729880/c30ccf2c-25da-4664-9e70-106315ed908c)
