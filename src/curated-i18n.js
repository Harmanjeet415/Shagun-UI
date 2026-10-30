const rows = [
  ['CELEBRATION STUDIO', 'समारोह स्टूडियो', 'ਜਸ਼ਨ ਸਟੂਡੀਓ', 'تقریب اسٹوڈیو'],
  ['One beautiful flow, from invitation to blessing.', 'निमंत्रण से आशीर्वाद तक, एक सुंदर सफ़र।', 'ਸੱਦੇ ਤੋਂ ਅਸੀਸ ਤੱਕ, ਇੱਕ ਸੋਹਣਾ ਸਫ਼ਰ।', 'دعوت سے دعا تک، ایک خوبصورت سفر۔'],
  ['Design, preview, share and manage the entire celebration from a single synchronized workspace.', 'एक ही जगह से पूरे समारोह को डिज़ाइन करें, देखें, साझा करें और संभालें।', 'ਇੱਕੋ ਥਾਂ ਤੋਂ ਪੂਰੇ ਸਮਾਗਮ ਨੂੰ ਡਿਜ਼ਾਇਨ ਕਰੋ, ਵੇਖੋ, ਸਾਂਝਾ ਕਰੋ ਅਤੇ ਸੰਭਾਲੋ।', 'ایک ہی جگہ سے پوری تقریب کو ڈیزائن کریں، دیکھیں، شیئر کریں اور سنبھالیں۔'],
  ['Invite', 'निमंत्रण', 'ਸੱਦਾ', 'دعوت'],
  ['Guest view', 'अतिथि दृश्य', 'ਮਹਿਮਾਨ ਝਲਕ', 'مہمان منظر'],
  ['Menu', 'मेन्यू', 'ਮੀਨੂ', 'مینو'],
  ['Shagun', 'शगुन', 'ਸ਼ਗਨ', 'شگن'],
  ['Create the celebration', 'समारोह बनाएँ', 'ਸਮਾਗਮ ਬਣਾਓ', 'تقریب بنائیں'],
  ['See exactly what guests see', 'अतिथियों का अनुभव देखें', 'ਮਹਿਮਾਨਾਂ ਦਾ ਅਨੁਭਵ ਵੇਖੋ', 'مہمانوں کا تجربہ دیکھیں'],
  ['Curate the feast', 'भोज का मेन्यू बनाएँ', 'ਦਾਅਵਤ ਦਾ ਮੀਨੂ ਬਣਾਓ', 'ضیافت کا مینو بنائیں'],
  ['Track every blessing', 'हर आशीर्वाद का हिसाब रखें', 'ਹਰ ਅਸੀਸ ਦਾ ਹਿਸਾਬ ਰੱਖੋ', 'ہر دعا کا حساب رکھیں'],
  ['Interactive prototype', 'इंटरैक्टिव प्रोटोटाइप', 'ਇੰਟਰਐਕਟਿਵ ਪ੍ਰੋਟੋਟਾਈਪ', 'انٹرایکٹو نمونہ'],
  ['No real money moves', 'कोई वास्तविक भुगतान नहीं होता', 'ਕੋਈ ਅਸਲੀ ਭੁਗਤਾਨ ਨਹੀਂ ਹੁੰਦਾ', 'کوئی حقیقی ادائیگی نہیں ہوتی'],
  ['Working on', 'वर्तमान समारोह', 'ਮੌਜੂਦਾ ਸਮਾਗਮ', 'موجودہ تقریب'],
  ['Event owner', 'समारोह के मेज़बान', 'ਸਮਾਗਮ ਦਾ ਮੇਜ਼ਬਾਨ', 'تقریب کا میزبان'],
  ['Current celebration', 'वर्तमान समारोह', 'ਮੌਜੂਦਾ ਸਮਾਗਮ', 'موجودہ تقریب'],
  ['Event studio', 'समारोह स्टूडियो', 'ਸਮਾਗਮ ਸਟੂਡੀਓ', 'تقریب اسٹوڈیو'],
  ['Edit and share the invitation', 'निमंत्रण संपादित और साझा करें', 'ਸੱਦਾ ਸੋਧੋ ਅਤੇ ਸਾਂਝਾ ਕਰੋ', 'دعوت نامہ تبدیل اور شیئر کریں'],
  ['Guest preview', 'अतिथि पूर्वावलोकन', 'ਮਹਿਮਾਨ ਝਲਕ', 'مہمان پیش منظر'],
  ['See the invitation experience', 'निमंत्रण का अनुभव देखें', 'ਸੱਦੇ ਦਾ ਅਨੁਭਵ ਵੇਖੋ', 'دعوت نامے کا تجربہ دیکھیں'],
  ['Catering menu', 'भोजन मेन्यू', 'ਖਾਣੇ ਦਾ ਮੀਨੂ', 'کھانے کا مینو'],
  ['Manage dishes and caterer', 'व्यंजन और कैटरर संभालें', 'ਪਕਵਾਨ ਅਤੇ ਕੇਟਰਰ ਸੰਭਾਲੋ', 'کھانے اور کیٹرر کا انتظام کریں'],
  ['Shagun ledger', 'शगुन बही', 'ਸ਼ਗਨ ਖਾਤਾ', 'شگن کھاتہ'],
  ['View private gift records', 'निजी उपहार रिकॉर्ड देखें', 'ਨਿੱਜੀ ਤੋਹਫ਼ਾ ਰਿਕਾਰਡ ਵੇਖੋ', 'نجی تحفے کے ریکارڈ دیکھیں'],
  ['Local demonstration account', 'स्थानीय प्रदर्शन खाता', 'ਸਥਾਨਕ ਡੈਮੋ ਖਾਤਾ', 'مقامی نمائشی اکاؤنٹ'],
  ['Host workspace', 'मेज़बान कार्यक्षेत्र', 'ਮੇਜ਼ਬਾਨ ਵਰਕਸਪੇਸ', 'میزبان ورک اسپیس'],
  ['Create the invitation', 'निमंत्रण बनाएँ', 'ਸੱਦਾ ਬਣਾਓ', 'دعوت نامہ بنائیں'],
  ['Everything you change here appears instantly in the guest experience.', 'आपके किए गए बदलाव अतिथि अनुभव में तुरंत दिखाई देंगे।', 'ਤੁਹਾਡੇ ਕੀਤੇ ਬਦਲਾਅ ਮਹਿਮਾਨਾਂ ਦੇ ਅਨੁਭਵ ਵਿੱਚ ਤੁਰੰਤ ਦਿਖਾਈ ਦੇਣਗੇ।', 'آپ کی ہر تبدیلی مہمانوں کے تجربے میں فوراً نظر آئے گی۔'],
  ['Celebration details', 'समारोह का विवरण', 'ਸਮਾਗਮ ਦੀ ਜਾਣਕਾਰੀ', 'تقریب کی تفصیلات'],
  ['The essentials guests need at a glance', 'अतिथियों के लिए सभी ज़रूरी जानकारी', 'ਮਹਿਮਾਨਾਂ ਲਈ ਸਾਰੀ ਲੋੜੀਂਦੀ ਜਾਣਕਾਰੀ', 'مہمانوں کے لیے تمام ضروری معلومات'],
  ['Event type', 'समारोह का प्रकार', 'ਸਮਾਗਮ ਦੀ ਕਿਸਮ', 'تقریب کی قسم'],
  ['Names on the card', 'कार्ड पर नाम', 'ਕਾਰਡ ਉੱਤੇ ਨਾਮ', 'کارڈ پر نام'],
  ['Date', 'तारीख', 'ਮਿਤੀ', 'تاریخ'],
  ['Time', 'समय', 'ਸਮਾਂ', 'وقت'],
  ['Venue', 'स्थान', 'ਸਥਾਨ', 'مقام'],
  ['Address', 'पता', 'ਪਤਾ', 'پتہ'],
  ['Message for guests', 'अतिथियों के लिए संदेश', 'ਮਹਿਮਾਨਾਂ ਲਈ ਸੁਨੇਹਾ', 'مہمانوں کے لیے پیغام'],
  ['Invitation design', 'निमंत्रण डिज़ाइन', 'ਸੱਦੇ ਦਾ ਡਿਜ਼ਾਇਨ', 'دعوت نامے کا ڈیزائن'],
  ['Five cultural moods, crafted like printed keepsakes', 'पाँच सांस्कृतिक शैलियाँ, मुद्रित स्मृति-चिह्नों की तरह सजी हुईं', 'ਪੰਜ ਸੱਭਿਆਚਾਰਕ ਅੰਦਾਜ਼, ਛਪੇ ਯਾਦਗਾਰੀ ਕਾਰਡਾਂ ਵਾਂਗ ਸਜੇ ਹੋਏ', 'پانچ ثقافتی انداز، چھپی ہوئی یادگاروں کی طرح آراستہ'],
  ['See the envelope open', 'लिफ़ाफ़ा खुलते देखें', 'ਲਿਫ਼ਾਫ਼ਾ ਖੁਲ੍ਹਦਾ ਵੇਖੋ', 'لفافہ کھلتے دیکھیں'],
  ['Shagun settings', 'शगुन सेटिंग्स', 'ਸ਼ਗਨ ਸੈਟਿੰਗਾਂ', 'شگن کی ترتیبات'],
  ['Choose how blessings are received', 'आशीर्वाद प्राप्त करने का तरीका चुनें', 'ਸ਼ਗਨ ਪ੍ਰਾਪਤ ਕਰਨ ਦਾ ਤਰੀਕਾ ਚੁਣੋ', 'شگن وصول کرنے کا طریقہ منتخب کریں'],
  ['India', 'भारत', 'ਭਾਰਤ', 'بھارت'],
  ['Pakistan', 'पाकिस्तान', 'ਪਾਕਿਸਤਾਨ', 'پاکستان'],
  ['Receiver UPI ID', 'प्राप्तकर्ता UPI आईडी', 'ਪ੍ਰਾਪਤਕਰਤਾ UPI ਆਈਡੀ', 'وصول کنندہ کی UPI آئی ڈی'],
  ['Receiver Raast ID', 'प्राप्तकर्ता Raast आईडी', 'ਪ੍ਰਾਪਤਕਰਤਾ Raast ਆਈਡੀ', 'وصول کنندہ کی Raast آئی ڈی'],
  ['Let guests send Shagun', 'अतिथियों को शगुन भेजने दें', 'ਮਹਿਮਾਨਾਂ ਨੂੰ ਸ਼ਗਨ ਭੇਜਣ ਦਿਓ', 'مہمانوں کو شگن بھیجنے دیں'],
  ['Payments remain simulated in this prototype', 'इस प्रोटोटाइप में भुगतान केवल सिमुलेट किए जाते हैं', 'ਇਸ ਪ੍ਰੋਟੋਟਾਈਪ ਵਿੱਚ ਭੁਗਤਾਨ ਸਿਰਫ਼ ਡੈਮੋ ਹਨ', 'اس نمونے میں ادائیگیاں صرف نمائشی ہیں'],
  ['Guest list', 'अतिथि सूची', 'ਮਹਿਮਾਨ ਸੂਚੀ', 'مہمانوں کی فہرست'],
  ['Create personal links for individuals or whole families', 'व्यक्तियों या पूरे परिवार के लिए व्यक्तिगत लिंक बनाएँ', 'ਵਿਅਕਤੀਆਂ ਜਾਂ ਪੂਰੇ ਪਰਿਵਾਰ ਲਈ ਨਿੱਜੀ ਲਿੰਕ ਬਣਾਓ', 'افراد یا پورے خاندان کے لیے ذاتی روابط بنائیں'],
  ['Guest or family name', 'अतिथि या परिवार का नाम', 'ਮਹਿਮਾਨ ਜਾਂ ਪਰਿਵਾਰ ਦਾ ਨਾਮ', 'مہمان یا خاندان کا نام'],
  ['Phone', 'फ़ोन', 'ਫ਼ੋਨ', 'فون'],
  ['People', 'सदस्यों की संख्या', 'ਮੈਂਬਰ', 'افراد'],
  ['Add', 'जोड़ें', 'ਸ਼ਾਮਲ ਕਰੋ', 'شامل کریں'],
  ['Share invitation', 'निमंत्रण साझा करें', 'ਸੱਦਾ ਸਾਂਝਾ ਕਰੋ', 'دعوت نامہ شیئر کریں'],
  ['A polished message, ready for WhatsApp or SMS', 'WhatsApp या SMS के लिए तैयार सुंदर संदेश', 'WhatsApp ਜਾਂ SMS ਲਈ ਤਿਆਰ ਸੋਹਣਾ ਸੁਨੇਹਾ', 'WhatsApp یا SMS کے لیے تیار خوبصورت پیغام'],
  ['Copy for SMS', 'SMS के लिए कॉपी करें', 'SMS ਲਈ ਕਾਪੀ ਕਰੋ', 'SMS کے لیے کاپی کریں'],
  ['Personal links identify invitation records; production identity verification needs a real OTP provider.', 'व्यक्तिगत लिंक निमंत्रण रिकॉर्ड पहचानते हैं; वास्तविक पहचान सत्यापन के लिए OTP सेवा आवश्यक है।', 'ਨਿੱਜੀ ਲਿੰਕ ਸੱਦੇ ਦੇ ਰਿਕਾਰਡ ਪਛਾਣਦੇ ਹਨ; ਅਸਲੀ ਪਛਾਣ ਲਈ OTP ਸੇਵਾ ਲੋੜੀਂਦੀ ਹੈ।', 'ذاتی روابط دعوت کے ریکارڈ شناخت کرتے ہیں؛ حقیقی شناخت کے لیے OTP سروس ضروری ہے۔'],
  ['Guest experience', 'अतिथि अनुभव', 'ਮਹਿਮਾਨ ਅਨੁਭਵ', 'مہمان کا تجربہ'],
  ['See what your guests see', 'देखें कि आपके अतिथियों को क्या दिखाई देगा', 'ਵੇਖੋ ਕਿ ਮਹਿਮਾਨਾਂ ਨੂੰ ਕੀ ਦਿਖਾਈ ਦੇਵੇਗਾ', 'دیکھیں کہ مہمانوں کو کیا نظر آئے گا'],
  ['A warm, focused invitation journey designed first for the phone.', 'फ़ोन के लिए बनाया गया सहज और आत्मीय निमंत्रण अनुभव।', 'ਫ਼ੋਨ ਲਈ ਬਣਾਇਆ ਗਿਆ ਸੁਖਦ ਅਤੇ ਨਿੱਘਾ ਸੱਦਾ ਅਨੁਭਵ।', 'فون کے لیے بنایا گیا خوشگوار اور پُرخلوص دعوتی تجربہ۔'],
  ['Live preview', 'लाइव पूर्वावलोकन', 'ਲਾਈਵ ਝਲਕ', 'براہ راست پیش منظر'],
  ['For you & your family', 'आपके और आपके परिवार के लिए', 'ਤੁਹਾਡੇ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਲਈ', 'آپ اور آپ کے خاندان کے لیے'],
  ['Replay envelope', 'लिफ़ाफ़ा फिर चलाएँ', 'ਲਿਫ਼ਾਫ਼ਾ ਮੁੜ ਚਲਾਓ', 'لفافہ دوبارہ چلائیں'],
  ['Open invitation', 'निमंत्रण खोलें', 'ਸੱਦਾ ਖੋਲ੍ਹੋ', 'دعوت نامہ کھولیں'],
  ['Will you celebrate with us?', 'क्या आप हमारे साथ उत्सव में शामिल होंगे?', 'ਕੀ ਤੁਸੀਂ ਸਾਡੇ ਨਾਲ ਖੁਸ਼ੀ ਮਨਾਉਗੇ?', 'کیا آپ ہمارے ساتھ خوشی منائیں گے؟'],
  ['Your reply goes directly to the host', 'आपका उत्तर सीधे मेज़बान तक पहुँचेगा', 'ਤੁਹਾਡਾ ਜਵਾਬ ਸਿੱਧਾ ਮੇਜ਼ਬਾਨ ਤੱਕ ਪਹੁੰਚੇਗਾ', 'آپ کا جواب براہ راست میزبان تک پہنچے گا'],
  ['Joyfully accept', 'सहर्ष स्वीकार', 'ਖੁਸ਼ੀ ਨਾਲ ਸਵੀਕਾਰ', 'خوشی سے قبول'],
  ['Maybe', 'शायद', 'ਸ਼ਾਇਦ', 'شاید'],
  ["Can't attend", 'शामिल नहीं हो पाएँगे', 'ਸ਼ਾਮਲ ਨਹੀਂ ਹੋ ਸਕਦੇ', 'شرکت نہیں کر سکتے'],
  ['Number attending', 'शामिल होने वालों की संख्या', 'ਆਉਣ ਵਾਲਿਆਂ ਦੀ ਗਿਣਤੀ', 'آنے والوں کی تعداد'],
  ['Save RSVP', 'RSVP सहेजें', 'RSVP ਸੰਭਾਲੋ', 'RSVP محفوظ کریں'],
  ["What's on the menu", 'मेन्यू में क्या है', 'ਮੀਨੂ ਵਿੱਚ ਕੀ ਹੈ', 'مینو میں کیا ہے'],
  ['Send Shagun', 'शगुन भेजें', 'ਸ਼ਗਨ ਭੇਜੋ', 'شگن بھیجیں'],
  ['Choose an auspicious amount and leave a personal blessing.', 'शुभ राशि चुनें और अपना आशीर्वाद लिखें।', 'ਸ਼ੁਭ ਰਕਮ ਚੁਣੋ ਅਤੇ ਆਪਣੀ ਅਸੀਸ ਲਿਖੋ।', 'مبارک رقم منتخب کریں اور اپنی دعا لکھیں۔'],
  ['Explicitly simulated payment', 'स्पष्ट रूप से सिमुलेट किया गया भुगतान', 'ਸਪਸ਼ਟ ਡੈਮੋ ਭੁਗਤਾਨ', 'واضح نمائشی ادائیگی'],
  ['Your name', 'आपका नाम', 'ਤੁਹਾਡਾ ਨਾਮ', 'آپ کا نام'],
  ['Blessing', 'आशीर्वाद संदेश', 'ਅਸੀਸ', 'دعا'],
  ['You record', 'दर्ज की जाने वाली राशि', 'ਦਰਜ ਕੀਤੀ ਜਾਣ ਵਾਲੀ ਰਕਮ', 'درج کی جانے والی رقم'],
  ['Status: Pending demo record', 'स्थिति: लंबित डेमो रिकॉर्ड', 'ਸਥਿਤੀ: ਬਕਾਇਆ ਡੈਮੋ ਰਿਕਾਰਡ', 'حیثیت: زیر التوا نمائشی ریکارڈ'],
  ['Record simulated UPI', 'सिमुलेटेड UPI दर्ज करें', 'ਡੈਮੋ UPI ਦਰਜ ਕਰੋ', 'نمائشی UPI درج کریں'],
  ['Catering studio', 'भोजन प्रबंधन', 'ਖਾਣਾ ਪ੍ਰਬੰਧਨ', 'ضیافت کا انتظام'],
  ['A guest-friendly menu with clear dietary markers and thoughtful descriptions.', 'स्पष्ट आहार चिह्नों और उपयोगी विवरण वाला अतिथि-अनुकूल मेन्यू।', 'ਸਪਸ਼ਟ ਖੁਰਾਕ ਚਿੰਨ੍ਹਾਂ ਅਤੇ ਲਾਭਦਾਇਕ ਵੇਰਵੇ ਵਾਲਾ ਮਹਿਮਾਨ-ਅਨੁਕੂਲ ਮੀਨੂ।', 'واضح غذائی نشانات اور مفید تفصیل والا مہمان دوست مینو۔'],
  ['Catering partner', 'कैटरिंग साझेदार', 'ਕੇਟਰਿੰਗ ਸਾਥੀ', 'کیٹرنگ پارٹنر'],
  ['Show menu on invitation', 'निमंत्रण पर मेन्यू दिखाएँ', 'ਸੱਦੇ ਉੱਤੇ ਮੀਨੂ ਦਿਖਾਓ', 'دعوت نامے پر مینو دکھائیں'],
  ['Guests can view but never edit it', 'अतिथि इसे देख सकते हैं, बदल नहीं सकते', 'ਮਹਿਮਾਨ ਵੇਖ ਸਕਦੇ ਹਨ, ਬਦਲ ਨਹੀਂ ਸਕਦੇ', 'مہمان دیکھ سکتے ہیں، تبدیل نہیں کر سکتے'],
  ['Caterer', 'कैटरर', 'ਕੇਟਰਰ', 'کیٹرر'],
  ['Add a printed menu photo', 'मुद्रित मेन्यू की तस्वीर जोड़ें', 'ਛਪੇ ਮੀਨੂ ਦੀ ਤਸਵੀਰ ਸ਼ਾਮਲ ਕਰੋ', 'چھپے ہوئے مینو کی تصویر شامل کریں'],
  ['JPG or PNG · stored locally in this prototype', 'JPG या PNG · इस प्रोटोटाइप में स्थानीय रूप से सहेजा जाता है', 'JPG ਜਾਂ PNG · ਇਸ ਪ੍ਰੋਟੋਟਾਈਪ ਵਿੱਚ ਸਥਾਨਕ ਤੌਰ ਤੇ ਸੰਭਾਲੀ ਜਾਂਦੀ ਹੈ', 'JPG یا PNG · اس نمونے میں مقامی طور پر محفوظ ہوتی ہے'],
  ['Add a dish or drink', 'व्यंजन या पेय जोड़ें', 'ਪਕਵਾਨ ਜਾਂ ਪੇਅ ਸ਼ਾਮਲ ਕਰੋ', 'کھانا یا مشروب شامل کریں'],
  ['Name', 'नाम', 'ਨਾਮ', 'نام'],
  ['Short description', 'संक्षिप्त विवरण', 'ਛੋਟਾ ਵੇਰਵਾ', 'مختصر تفصیل'],
  ['Course', 'श्रेणी', 'ਸ਼੍ਰੇਣੀ', 'زمرہ'],
  ['Type', 'प्रकार', 'ਕਿਸਮ', 'قسم'],
  ['Add to menu', 'मेन्यू में जोड़ें', 'ਮੀਨੂ ਵਿੱਚ ਸ਼ਾਮਲ ਕਰੋ', 'مینو میں شامل کریں'],
  ['Current menu', 'वर्तमान मेन्यू', 'ਮੌਜੂਦਾ ਮੀਨੂ', 'موجودہ مینو'],
  ['Private host ledger', 'मेज़बान की निजी बही', 'ਮੇਜ਼ਬਾਨ ਦਾ ਨਿੱਜੀ ਖਾਤਾ', 'میزبان کا نجی کھاتہ'],
  ['Every blessing, remembered', 'हर आशीर्वाद, सहेजा हुआ', 'ਹਰ ਅਸੀਸ, ਸੰਭਾਲੀ ਹੋਈ', 'ہر دعا، محفوظ'],
  ['Digital demo records and physical cash stay clearly distinguished.', 'डिजिटल डेमो रिकॉर्ड और नकद राशि स्पष्ट रूप से अलग रहती है।', 'ਡਿਜ਼ਿਟਲ ਡੈਮੋ ਰਿਕਾਰਡ ਅਤੇ ਨਕਦ ਰਕਮ ਸਪਸ਼ਟ ਤੌਰ ਤੇ ਵੱਖ ਰਹਿੰਦੇ ਹਨ।', 'نمائشی ڈیجیٹل ریکارڈ اور نقد رقم واضح طور پر الگ رہتے ہیں۔'],
  ['Total recorded', 'कुल दर्ज राशि', 'ਕੁੱਲ ਦਰਜ ਰਕਮ', 'کل درج رقم'],
  ['Record physical cash', 'नकद शगुन दर्ज करें', 'ਨਕਦ ਸ਼ਗਨ ਦਰਜ ਕਰੋ', 'نقد شگن درج کریں'],
  ['A manual record, never shown as digitally verified', 'मैन्युअल रिकॉर्ड, डिजिटल रूप से सत्यापित नहीं', 'ਹੱਥੋਂ ਦਰਜ ਰਿਕਾਰਡ, ਡਿਜ਼ਿਟਲ ਤਸਦੀਕ ਨਹੀਂ', 'دستی ریکارڈ، ڈیجیٹل طور پر تصدیق شدہ نہیں'],
  ['Sender', 'भेजने वाला', 'ਭੇਜਣ ਵਾਲਾ', 'بھیجنے والا'],
  ['Amount', 'राशि', 'ਰਕਮ', 'رقم'],
  ['Record', 'दर्ज करें', 'ਦਰਜ ਕਰੋ', 'درج کریں'],
  ['Shagun received', 'प्राप्त शगुन', 'ਮਿਲਿਆ ਸ਼ਗਨ', 'موصولہ شگن'],
  ['Pending and reported records are not verified bank transactions. Production verification must happen server-side.', 'लंबित और रिपोर्ट किए गए रिकॉर्ड सत्यापित बैंक लेनदेन नहीं हैं। वास्तविक सत्यापन सर्वर पर होना चाहिए।', 'ਬਕਾਇਆ ਅਤੇ ਰਿਪੋਰਟ ਕੀਤੇ ਰਿਕਾਰਡ ਤਸਦੀਕਸ਼ੁਦਾ ਬੈਂਕ ਲੈਣ-ਦੇਣ ਨਹੀਂ ਹਨ। ਅਸਲੀ ਵਰਤੋਂ ਵਿੱਚ ਤਸਦੀਕ ਸਰਵਰ ਉੱਤੇ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ।', 'زیر التوا اور رپورٹ شدہ ریکارڈ تصدیق شدہ بینک لین دین نہیں ہیں۔ اصل نظام میں تصدیق سرور پر ہونی چاہیے۔'],
  ['Pending', 'लंबित', 'ਬਕਾਇਆ', 'زیر التوا'],
  ['Attending', 'शामिल हो रहे हैं', 'ਆ ਰਹੇ ਹਨ', 'شرکت کر رہے ہیں'],
  ['Verified', 'सत्यापित', 'ਤਸਦੀਕਸ਼ੁਦਾ', 'تصدیق شدہ'],
  ['Reported', 'दर्ज किया गया', 'ਦਰਜ ਕੀਤਾ', 'درج شدہ'],
  ['Failed', 'असफल', 'ਅਸਫਲ', 'ناکام'],
  ['Not sent', 'नहीं भेजा गया', 'ਨਹੀਂ ਭੇਜਿਆ', 'نہیں بھیجا'],
  ['Together with their families', 'अपने परिवारों के साथ', 'ਆਪਣੇ ਪਰਿਵਾਰਾਂ ਨਾਲ', 'اپنے خاندانوں کے ساتھ'],
  ['Bless our new home', 'हमारे नए घर को आशीर्वाद दें', 'ਸਾਡੇ ਨਵੇਂ ਘਰ ਨੂੰ ਅਸੀਸ ਦਿਓ', 'ہمارے نئے گھر کو دعا دیں'],
  ['Wedding', 'शादी', 'ਵਿਆਹ', 'شادی'],
  ['Reception', 'स्वागत समारोह', 'ਰਿਸੈਪਸ਼ਨ', 'استقبالیہ'],
  ['Engagement', 'सगाई', 'ਮੰਗਣੀ', 'منگنی'],
  ['Birthday', 'जन्मदिन', 'ਜਨਮਦਿਨ', 'سالگرہ'],
  ['Housewarming', 'गृह प्रवेश', 'ਘਰ ਪ੍ਰਵੇਸ਼', 'گھر کی خوشی'],
  ['Starters', 'शुरुआती व्यंजन', 'ਸਟਾਰਟਰ', 'ابتدائی پکوان'],
  ['Mains', 'मुख्य व्यंजन', 'ਮੁੱਖ ਪਕਵਾਨ', 'مرکزی پکوان'],
  ['Breads & rice', 'रोटी और चावल', 'ਰੋਟੀ ਅਤੇ ਚੌਲ', 'روٹی اور چاول'],
  ['Desserts', 'मिठाइयाँ', 'ਮਿਠਾਈਆਂ', 'میٹھے'],
  ['Beverages', 'पेय', 'ਪੀਣ ਵਾਲੀਆਂ ਚੀਜ਼ਾਂ', 'مشروبات'],
  ['Vegetarian', 'शाकाहारी', 'ਸ਼ਾਕਾਹਾਰੀ', 'سبزی خور'],
  ['Non-vegetarian', 'मांसाहारी', 'ਮਾਸਾਹਾਰੀ', 'گوشت کے پکوان'],
  ['Drink', 'पेय', 'ਪੇਅ', 'مشروب'],
  ['Your personal invitation links will appear here.', 'आपके व्यक्तिगत निमंत्रण लिंक यहाँ दिखाई देंगे।', 'ਤੁਹਾਡੇ ਨਿੱਜੀ ਸੱਦਾ ਲਿੰਕ ਇੱਥੇ ਦਿਖਾਈ ਦੇਣਗੇ।', 'آپ کے ذاتی دعوتی روابط یہاں نظر آئیں گے۔'],
  ['Shagun records will appear here.', 'शगुन के रिकॉर्ड यहाँ दिखाई देंगे।', 'ਸ਼ਗਨ ਦੇ ਰਿਕਾਰਡ ਇੱਥੇ ਦਿਖਾਈ ਦੇਣਗੇ।', 'شگن کے ریکارڈ یہاں نظر آئیں گے۔'],
  ['Add a guest name and phone number', 'अतिथि का नाम और फ़ोन नंबर जोड़ें', 'ਮਹਿਮਾਨ ਦਾ ਨਾਮ ਅਤੇ ਫ਼ੋਨ ਨੰਬਰ ਸ਼ਾਮਲ ਕਰੋ', 'مہمان کا نام اور فون نمبر شامل کریں'],
  ['Guest added with a personal link', 'व्यक्तिगत लिंक के साथ अतिथि जोड़ा गया', 'ਨਿੱਜੀ ਲਿੰਕ ਨਾਲ ਮਹਿਮਾਨ ਸ਼ਾਮਲ ਕੀਤਾ ਗਿਆ', 'ذاتی رابطے کے ساتھ مہمان شامل کر دیا گیا'],
  ['Invitation message copied', 'निमंत्रण संदेश कॉपी हो गया', 'ਸੱਦਾ ਸੁਨੇਹਾ ਕਾਪੀ ਹੋ ਗਿਆ', 'دعوتی پیغام کاپی ہو گیا'],
  ['Add your name before sending Shagun', 'शगुन भेजने से पहले अपना नाम जोड़ें', 'ਸ਼ਗਨ ਭੇਜਣ ਤੋਂ ਪਹਿਲਾਂ ਆਪਣਾ ਨਾਮ ਲਿਖੋ', 'شگن بھیجنے سے پہلے اپنا نام لکھیں'],
  ['Pending demo Shagun recorded — no money moved', 'लंबित डेमो शगुन दर्ज हुआ — कोई पैसा नहीं भेजा गया', 'ਬਕਾਇਆ ਡੈਮੋ ਸ਼ਗਨ ਦਰਜ ਹੋਇਆ — ਕੋਈ ਪੈਸਾ ਨਹੀਂ ਭੇਜਿਆ ਗਿਆ', 'زیر التوا نمائشی شگن درج ہو گیا — کوئی رقم منتقل نہیں ہوئی'],
  ['Enter a dish or drink name', 'व्यंजन या पेय का नाम लिखें', 'ਪਕਵਾਨ ਜਾਂ ਪੇਅ ਦਾ ਨਾਮ ਲਿਖੋ', 'کھانے یا مشروب کا نام لکھیں'],
  ['Added to the guest menu', 'अतिथि मेन्यू में जोड़ दिया गया', 'ਮਹਿਮਾਨ ਮੀਨੂ ਵਿੱਚ ਸ਼ਾਮਲ ਕੀਤਾ ਗਿਆ', 'مہمانوں کے مینو میں شامل کر دیا گیا'],
  ['Removed from menu', 'मेन्यू से हटा दिया गया', 'ਮੀਨੂ ਤੋਂ ਹਟਾਇਆ ਗਿਆ', 'مینو سے ہٹا دیا گیا'],
  ['Enter sender and amount', 'भेजने वाले का नाम और राशि लिखें', 'ਭੇਜਣ ਵਾਲੇ ਦਾ ਨਾਮ ਅਤੇ ਰਕਮ ਲਿਖੋ', 'بھیجنے والے کا نام اور رقم لکھیں'],
  ['Cash Shagun recorded as reported', 'नकद शगुन रिपोर्टेड रिकॉर्ड के रूप में दर्ज हुआ', 'ਨਕਦ ਸ਼ਗਨ ਰਿਪੋਰਟ ਕੀਤੇ ਰਿਕਾਰਡ ਵਜੋਂ ਦਰਜ ਹੋਇਆ', 'نقد شگن رپورٹ شدہ ریکارڈ کے طور پر درج ہو گیا'],
]

const translations = {
  hi: Object.fromEntries(rows.map(([source, hindi]) => [source, hindi])),
  pa: Object.fromEntries(rows.map(([source, , punjabi]) => [source, punjabi])),
  ur: Object.fromEntries(rows.map(([source, , , urdu]) => [source, urdu])),
}

const nodeState = new WeakMap()
const attributeState = new WeakMap()
const skipSelector = '[translate="no"],script,style,code,input,textarea,.ms-message,.ms-card h2,.ms-card p,.ms-card em,.ms-menu-list p,.ms-ledger p'

function translateDynamic(value, language) {
  const units = {
    hi: { guests: 'अतिथि', items: 'आइटम', records: 'रिकॉर्ड', dishes: 'व्यंजन और पेय', catered: 'कैटरिंग:', blessing: 'के लिए आशीर्वाद' },
    pa: { guests: 'ਮਹਿਮਾਨ', items: 'ਆਈਟਮ', records: 'ਰਿਕਾਰਡ', dishes: 'ਪਕਵਾਨ ਅਤੇ ਪੇਅ', catered: 'ਕੇਟਰਿੰਗ:', blessing: 'ਲਈ ਅਸੀਸ' },
    ur: { guests: 'مہمان', items: 'آئٹمز', records: 'ریکارڈ', dishes: 'کھانے اور مشروبات', catered: 'کیٹرنگ:', blessing: 'کے لیے دعا' },
  }[language]
  if (!units) return value
  let match = value.match(/^(\d+) guests$/)
  if (match) return `${match[1]} ${units.guests}`
  match = value.match(/^(\d+) items$/)
  if (match) return `${match[1]} ${units.items}`
  match = value.match(/^(\d+) records$/)
  if (match) return `${match[1]} ${units.records}`
  match = value.match(/^(\d+) dishes and drinks$/)
  if (match) return `${match[1]} ${units.dishes}`
  match = value.match(/^Catered by (.+)$/)
  if (match) return `${units.catered} ${match[1]}`
  match = value.match(/^A blessing for (.+)$/)
  if (match) return language === 'ur' ? `${match[1]} ${units.blessing}` : `${match[1]} ${units.blessing}`
  return value
}

function translated(value, language) {
  if (language === 'en') return value
  return translations[language]?.[value] || translateDynamic(value, language)
}

function renderText(source, language) {
  const match = source.match(/^(\s*)([\s\S]*?)(\s*)$/)
  if (!match || !match[2]) return source
  return `${match[1]}${translated(match[2], language)}${match[3]}`
}

export function applyCuratedTranslation(root, language) {
  if (!root) return
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  let node = walker.nextNode()
  while (node) {
    const parent = node.parentElement
    if (parent && !parent.closest(skipSelector)) {
      const current = node.nodeValue || ''
      const previous = nodeState.get(node)
      const source = previous && current === previous.rendered ? previous.source : current
      const rendered = renderText(source, language)
      nodeState.set(node, { source, rendered })
      if (current !== rendered) node.nodeValue = rendered
    }
    node = walker.nextNode()
  }

  root.querySelectorAll('[placeholder]').forEach((element) => {
    const current = element.getAttribute('placeholder') || ''
    const previous = attributeState.get(element)
    const source = previous && current === previous.rendered ? previous.source : current
    const rendered = translated(source, language)
    attributeState.set(element, { source, rendered })
    if (current !== rendered) element.setAttribute('placeholder', rendered)
  })
}

export function watchCuratedTranslation(root, getLanguage) {
  let frame = 0
  const observer = new MutationObserver(() => {
    if (frame) return
    frame = window.requestAnimationFrame(() => {
      frame = 0
      applyCuratedTranslation(root, getLanguage())
    })
  })
  observer.observe(root, { childList: true, characterData: true, subtree: true })
  return () => {
    observer.disconnect()
    if (frame) window.cancelAnimationFrame(frame)
  }
}
