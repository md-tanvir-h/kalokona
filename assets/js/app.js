/* Kalokona — app logic: i18n (bn/en), theme, order form -> WhatsApp, animations, menu */
(function(){
'use strict';

/* ================= i18n ================= */
var T = {
bn: {
brand:'কালোকণা', nav_order:'অর্ডার করুন', nav_why:'কেন কালোকণা', nav_benefits:'ঐতিহ্য', nav_usage:'ব্যবহারবিধি', nav_packages:'প্যাকেজ', nav_reviews:'রিভিউ', nav_faq:'প্রশ্নোত্তর',
hero_badge:'ঐতিহ্যগতভাবে ব্যবহৃত • ঘরোয়া অভ্যাসের সঙ্গী',
hero_title:'প্রতিদিনের ছোট অভ্যাস, বড় সুস্থতা',
hero_sub:'দাদি-নানির আমল থেকে ঘরে ঘরে ব্যবহৃত কালোজিরা — এখন দানা ও তেল, দুই রূপেই। সহজ ব্যবহারবিধিসহ, সরাসরি আপনার দরজায়।',
hero_cta:'ফর্ম পূরণ করে অর্ডার করুন', hero_cta2:'প্যাকেজ দেখুন',
stat1:'প্যাকেজ অপশন', stat2:'কালোজিরা দানা', stat3:'কালোজিরা তেল', u_g:'গ্রাম', u_ml:'মিলি',
rep_img:'* প্রতিনিধিত্বমূলক চিত্র (Representative image)',
why_tag:'কেন কালোকণা?', why_title:'ঘরোয়া অভ্যাস ফিরিয়ে আনতে বাধা কোথায়?',
why_sub:'বাজারে কালোজিরা অনেক — কিন্তু আসল প্রশ্নগুলো থেকেই যায়। আমরা সেগুলোরই সহজ সমাধান দিই।',
why1_t:'"খাঁটি কি না" — দুশ্চিন্তা', why1_d:'ভেজালের ভয়ে অনেকেই কিনতে দ্বিধায় থাকেন। তাই আমরা চেনার সহজ ইঙ্গিতগুলো খোলাখুলি জানিয়ে দিই।',
why2_t:'"কীভাবে ব্যবহার করব?"', why2_d:'প্রতিটি অর্ডারের সঙ্গে সহজ ব্যবহারবিধি — কতটুকু, কীভাবে, কী সতর্কতা — ছবিতে বোঝানো আছে।',
why3_t:'নিয়মিত রাখাই কঠিন', why3_d:'ছোট প্যাকেজে শুরু করুন, রুটিনে মানিয়ে গেলে কম্বো নিন। একটু একটু করে অভ্যাস গড়াই সহজ।',
ben_tag:'ঐতিহ্যগত ব্যবহার', ben_title:'ঘরে ঘরে কালোজিরা যেভাবে ব্যবহৃত হয়ে এসেছে',
ben_sub:'নিচের বিবরণগুলো ঐতিহ্যগত ব্যবহারভিত্তিক সাধারণ তথ্য — কোনো রোগের চিকিৎসা বা প্রতিকারের দাবি নয়।',
b1_t:'রান্নায় স্বাদ ও ঘ্রাণ', b1_d:'ভর্তা, আচার, পরোটা ও তরকারিতে ঐতিহ্যগতভাবে ব্যবহৃত হয়।',
b2_t:'সকালের ঘরোয়া রুটিন', b2_d:'অনেক পরিবারে মধু বা কুসুম গরম পানির সঙ্গে সকালের অভ্যাস হিসেবে রাখা হয়।',
b3_t:'চুল ও ত্বকের যত্নে', b3_d:'তেল হিসেবে মালিশের জন্য ঐতিহ্যগতভাবে ব্যবহৃত হয় (আগে প্যাচ টেস্ট করুন)।',
b4_t:'দাদি-নানির আমলের অভ্যাস', b4_d:'বহু প্রজন্ম ধরে বাংলার রান্নাঘর ও ঘরোয়া যত্নে পরিচিত একটি উপাদান।',
b5_t:'রুটিনে যোগ করা সহজ', b5_d:'আধা চা-চামচ দিয়েই শুরু করা যায় — আলাদা সময় বা ঝামেলা লাগে না।',
b6_t:'দুই রূপে — দানা ও তেল', b6_d:'রান্নার জন্য দানা, আর সরল ব্যবহারের জন্য তেল — নিজের পছন্দমতো বেছে নিন।',
use_tag:'ব্যবহারবিধি ইনফোগ্রাফিক', use_title:'সহজ ৪ ধাপে ব্যবহার', use_sub:'ঐতিহ্যগত ঘরোয়া পদ্ধতির সাধারণ নির্দেশনা। কম পরিমাণে শুরু করুন।',
use_seed:'কালোজিরা দানা', use_oil:'কালোজিরা তেল',
s1_t:'হালকা ভেজে নিন', s1_d:'শুকনো কড়াইয়ে কম আঁচে ১ মিনিট — ঘ্রাণ উঠলেই নামিয়ে ফেলুন।',
s2_t:'গুঁড়া করুন', s2_d:'ঠান্ডা হলে হামানদিস্তা বা গ্রাইন্ডারে মোটা গুঁড়া করে নিন।',
s3_t:'খাবারে মিশিয়ে নিন', s3_d:'আধা চা-চামচ থেকে শুরু — ভর্তা, ডাল বা সবজিতে ছিটিয়ে।',
s4_t:'সংরক্ষণ', s4_d:'বায়ুরোধী কৌটায়, শুকনো ও ঠান্ডা জায়গায় রাখুন।',
o1_t:'কম পরিমাণে শুরু', o1_d:'প্রথমে আধা চা-চামচ — শরীরের সঙ্গে মানিয়ে নিতে দিন।',
o2_t:'মিশিয়ে নিন', o2_d:'ঐতিহ্যগতভাবে মধু বা কুসুম গরম পানির সঙ্গে মিশিয়ে নেওয়া হয়।',
o3_t:'বাহ্যিক ব্যবহারে প্যাচ টেস্ট', o3_d:'মালিশের আগে হাতের ছোট জায়গায় লাগিয়ে ২৪ ঘণ্টা দেখুন।',
o4_t:'সংরক্ষণ', o4_d:'সরাসরি রোদ থেকে দূরে, ঠান্ডা জায়গায়; ব্যবহারের পর ঢাকনা শক্ত করে আটকান।',
warn_t:'সতর্কতা', warn_d:'এটি ওষুধ নয়। গর্ভবতী/স্তন্যদানকারী মা, শিশু, নিয়মিত ওষুধ সেবনকারী বা কোনো শারীরিক সমস্যা থাকলে ব্যবহারের আগে চিকিৎসকের পরামর্শ নিন। অ্যালার্জির লক্ষণ দেখা দিলে ব্যবহার বন্ধ করুন।',
pure_tag:'খাঁটি চেনার উপায়', pure_title:'কেনার সময় যা দেখে নেবেন',
pure_sub:'এগুলো সাধারণ ইঙ্গিত — ল্যাব টেস্টের বিকল্প নয়। সন্দেহ হলে ব্যাচ/উৎস সম্পর্কে বিক্রেতাকে জিজ্ঞেস করুন।',
p1:'দানা ম্যাট-কালো ও কৌণিক আকৃতির; তেলতেলে বা অতিরিক্ত চকচকে নয়।', p2:'হাতে ঘষলে ঝাঁঝালো, বিশেষ ঘ্রাণ আসে।', p3:'ভাঙলে ভেতরটা সাদাটে/ক্রিম রঙের হয়।', p4:'ধুলো, ছোট পাথর বা অন্য বীজ মেশানো থাকে না।',
q1:'গাঢ় বাদামি-কালচে রং ও ঘন ভাব।', q2:'তীব্র, ঝাঁঝালো ঘ্রাণ — কৃত্রিম সুগন্ধ নয়।', q3:'গাঢ় কাচের বোতল ও সিল করা মুখ।', q4:'উৎপাদন/মেয়াদ তারিখ ও ব্যাচ তথ্য লেখা আছে কি না দেখুন।',
pk_tag:'প্যাকেজ ও দাম', pk_title:'আপনার পছন্দের প্যাকেজ বেছে নিন', pk_sub:'ক্যাশ অন ডেলিভারি। ডেলিভারি চার্জ আলাদা।',
pk1_n:'কালোজিরা দানা', pk1_w:'২৫০ গ্রাম', pk1_f1:'রান্না ও ঘরোয়া ব্যবহারের জন্য', pk1_f2:'বায়ুরোধী প্যাকেট',
pk2_n:'কালোজিরা তেল', pk2_w:'১০০ মিলি', pk2_f1:'গাঢ় কাচের বোতল', pk2_f2:'সিল করা মুখ',
pk3_n:'কম্বো প্যাক', pk3_w:'২৫০ গ্রাম দানা + ১০০ মিলি তেল', pk3_f1:'দানা ও তেল — দুটোই একসাথে', pk3_f2:'আলাদা কিনলে তুলনায় সাশ্রয়',
pk_f_guide:'ব্যবহারবিধি কার্ডসহ', badge_best:'সেরা মূল্য', pk_btn:'এটি নিন',
pk_note:'* দাম আনুমানিক; অর্ডার নিশ্চিত করার সময় চূড়ান্ত দাম জানানো হবে।',
rv_tag:'গ্রাহকদের মতামত', rv_title:'গ্রাহকরা কী বলছেন',
rv_warn:'⚠️ নিচের রিভিউগুলো "Sample Review" — শুধু ডিজাইন প্র্যাকটিসের জন্য। লাইভ সাইটে অনুমতিসহ আসল গ্রাহকের রিভিউ বসান।',
r1:'দানাগুলো তাজা লেগেছে আর ঘ্রাণটা ভালো। প্যাকেজিং পরিপাটি ছিল।', r2:'ব্যবহারবিধি কার্ডটা কাজের, নতুন হিসেবে বুঝতে সুবিধা হয়েছে।', r3:'ডেলিভারি সময়মতো পেয়েছি। বোতলের মুখ সিল করা ছিল।',
r1n:'— গ্রাহক (নমুনা)', r2n:'— গ্রাহক (নমুনা)', r3n:'— গ্রাহক (নমুনা)',
faq_tag:'সাধারণ প্রশ্ন', faq_title:'আপনার জানার বিষয়গুলো',
f1q:'এটা কি ওষুধ?', f1a:'না। এটি একটি খাদ্য/ঘরোয়া ব্যবহারের পণ্য। কোনো রোগের চিকিৎসা, নিরাময় বা প্রতিরোধের দাবি আমরা করি না।',
f2q:'কারা ব্যবহারের আগে চিকিৎসকের পরামর্শ নেবেন?', f2a:'গর্ভবতী ও স্তন্যদানকারী মা, শিশু, নিয়মিত ওষুধ সেবনকারী, অস্ত্রোপচারের পরিকল্পনা থাকলে বা কোনো দীর্ঘমেয়াদি শারীরিক সমস্যা থাকলে।',
f3q:'ডেলিভারি কত দিনে পাব?', f3a:'সাধারণত ২–৫ কার্যদিবস (আনুমানিক; এলাকাভেদে ভিন্ন হতে পারে)। অর্ডার নিশ্চিতের সময় নির্দিষ্ট সময় জানানো হবে।',
f4q:'পেমেন্ট কীভাবে?', f4a:'ক্যাশ অন ডেলিভারি — পণ্য হাতে পেয়ে টাকা দিন।',
f5q:'পণ্যে সমস্যা থাকলে কী করব?', f5a:'ডেলিভারির সময় প্যাকেট খুলে দেখে নিন। কোনো সমস্যা হলে WhatsApp-এ জানান, আমরা সমাধানের চেষ্টা করব।',
or_tag:'অর্ডার ফর্ম', or_title:'আজই অর্ডার করুন',
or_sub:'ফর্মটি পূরণ করে "অর্ডার নিশ্চিত করুন" চাপুন — WhatsApp-এ অর্ডার বার্তা তৈরি হয়ে যাবে। আমরা ফোনে নিশ্চিত করব।',
addr:'ঠিকানা: কোতোয়ালী, চট্টগ্রাম।',
f_name:'আপনার নাম', f_phone:'মোবাইল নম্বর', f_addr:'পূর্ণ ঠিকানা', f_pkg:'প্যাকেজ', f_qty:'পরিমাণ', f_note:'অতিরিক্ত নোট', optional:'(ঐচ্ছিক)',
opt1:'কালোজিরা দানা — ২৫০ গ্রাম', opt2:'কালোজিরা তেল — ১০০ মিলি', opt3:'কম্বো (দানা + তেল)',
f_total:'আনুমানিক মোট (ডেলিভারি চার্জ বাদে)', f_submit:'অর্ডার নিশ্চিত করুন',
f_err:'অনুগ্রহ করে নাম, সঠিক মোবাইল নম্বর (01XXXXXXXXX) ও ঠিকানা দিন।',
f_ok:'ধন্যবাদ! WhatsApp খুলছে — বার্তাটি পাঠিয়ে দিন, আমরা শীঘ্রই যোগাযোগ করব।',
foot_disc:'এই পণ্য কোনো রোগ নির্ণয়, চিকিৎসা, নিরাময় বা প্রতিরোধের জন্য নয়। এখানকার বিবরণ ঐতিহ্যগত ব্যবহারভিত্তিক সাধারণ তথ্য। গর্ভাবস্থা, নিয়মিত ওষুধ বা কোনো শারীরিক সমস্যা থাকলে ব্যবহারের আগে চিকিৎসকের পরামর্শ নিন।',
wa_head:'আসসালামু আলাইকুম, আমি অর্ডার করতে চাই:', wa_name:'নাম', wa_phone:'মোবাইল', wa_addr:'ঠিকানা', wa_pkg:'প্যাকেজ', wa_qty:'পরিমাণ', wa_total:'আনুমানিক মোট', wa_note:'নোট'
},
en: {
brand:'Kalokona', nav_order:'Order now', nav_why:'Why us', nav_benefits:'Tradition', nav_usage:'How to use', nav_packages:'Packages', nav_reviews:'Reviews', nav_faq:'FAQ',
hero_badge:'Traditionally used • A companion for home routines',
hero_title:'Small daily habits, big wellbeing',
hero_sub:'Black seed (kalojira) has been part of family kitchens for generations — now as whole seeds and as oil. Simple usage guide included, delivered to your door.',
hero_cta:'Order via the form', hero_cta2:'See packages',
stat1:'Package options', stat2:'Black seeds', stat3:'Black seed oil', u_g:'g', u_ml:'ml',
rep_img:'* Representative image',
why_tag:'Why Kalokona?', why_title:'What gets in the way of home routines?',
why_sub:'There is plenty of black seed on the market — but the real questions remain. We answer them simply.',
why1_t:'"Is it genuine?" worry', why1_d:'Fear of adulteration makes many people hesitate. So we openly share simple signs to look for.',
why2_t:'"How do I use it?"', why2_d:'Every order comes with an easy guide — how much, how, and what to watch out for — shown visually.',
why3_t:'Staying consistent is hard', why3_d:'Start with a small pack; move to the combo once it fits your routine. Habits grow little by little.',
ben_tag:'Traditional use', ben_title:'How black seed has been used in homes',
ben_sub:'The notes below are general information on traditional use — not claims to treat or cure any condition.',
b1_t:'Flavor & aroma in cooking', b1_d:'Traditionally used in bhorta, pickles, parathas and curries.',
b2_t:'Morning home routine', b2_d:'In many families it is taken with honey or lukewarm water as a morning habit.',
b3_t:'Hair & skin care', b3_d:'The oil is traditionally used for massage (do a patch test first).',
b4_t:'A grandmother’s habit', b4_d:'A familiar ingredient in Bengali kitchens and home care across generations.',
b5_t:'Easy to add to a routine', b5_d:'You can start with half a teaspoon — no extra time or fuss.',
b6_t:'Two forms — seeds & oil', b6_d:'Seeds for cooking, oil for simple use — pick what suits you.',
use_tag:'Usage infographic', use_title:'Use it in 4 simple steps', use_sub:'General guidance on traditional home methods. Start with a small amount.',
use_seed:'Black seeds', use_oil:'Black seed oil',
s1_t:'Dry-roast lightly', s1_d:'Low heat in a dry pan for 1 minute — remove once the aroma rises.',
s2_t:'Grind', s2_d:'Let it cool, then coarsely grind with a mortar or grinder.',
s3_t:'Mix into food', s3_d:'Start with half a teaspoon — sprinkle on bhorta, dal or vegetables.',
s4_t:'Store', s4_d:'Keep in an airtight jar, in a cool, dry place.',
o1_t:'Start small', o1_d:'Begin with half a teaspoon and let your body get used to it.',
o2_t:'Mix it', o2_d:'Traditionally mixed with honey or lukewarm water.',
o3_t:'Patch test for external use', o3_d:'Apply a little on your forearm and wait 24 hours before massage use.',
o4_t:'Store', o4_d:'Away from direct sunlight, in a cool place; close the cap tightly.',
warn_t:'Caution', warn_d:'This is not a medicine. If you are pregnant or nursing, giving it to a child, taking regular medication, or have any health condition, consult a doctor first. Stop use if you notice any allergic reaction.',
pure_tag:'How to spot genuine', pure_title:'What to check when buying',
pure_sub:'These are general signs — not a substitute for lab testing. If in doubt, ask the seller about batch and source.',
p1:'Seeds are matte black and angular; not oily or overly shiny.', p2:'Rubbing between fingers gives a sharp, distinctive aroma.', p3:'The inside looks off-white/cream when crushed.', p4:'No dust, tiny stones or other mixed seeds.',
q1:'Deep brown-black color with a thick body.', q2:'Strong, pungent aroma — not an artificial fragrance.', q3:'Dark glass bottle with a sealed mouth.', q4:'Check for manufacturing/expiry dates and batch details.',
pk_tag:'Packages & pricing', pk_title:'Choose your package', pk_sub:'Cash on delivery. Delivery charge extra.',
pk1_n:'Black seeds', pk1_w:'250 g', pk1_f1:'For cooking and home use', pk1_f2:'Airtight pack',
pk2_n:'Black seed oil', pk2_w:'100 ml', pk2_f1:'Dark glass bottle', pk2_f2:'Sealed mouth',
pk3_n:'Combo pack', pk3_w:'250 g seeds + 100 ml oil', pk3_f1:'Seeds and oil together', pk3_f2:'Saves versus buying separately',
pk_f_guide:'Usage guide card included', badge_best:'Best value', pk_btn:'Choose this',
pk_note:'* Prices are approximate; the final price is confirmed when your order is verified.',
rv_tag:'Customer feedback', rv_title:'What customers say',
rv_warn:'⚠️ The reviews below are "Sample Reviews" — for design practice only. On the live site, use real, permission-based customer reviews.',
r1:'The seeds felt fresh and smelled great. Packaging was neat.', r2:'The usage guide card is handy — easy to follow as a beginner.', r3:'Delivery arrived on time. The bottle mouth was sealed.',
r1n:'— Customer (sample)', r2n:'— Customer (sample)', r3n:'— Customer (sample)',
faq_tag:'FAQ', faq_title:'Things you may want to know',
f1q:'Is this a medicine?', f1a:'No. It is a food / home-use product. We do not claim to treat, cure or prevent any disease.',
f2q:'Who should ask a doctor first?', f2a:'Pregnant or nursing mothers, children, people on regular medication, those planning surgery, or anyone with a long-term health condition.',
f3q:'How long does delivery take?', f3a:'Usually 2–5 working days (approximate; varies by area). A specific time is shared when your order is confirmed.',
f4q:'How do I pay?', f4a:'Cash on delivery — pay when you receive the product.',
f5q:'What if there is a problem with the product?', f5a:'Check the package at delivery. If anything is wrong, message us on WhatsApp and we will try to resolve it.',
or_tag:'Order form', or_title:'Order today',
or_sub:'Fill in the form and press "Confirm order" — an order message will be prepared in WhatsApp. We will confirm by phone.',
addr:'Address: Kotowali, Chattogram',
f_name:'Your name', f_phone:'Mobile number', f_addr:'Full address', f_pkg:'Package', f_qty:'Quantity', f_note:'Extra note', optional:'(optional)',
opt1:'Black seeds — 250 g', opt2:'Black seed oil — 100 ml', opt3:'Combo (seeds + oil)',
f_total:'Approx. total (excl. delivery)', f_submit:'Confirm order',
f_err:'Please enter your name, a valid mobile number (01XXXXXXXXX) and address.',
f_ok:'Thank you! Opening WhatsApp — send the message and we will contact you shortly.',
foot_disc:'This product is not intended to diagnose, treat, cure or prevent any disease. Descriptions are general information based on traditional use. If you are pregnant, on regular medication or have a health condition, consult a doctor before use.',
wa_head:'Hello, I would like to place an order:', wa_name:'Name', wa_phone:'Mobile', wa_addr:'Address', wa_pkg:'Package', wa_qty:'Quantity', wa_total:'Approx. total', wa_note:'Note'
}};

var PRICE = { seed:280, oil:450, combo:680 };
var lang = 'bn';
try { lang = localStorage.getItem('kk-lang') || 'bn'; } catch(e){}

function nf(n){ return new Intl.NumberFormat(lang==='bn'?'bn-BD':'en-US',{useGrouping:false}).format(n); }
function money(n){ return '৳' + nf(n); }
function tr(k){ return T[lang][k] || k; }

function applyLang(){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(function(el){ var k=el.getAttribute('data-i18n'); if(T[lang][k]!==undefined) el.textContent = T[lang][k]; });
  document.querySelectorAll('[data-price]').forEach(function(el){ el.textContent = money(+el.getAttribute('data-price')); });
  document.querySelectorAll('[data-count]').forEach(function(el){ if(el.dataset.done) el.textContent = nf(+el.dataset.count); });
  document.getElementById('langBtn').textContent = lang==='bn' ? 'EN' : 'বাংলা';
  document.title = lang==='bn' ? 'কালোকণা — খাঁটি কালোজিরা দানা ও কালোজিরা তেল | Kalokona' : 'Kalokona — Black Seed (Kalojira) & Black Seed Oil';
  updateTotal();
}
function updateTotal(){
  var p = document.getElementById('fPkg').value;
  var q = Math.max(1, Math.min(10, parseInt(document.getElementById('fQty').value,10) || 1));
  document.getElementById('total').textContent = money(PRICE[p]*q);
}
document.getElementById('langBtn').addEventListener('click', function(){
  lang = lang==='bn' ? 'en' : 'bn';
  try { localStorage.setItem('kk-lang', lang); } catch(e){}
  applyLang();
});

/* ================= Theme ================= */
var root = document.documentElement;
function syncThemeIcons(){
  var dark = root.classList.contains('dark');
  document.getElementById('icoSun').classList.toggle('hidden', !dark);
  document.getElementById('icoMoon').classList.toggle('hidden', dark);
  var m = document.querySelector('meta[name="theme-color"]'); if(m) m.setAttribute('content', dark ? '#060A16' : '#FBF7EC');
}
document.getElementById('themeBtn').addEventListener('click', function(){
  root.classList.toggle('dark');
  try { localStorage.setItem('kk-theme', root.classList.contains('dark') ? 'dark' : 'light'); } catch(e){}
  syncThemeIcons();
});
syncThemeIcons();

/* ================= Package pick ================= */
document.querySelectorAll('.pick').forEach(function(b){
  b.addEventListener('click', function(){
    document.getElementById('fPkg').value = b.getAttribute('data-pick');
    updateTotal();
    document.getElementById('order').scrollIntoView({behavior:'smooth'});
  });
});
document.getElementById('fPkg').addEventListener('change', updateTotal);
document.getElementById('fQty').addEventListener('input', updateTotal);

/* ================= Form → WhatsApp ================= */
document.getElementById('orderForm').addEventListener('submit', function(e){
  e.preventDefault();
  var f = e.target, msg = document.getElementById('formMsg');
  var name = f.name.value.trim(), phone = f.phone.value.trim(), addr = f.address.value.trim();
  msg.classList.remove('hidden');
  if (!name || !/^01[0-9]{9}$/.test(phone) || !addr){ msg.textContent = tr('f_err'); msg.style.color='#e5594f'; return; }
  var q = Math.max(1, Math.min(10, parseInt(f.qty.value,10)||1));
  var pk = f.pkg.options[f.pkg.selectedIndex].textContent;
  var text = tr('wa_head') + '\n' +
    tr('wa_name') + ': ' + name + '\n' + tr('wa_phone') + ': ' + phone + '\n' + tr('wa_addr') + ': ' + addr + '\n' +
    tr('wa_pkg') + ': ' + pk + '\n' + tr('wa_qty') + ': ' + q + '\n' + tr('wa_total') + ': ' + money(PRICE[f.pkg.value]*q) +
    (f.note.value.trim() ? '\n' + tr('wa_note') + ': ' + f.note.value.trim() : '');
  msg.style.color = ''; msg.textContent = tr('f_ok');
  window.open('https://wa.me/8801712131415?text=' + encodeURIComponent(text), '_blank');
  /* To store orders too: also POST the same data to Google Sheets (Apps Script) or Formspree here. */
});

/* ================= Animations ================= */
var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function startAOS(){ if (window.AOS) AOS.init({ once:true, duration:700, easing:'ease-out-cubic', offset:60, disable: reduce }); }

// counters (started after the intro, see below)
function startCounters(){
  var els = document.querySelectorAll('[data-count]');
  function run(el){
    var end = +el.dataset.count, t0 = null, dur = 1400;
    function step(ts){
      if(!t0) t0 = ts; var p = Math.min((ts-t0)/dur,1), v = Math.round(end*(1-Math.pow(1-p,3)));
      el.textContent = nf(v);
      if(p<1) requestAnimationFrame(step); else el.dataset.done = '1';
    }
    reduce ? (el.textContent = nf(end), el.dataset.done='1') : requestAnimationFrame(step);
  }
  if(!('IntersectionObserver' in window)){ els.forEach(run); return; }
  var io = new IntersectionObserver(function(en){ en.forEach(function(x){ if(x.isIntersecting){ run(x.target); io.unobserve(x.target);} }); },{threshold:.5});
  els.forEach(function(el){ io.observe(el); });
}

// scroll: progress bar, nav style, light parallax
var menuOpen = false;
var nav = document.getElementById('nav'), bar = document.getElementById('progress'), par = document.querySelectorAll('[data-speed]'), tick = false;
function onScroll(){
  var y = window.scrollY, h = document.documentElement.scrollHeight - window.innerHeight;
  bar.style.transform = 'scaleX(' + (h>0 ? y/h : 0) + ')';
  var scrolled = y > 20 || menuOpen;
  nav.style.background = scrolled ? 'color-mix(in srgb, var(--bg) 82%, transparent)' : 'transparent';
  nav.style.backdropFilter = scrolled ? 'blur(12px)' : 'none';
  nav.style.borderBottom = scrolled ? '1px solid var(--line)' : '1px solid transparent';
  if(!reduce && y < 900) par.forEach(function(el){ el.style.translate = '0 ' + (y * parseFloat(el.dataset.speed)) + 'px'; });
  tick = false;
}
window.addEventListener('scroll', function(){ if(!tick){ tick = true; requestAnimationFrame(onScroll); } }, {passive:true});
onScroll();

// card spotlight
document.querySelectorAll('.glow-card').forEach(function(c){
  c.addEventListener('pointermove', function(e){
    var r = c.getBoundingClientRect();
    c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    c.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });
});

/* ================= Menu (mobile drawer + active link) ================= */
(function(){
  var burger = document.getElementById('burger'), menu = document.getElementById('mobileMenu');
  function setMenu(open){
    menuOpen = open;
    burger.classList.toggle('open', open);
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    onScroll();
  }
  burger.addEventListener('click', function(e){ e.stopPropagation(); setMenu(!menuOpen); });
  menu.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ setMenu(false); }); });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape' && menuOpen) setMenu(false); });
  document.addEventListener('click', function(e){ if(menuOpen && !nav.contains(e.target)) setMenu(false); });
  window.matchMedia('(min-width:1024px)').addEventListener('change', function(e){ if(e.matches) setMenu(false); });

  // highlight the link of the section currently in view
  var links = document.querySelectorAll('[data-spy]'), map = {};
  links.forEach(function(a){ var id = a.getAttribute('href').slice(1); (map[id] = map[id] || []).push(a); });
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(en){
      en.forEach(function(x){
        if(!x.isIntersecting) return;
        links.forEach(function(l){ l.classList.remove('active'); });
        (map[x.target.id] || []).forEach(function(l){ l.classList.add('active'); });
      });
    }, { rootMargin:'-40% 0px -55% 0px' });
    document.querySelectorAll('main section[id]').forEach(function(s){ io.observe(s); });
  }
})();

/* ================= Page-load intro ================= */
(function(){
  var pre = document.getElementById('preloader'), t0 = performance.now(), done = false;
  function reveal(){
    if(done) return; done = true;
    var wait = reduce ? 0 : Math.max(0, 700 - (performance.now() - t0));   // show the intro at least 0.7s
    setTimeout(function(){
      pre.classList.add('hide');
      document.documentElement.classList.add('ready');          // nav drops in
      var img = document.querySelector('.hero-img');
      if(img) img.classList.add('loaded');                      // hero image un-blurs
      startAOS();                                               // hero text / cards animate now
      startCounters();
    }, wait);
  }
  if(document.readyState === 'complete') reveal(); else window.addEventListener('load', reveal);
  setTimeout(reveal, 3500);                                     // safety net on very slow networks
})();

applyLang();

})();
