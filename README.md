# Perpus Backend

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-4.x-black?logo=express)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14+-blue?logo=postgresql)
![Prisma](https://img.shields.io/badge/Prisma-Migration%20Only-2D3748?logo=prisma)
![License](https://img.shields.io/badge/License-MIT-yellow)

Perpus Backend adalah API sederhana untuk manajemen data buku (CRUD) menggunakan **Express.js** dan **PostgreSQL**.
Backend ditujukan untuk diintegrasikan dengan frontend pada repository terpisah.

---

## Teknologi Yang Digunakan

- Node.js
- Express.js
- PostgreSQL
- Prisma
- pg
- dotenv
- cors

---


## Cara Menjalankan

### 1. Clone Repository
```bash
git clone https://github.com/velharven/perpus-backend.git
cd perpus-backend
```

### 2. Install Dependencies
`npm install`

### 3. Buat file .env

### 4. Konfigurasi File .env
```bash
PORT=5000
DATABASE_URL="postgresql://username:password@localhost:5432/database?schema=public"
```
`PORT` = Port yang digunakan backend

`username` = Isi dengan username postgreSQL

`password` = Isi dengan password postgreSQL

`localhost:5432` = host dan port yang digunakan postgreSQL

`database` = isi dengan nama database

### 5. Migrasi Tabel
`npx prisma migrate dev`

### 6. Jalankan Server
`node src/index.js`

---

## Endpoint Buku

GET `http://localhost:5000/api/buku/`: Mengambil semua buku

GET `http://localhost:5000/api/buku/:id`: Mengambil buku berdasarkan id

POST `http://localhost:5000/api/buku/`: Membuat buku baru ke dalam tabel

PUT `http://localhost:5000/api/buku/`: Memperbarui buku lama

DELETE `http://localhost:5000/api/buku/`: Menghapus buku

