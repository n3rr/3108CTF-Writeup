import itertools

def str_xor(s, key):
    return ''.join(chr(ord(a) ^ ord(b)) for a, b in zip(s, itertools.cycle(key)))

def decrypt_flag(encrypted_filename, password):
    with open(encrypted_filename, "r") as f:
        flag_enc = f.read()

    flag = str_xor(flag_enc, password)
    return flag

encrypted_file = "flag.txt.enc"
split_password = ("1" + \
                  "ng4t" + \
                  "-" + \
                  "rukun" + \
                  "-" + \
                  "n3g4ra")
print(split_password)
user_password = input("Enter the password: ",)

if user_password == split_password:
    decrypted_flag = decrypt_flag(encrypted_file, user_password)
    print("Decrypted flag:", decrypted_flag)
else:
    print("Incorrect password")
