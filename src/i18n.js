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
          // shoppingpage translations
          choose: "Choose Your Filters",
          filters: "Filters",
          price: "Price",
          brands: "Brands",
          genders: "Genders",
          shape: "Shape",
          material: "Material",
          size: "Size",
          rim: "Rim",
          feature: "Feature",
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

          // lensSelect translations
          prescription: "Prescription",
          prescriptionDetail:
            "Used for nearsightedness, farsightedness, astigmatism or presbyopia.",
          non: "Non-Prescription",
          nonDetail: "Used for fashion or eye protection",
          left: "Left eye",
          right: "Right eye",
          clear: "Clear",
          clearDetail:
            "(Traditional, transparent lenses perfect for everyday use)",
          blueLight: "Blue-light Blocking",
          blueDetail: "(Clear lens, for everyday use with digital devices)",
          driving: "Driving",
          drivingDetail: "(Safer driving day and night)",
          tint: "Tint",
          tintDetail:
            "(Permanently colored. Tint strength: light 20%, dark 80%)",
          photo: "Photochromic",
          photoDetail: "(Clear indoor, darken outside)",
          polarized: "Polarized",
          polarizedDetail: "(Reduce glare from shiny surfaces)",
          confirm: "Confirm",
          goBack: "Go Back",

          // CheckoutPage translations
          checkout: "Checkout",
          shippingAddress: "1.Shipping Address",
          email: "Email",
          fullName: "Full Name",
          country: "Country",
          address: "Address",
          city: "City",
          state: "State/Province",
          phone: "Phone",
          shippingMethod: "2.Shipping Method",
          post: "Post",
          express: "Express",
          proceed: "Proceed To Payment",
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
          // shoppingpage translations
          choose: "فیلترهاتون رو انتخاب کنید",

          filters: "فیلترها",
          price: "قیمت",
          brands: "برندها",
          genders: "جنسیت",
          shape: "شکل فِرِم",
          material: "جنس",
          size: "سایز",
          rim: "دور فِرِم",
          feature: "امکانات اضافه",
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
          // lensSelect translations
          prescription: "با نسخه",
          prescriptionDetail: "برای دوربینی، نزدیک بینی، آستیگمات و پیرچشمی",
          non: "بدون نسخه",
          nonDetail: "برای محافظت از چشم یا زیبایی",
          left: "چشم چپ",
          right: "چشم راست",
          clear: "عادی",
          clearDetail: "(لنز های عادی و بی رنگ برای استفاده ی روزمره)",
          blueLight: "فیلتر نور آبی",
          blueDetail: "(برای کار با وسایل دیجیتال)",
          driving: "رانندگی",
          drivingDetail: "(برای رانندگی امن تر در شب و روز)",
          tint: "رنگی",
          tintDetail: "(رنگ دلخواهتون رو انتخاب کنید)",
          photo: "فتوکرومیک",
          photoDetail: "(عادی در محیط داخل، تیره در محیط خارج)",
          polarized: "پلاریزه",
          polarizedDetail: "(کم کردن بازتاب نور از سطوح براق)",
          confirm: "ادامه",
          goBack: "مرحله ی قبل",
          // CheckoutPage translations
          checkout: "تکمیل خرید",
          shippingAddress: "آدرس ارسال",
          email: "ایمیل",
          fullName: "اسم کامل",
          country: "کشور",
          address: "آدرس",
          city: "شهر",
          state: "استان",
          phone: "شماره ی تلفن",
          shippingMethod: "روش ارسال",
          post: "پست پیشتاز",
          express: "پست",
          proceed: "ادامه به درگاه پرداخت",
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
