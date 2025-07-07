
# React Reducer Challenge - Hesap Makinesi

## 📌 Açıklama | Description

Bu proje, React ile geliştirilmiş basit bir hesap makinesidir.  
State yönetimi için `useReducer` hook'u kullanılmıştır.  
Uygulama, toplama, çıkarma, çarpma, bölme işlemleri yapabilir ve hafıza (memory) fonksiyonları içerir.

This project is a simple calculator built with React.  
It uses the `useReducer` hook for state management.  
The app supports addition, subtraction, multiplication, division operations and includes memory functions.

🔗 **Proje Bağlantısı | Project Link:** [GitHub Repo](https://github.com/bertan-arslan/calculator_app)

---

## 🚀 Özellikler | Features

✅ Sayısal giriş (0-9)  
✅ Dört işlem (+, -, *, /)  
✅ Eşittir (`=`) butonu ile hesaplama  
✅ Ekranı temizleme (CE)  
✅ Hafızaya ekleme (M+)  
✅ Hafızadan geri çağırma (MR)  
✅ Hafızayı temizleme (MC)  
✅ Güncel işlem ve hafıza durumu gösterimi

---

## 📂 Proje Yapısı | Project Structure

```
src/
 ├── components/
 │    ├── CalcButton.jsx
 │    └── TotalDisplay.jsx
 ├── store/
 │    ├── actions.jsx
 │    └── reducers.jsx
 ├── App.jsx
 └── index.js
```

---

## ⚙️ Kurulum | Installation

1️⃣ Depoyu klonlayın / Clone the repository  
```bash
git clone https://github.com/bertan-arslan/calculator_app
```

2️⃣ Bağımlılıkları yükleyin / Install dependencies  
```bash
npm install
```

3️⃣ Uygulamayı başlatın / Start the app  
```bash
npm start
```

---

## 🧩 Kullanım | Usage

- Rakam tuşlarına basarak sayı girin.
- İşlem tuşlarını (+, -, *, /) kullanarak işlem seçin.
- `=` ile sonucu hesaplayın.
- `M+` tuşu ile ekrandaki değeri hafızaya aktarın.
- `MR` tuşu ile hafızadaki değeri geri çağırın.
- `MC` tuşu ile hafızayı temizleyin.
- `CE` ile ekranı temizleyin.

---

## 🧑‍💻 Teknolojiler | Technologies

- React
- useReducer Hook
- Bootstrap (stil için)

---

## ✨ Katkı | Contribution

Her türlü geri bildirim veya katkı memnuniyetle karşılanır!  
Contributions and feedback are welcome!
