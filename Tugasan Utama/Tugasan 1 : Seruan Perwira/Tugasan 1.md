# Tugasan I : Seruan Perwira
![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/ee0cf20e-43e3-48b1-baa4-a42b241099d3)

## Penyelesaian
Klik pada pautan Youtube tersebut, dan kita diberi satu file untuk dimuatnaik dan dianalisis.
![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/b4b3beb8-30fb-4c18-bf3f-55bbc6faab36)

Apabila selesai mengestrek file `.zip` tersebut, ia terdapat file `.eml` dengan nama file dalam bentuk morse code.

Seterusnya, buka file tersebut. Dengan penuh ketelitian, saya sedar bahawa ini adalah satu email yang diberikan dari Lee kepada Perwira dan terdapat beberapa morse code berada pada konten email tersebut.

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/1c7ae32d-7823-4c34-9af2-43586ced207e)

Dengan ini, kita tak dapat memahami sepenuhnya apa yang ada pada email tersebut, maka saya analisis lebih lanjut menggunakan [EML Analyzer](https://eml-analyzer.herokuapp.com/) dan mendapati bahawa terdapat satu lagi file `.zip` yang terkandung dalam email tersebut.

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/7466bdea-f3ee-4365-9164-fe263b53abaf)

Muatnaik file tersebut, ekstrak dengan password `3108`, dan cari bendera dalam file `.txt` tersebut.

![image](https://github.com/6E3372/3108CTF-Writeup/assets/129729880/26723560-71f7-4fd4-abe9-d928ca606afc)

## Bendera
3108{1E2A3C68CC5C0207886EDE403EEF230DC7C0FBD0}
