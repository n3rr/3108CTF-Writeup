text = """
masih dalam ingatanku, wajah tangismu saat ku berkata
aku takkan p3rnah memb1arkanmu pergi
saat sem0a bayangan 8ampir memudarkan sinarmu
kau kata kepadaku, jangan tinggalkanku sendirian di sini
namun malam ini, semuanya telah binasa dan pergi
tutuplah Matamu
sang tejA maLam akan tiba
kau akan baik-baik sajA
tidak ada Yang bakal menyakitimu Sekarang
saat datangnya kelemayar fajar
kau dan aku akan selamat
jangan kau beranI melihat keluar jendelAmu
sayAng, semuanya sedang Marak terbakar
perang di luar gapurA akaN terus bergolak
peganglah lagu pengantar lena ini
kendatipun saat senandung ini lenyap
pejamkan matamu
sang teja malam akan tiba
kau akan baik-baik saja
tidak ada yang bakal menyakitimu sekarang
saat terbitnya rona fajar
kita pasti akan sejahtera
"""

flag1 = ''.join(filter(str.isdigit, text))
flag2 = ''.join(filter(str.isupper, text))

print("Flag:", flag1 + '{' + flag2 + '}')
