import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          // general translations
          sunGlasses: "Sunglasses",
          lenses: "Lenses",
          eyeGlasses: "Eyeglasses",
          stock: "stock",
          premiumBrands: "Premium Brands",
          blogs: "Blogs",
          // main page translations
          azim: "azim",
          eyewear: "eyewear",
          shopNow: "shop now",
          // blog page translations
          blogPageHeader: "latest on eyewaer",
          recentArticles: "recent articles",
        },
      },
      fa: {
        translation: {
          // general translations
          sunGlasses: "عینک آفتابی",
          lenses: "لنز",
          eyeGlasses: "عینک طبی",
          stock: "موجودی",
          premiumBrands: "برند",
          blogs: "وبلاگ",
          // main page translations
          azim: "عظیم",
          eyewear: "عینک",
          shopNow: "خرید",
          // blog page translations
          blogPageHeader: "تازه ترین های عینک",
          recentArticles: "اخرین مقاله ها",
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
