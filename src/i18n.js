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
          home: "Home",
          // main page translations
          azim: "Azim",
          eyewear: "Eyewear",
          shopNow: "Shop Now",
          find: "Find Your Best Fit For Glasses",
          specialOffer: "Special Offer",
          mostMen: "Most Popular Men Glasses",
          mostWomen: "Most Popular Women Glasses",
          showMe: "Show Me",
          newestSunglasses: "Our Newest Sunglasses",
          tailorMade: "Tailor Made For You",
          shopBy: "Shop By",
          frameShape: "Frame Shape",
          faceShape: "Face Shape",
          // blog page translations
          blogPageHeader: "latest on eyewaer",
          recentArticles: "recent articles",
          // admin page translations
          blogManagement: "Blog Management",
          salesManagement: "Sales Management",
          back: "Back",
          newBlog: "New Blog",
          // frame page translations
          easily: "Easily Find The Best Glasses By Frame Shape",
          pairFind: "Find The Best Pair For You",
          polygon: "Polygon",
          horn: "Horn",
          round: "Round",
          square: "Square",
          rectangle: "Rectangle",
          catEye: "Cat-Eye",
          aviator: "Aviator",
          browline: "Browline",
          // face page translations
          comfortabely: "Comfortabely Shop By Your Face Shape",
          explore:
            "Explore our glasses by face shape and find the right pair for you.",
          roundExplanation:
            "A round face is typically as wide as it's long without a prominent cheekbone.",
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
          home: "خونه",

          // main page translations
          azim: "عظیم",
          eyewear: "عینک",
          shopNow: "خرید",
          find: "بهترین عینک هارو اینجا پیدا کنید",
          specialOffer: "پیشنهاد ویژه",
          mostMen: "محبوب ترین عینک های مردانه",
          mostWomen: "محبوب ترین عینک های زنانه",
          showMe: "نشونم بده",
          newestSunglasses: "جدیدترین عینک های آفتابیمون",
          tailorMade: "ساخته شده برای شما",
          shopBy: " خرید بر اساس",
          frameShape: " شکل فِرِم",
          faceShape: " فُرم صورت",
          // blog page translations
          blogPageHeader: "تازه ترین های عینک",
          recentArticles: "اخرین مقاله ها",
          // admin page translations
          blogManagement: "مدیریت بلاگ",
          salesManagement: "مدیریت فروش",
          back: "برگرد",
          newBlog: "افزودن",

          // frame page translations
          easily: "به راحتی بهترین عینک رو بر اساس شکل فِرِم انتخاب کنید",
          pairFind: "عینک مورد نظرتون رو انتخاب کنید",
          polygon: "چند ضلعی",
          horn: "شاخ دار",
          round: "گِرد",
          square: "مربعی",
          rectangle: "مستطیلی",
          catEye: "گربه ای",
          aviator: "خلبانی",
          browline: "خط ابرو",
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
