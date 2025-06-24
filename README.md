# Secure File Uploads with AWS S3, CloudFront & Postgres

A production-ready full-stack application that allows users to **securely upload files to AWS S3** via the **Express backend**, stores metadata in **PostgreSQL (RDS)**, and serves files globally via **CloudFront CDN** using **signed URLs** that expire in 2 days. The architecture ensures high performance, privacy, and scalability.

![Express](https://img.shields.io/badge/Express.js-Backend-black)
![AWS S3](https://img.shields.io/badge/AWS-S3-orange)
![AWS CloudFront](https://img.shields.io/badge/AWS-CloudFront-blue)
![PostgreSQL](https://img.shields.io/badge/Postgres-Database-green)
![Multer](https://img.shields.io/badge/Multer-Uploads-lightgrey)

---

## 📂 Folder Structure

---

## 📦 Features

✅ Upload files securely from client via backend  
✅ Store file metadata in PostgreSQL (AWS RDS)  
✅ Files stored in **private S3 buckets**  
✅ Serve files via **CloudFront signed URLs**  
✅ URLs expire in **2 days** (configurable)  
✅ Global fast access using **CloudFront CDN**  
✅ File uploads handled using **Multer**  
✅ IAM roles configured for S3 access (no public access)

---

## 🧑‍💻 Prerequisites

- Node.js (v18+ recommended)
- AWS Account (S3, CloudFront, RDS, IAM access)
- PostgreSQL DB (locally or on AWS RDS)
- Docker (optional, for DB/local testing)

---

## 🔧 Setup Instructions

### 1. Clone the Repository

cd backend
npm install
cp .env.example .env

# First, install OpenSSL (if not already installed)
brew install openssl

# Generate a 2048-bit private key for cloudfront url signing
openssl genrsa -out private_key.pem 2048

# Extract the corresponding public key for cloudfront url signing
openssl rsa -pubout -in private_key.pem -out public_key.pem
