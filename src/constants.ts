import { Product, Testimonial, Step } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Keychain Boneka Bear, 10cm',
    price: 45000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjAteDFT4Mrk-5o2hsSft4bKfJY7YKv6jq_idMx_dzjobqjCjsz4VQelD2mxTYJ2VXG1iJlCC2mSe842vHYjod8QoUI4AuVVsT7OisSfbx6ZBxfnXmYJXurmpkknIF7uTTl7OgHRePKHT0laY2sI5hyG2Z36HpIL32cWL-2I0q25P3t1s_v2CONDgM5Z3KzI_uxrjSaeIEJ0eWAgsGVvRIGqh9zG1sP2xPgH5Ou1euGCcYskHf8L2LZxof42236VjORzHGgcRfkw',
    size: '10cm',
    isHot: true,
  },
  {
    id: '2',
    name: 'Bunny Soft Charm, 12cm',
    price: 48000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBYNvwzQr1TwuR1LpgiSP9VM1nVUlgQ3dNtzS9UhIDPN9plPBMLMjfhv5FO_lfXcOzQ0LBBNLTdL8L48Tr--za8fu7p_aeif4yxZz8CRTc3ilGgLAdHduOmoGGRy-gKiIuysmKUh2-256kR8HNrDvyRNjCYncl7eCPJlno8pR7QpwIxFYDshyPUOlVL7zQ63hXoLrNdLEFSHy8mT_ktZ7wK_iwBcSj-je0fCyZk46jR-YfdlCRsYfi77Vnv8ZPvYTfHMfdfJF4_A',
    size: '12cm',
  },
  {
    id: '3',
    name: 'Cloudy Puff Charm, 8cm',
    price: 35000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuSS6K-MECq5xGUDp_S13CaoQp9HnOqO-gNP1WJ_dj3e2Drr130YoZ-GI64PYjCw34XXj6MD_B4c2-pYpESDUzcd9xGNT9YRmgx1LaXCWj5loh0eoBoB9QazQPym2kw7iZGJs7e9XipxxOl7Ot6O3iDVe9V7zixAI2YDqzbQz-TVBcecjbJZUTTAr-TuM2xy7M9eefwEhaFexTsi81e3coNwXMLARe104RokZojPQGFjIdTL5nJQvyNxnGN-ckYtFggu-nP8RigQ',
    size: '8cm',
  },
  {
    id: '4',
    name: 'Dino Squishy, 10cm',
    price: 52000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAox3U82vny0SO6R6hiM_OM4u6HpgcrKw17Gnq8tpjd-AP0EDh_vhtO9_yBF8sM2NU9sQq0jR4Ct5FG3NVbhldsoISRuRWDVBQ2PZxRKB0vFu6BMYCxbSNwgkRYBDolwGzfUGFoihFRCBWHwmHP1tju78pIj07110YFvbFK16WH0mWzQKgjUl02Kby8RtcUhXBRaRkme-aqUg9Zbb0jRyPpWcXDjwEMSSfJYP-H8DZ3d6eckybKXqIfz9oRdi93dTEWlMZrryNkyQ',
    size: '10cm',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Siska Amalia',
    role: 'Kolektor Anime',
    text: '"Gak nyangka detailnya bisa seakurat ini sama gambarku! Bahannya lembut banget, pengiriman juga cepet."',
    rating: 5,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBifqWar0B3XJ0SnWPjebGZdmvzeJbPbnpXu7ZTvpMttsPW3N7XvlEdeOUKaPqgJf9rVLb_9bLhz7y6so5SG0DqK7qvTNb0R6SvTuaM0wuIiMshkCSf5GUULswfgb_lrfbMpSC_Q0i2DRwMLA717ioo9j3gowVj43hq8X0d45ihb5InuSjHZc4WYlyBSb1h2XzUkP4zQc2Nt0vWteDY8rIvLXMbL6Z8thwxY5gbKDh2w2lYAq8BK5ekmAeFOEjYsP_AM327Q_NwfQ',
  },
  {
    id: '2',
    name: 'Budi Santoso',
    role: 'Mahasiswa',
    text: '"Buat kado temen, dia seneng banget! Dreamy Doll bener-bener recommended buat yang cari kado unik."',
    rating: 5,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrwh5snHlW7dV8llh4nPD48shOeysNcowMuWqAy07f4IZp3D92peZqfhANbO41I8iCboKE84V77Pw0CiZwksg7B_q26zrrWP6-8baC7Kvkj765KU42idoS644hslLtcaaEoJC_6oiygnvfZh5qBQDDdAO2wBqLt_MSMAtFkm6KjgcQknFfknKuroLmJnn1xDLEosqBD7T5TIdx0-n-YbDXevNrkN65gAn0OX7_JABDYMlCcyPpCbRq_dd9hfzqsIR9TkFsAPf77A',
  },
  {
    id: '3',
    name: 'Larasati Putri',
    role: 'Creative Designer',
    text: '"Adminnya ramah banget diajak konsultasi. Sempat revisi desain sedikit dan dilayani dengan baik. Puas!"',
    rating: 4,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWqwrfpYhRM3jgEe49Ibhu51jncqH2HyNN5M_Ig5O-qb0E1L6gi-K0gxX5pQRsl8YMFQRVHQy6sFrf_gWrqZnHq4RALNgjAct7Fkh9XRKVbI0QcMsecd62q7XYPIJZyGfvihlwXBDlqfLKZrP9cAyKuW4B7wgpln0dk9GkdSu6Mf5WxHXGLslAH1-ZIUCg8Z2iFIww7peytGoILN8wru2k15Y4AwuFLZNsXVs_TAEicxX7kEkwPG9_lBMq8-rP8qQAFZizZ89RSw',
  },
];

export const STEPS: Step[] = [
  {
    number: 1,
    title: 'Konsultasi Desain',
    description: 'Kirim desain atau referensi karakter yang kamu inginkan lewat form atau WhatsApp.',
  },
  {
    number: 2,
    title: 'Proses Produksi',
    description: 'Tim kami akan mulai menjahit bonekamu dengan detail terbaik menggunakan bahan premium.',
  },
  {
    number: 3,
    title: 'Pengiriman',
    description: 'Setelah QC selesai, boneka impianmu akan dikirim aman sampai ke depan pintumu.',
  },
];
