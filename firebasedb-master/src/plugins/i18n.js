import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        HOME: 'HOME',
        FEATURES: 'FEATURES',
        ABOUT: 'ABOUT',
        MARKETPLACE: 'OUR MARKETPLACE',
        CONTACT: 'CONTACT US',
        Immortalise: 'Immortalise Your Acheivements',
        Connect:'Connect With Your Fans',
        Digitalize:'Digitalize, Earn, and grow',
        Pro:'PRO ADVANTAGE',
        Watch:'Watch Video for More Details',
        Victory: 'Victory Immortalized'
    },
    'es': {
        HOME: 'Rumah',
        FEATURES: 'Fitur',
        ABOUT: 'Tentang',
        MARKETPLACE: 'pasar',
        CONTACT: 'Hubungi kami',
        Immortalise: 'Abadikan Prestasi Anda',
        Connect:'Terhubung dengan Penggemar Anda',
        Digitalize:'Digitalisasi, Hasilkan, dan kembangkan',
        Pro:'keuntungan pro',
        Watch:'Tonton Video untuk Lebih Jelasnya',
        Language:'Pilih bahasa',
        Victory: 'Kemenangan Diabadikan'
    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});

export default i18n;
