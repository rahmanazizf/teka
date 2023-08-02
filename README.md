# TeKa
Impelementasi logika dalam permainan tebak angka dengan antarmuka halaman web sederhana.
## Penjelasan Singkat
Program ini terdari dari dua bagian yaitu sisi klien dan sisi peladen (server). Peladen dibangun dengan menggunakan FastAPI (framework dalam bahasa Python), sementara sisi klien dibuat dengan HTML dan CSS untuk antarmuka pengguna dan JavaScript untuk membuat antarmuka menjadi interaktif. Selain itu JavaScript juga digunakan untuk bertukar data antara klien dan server.
## Cara penggunaan
Untuk menjalankan program ini, Anda perlu menginstall python versi terbaru terlebih dahulu.
Setelah python berhasil diinstall, buat environment dengan perintah
```
<path ke python> -m venv env
```
Tunggu hingga environment berhasil dibuat. Setelah itu aktifkan environment.
```
env\Script\activate
```
Install requirement pada environment yang sedang aktif.
```
pip install -r requirements.txt
```
Jalankan server dengan perintah berikut
```
uvicorn main:app --reload --port 8789
```
Masuk ke browser dan arahkan ke alamat: 
```
localhost:8789/home
```