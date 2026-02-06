import { useState, useRef, useEffect } from 'react';
import { MainLayout } from '../components/MainLayout';
import { UnifiedAssistant } from '../components/UnifiedAssistant';
import { CreateContent } from '../components/CreateContent';
import { ProductSheet } from '../components/ProductSheet';
import { SearchBar } from '../components/SearchBar';
import { CommentSheet, VideoComment } from '../components/CommentSheet';
import { ShareSheet } from '../components/ShareSheet';
import { ShieldCheck, Heart, MessageCircle, Share2, Bookmark, ShoppingBag } from 'lucide-react';

interface CreatorVideo {
  creatorId: string;
  creatorName: string;
  creatorAvatar: string;
  videoUrl: string;
  thumbnail: string;
  likes: number;
  comments: number;
  shares: number;
  isVerified: boolean;
  caption: string;
  hashtags: string[];
  timestamp: string;
  videoComments: VideoComment[];
}

interface Product {
  id: number;
  productName: string;
  price: string;
  priceNumber: number;
  trustScore: number;
  badges: string[];
  description: string;
  features: { key: string; value: string }[];
  offers: { seller: string; price: string; trustScore: number }[];
  creatorVideos: CreatorVideo[];
}

export function Home() {
  const [showSearch, setShowSearch] = useState(false);
  const [showAssistant, setShowAssistant] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [currentCreatorIndices, setCurrentCreatorIndices] = useState<{ [key: number]: number }>({});
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const verticalScrollRef = useRef<HTMLDivElement>(null);
  const horizontalScrollRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const products: Product[] = [
    // ── Product 1: Action Figures ──
    {
      id: 1,
      productName: 'اکشن فیگور انیمه',
      price: 'From $29.99',
      priceNumber: 29.99,
      trustScore: 4.7,
      badges: ['Original', 'Imported'],
      description: 'Premium collectible anime action figures, high quality PVC material',
      features: [
        { key: 'Material', value: 'PVC' },
        { key: 'Origin', value: 'Imported' },
        { key: 'Type', value: 'Collectible' },
        { key: 'Shipping', value: '3-5 days' },
      ],
      offers: [
        { seller: 'AnimeBaz Store', price: '$29.99', trustScore: 95 },
        { seller: 'FunkoLand', price: '$34.99', trustScore: 97 },
      ],
      creatorVideos: [
        {
          creatorId: 'af1',
          creatorName: '@animebaz_official',
          creatorAvatar: 'https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?w=100&h=100&fit=crop',
          videoUrl: 'https://res.cloudinary.com/dyolzaxiy/video/upload/f_auto,q_auto/v1770404430/actionfigur_1_yfeadi.mp4',
          thumbnail: '',
          likes: 500,
          comments: 9,
          shares: 45,
          isVerified: true,
          caption: 'اکشن‌فیگورهای اورجینال وان‌پیس ✅ وارداتی ✅ ساخت چین ✅ متریال باکیفیت PVC جزئیات بالا، مناسب کلکسیونرها و طرفدارای واقعی وان‌پیس 🏴‍☠️',
          hashtags: ['#اکشن_فیگور', '#وان_پیس', '#انیمه'],
          timestamp: '1 month ago',
          videoComments: [
            { username: '@saeed._.mollaalii', text: 'با این صدای خفن چرا دوبلر نمیشی خیلی استعداد داری' },
            { username: '@amir_rayko', text: 'خدا یه شاهکار خلق کرده ☠️♥️' },
            { username: '@miliofffffffffff051', text: 'فال میگیری داستان چیه فال منم بگیر 😂' },
            { username: '@saeid.jabar61', text: 'کی میکنه شمارو' },
            { username: '@farhad_rasa3060', text: 'واقعاً عجب صدایی داری دختر 😍😍😍' },
            { username: '@o.mid_f1f2', text: 'حاجی پرام چقدر صداش دل نشین❤️❤️' },
            { username: '@mohamadamin.tani', text: 'عع بروک 😂😍' },
            { username: '@amin_tcr', text: 'بروک بود' },
          ],
        },
        {
          creatorId: 'af2',
          creatorName: '@anime_collector',
          creatorAvatar: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=100&h=100&fit=crop',
          videoUrl: 'https://res.cloudinary.com/dyolzaxiy/video/upload/f_auto,q_auto/v1770405239/actionfigur_2_hgcnjp.mp4',
          thumbnail: '',
          likes: 300,
          comments: 10,
          shares: 28,
          isVerified: false,
          caption: 'انباکس داریم دوباره😍😍 استعلام قیمت دایرکت',
          hashtags: ['#انباکسینگ', '#اکشن_فیگور', '#انیمه'],
          timestamp: '1 month ago',
          videoComments: [
            { username: '@142alitanha', text: 'بزرگوار تست صدا دادی شما؟' },
            { username: '@saeedd_khandan', text: '🍼' },
            { username: '@alphaplus_ir', text: 'اصلا بگو‌ ایرباس به ما چه 😂' },
            { username: '@navid_2973', text: 'شما چقدر صداتون چقدر کفنه' },
            { username: '@gallery_stone_shajar', text: 'دوبله کنید صدا عالی .❤️چقدرزیبایید😍' },
            { username: '@sajaddara0088', text: 'صدات ❤️🔥' },
            { username: '@m_1999_1377', text: 'خودتم شبیه انیمه ای😂❤️' },
            { username: '@sina_abutorabi', text: 'فالوو /فقط بخاطر صدا و چشمات🤦🏻‍♂️🥺🤗🩵' },
          ],
        },
        {
          creatorId: 'af3',
          creatorName: '@figure_land',
          creatorAvatar: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=100&h=100&fit=crop',
          videoUrl: 'https://res.cloudinary.com/dyolzaxiy/video/upload/f_auto,q_auto/v1770404481/actionfigur_3_e3aiyt.mp4',
          thumbnail: '',
          likes: 1009,
          comments: 54,
          shares: 120,
          isVerified: true,
          caption: 'میخواستم پاکش کنم گفتم ویدیو خراب شد ولی نگاه کردیم برگامون ریخت 🤣🤣 افتادن فیگور با باز کردن در مغازه بدون هماهنگی بود!',
          hashtags: ['#اکشن_فیگور', '#خنده_دار', '#انباکسینگ'],
          timestamp: '1 month ago',
          videoComments: [
            { username: '@aliasghar_eyvazi', text: 'قیمت' },
            { username: '@iwueshhd', text: 'رفیقمون زیمپقیه' },
            { username: '@tiktok28855', text: 'فقط صدا' },
            { username: '@the_viliam_gaemr', text: 'وای صدات خیلی گاده❤️❤️🔥' },
            { username: '@toyisland4', text: '🔥🔥🔥🔥' },
            { username: '@sa33d.pi6', text: 'لطفا کارت بانکی خود را وارد کنید 😂' },
            { username: '@ma.mali1191', text: 'قیمت' },
            { username: '@jalalsdaghty', text: 'فوتبالیستها هم انیمه حساب میشه ؟!؟!' },
          ],
        },
        {
          creatorId: 'af4',
          creatorName: '@funkoland_official',
          creatorAvatar: 'https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=100&h=100&fit=crop',
          videoUrl: 'https://res.cloudinary.com/dyolzaxiy/video/upload/f_auto,q_auto/v1770404506/actionfigur_4_oxsn7v.mp4',
          thumbnail: '',
          likes: 21801,
          comments: 867,
          shares: 2340,
          isVerified: true,
          caption: 'برترین اکشن فیگور والتر وایت / هایزنبرگ از سریال برکینگ بد 🧪 جزییات صورت و کیفیت تولید در بالاترین حد ممکن، برند بلک ایت',
          hashtags: ['#برکینگ_بد', '#هایزنبرگ', '#اکشن_فیگور'],
          timestamp: '1 month ago',
          videoComments: [
            { username: '@im_maxdi', text: 'قیمت' },
            { username: '@mahsalotfian90', text: 'قیمت؟' },
            { username: '@free_tataloo2', text: 'قیمت' },
            { username: '@arshia._.keramati', text: 'سلام قیمت؟' },
            { username: '@mohamademranarbabi', text: 'سلام قیمت' },
            { username: '@i.masiiihp', text: 'قیمت' },
          ],
        },
      ],
    },

    // ── Product 2: Calligraphy Art ──
    {
      id: 2,
      productName: 'تابلو خوشنویسی',
      price: 'From $149.99',
      priceNumber: 149.99,
      trustScore: 4.9,
      badges: ['Handmade', 'Original'],
      description: 'Handcrafted Persian calligraphy paintings, acrylic and gold leaf on canvas',
      features: [
        { key: 'Medium', value: 'Acrylic & Gold Leaf' },
        { key: 'Canvas', value: 'Deep Edge' },
        { key: 'Style', value: 'Persian Calligraphy' },
        { key: 'Shipping', value: '5-7 days' },
      ],
      offers: [
        { seller: 'Art Gallery Official', price: '$149.99', trustScore: 98 },
        { seller: 'Persian Art House', price: '$169.99', trustScore: 96 },
      ],
      creatorVideos: [
        {
          creatorId: 'art1',
          creatorName: '@calligraphy_master',
          creatorAvatar: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=100&h=100&fit=crop',
          videoUrl: 'https://res.cloudinary.com/dyolzaxiy/video/upload/f_auto,q_auto/v1770404642/art_1_fh0hya.mp4',
          thumbnail: '',
          likes: 11149,
          comments: 729,
          shares: 890,
          isVerified: true,
          caption: 'سکوت کنیم تا بشنویم قرار است زندگی چه بگوید، چون فقط در سکوت حرف میزند. صبور باشیم که گفتنش، زمان میبرد ✨',
          hashtags: ['#کالیگرافی', '#خوشنویسی_فارسی', '#هنر'],
          timestamp: '2 years ago',
          videoComments: [
            { username: '@mahdiehmirzaei.art', text: '😍😍😍😍😍خدای منننننن' },
            { username: '@azpatine', text: 'شاهکاررررررررررررر🔥🔥🔥🔥🔥🔥🔥🔥' },
            { username: '@raideraid_igg', text: 'How do you decide what words and letters to use in this kind of piece? It\'s beautiful' },
            { username: '@elhamomidvar.art', text: 'عالی عالییی' },
            { username: '@hek__algh', text: 'بسیار زیبا # لطفا قیمت کار رو اطلاع دهید و ابعاد کار رو' },
            { username: '@sayedfrhood', text: '❤️🙌❤️' },
            { username: '@meysam.pasha62', text: '😍' },
          ],
        },
        {
          creatorId: 'art2',
          creatorName: '@persian_art_studio',
          creatorAvatar: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=100&h=100&fit=crop',
          videoUrl: 'https://res.cloudinary.com/dyolzaxiy/video/upload/f_auto,q_auto/v1770404499/art_2_fxgefp.mp4',
          thumbnail: '',
          likes: 8560,
          comments: 580,
          shares: 650,
          isVerified: true,
          caption: '🔹یار🔹 سایز ۲۰۰ در ۱۰۰ سانتی‌متر تابلو - یار مرا غار مرا عشق جگر خوار مرا 🎨 اکریلیک و ورق طلا',
          hashtags: ['#هنر_ایرانی', '#کالیگرافی', '#ورق_طلا'],
          timestamp: '1 year ago',
          videoComments: [
            { username: '@sunflower_gallery_125', text: '🔥😍🔥' },
            { username: '@mahsa.rnj.art', text: '👏👏' },
            { username: '@faarhan.khaan', text: '😍👏' },
            { username: '@farangiskhanpour', text: '👏👏👏👏👏' },
          ],
        },
      ],
    },

    // ── Product 3: Handmade Clothing & Accessories ──
    {
      id: 3,
      productName: 'پوشاک دست‌بافت زمستانی',
      price: 'From $12.99',
      priceNumber: 12.99,
      trustScore: 4.6,
      badges: ['Handmade', 'Free Size'],
      description: 'Handcrafted winter clothing and accessories - hats, scarves, leggings',
      features: [
        { key: 'Size', value: 'Free Size' },
        { key: 'Material', value: 'Handknit Yarn' },
        { key: 'Season', value: 'Winter' },
        { key: 'Shipping', value: '2-4 days' },
      ],
      offers: [
        { seller: 'Handmade Bazaar', price: '$12.99', trustScore: 93 },
        { seller: 'Craft Market', price: '$14.99', trustScore: 91 },
      ],
      creatorVideos: [
        {
          creatorId: 'cl1',
          creatorName: '@winter_fashion',
          creatorAvatar: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=100&h=100&fit=crop',
          videoUrl: 'https://res.cloudinary.com/dyolzaxiy/video/upload/f_auto,q_auto/v1770404540/cloths_1_aa77pw.mp4',
          thumbnail: '',
          likes: 71,
          comments: 6,
          shares: 12,
          isVerified: false,
          caption: 'لگ تو کرکی بپوشو برو بیرون حال کن 🤗🤙🏻 خیلی گرمه و فری سایز، وارمر هم استایلتو خاص تر میکنه 🥰',
          hashtags: ['#وارمر', '#آنلاین_شاپ', '#مد_زمستانی'],
          timestamp: '1 month ago',
          videoComments: [
            { username: '@lebas_fantezy', text: '❤️❤️🔥🔥' },
            { username: '@sara_ixry', text: '😍قشنگه' },
            { username: '@selfish.am', text: 'یوخ بابا😂' },
          ],
        },
        {
          creatorId: 'cl2',
          creatorName: '@puffy_hats',
          creatorAvatar: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=100&h=100&fit=crop',
          videoUrl: 'https://res.cloudinary.com/dyolzaxiy/video/upload/f_auto,q_auto/v1770404555/cloths_2_pqh9fc.mp4',
          thumbnail: '',
          likes: 5715,
          comments: 298,
          shares: 340,
          isVerified: true,
          caption: 'کلاه های جذاب پافی با قیمت باورنکردنی ۳۵۰ 🧶 دستبافت با عشق',
          hashtags: ['#کلاه_پافی', '#کلاه_بافتنی', '#دستبافت'],
          timestamp: '1 year ago',
          videoComments: [
            { username: '@ali.mohebzadeh1369', text: 'چقدر ملوسی ❤️❤️❤️❤️❤️❤️' },
            { username: '@gollk.hanom', text: 'هم کلاه ها زیباست هم خودت😍😍😍' },
            { username: '@r.a.m848', text: '🙌🔥🔥🔥🔥' },
            { username: '@esmaeelzolfaghary', text: '😍😍😍' },
            { username: '@kobram758', text: 'خیلی قشنگه' },
            { username: '@mooslemnorolahi', text: 'درود به غیرتت بخدا من کیف کردم 👏👏👏👏👏' },
            { username: '@nastaran_naffissi', text: '👏👏👏' },
          ],
        },
        {
          creatorId: 'cl3',
          creatorName: '@knit_crafts',
          creatorAvatar: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=100&h=100&fit=crop',
          videoUrl: 'https://res.cloudinary.com/dyolzaxiy/video/upload/f_auto,q_auto/v1770404591/cloths_3_qwtwx5.mp4',
          thumbnail: '',
          likes: 3426,
          comments: 319,
          shares: 210,
          isVerified: false,
          caption: 'این کلاه های پافی واقعا گرمن 🧣 فکر نکنین چون بین بافت بازه هوا میره و گرما نداره! بهای کلاه دستبافت پافی فقط ۳۵۰ت',
          hashtags: ['#کلاه_زمستونی', '#کلاه_گرم', '#دستبافت'],
          timestamp: '2 months ago',
          videoComments: [
            { username: '@rez_asadeghlo', text: 'سلام، ست هستن یاتک،قیمت لطفا 😍' },
            { username: '@mstf.ndaei', text: 'Allah saxlasin... Yashasin turk kizi' },
            { username: '@44.446167', text: 'عروسک' },
            { username: '@cabinet_and_decoration_ideas', text: '🔥' },
            { username: '@dokhtare_tabiaat', text: 'بساطت مشهده؟' },
            { username: '@zcbr1400', text: 'درووووود...' },
            { username: '@amirafsah', text: '❤️❤️❤️🔥🔥🙌🙌' },
          ],
        },
        {
          creatorId: 'cl4',
          creatorName: '@crochet_style',
          creatorAvatar: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=100&h=100&fit=crop',
          videoUrl: 'https://res.cloudinary.com/dyolzaxiy/video/upload/f_auto,q_auto/v1770404770/cloths_4_bfxpjd.mp4',
          thumbnail: '',
          likes: 18756,
          comments: 957,
          shares: 1200,
          isVerified: true,
          caption: 'ورق بزنید و ببینید🫠 این ست خاص از شال رینگی + گردنبند و دستبند، طراحی شده تا با یه انتخاب ساده بدرخشی ✨',
          hashtags: ['#شال', '#قلاب_بافی', '#اکسسوری', '#دستبافت'],
          timestamp: '9 months ago',
          videoComments: [
            { username: '@mytrhsyny514', text: '👏👏' },
            { username: '@_bitatalashan_', text: '❤️❤️❤️❤️چه قیمته' },
            { username: '@saraxnila', text: 'قیمت' },
            { username: '@56nafas', text: 'آموزش نمیدین' },
            { username: '@somi_.88852._', text: 'قیمت لطفا' },
            { username: '@rqyhmddy54', text: 'سلام آموزش دارین' },
            { username: '@baft.samereh', text: '#فوق العاده زیبا وشیک وخاص 👏👏' },
            { username: '@raham.7567', text: '😍😍😍😍زیبا' },
            { username: '@gelareh_baran2', text: 'نختون چی هست؟؟؟؟' },
          ],
        },
      ],
    },

    // ── Product 4: Handmade Vintage Watches ──
    {
      id: 4,
      productName: 'ساعت دست‌ساز وینتیج',
      price: 'From $49.99',
      priceNumber: 49.99,
      trustScore: 4.8,
      badges: ['Handmade', 'Unique'],
      description: 'Unique handcrafted vintage-style watches with creative designs',
      features: [
        { key: 'Style', value: 'Vintage / Artisan' },
        { key: 'Material', value: 'Mixed Media' },
        { key: 'Type', value: 'Handmade' },
        { key: 'Shipping', value: '3-5 days' },
      ],
      offers: [
        { seller: 'Vintage Watch Studio', price: '$49.99', trustScore: 96 },
        { seller: 'Artisan Timepieces', price: '$54.99', trustScore: 94 },
      ],
      creatorVideos: [
        {
          creatorId: 'vw1',
          creatorName: '@vintage_watches',
          creatorAvatar: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=100&h=100&fit=crop',
          videoUrl: 'https://res.cloudinary.com/dyolzaxiy/video/upload/f_auto,q_auto/v1770404860/vintagewatch_1_n7fq1z.mp4',
          thumbnail: '',
          likes: 6202,
          comments: 377,
          shares: 450,
          isVerified: true,
          caption: 'قسمت دوم ساعت سیبیلو💚🌿🧪 دست‌ساز با عشق!',
          hashtags: ['#ساعت_وینتیج', '#دست_ساز', '#خاص'],
          timestamp: '1 month ago',
          videoComments: [
            { username: '@amin_mohebi.8', text: 'اگه صفحه ش بشکنه چطوری تعمیرش کنم' },
            { username: '@nahidtaarofi.psychologist', text: '👏👏' },
            { username: '@bahman.ahmaddii', text: '👏👏' },
            { username: '@amir_salar201', text: 'خداوکیلی اگه من این ناخنا رو داشتم تو دستشویی هم یکی دیگه روصدا میکردم 😂' },
            { username: '@bradr11780', text: 'دس خوش🔥🙌👏👏' },
            { username: '@sogand.6859', text: 'قیمت؟😍' },
            { username: '@jeran_2022', text: 'ناخونت هم خوشگله عزیزم 👏👏👏👏' },
            { username: '@amir.nesaei', text: 'افرین' },
          ],
        },
        {
          creatorId: 'vw2',
          creatorName: '@artisan_time',
          creatorAvatar: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=100&h=100&fit=crop',
          videoUrl: 'https://res.cloudinary.com/dyolzaxiy/video/upload/f_auto,q_auto/v1770404545/vintagewatch_2_owpzoh.mp4',
          thumbnail: '',
          likes: 1574,
          comments: 141,
          shares: 180,
          isVerified: false,
          caption: 'شمشیرش تکون میخوره تا صفحشو ببینین⚔️👾 ساعت دست‌ساز خاص!',
          hashtags: ['#ساعت_شمشیری', '#صنایع_دستی', '#هنرمندانه'],
          timestamp: '1 month ago',
          videoComments: [
            { username: '@ani1sa_5', text: 'قیمت' },
            { username: '@gggjjjmm111', text: 'آبجی قیمتش' },
            { username: '@sima.fallah.teacher', text: 'قیمت' },
            { username: '@zhfahmi4', text: 'قیمت' },
            { username: '@samira.mani', text: 'قیمت لطفا' },
            { username: '@toddy_._444', text: 'قیمت ؟' },
            { username: '@under_the_sun_mithra', text: 'Wow, that is beautiful nice job' },
            { username: '@pesareiran_king', text: 'قیمت' },
            { username: '@sorkh1371', text: 'قیمت لطفا' },
          ],
        },
      ],
    },
  ];

  const currentProduct = products[currentProductIndex] || products[0];
  const currentCreatorIndex = currentCreatorIndices[currentProduct?.id] || 0;
  const currentVideo = currentProduct?.creatorVideos?.[currentCreatorIndex] || currentProduct?.creatorVideos?.[0];

  // Reset like/bookmark when video changes
  useEffect(() => {
    setIsLiked(false);
    setIsBookmarked(false);
  }, [currentProductIndex, currentCreatorIndex]);

  // Play/pause videos based on current visible one
  useEffect(() => {
    const refs = videoRefs.current;
    for (const key of Object.keys(refs)) {
      const videoEl = refs[key] as HTMLVideoElement | null;
      if (!videoEl) continue;
      const [pIdStr, cIdxStr] = key.split('-');
      const pId = Number(pIdStr);
      const cIdx = Number(cIdxStr);
      const product = products.find(p => p.id === pId);
      if (!product) continue;
      const productIdx = products.indexOf(product);
      const activeCreatorIdx = currentCreatorIndices[pId] || 0;

      if (productIdx === currentProductIndex && cIdx === activeCreatorIdx) {
        videoEl.play().catch(() => {});
      } else {
        videoEl.pause();
      }
    }
  }, [currentProductIndex, currentCreatorIndices]);

  // Vertical scroll handling
  useEffect(() => {
    const container = verticalScrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const itemHeight = container.clientHeight;
      const newIndex = Math.round(scrollTop / itemHeight);

      if (newIndex !== currentProductIndex && newIndex >= 0 && newIndex < products.length) {
        setCurrentProductIndex(newIndex);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentProductIndex, products.length]);

  // Horizontal scroll handling for each product
  useEffect(() => {
    const setupHorizontalScroll = (productId: number) => {
      const container = horizontalScrollRefs.current[productId];
      if (!container) return;

      const handleScroll = () => {
        const scrollLeft = container.scrollLeft;
        const itemWidth = container.clientWidth;
        const newIndex = Math.round(scrollLeft / itemWidth);

        const product = products.find(p => p.id === productId);
        if (!product) return;

        const currentIdx = currentCreatorIndices[productId] || 0;
        if (newIndex !== currentIdx && newIndex >= 0 && newIndex < product.creatorVideos.length) {
          setCurrentCreatorIndices(prev => ({ ...prev, [productId]: newIndex }));
        }
      };

      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    };

    const cleanups = products.map(p => setupHorizontalScroll(p.id));
    return () => cleanups.forEach(cleanup => cleanup && cleanup());
  }, [products, currentCreatorIndices]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  // Safety check
  if (!currentProduct || !currentVideo) {
    return <div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>;
  }

  return (
    <MainLayout
      fullscreen={true}
      onSearch={() => setShowSearch(true)}
      onAssistant={() => setShowAssistant(true)}
      onCreate={() => setShowCreate(true)}
    >
      {/* Reels Fullscreen - Vertical Scroll */}
      <div
        ref={verticalScrollRef}
        className="w-full h-full bg-black overflow-y-scroll snap-y snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {products.map((product) => (
          <div
            key={product.id}
            className="relative w-full h-full snap-start snap-always"
          >
            {/* Horizontal Scroll Container for Creator Videos */}
            <div
              ref={(el) => { horizontalScrollRefs.current[product.id] = el; }}
              className="w-full h-full overflow-x-scroll snap-x snap-mandatory flex"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {product.creatorVideos.map((video, videoIdx) => (
                <div
                  key={video.creatorId}
                  className="w-full h-full flex-shrink-0 snap-start snap-always relative"
                >
                  {/* Background Video */}
                  <div className="absolute inset-0">
                    <video
                      ref={(el) => { videoRefs.current[`${product.id}-${videoIdx}`] = el; }}
                      src={video.videoUrl}
                      className="w-full h-full object-cover"
                      loop
                      playsInline
                      preload="auto"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />

                  {/* Creator Avatar - Top Left */}
                  <div className="absolute top-4 left-4 z-10">
                    <img
                      src={video.creatorAvatar}
                      alt={video.creatorName}
                      className="w-12 h-12 rounded-full border-2 border-white object-cover"
                    />
                  </div>

                  {/* Creator Video Progress Indicator - Top */}
                  <div className="absolute top-0 left-0 right-0 px-2 pt-1 flex gap-1 z-10">
                    {product.creatorVideos.map((_, i) => (
                      <div
                        key={i}
                        className={`h-0.5 flex-1 rounded-full transition-all duration-300 ${
                          i === (currentCreatorIndices[product.id] || 0) ? 'bg-white' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Right Side Action Bar - TikTok Style */}
                  <div className="absolute right-3 bottom-24 flex flex-col items-center gap-6 z-10">
                    {/* Like Button */}
                    <button
                      onClick={() => setIsLiked(!isLiked)}
                      className="flex flex-col items-center gap-1"
                    >
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                        <Heart
                          size={28}
                          className={`${isLiked ? 'fill-red-500 text-red-500' : 'text-white'} transition-colors`}
                        />
                      </div>
                      <span className="text-white text-xs font-semibold">
                        {formatNumber(video.likes + (isLiked ? 1 : 0))}
                      </span>
                    </button>

                    {/* Comments Button */}
                    <button
                      onClick={() => setShowComments(true)}
                      className="flex flex-col items-center gap-1"
                    >
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                        <MessageCircle size={28} className="text-white" />
                      </div>
                      <span className="text-white text-xs font-semibold">
                        {formatNumber(video.comments)}
                      </span>
                    </button>

                    {/* Share Button */}
                    <button
                      onClick={() => setShowShare(true)}
                      className="flex flex-col items-center gap-1"
                    >
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                        <Share2 size={28} className="text-white" />
                      </div>
                      <span className="text-white text-xs font-semibold">
                        {formatNumber(video.shares)}
                      </span>
                    </button>

                    {/* Bookmark Button */}
                    <button
                      onClick={() => setIsBookmarked(!isBookmarked)}
                      className="flex flex-col items-center gap-1"
                    >
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                        <Bookmark
                          size={28}
                          className={`${isBookmarked ? 'fill-yellow-400 text-yellow-400' : 'text-white'} transition-colors`}
                        />
                      </div>
                    </button>

                    {/* Shopping Bag Button - Large Yellow */}
                    <button
                      onClick={() => setShowProduct(true)}
                      className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-lg mt-4"
                    >
                      <ShoppingBag size={30} className="text-neutral-900" />
                    </button>
                  </div>

                  {/* Bottom Content - Product Info */}
                  <div className="absolute bottom-4 left-4 right-20 space-y-3 z-10">
                    {/* Price Tag */}
                    <div className="inline-block">
                      <div className="bg-yellow-400 text-neutral-900 px-3 py-1.5 rounded-lg font-bold text-lg">
                        ${product.priceNumber.toFixed(2)}
                      </div>
                    </div>

                    {/* Product Description */}
                    <div className="space-y-1">
                      <h3 className="text-white font-semibold text-base leading-tight font-vazir">
                        {product.productName}
                      </h3>
                      <p className="text-white/90 text-sm leading-tight line-clamp-2 font-vazir">
                        {video.caption}
                      </p>
                    </div>

                    {/* Creator Info & Timestamp */}
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold text-sm">{video.creatorName}</span>
                      {video.isVerified && (
                        <ShieldCheck size={14} className="text-blue-400" />
                      )}
                      <span className="text-white/70 text-sm">· {video.timestamp}</span>
                    </div>

                    {/* Hashtags */}
                    <div className="flex items-center gap-2 flex-wrap">
                      {video.hashtags.map((tag, i) => (
                        <span key={i} className="text-white text-sm font-medium font-vazir">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {showSearch && <SearchBar onClose={() => setShowSearch(false)} />}
      {showAssistant && <UnifiedAssistant onClose={() => setShowAssistant(false)} />}
      {showCreate && <CreateContent onClose={() => setShowCreate(false)} />}
      {showProduct && (
        <ProductSheet
          onClose={() => setShowProduct(false)}
          product={{
            image: currentVideo.videoUrl,
            name: currentProduct.productName,
            description: currentProduct.description,
            price: currentProduct.price,
            trustScore: 1250,
            features: currentProduct.features,
            offers: currentProduct.offers,
          }}
        />
      )}
      {showComments && (
        <CommentSheet
          onClose={() => setShowComments(false)}
          video={{
            comments: currentVideo.comments,
            videoComments: currentVideo.videoComments,
          }}
        />
      )}
      {showShare && (
        <ShareSheet
          onClose={() => setShowShare(false)}
          video={currentVideo}
        />
      )}
    </MainLayout>
  );
}
