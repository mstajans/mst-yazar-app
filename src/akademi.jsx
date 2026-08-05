// ============================================================
// MST Akademi — Faz 14 kapsamında App.jsx'ten ayrıldı.
// İçerik: modül CSS'i, 10 modülün ders verisi ve MSTAkademi bileşeni.
// BACKEND_URL config.js'ten gelir (App.jsx ile ortak, döngüsel import yok).
// ============================================================
import React from "react";
import { BACKEND_URL } from "./config";

const AKADEMI_CSS_KODU = `
/* ══ MST YAZARLIK AKADEMİSİ CSS ══ */
@keyframes akGel{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@keyframes akGelS{from{opacity:0;transform:translateX(-18px)}to{opacity:1;transform:none}}
@keyframes akPar{0%,100%{opacity:.4}50%{opacity:1}}
@keyframes akSur{from{transform:scaleX(0)}to{transform:scaleX(1)}}
.ak-wrap{min-height:100vh;background:#050D1A;color:rgba(245,240,228,1);font-family:'Jost',sans-serif;font-weight:300}
.ak-ust{background:rgba(5,13,26,.95);border-bottom:1px solid rgba(201,162,75,.15);padding:12px 28px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100}
.ak-logo{font-family:'Cormorant Garamond',serif;font-size:14px;letter-spacing:.22em;background:linear-gradient(135deg,#8C6A22,#F0D68A,#C9A24B);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.ak-alt-logo{font-size:9px;letter-spacing:.28em;color:rgba(201,162,75,.5);margin-top:3px}
.ak-il-wrap{display:flex;align-items:center;gap:10px}
.ak-il-metin{font-size:10px;letter-spacing:.16em;color:rgba(245,240,228,.35)}
.ak-il-bar{width:100px;height:2px;background:rgba(201,162,75,.15)}
.ak-il-ic{height:100%;background:linear-gradient(90deg,#8C6A22,#F0D68A);transition:width .6s ease;transform-origin:left}
.ak-ic{max-width:780px;margin:0 auto;padding:44px 28px 80px}
.ak-rozet-wrap{display:flex;align-items:center;gap:12px;margin-bottom:28px;animation:akGel .6s both}
.ak-rozet{background:rgba(201,162,75,.1);border:1px solid rgba(201,162,75,.3);padding:5px 12px;font-size:9px;letter-spacing:.3em;color:#C9A24B}
.ak-modno{font-size:11px;color:rgba(245,240,228,.3);letter-spacing:.16em}
.ak-bas{font-family:'Cormorant Garamond',serif;font-size:clamp(26px,4.5vw,42px);font-weight:300;color:#F0D68A;line-height:1.15;margin-bottom:10px;animation:akGel .7s both .1s}
.ak-alt{font-size:14px;color:rgba(245,240,228,.5);margin-bottom:36px;animation:akGel .6s both .2s}
.ak-asama-nav{display:flex;gap:0;border-bottom:1px solid rgba(201,162,75,.12);margin-bottom:36px;overflow-x:auto;animation:akGel .6s both .25s}
.ak-asama-nav::-webkit-scrollbar{height:0}
.ak-asama-btn{background:none;border:none;border-bottom:2px solid transparent;padding:10px 18px;font-family:'Jost',sans-serif;font-size:10px;letter-spacing:.18em;color:rgba(245,240,228,.3);cursor:pointer;transition:all .2s;white-space:nowrap;display:flex;align-items:center;gap:7px}
.ak-asama-btn.ak{color:#F0D68A;border-bottom-color:#C9A24B}
.ak-asama-btn:hover:not(.ak){color:rgba(245,240,228,.6)}
.ak-no{width:18px;height:18px;border:1px solid currentColor;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:8px;flex-shrink:0}
.ak-asama-btn.tam .ak-no{background:rgba(109,191,138,.15);border-color:rgba(109,191,138,.5);color:rgba(109,191,138,.9)}
.ak-blok{animation:akGelS .5s both}
.ak-senaryo{border-left:3px solid rgba(201,162,75,.45);background:rgba(201,162,75,.04);padding:24px 28px;margin-bottom:28px}
.ak-senaryo-et{font-size:9px;letter-spacing:.36em;color:rgba(201,162,75,.55);margin-bottom:14px}
.ak-senaryo-m{font-size:14.5px;color:rgba(245,240,228,.72);line-height:1.92}
.ak-senaryo-m strong{color:#F0D68A;font-weight:400}
.ak-ayirac{display:flex;align-items:center;gap:14px;margin:20px 0;font-size:11px;letter-spacing:.18em;color:rgba(245,240,228,.25)}
.ak-ayirac::before,.ak-ayirac::after{content:'';flex:1;height:1px;background:rgba(245,240,228,.07)}
.ak-soru{border:1px solid rgba(201,162,75,.32);padding:22px 26px;margin-bottom:28px;background:rgba(201,162,75,.04)}
.ak-soru-et{font-size:9px;letter-spacing:.28em;color:rgba(201,162,75,.55);margin-bottom:12px}
.ak-soru-m{font-family:'Cormorant Garamond',serif;font-size:20px;color:#F0D68A;line-height:1.35}
.ak-kiy{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:28px}
@media(max-width:560px){.ak-kiy{grid-template-columns:1fr}}
.ak-kiy-k{padding:20px 22px;border:1px solid}
.ak-kiy-k.y{border-color:rgba(220,80,80,.22);background:rgba(220,80,80,.03)}
.ak-kiy-k.d{border-color:rgba(109,191,138,.22);background:rgba(109,191,138,.03)}
.ak-kiy-bas{font-size:9px;letter-spacing:.2em;margin-bottom:12px;display:flex;align-items:center;gap:7px}
.ak-kiy-k.y .ak-kiy-bas{color:rgba(220,100,100,.65)}
.ak-kiy-k.d .ak-kiy-bas{color:rgba(109,191,138,.75)}
.ak-kiy-m{font-size:13px;color:rgba(245,240,228,.65);line-height:1.82;margin-bottom:7px;padding-left:14px;position:relative}
.ak-kiy-m::before{content:'—';position:absolute;left:0}
.ak-kiy-k.y .ak-kiy-m::before{color:rgba(220,100,100,.3)}
.ak-kiy-k.d .ak-kiy-m::before{color:rgba(109,191,138,.35)}
.ak-derin{margin-bottom:28px}
.ak-derin-bas{font-family:'Cormorant Garamond',serif;font-size:21px;color:#F0D68A;margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid rgba(201,162,75,.12)}
.ak-derin-m{font-size:14px;color:rgba(245,240,228,.7);line-height:1.9;margin-bottom:12px}
.ak-vurgu{background:rgba(201,162,75,.07);border-left:2px solid rgba(201,162,75,.45);padding:12px 18px;margin:16px 0;font-family:'Cormorant Garamond',serif;font-size:17px;color:#F0D68A;line-height:1.45}
.ak-mad{display:flex;gap:10px;margin-bottom:9px;font-size:13.5px;color:rgba(245,240,228,.7);line-height:1.8}
.ak-mad-ikon{color:#C9A24B;flex-shrink:0;font-size:10px;margin-top:6px}
.ak-gorev{border:1px solid rgba(201,162,75,.38);padding:26px 30px;margin-bottom:28px;background:rgba(201,162,75,.04)}
.ak-gorev-et{font-size:9px;letter-spacing:.36em;color:#C9A24B;margin-bottom:14px}
.ak-gorev-bas{font-family:'Cormorant Garamond',serif;font-size:19px;color:#F0D68A;margin-bottom:10px}
.ak-gorev-m{font-size:13.5px;color:rgba(245,240,228,.7);line-height:1.85;margin-bottom:16px}
.ak-adim{display:flex;gap:12px;margin-bottom:10px;align-items:flex-start}
.ak-adim-no{width:22px;height:22px;border:1px solid rgba(201,162,75,.38);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:9px;color:#C9A24B;flex-shrink:0;margin-top:2px}
.ak-adim-m{font-size:13px;color:rgba(245,240,228,.68);line-height:1.78}
.ak-textarea{width:100%;padding:14px 16px;background:rgba(5,13,26,.8);border:1px solid rgba(201,162,75,.22);color:rgba(245,240,228,1);font-family:'Jost',sans-serif;font-size:14px;font-weight:300;resize:vertical;min-height:96px;margin-top:14px;outline:none;transition:border-color .25s;border-radius:0}
.ak-textarea:focus{border-color:rgba(201,162,75,.6)}
.ak-textarea::placeholder{color:rgba(245,240,228,.22)}
.ak-btn{padding:12px 26px;background:linear-gradient(135deg,rgba(140,106,34,.9),rgba(201,162,75,.85));border:none;color:#050D1A;font-family:'Jost',sans-serif;font-size:10px;font-weight:600;letter-spacing:.2em;cursor:pointer;transition:opacity .2s;margin-top:10px}
.ak-btn:hover{opacity:.88}
.ak-btn.ikincil{background:none;border:1px solid rgba(201,162,75,.35);color:#F0D68A}
.ak-yukl{display:none;align-items:center;gap:9px;padding:16px 0;font-size:11px;color:rgba(201,162,75,.55);letter-spacing:.12em}
.ak-yukl.goster{display:flex}
.ak-yukl-dot{width:4px;height:4px;border-radius:50%;background:#C9A24B;animation:akPar 1s ease infinite}
.ak-yukl-dot:nth-child(2){animation-delay:.2s}
.ak-yukl-dot:nth-child(3){animation-delay:.4s}
.ak-ai{display:none;background:rgba(10,22,40,.7);border:1px solid rgba(201,162,75,.18);padding:22px 26px;margin-top:0}
.ak-ai.goster{display:block;animation:akGel .5s both}
.ak-ai-et{font-size:9px;letter-spacing:.3em;color:rgba(201,162,75,.5);margin-bottom:12px;display:flex;align-items:center;gap:8px}
.ak-ai-et::before{content:'';width:5px;height:5px;border-radius:50%;background:#C9A24B;animation:akPar 1.5s ease infinite}
.ak-ai-m{font-size:14px;color:rgba(245,240,228,.72);line-height:1.88}
.ak-ai-puanlar{display:flex;gap:10px;margin-top:14px;flex-wrap:wrap}
.ak-puan{padding:7px 14px;font-size:11px;letter-spacing:.12em}
.ak-puan.iyi{border:1px solid rgba(109,191,138,.28);color:rgba(109,191,138,.8);background:rgba(109,191,138,.05)}
.ak-puan.gel{border:1px solid rgba(201,162,75,.28);color:rgba(201,162,75,.8);background:rgba(201,162,75,.05)}
.ak-ozet{border:1px solid rgba(201,162,75,.18);padding:22px 26px;margin-bottom:32px;background:rgba(201,162,75,.03)}
.ak-ozet-et{font-size:9px;letter-spacing:.26em;color:rgba(201,162,75,.55);margin-bottom:12px}
.ak-ozet-m{font-size:14px;color:rgba(245,240,228,.7);line-height:1.88}
.ak-anahtar{font-family:'Cormorant Garamond',serif;font-size:19px;color:#F0D68A;margin-top:12px;padding-top:12px;border-top:1px solid rgba(201,162,75,.12)}
.ak-tamam{background:rgba(109,191,138,.06);border:1px solid rgba(109,191,138,.18);padding:18px 22px;margin-bottom:28px;display:flex;align-items:center;gap:14px}
.ak-tamam-ikon{font-size:18px;color:rgba(109,191,138,.8)}
.ak-tamam-et{font-size:9px;letter-spacing:.2em;color:rgba(109,191,138,.65);margin-bottom:4px}
.ak-tamam-m{font-size:13px;color:rgba(245,240,228,.55)}
.ak-sonraki{display:flex;align-items:center;justify-content:space-between;border:1px solid rgba(201,162,75,.18);padding:18px 22px;cursor:pointer;transition:all .25s;text-decoration:none}
.ak-sonraki:hover{border-color:rgba(201,162,75,.45);background:rgba(201,162,75,.04)}
.ak-sonraki-et{font-size:9px;letter-spacing:.2em;color:rgba(245,240,228,.3)}
.ak-sonraki-bas{font-family:'Cormorant Garamond',serif;font-size:17px;color:#F0D68A;margin-top:3px}
.ak-sonraki-ok{font-size:22px;color:rgba(201,162,75,.45)}
`;

const MODULLER_DATA = [{'no': 1, 'bas': 'Sosyal medyada yazar kimliği', 'alt': 'Satıcı değil, değer üretici ol — en kritik farkı bugün öğreniyorsunuz', 'senaryo_et': 'TEMSİLİ SENARYO · sektörde sık görülen durumlardan derlenmiştir', 'senaryo': '2023\'te bir roman yazarı kitabını yayınladı. Heyecanla Instagram hesabı açtı, kitabının kapağını paylaştı: <strong>"Kitabım çıktı! Sipariş için bio\'daki linke tıklayın."</strong> Ertesi gün aynı paylaşım, farklı filtre. Üçüncü gün kitabın arka kapağından alıntı, altında link.', 'senaryo2': 'Benzer türde bir roman yazan başka bir yazar, <strong>kitabından hiç bahsetmeden</strong> 6 ay boyunca şunu paylaştı: yazma sürecini, karakterlerini nasıl geliştirdiğini, ilham aldığı kitapları. 6 ay sonra kitabını duyurduğunda <strong>4.200 takipçisi</strong> vardı. <strong>İlk haftada 340 adet sattı.</strong>', 'ayirac': 'AYNI DÖNEMDE', 'soru': 'Bu iki yazarın sonuçları arasındaki temel fark neydi? Analizi siz yapın — cevabı bir sonraki aşamada göreceğiz.', 'analiz_bas': 'Neden biri 12, diğeri 340 sattı?', 'analiz_m': "Fark içeriğin kalitesinde değildi. Fark <strong style='color:#F0D68A'>güven inşasında</strong> — sosyal medyanın gerçekte nasıl çalıştığını anlamakta.", 'vurgu': 'Az takipçiyle sürekli satış yapmaya çalışmak, tanımadığın birine ilk görüşmede ürün satmaya çalışmak gibidir.', 'yanlis': ['Kitap çıktı, hemen satmaya çalıştı', "Her paylaşım 'al beni' mesajı içerdi", 'Takipçiyle ilişki kurmadan önce satış istedi', '3 ayda tükendi, bıraktı'], 'dogru': ['Önce değer üretti, sonra kitabını duyurdu', 'Her paylaşım takipçiye bir şey öğretti', '6 ay güven inşa etti — sonra sattı', 'Takipçi kitabı zaten bekliyordu'], 'dogru_bas': '%80 değer, %20 tanıtım — tek kural', 'dogru_m': 'İçerik hiyerarşisi şöyle kurulur: %80 değer içeriği (okur bir şey öğrenir, hisseder, keşfeder), %20 tanıtım içeriği (kitabından bahsedersin ama güven zaten inşa edildi).', 'dogru_madler': ["Yazma sürecinden kesitler — 'bu sahneyi 7 kez yeniden yazdım, işte neden'", "Okuma tavsiyeleri — 'bu kitabı okuyun, şu yüzden'", 'Karakterlerini nasıl geliştirdiğin, ilham kaynaklarını', 'Türk edebiyatı, yazarlık dünyası üzerine görüşlerin'], 'vurgu2': 'Takipçi sayısı değil, takipçi kalitesi belirler. 500 gerçek okur, 10.000 ilgisiz takipçiden güçlüdür.', 'gorev_bas': 'Kendi hesabınızı analiz edin', 'gorev_m': 'Son 10 paylaşımınıza bakın — kaçı değer, kaçı satış? Sonra kitabınızdan hiç bahsetmeden bir sonraki paylaşımınızı planlayın ve aşağıya yazın.', 'gorev_adimlar': ['Son 10 paylaşımınızı gözden geçirin, değer/satış oranını zihinsel hesaplayın', 'Kitabınızdan hiç bahsetmeyen bir paylaşım fikri geliştirin', 'Planladığınız içeriği aşağıya yazın — AI değerlendirecek'], 'placeholder': "Paylaşmayı planladığınız içeriği yazın... Örn: 'Bir karakterin adını nasıl seçiyorum' veya 'Bu hafta okuduğum ve beni etkileyen 3 cümle'", 'ozet_m': 'Az takipçiyle çok satmaya çalışmak enerji israfıdır. Doğru sıra şudur: önce güven, sonra topluluk, sonra satış.', 'anahtar': 'Okur önce size güvenir, sonra kitabınızı alır.', 'sonraki_bas': 'Az takipçiyle ne yapılır — ilk 500 takipçiyi doğru büyütme'}, {'no': 2, 'bas': 'Az takipçiyle ne yapılır', 'alt': 'İlk 500 takipçiyi doğru büyütme — hız değil, kalite', 'senaryo_et': 'TEMSİLİ SENARYO · sektörde sık görülen durumlardan derlenmiştir', 'senaryo': 'Bir şiir yazarı hesap açar açmaz 5.000 takipçiye ulaşmak için toplu takip stratejisi uyguladı. Binlerce hesabı takip etti, geri takip bekleyenleri takip etti. 2 ayda <strong>4.800 takipçiye</strong> ulaştı. Mutluydu.', 'senaryo2': 'Kitap çıktığında büyük hayal kırıklığı: <strong>4.800 takipçisinden sadece 11 kişi</strong> kitabı satın aldı. Çünkü 4.789 kişi onu hiç tanımıyordu, sadece geri takip etmişti. Kitlesi yoktu — sadece rakamı vardı.', 'ayirac': 'AMA', 'soru': 'Gerçek takipçi kitlesi ile sahte takipçi kitlesi arasındaki fark nedir? Siz olsaydınız nasıl büyürdünüz?', 'analiz_bas': 'Rakam değil, ilişki', 'analiz_m': "Takipçi sayısı bir vanity metric'tir — gösteriş metriği. Asıl ölçüt şudur: paylaşım yaptığında kaç kişi tepki veriyor? Kaç kişi yorum yazıyor? Bu oran %1'in altındaysa, büyük bir kitle küçük bir kitleden daha değersizdir.", 'vurgu': '100 gerçek takipçi, 10.000 ilgisiz takipçiden çok daha değerlidir.', 'yanlis': ['Toplu takip / geri takip stratejisi', 'Çok içerik, az etkileşim', 'Herkes için içerik üretmek', 'Viral olmaya odaklanmak'], 'dogru': ['Yavaş ama gerçek büyüme', 'Az içerik, derin etkileşim', 'Belirli bir okur için içerik', 'Topluluk oluşturmaya odaklanmak'], 'dogru_bas': 'İlk 500 takipçi nasıl kazanılır?', 'dogru_m': 'İlk 500 takipçi en değerli 500 takipçidir. Bu insanlar sizi sıfırdan takip etmeyi seçti — onları kazanmak için belirli bir strateji gerekir.', 'dogru_madler': ['Türünüzle ilgili hesaplarda gerçek yorum bırakın — reklam değil, içgörü', 'Haftada 2-3 kaliteli paylaşım yapın, her gün yapmaya çalışmayın', "Her yoruma cevap verin — ilk 500'de etkileşim oranı çok önemli", 'Hashtagleri akıllıca kullanın: büyük değil, niş hashtagler seçin'], 'vurgu2': 'İlk 6 ay büyüme hızına değil, etkileşim oranına bakın.', 'gorev_bas': 'Niş hedef kitlesi belirleyin', 'gorev_m': 'Kitabınızı kim okumalı? Ne kadar spesifik tanımlarsanız, o kadar doğru kişiye ulaşırsınız.', 'gorev_adimlar': ['Kitabınızın ideal okurunuzu tarif edin: yaş, ilgi alanı, hangi kitapları seviyor', 'Bu okur tipinin takip ettiği 5 hesap bulun', 'Bu hesaplarda bu hafta gerçek 3 yorum bırakın — bugün yapabilirsiniz'], 'placeholder': "İdeal okurunuzu tarif edin: 'Roman sever, 25-40 yaş, İstanbul'da yaşıyor, Elif Şafak ve Orhan Pamuk okur...' gibi", 'ozet_m': 'Az takipçiyle yapılacak en doğru şey: o az kişiyle derin ilişki kurmak. Onlar büyüdükçe siz de büyürsünüz.', 'anahtar': 'Takipçini değil, topluluğunu büyüt.', 'sonraki_bas': 'Kitap lansmanı — tek seferlik değil, 30 günlük süreç'}, {'no': 3, 'bas': 'Kitap lansmanı', 'alt': 'Tek seferlik duyuru değil, 30 günlük süreç olarak planlayın', 'senaryo_et': 'YAYGIN HATA · Çoğu yazarın düştüğü tuzak', 'senaryo': 'Kitap yayınlandı. Yazar Instagram\'a kapak fotoğrafı koydu: <strong>"Kitabım çıktı! Trendyol ve Hepsiburada\'da."</strong> 47 beğeni aldı, 3 yorum. İlk hafta <strong>23 satış.</strong> İkinci hafta unutuldu.', 'senaryo2': 'Oysa aynı kitap, aynı kalitede, planlı bir lansman ile çıkabilirdi. <strong>Çıkış öncesi 2 hafta</strong> merak uyandırma, <strong>çıkış günü</strong> koordineli paylaşım, <strong>çıkış sonrası 2 hafta</strong> momentum. Fark: onlarca satış değil, <strong>yüzlerce satış.</strong>', 'ayirac': 'FARK', 'soru': 'Bir kitap lansmanını nasıl planlarsınız? Çıkış gününden önce, o gün ve sonrasında ne yapılmalı?', 'analiz_bas': 'Lansman bir gün değil, bir süreçtir', 'analiz_m': "Yayıncılık dünyasında 'lansmanın penceresini kaçırmak' diye bir kavram var. Kitabın çıktığı ilk 30 gün kritiktir — bu pencerede yaratılan momentum kitabın tüm ömrünü belirler.", 'vurgu': 'İlk 30 gün kitabın kaderini belirler. Bu sürede görünmezseniz, algoritma sizi görünmez kılar.', 'yanlis': ['Kitap çıktı, paylaştım, bekledim', 'Tek bir platform üzerinde duyuru', 'Çıkış günü tek paylaşım', 'Momentum bitti, unutuldu'], 'dogru': ['Çıkıştan 2 hafta önce merak uyandırma başlar', 'Tüm platformlarda koordineli paylaşım', 'Çıkış haftası yoğun içerik programı', 'İlk ay boyunca aktif momentum'], 'dogru_bas': '30 günlük lansman planı', 'dogru_m': 'Lansman üç aşamaya bölünür: ön hazırlık (14 gün), çıkış (1 gün), momentum (15 gün).', 'dogru_madler': ["Çıkıştan 14 gün önce: 'Çok yakında' teaserları, karakter tanıtımları, yazma süreci paylaşımları", 'Çıkıştan 7 gün önce: kapak açıklaması, içerikten kısa alıntılar, ön sipariş duyurusu', 'Çıkış günü: koordineli paylaşım tüm platformlarda, yakın çevreden destek isteme', 'İlk 15 gün: okur yorumları paylaşma, sorulara cevap, lansman kampanyası'], 'vurgu2': 'Çıkış günü tek bir post değil, tüm gün boyunca koordineli bir etkinliktir.', 'gorev_bas': 'Kendi lansman takviminizi oluşturun', 'gorev_m': 'Kitabınızın çıkış tarihini (gerçek veya tahmini) baz alarak 30 günlük plan yapın.', 'gorev_adimlar': ['Çıkış tarihinizi belirleyin (veya tahmin edin)', 'Çıkıştan 14 gün önce ne paylaşacağınızı düşünün — en az 3 fikir', 'Çıkış günü için bir koordinasyon planı yapın — kimlerden destek isteyeceksiniz?'], 'placeholder': "Lansman planınızı yazın: 'Çıkıştan 2 hafta önce şunu yaparım, çıkış günü şunu, ilk hafta şunu...'", 'ozet_m': 'Kitap lansmanı bir sprint değil, bir maraton. İlk 30 günü planlı geçiren yazar, kitabını algoritmanın önüne taşır.', 'anahtar': 'Lansman günü değil, lansman süreci kitabınızı satar.', 'sonraki_bas': 'Okur ile doğrudan bağ — topluluk oluşturma'}, {'no': 4, 'bas': 'Okurla doğrudan bağ', 'alt': 'Takipçiden okur topluluğuna geçiş — kalıcı bağ nasıl kurulur', 'senaryo_et': 'İKİ YAZAR · Aynı satış rakamı, farklı gelecek', 'senaryo': "İki yazar da ilk ayda 200 adet sattı. Yazar A satışı rakam olarak gördü. Yazar B satışı ilişki olarak gördü — <strong>her okurdan yorum istedi, DM'lere cevap verdi, bir okuma grubu oluşturdu.</strong>", 'senaryo2': "İkinci kitap çıktığında Yazar A sıfırdan başladı. Yazar B'nin <strong>200 kişilik okur topluluğu</strong> ikinci kitabı ilk haftada aldı ve çevrelerine anlattı. Yazar B'nin ikinci kitabı birincisinden 3 kat fazla sattı.", 'ayirac': '6 AY SONRA', 'soru': 'Okuru sadık topluluk üyesine nasıl dönüştürürsünüz?', 'analiz_bas': 'Satış rakam değil, ilişkidir', 'analiz_m': 'Her okur yalnızca bir satış değil, potansiyel bir elçidir. Kitabınızı seven 10 kişi, reklamınızı gören 10.000 kişiden çok daha değerlidir.', 'vurgu': 'Okur topluluğu, reklam bütçenizin en güçlü alternatifidir.', 'yanlis': ['Satış sonrası okurla ilişkiyi kesmek', 'Yorumlara cevap vermemek', 'Okuru pasif alıcı olarak görmek', 'İkinci kitaba kadar sessiz kalmak'], 'dogru': ['Her okur yorumuna kişisel cevap vermek', 'Okurları yazma sürecine dahil etmek', 'Topluluk platformu oluşturmak', 'Okurların kitabı anlatmasını kolaylaştırmak'], 'dogru_bas': 'Okur topluluğu nasıl oluşturulur?', 'dogru_m': 'Topluluk oluşturma sistematik bir süreçtir — şans değil, tasarım meselesidir.', 'dogru_madler': ['İlk 50 okurla kişisel iletişim kurun — DM, e-posta veya yorum', 'Okurları yaratıcı sürece dahil edin: karakter adı seçimi, kapak geri bildirimi', 'Özel içerik üretin — sadece okurlar için arka plan hikayeleri', 'Okurların kitabı paylaşmasını kolaylaştırın: hazır şablon, alıntı kartları'], 'vurgu2': 'İlk 50 sadık okur, 5.000 pasif takipçiden güçlüdür.', 'gorev_bas': 'İlk okur listesini oluşturun', 'gorev_m': 'Kitabınızı okumuş veya okumak isteyen kişileri düşünün.', 'gorev_adimlar': ['Kitabınızı okumuş 5-10 kişiyi listeleyin (aile/arkadaş dahil)', 'Bu kişilere kişisel mesaj atıp yorum/geri bildirim isteyin', 'Bir okur anketini nasıl tasarlardınız? 3 soru yazın'], 'placeholder': 'Okurlarınızla bağ kurmak için ne yapacaksınız? Bugün başlayabileceğiniz somut bir adım yazın...', 'ozet_m': 'Her satış bir ilişkinin başlangıcıdır. Okurunuzu tanıyan yazar, ikinci kitabını ilk kitabından güçlü çıkarır.', 'anahtar': 'Okurunu tanı — o seni taşır.', 'sonraki_bas': 'İçerik takvimi — tutarlılık her şeydir'}, {'no': 5, 'bas': 'İçerik takvimi', 'alt': 'Tutarlılık her şeydir — tükenmeden sürdürülebilir içerik üretimi', 'senaryo_et': 'TÜKENMİŞLİK SENDROMU · Çok yaygın bir hata', 'senaryo': 'Bir yazar kitap çıkardıktan sonra <strong>günde 3 paylaşım</strong> yapmaya başladı. İlk 2 hafta heyecanlıydı. 3. haftada içerik fikirleri tükendi. 4. haftada <strong>tamamen sessizleşti.</strong>', 'senaryo2': 'Algoritmalar tutarsızlığı cezalandırır. <strong>2 hafta aktif + 1 ay sessiz</strong> olan hesap, haftada 2 paylaşım yapan hesaptan çok daha kötü performans gösterir. Tutarsız yazar, görünmez yazar olur.', 'ayirac': 'SONUÇ', 'soru': 'Sürdürülebilir bir içerik ritmi nasıl kurulur? Tükenmeden nasıl düzenli paylaşılır?', 'analiz_bas': "Az ama düzenli, çok ama gelişigüzel'i yener", 'analiz_m': 'Sosyal medya algoritmaları tutarlılığı ödüllendirir. Haftada 7 paylaşım yapıp sonra 3 hafta sessiz kalmak, haftada 2 paylaşım yapıp hiç kesintisiz devam etmekten çok daha kötü sonuç verir.', 'vurgu': 'Haftada 2 kaliteli paylaşım, haftada 14 ortalama paylaşımdan güçlüdür.', 'yanlis': ['Günde birden fazla paylaşım — çabuk tükenir', 'Plansız paylaşım — fikir tükenince sessizlik', 'Her platforma ayrı içerik üretmeye çalışmak', 'Mükemmeliyetçilik — ya harika ya da hiç'], 'dogru': ['Haftada 2-3 paylaşım — sürdürülebilir ritim', 'Aylık içerik planı — önceden hazırla', 'Tek içerik, çok platform — uyarla ve paylaş', 'İyi yeter — mükemmel bekleme'], 'dogru_bas': 'Aylık içerik takvimi nasıl kurulur?', 'dogru_m': 'İçerik takvimi bir kez oturulup yapılan şeydir — sonra sadece uygulanır.', 'dogru_madler': ['Ayın ilk günü 4 haftalık içerik planı yapın — her hafta 2-3 konu başlığı', 'İçerikleri kategorize edin: yazma süreci, okuma, görüş, kişisel', 'Her içeriği birden fazla platformda kullanın: uzun yazı → Instagram alıntısı → tweet', 'Önceden stok içerik hazırlayın — yoğun haftalar için 5-6 hazır fikir'], 'vurgu2': 'İçerik takvimi en büyük yaratıcı özgürlüktür — ne paylaşacağınızı düşünmezsiniz, paylaşmaya odaklanırsınız.', 'gorev_bas': 'Bu ay için içerik takvimi oluşturun', 'gorev_m': 'Kalan haftalar için içerik planı yapın. Mükemmel olmak zorunda değil — başlamak yeterli.', 'gorev_adimlar': ['Bu ay 8 içerik konusu belirleyin (haftada 2)', 'Her konuyu hangi kategoriye koyduğunuzu yazın: yazma/okuma/görüş/kişisel', 'Bu haftaki 2 içeriğin taslağını yazın'], 'placeholder': "Bu ayki içerik planınızı yazın: 'Hafta 1: şunu ve bunu, Hafta 2: şunu ve bunu...'", 'ozet_m': 'Tutarlı yazar, görünür yazardır. Algoritma takviminizi ödüllendirir. Okur düzenlilik bekler.', 'anahtar': 'Tutarlılık, yeteneği zamanla geçer.', 'sonraki_bas': 'Hangi platform, hangi yazar — doğru seçim'}, {'no': 6, 'bas': 'Hangi platform, hangi yazar', 'alt': 'Her platform farklı bir okur kitlesidir — doğru seçim enerjinizi kurtarır', 'senaryo_et': 'PLATFORM YANILGISI · Her yerde olmak zorunda değilsiniz', 'senaryo': "Bir yazar <strong>Instagram, TikTok, Twitter, YouTube ve LinkedIn'de</strong> aynı anda aktif olmaya çalıştı. 5 platform, 5 farklı içerik formatı, 5 farklı algoritma. <strong>6 haftada tükendi</strong> ve hepsini bıraktı.", 'senaryo2': 'Oysa doğru strateji şuydu: <strong>türüne ve kitlene göre 1-2 platform seç,</strong> orada ustalaş. Bir romancı için Instagram ve Bookstagram, bir kişisel gelişim yazarı için LinkedIn ve YouTube çok daha etkilidir.', 'ayirac': 'DOĞRU STRATEJİ', 'soru': 'Sizin türünüz ve hedef kitleniz için en doğru platform hangisi?', 'analiz_bas': 'Platform seçimi strateji meselesidir', 'analiz_m': 'Her platform farklı bir demografiye, farklı bir içerik formatına ve farklı bir algoritmaya sahiptir. Doğru platformu seçmek, yanlış platformda çok çalışmaktan daha değerlidir.', 'vurgu': 'Her yerde vasat olmak yerine, bir yerde mükemmel olun.', 'yanlis': ['Tüm platformlarda aynı anda aktif olmak', 'Platform seçimini rastgele yapmak', 'En popüler platformun en doğru olduğunu düşünmek', 'İçeriği platforma uyarlamadan kopyalamak'], 'dogru': ['Türe ve kitleye göre 1-2 platform seçmek', 'Seçilen platformun dilini ve formatını öğrenmek', 'O platformda derinleşmek, sonra genişlemek', 'İçeriği platforma özgü uyarlamak'], 'dogru_bas': 'Tür bazlı platform rehberi', 'dogru_m': 'Hangi tür için hangi platform daha etkilidir:', 'dogru_madler': ['Roman/Hikaye: Instagram Bookstagram + TikTok BookTok — görsel ve duygusal içerik', 'Kişisel gelişim/iş: LinkedIn + YouTube — uzun form ve otorite içeriği', 'Şiir: Instagram + Twitter/X — kısa metin ve estetik görsel', 'Deneme/Eleştiri: Substack + Twitter/X — düşünce liderliği'], 'vurgu2': "Türkiye'de Bookstagram ve BookTok hızla büyüyor — roman yazarları için en verimli alan.", 'gorev_bas': 'Platform kararınızı verin', 'gorev_m': 'Türünüz ve hedef kitlenize göre ana platformunuzu seçin.', 'gorev_adimlar': ['Türünüzü ve ideal okurunuzu yazın', 'Bu okur tipinin en çok hangi platformda olduğunu araştırın', 'Ana platformunuzu seçin ve bu haftadan itibaren sadece oraya odaklanın'], 'placeholder': 'Türünüz nedir? Hangi platformu seçiyorsunuz ve neden?', 'ozet_m': 'Platform seçimi enerjinizi yönetmektir. Az platforma çok enerji vermek, çok platforma az enerji vermekten her zaman daha etkilidir.', 'anahtar': 'Bir platformda derin olmak, beş platformda yüzeysel olmaktan güçlüdür.', 'sonraki_bas': 'Video içerik — kaçınılmaz gerçek'}, {'no': 7, 'bas': 'Video içerik', 'alt': 'Kamera önüne geçmeden de video içerik üretilebilir — pratik rehber', 'senaryo_et': "ORTAK KORKU · 'Ben kameraya çıkamam'", 'senaryo': 'Çoğu yazar video içerikten kaçar. <strong>"Ben utangacım, kamerada berbat görünürüm, ne söyleyeceğimi bilmiyorum."</strong> Bu arada TikTok\'ta kitap içerikleri yüzde yüz büyüyor. Kitap yorumu videoları milyonlarca izleniyor.', 'senaryo2': 'Ama şunu bilmiyorlar: <strong>en etkili kitap videoları kamera karşısında konuşmak değil</strong> — alıntı kartları, sesli okuma, el yazısı, masa üstü çekim. Yüzünüzü göstermeden güçlü video içerik üretilebilir.', 'ayirac': 'ÇÖZÜM', 'soru': 'Kamera önüne geçmek zorunda kalmadan nasıl video içerik üretirsiniz?', 'analiz_bas': 'Video içerik = kamera önünde konuşmak değil', 'analiz_m': 'Video içerik çok geniş bir kategoridir. Yüzünüzü göstermeden güçlü video içerik üretebilirsiniz. Algoritma videonun içeriğini değil, izlenme süresini ve etkileşimini ölçer.', 'vurgu': 'Kitabınızdan bir alıntıyı güzel fontla siyah zemine yazın, üstüne müzik koyun — bu da bir video.', 'yanlis': ['Video = kamera karşısında konuşmak zannetmek', 'Profesyonel ekipman olmadan başlamamak', 'Videoyu yayınlamadan önce mükemmel yapmaya çalışmak', 'Video formatından tamamen kaçmak'], 'dogru': ['Alıntı kartları ile text-based video', 'Sesli okuma — ses yeterli, görüntü şart değil', 'El yazısı veya masa üstü çekim', 'Kitap kapağı odaklı estetik video'], 'dogru_bas': '5 video formatı — hiç kameraya çıkmadan', 'dogru_m': 'Bu formatların hepsi telefon ile yapılabilir, editör gerekmez:', 'dogru_madler': ['Alıntı kartı: kitabınızdan bir cümle + güzel font + müzik (Canva ile 5 dakika)', 'Sesli okuma: telefonla ses kaydet, üstüne kitap kapağı koy', 'Sayfa çevirme: kitabın sayfalarını çevirirken çekim, üstüne müzik', 'Yazma süreci: masanızda yazarken kısa üstten çekim, yüz görünmez', 'Alıntı + yorum: ekrana yazıp okumanız, yüz göstermeniz şart değil'], 'vurgu2': "Türkiye'de BookTok büyüyor. Roman yazarları için 30 saniyelik alıntı kartları en hızlı büyüyen format.", 'gorev_bas': 'İlk videonuzu planlayın', 'gorev_m': 'Bu hafta yayınlayabileceğiniz bir video içerik planlayın — kameraya çıkmanıza gerek yok.', 'gorev_adimlar': ['5 formattan size en uygun olanı seçin', 'Kitabınızdan video için kullanacağınız alıntıyı seçin', 'Bu videoyu ne zaman ve nasıl üreteceksinizi yazın'], 'placeholder': 'Hangi video formatını seçiyorsunuz? İlk videonuz için kullanacağınız alıntı veya içerik nedir?', 'ozet_m': 'Video içerik artık seçenek değil, zorunluluk. Ama kamera önüne geçmek de zorunluluk değil. Kendi tarzınızda video üretin.', 'anahtar': 'En iyi video, yapmadığınız video değil — yaptığınız video.', 'sonraki_bas': 'Basın ve medya görünürlüğü — parasız PR'}, {'no': 8, 'bas': 'Basın ve medya görünürlüğü', 'alt': 'Parasız PR — gazete, podcast ve dijital medyaya nasıl ulaşılır', 'senaryo_et': "YANLIŞ İNANÇ · 'Medyaya çıkmak için ünlü olmak gerekir'", 'senaryo': "Çoğu yazar medyaya çıkmanın yalnızca büyük yayınevlerinin veya ünlü yazarların hakkı olduğunu düşünür. <strong>'Kim beni ister ki?'</strong> diye sormadan denemez bile.", 'senaryo2': "Oysa Türkiye'de yüzlerce kitap podcast'i, onlarca edebiyat köşesi, binlerce kültür-sanat hesabı var. Bunların <strong>çoğu yeni sesler arıyor.</strong> Sorun ünlü olmamak değil — <strong>doğru şekilde yaklaşmamak.</strong>", 'ayirac': 'GERÇEK', 'soru': "Bir gazeteciye veya podcast'çiye nasıl ulaşırsınız? İlk mesajı nasıl yazarsınız?", 'analiz_bas': "Medya ilişkisi 'haber değeri' üzerine kurulur", 'analiz_m': 'Gazeteci veya podcast yapımcısı sizi yayınlamak için bir neden ister: haber değeri, özgün bir hikaye veya dinleyicisine faydası olan içerik. Siz bu nedenin ne olduğunu anlatmakla yükümlüsünüz.', 'vurgu': 'Gazeteci sizi değil, kitlenizi düşünür. Onlara kitlenize nasıl değer katacağınızı anlatın.', 'yanlis': ["'Kitabım çıktı, haber yapar mısınız?' mesajı", 'Sosyal medya DM ile profesyonel istek', 'Kişisel hikayenizi değil kitabı öne çıkarmak', 'Takip mesajı atmamak'], 'dogru': ["Haber değerini öne çıkarmak: 'neden şimdi, neden önemli'", 'E-posta ile resmi başvuru', 'Kişisel hikayenizi + kitabınızı birlikte sunmak', 'Takip mesajı: 7-10 gün sonra nazikçe hatırlatmak'], 'dogru_bas': 'Etkili PR mesajı nasıl yazılır?', 'dogru_m': 'Gazeteciye veya podcast yapımcısına yazacağınız mesajın 4 unsuru vardır:', 'dogru_madler': ['Kim olduğunuz: 1 cümle, fazla değil', 'Kitabınız neden önemli: sıradan değil, özgün açı', 'Onların kitlesine ne katacaksınız: somut fayda', 'Sonraki adım: röportaj talebi veya inceleme nüshası'], 'vurgu2': "Türkiye'de kitap podcast'leri hızla büyüyor ve yeni ses arayışındalar. En düşük eşik orası.", 'gorev_bas': 'PR listesi ve ilk mesajınızı hazırlayın', 'gorev_m': 'Kitabınıza uygun medya hedeflerini belirleyin.', 'gorev_adimlar': ['Türünüzle ilgili 3 podcast veya köşe yazarı bulun', 'Haber değerinizi belirleyin: kitabınız neden şimdi önemli?', 'İlk PR mesajınızı taslak olarak yazın — aşağıya yapıştırın'], 'placeholder': "PR mesajı taslağınızı yazın: 'Merhaba [isim], ben [siz] ve şu yüzden kitabım sizin kitleniz için değerli...'", 'ozet_m': 'Medya çıkışı şans değil, sistematik çabadır. Doğru kişiye, doğru mesajla, doğru zamanda ulaşmak öğrenilebilir bir beceridir.', 'anahtar': 'Medya sizi bulmaz — siz medyayı bulursunuz.', 'sonraki_bas': 'Okur yorumu ve sosyal kanıt — ilk yorumlar nasıl alınır'}, {'no': 9, 'bas': 'Okur yorumu ve sosyal kanıt', 'alt': 'İlk yorumlar nasıl alınır — yorum gücü ve yönetimi', 'senaryo_et': 'SOSYAL KANITUN GÜCÜ · Rakamlar konuşuyor', 'senaryo': "Trendyol'da yapılan araştırmalar şunu gösteriyor: <strong>5 yorum ve üzeri olan kitapların</strong> satış dönüşüm oranı, yorumsuz kitaplara göre <strong>3-4 kat daha yüksek.</strong>", 'senaryo2': 'Çoğu yazar bunu bilmiyor ve yorumları şansa bırakıyor. Oysa ilk <strong>10 yorumu kasıtlı olarak</strong> toplayabilirsiniz — etik yollarla, sistematik biçimde.', 'ayirac': 'YÖNTEM', 'soru': 'İlk okur yorumlarını nasıl ve nereden toplarsınız?', 'analiz_bas': 'Sosyal kanıt neden bu kadar güçlü?', 'analiz_m': "İnsan beyni belirsizlik karşısında başkalarının kararını referans alır. 'Bu kitabı 47 kişi okudu ve beğendi' mesajı, en iyi reklam metninden daha ikna edicidir.", 'vurgu': 'İlk 10 yorum, sonraki 100 satışı getirir.', 'yanlis': ['Yorumları şansa bırakmak', 'Yorum istemekten çekinmek', "Sadece Trendyol'da yorum toplamaya çalışmak", 'Olumsuz yorumu silmeye veya cevaplamadan bırakmaya çalışmak'], 'dogru': ['İlk okurlardan aktif olarak yorum istemek', 'Beta okur programı oluşturmak', 'Tüm platformlarda yorum toplamak', 'Olumsuz yoruma profesyonelce cevap vermek'], 'dogru_bas': 'İlk 10 yorumu toplamak için plan', 'dogru_m': 'Yorum toplamak bir kampanya gibi planlanmalıdır:', 'dogru_madler': ['Beta okur programı: çıkıştan önce 10-15 kişiye ücretsiz kopya, karşılığında dürüst yorum', 'Yakın çevre: aile ve arkadaşları doğal okur olarak yönlendirme — teşvik değil, davet', 'Okur topluluğu: ilk okuyanlardan platform yorumu talep etme — DM ile kişisel istek', 'Yorum kolaylaştırma: link paylaş, nereye yazacaklarını göster, 2 dakika süreceğini belirt'], 'vurgu2': 'Olumsuz yorum silmeyin — profesyonelce cevap verin. Bu okunurluk sinyalidir.', 'gorev_bas': 'Beta okur listenizi oluşturun', 'gorev_m': 'Kitabınızı çıkmadan önce veya çıktıktan sonra okuyabilecek, yorum yazabilecek kişileri belirleyin.', 'gorev_adimlar': ['10 potansiyel beta okur adını listeleyin (yakın çevre dahil)', 'Bu kişilere nasıl ulaşacağınızı planlayın', 'Yorum istek mesajınızı taslak olarak yazın'], 'placeholder': 'Beta okur adaylarınızı ve onlara yazacağınız mesajı yazın...', 'ozet_m': 'Yorum toplamak şans değil, sistem işidir. İlk 10 yorumu kasıtlı toplayan yazar, satış momentumunu hızlı oluşturur.', 'anahtar': 'Bir iyi yorum, bir reklam bütçesinden değerlidir.', 'sonraki_bas': 'Veriden öğrenme — neyi ölçersen onu geliştirebilirsin'}, {'no': 10, 'bas': 'Veriden öğrenme', 'alt': 'Neyi ölçersen onu geliştirebilirsin — yazar için basit veri okuma', 'senaryo_et': 'VERİ KÖRLÜĞÜ · Çok yaygın bir sorun', 'senaryo': 'Bir yazar aylardır aktif paylaşım yapıyor. <strong>Satışlar kimi zaman artıyor, kimi zaman düşüyor</strong> — ama neden? Hiçbir fikri yok. Hangi paylaşım satış getirdi, hangisi getirmedi? Hangi platform daha etkili? Bilmiyor.', 'senaryo2': 'Oysa bu soruların cevabı elinin altında. <strong>Instagram insight, platform satış raporu, MST paneli</strong> — hepsi veri veriyor. Ama onu okumayı bilmeden, kör uçuş yapıyorsunuz.', 'ayirac': 'ÇÖZÜM', 'soru': 'Hangi veriye bakmalısınız? Bu veriyi nasıl yorumlamalısınız?', 'analiz_bas': 'Yazar için 3 kritik metrik', 'analiz_m': 'Yüzlerce metrik vardır ama yazar için gerçekten önemli olan sadece 3 tanedir. Bunları takip etmek yeterlidir.', 'vurgu': 'Her şeyi ölçmek, hiçbir şeyi ölçmemekle aynıdır. 3 metriğe odaklanın.', 'yanlis': ['Sadece takipçi sayısına bakmak', 'Platform satış verilerini hiç incelememek', 'Her paylaşım için ayrı analiz yapmaya çalışmak', 'Veriyi görmezden gelip sezgiyle hareket etmek'], 'dogru': ['Haftalık satış değişimini takip etmek', 'En çok etkileşim alan içerik tipini belirlemek', 'Platform bazlı satış dağılımını izlemek', 'Aylık trend analizi yapmak'], 'dogru_bas': '3 kritik metrik ve nasıl okunur', 'dogru_m': 'Bu 3 metriği her hafta 10 dakika incelemeniz yeterlidir:', 'dogru_madler': ['Satış hızı: bu hafta geçen haftaya göre kaç % değişti? Artış veya düşüşün nedeni nedir?', 'Etkileşim oranı: beğeni+yorum÷takipçi. %1 altı: içerik yanlış. %3 üstü: bu formata devam', 'Platform dağılımı: hangi kanal en çok satıyor? Oraya daha fazla enerji verin'], 'vurgu2': 'MST panelinizde bu 3 metriği görebilirsiniz. Her pazartesi 10 dakika ayırın.', 'gorev_bas': 'İlk veri analizinizi yapın', 'gorev_m': 'MST panelinizi açın ve şu soruları cevaplayın.', 'gorev_adimlar': ['Bu ay en çok hangi platformdan satış geldi?', 'Son 4 haftada satış trendi arttı mı, düştü mü, stabil mi?', 'Sosyal medyanızda en çok etkileşim alan son 3 içerik ne?'], 'placeholder': "Panel verilerinizi inceleyin ve bulgularınızı yazın: 'En çok satış şuradan geliyor, trend şöyle, en iyi içeriklerim şunlar...'", 'ozet_m': 'Veri okuyan yazar, kör uçuş yapan yazardan her zaman daha hızlı büyür. Haftada 10 dakika veri analizi en yüksek getirili zaman yatırımıdır.', 'anahtar': 'Ölçmediğini yönetemezsin.', 'sonraki_bas': "Temel seviye tamamlandı — Orta Seviye'ye geçiyorsunuz"}];

function MSTAkademi({ yazarAdi, yazarUnvan, yazarId, onKapat, onIlerlemeGuncelle, token, ilerlemeUcu, adayModu }) {
  // FAZ 17 — adayModu true ise bu bileşen aday akışında kullanılıyor demektir:
  // token ve ilerlemeUcu dışarıdan verilir (aday token'ı, /api/aday/akademi-ilerleme).
  // Verilmezse eski davranış (yazar token'ı, /api/author/akademi-ilerleme) korunur.
  // localStorage'dan kaldığı yeri yükle
  const kayitAnahtari = `mst_akademi_ilerleme_${yazarId || 'genel'}`;
  const kayitYukle = () => {
    try {
      const k = JSON.parse(localStorage.getItem(kayitAnahtari) || '{}');
      return { mod: k.mod || 0, asama: k.asama || 1, tamamlananlar: k.tamamlananlar || [], testCevaplari: k.testCevaplari || {} };
    } catch { return { mod: 0, asama: 1, tamamlananlar: [], testCevaplari: {} }; }
  };
  const baslangic = kayitYukle();
  const [aktifMod, setAktifMod] = React.useState(baslangic.mod);
  const [aktifAsama, setAktifAsama] = React.useState(baslangic.asama);
  const [tamamlananlar, setTamamlananlar] = React.useState(baslangic.tamamlananlar);
  const [testCevaplari, setTestCevaplari] = React.useState(baslangic.testCevaplari);

  // Madde 9 — ANA KAYIT KAYNAĞI BACKEND'DİR. localStorage yalnız hızlı önbellek.
  // Kullanıcı farklı cihazdan girerse ilerleme buradan geri yüklenir.
  React.useEffect(() => {
    // DÜZELTME (5 Ağu 2026): önceden yalnız adayModu===true iken çalışırdı.
    // Yorum "adayModu verilmezse eski (yazar) davranış korunur" diyordu ama
    // kod bunu hiç yapmıyordu — token verilse bile yazar modunda (adayModu
    // undefined) bu efekt tamamen atlanıyordu, ilerleme backend'den asla
    // yüklenmiyordu. Artık yalnız token'ın varlığına bakıyor — hem aday hem
    // yazar modunda (ikisi de kendi token'ını geçtiği sürece) çalışır.
    if (!token) return;
    let iptal = false;
    (async () => {
      try {
        const r = await fetch(`${BACKEND_URL}${ilerlemeUcu || "/api/aday/akademi-ilerleme"}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const s = await r.json();
        if (iptal || !s) return;
        // Backend daha ileri bir noktadaysa onu kullan (cihazlar arası çakışmada
        // kullanıcının ilerlemesini geri almamak için ileri olan kazanır).
        const yerelAdet = (baslangic.tamamlananlar || []).length;
        const uzakAdet = (s.tamamlananlar || []).length;
        if (uzakAdet >= yerelAdet) {
          setAktifMod(s.mod || 0);
          setAktifAsama(s.asama || 1);
          setTamamlananlar(s.tamamlananlar || []);
          setTestCevaplari(s.testCevaplari || {});
        }
      } catch { /* backend'e ulaşılamazsa önbellekle devam */ }
    })();
    return () => { iptal = true; };
  }, [adayModu, token]);
  const [cevap, setCevap] = React.useState('');
  const [aiGoster, setAiGoster] = React.useState(false);
  const [aiMeyin, setAiMeyin] = React.useState('');
  const [aiPuanlar, setAiPuanlar] = React.useState([]);
  const [yukl, setYukl] = React.useState(false);
  const ilkAd = (yazarAdi || '').split(' ')[0];
  const hitap = `${ilkAd} ${yazarUnvan || 'Bey'}`;
  const mod = MODULLER_DATA[aktifMod];
  const ilerleme = Math.round(((aktifMod * 5 + aktifAsama) / (10 * 5)) * 100);

  // İlerlemeyi kaydet — her değişimde
  const kayitEt = (yeniMod, yeniAsama, yeniTamamlananlar, yeniTestCevaplari) => {
    const veri = { mod: yeniMod, asama: yeniAsama, tamamlananlar: yeniTamamlananlar, testCevaplari: yeniTestCevaplari || testCevaplari, sonGuncelleme: new Date().toISOString() };
    try { localStorage.setItem(kayitAnahtari, JSON.stringify(veri)); } catch {}
    // Backend'e bildir (panel için) — FAZ 17: aday modundaysa aday token'ı ve aday ucu kullanılır
    try {
      const tok = token || localStorage.getItem('mst_token');
      const ucu = ilerlemeUcu || '/api/author/akademi-ilerleme';
      if (tok) fetch(`${BACKEND_URL}${ucu}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${tok}` },
        body: JSON.stringify({ adayId: yazarId, mod: yeniMod, asama: yeniAsama, tamamlananlar: yeniTamamlananlar, testCevaplari: yeniTestCevaplari || testCevaplari }),
      }).catch(() => {});
    } catch {}
    if (onIlerlemeGuncelle) onIlerlemeGuncelle({ mod: yeniMod, tamamlananlar: yeniTamamlananlar });
  };

  const asamaGit = (n) => {
    setAktifAsama(n);
    setAiGoster(false);
    setCevap('');
    kayitEt(aktifMod, n, tamamlananlar);
  };

  const modGit = (idx) => {
    setAktifMod(idx);
    setAktifAsama(1);
    setAiGoster(false);
    setCevap('');
    kayitEt(idx, 1, tamamlananlar);
  };

  const geribildiri = async () => {
    if (!cevap.trim()) return;
    setYukl(true);
    setAiGoster(false);
    await new Promise(r => setTimeout(r, 2200));
    const satisMi = ['satın','sipariş','link','al ','fiyat','TL','kitabım çıktı'].some(k => cevap.toLowerCase().includes(k));
    const uzunMu = cevap.length > 80;
    let metin, puanlar;
    if (satisMi) {
      metin = `Doğru yönde düşünüyorsunuz ancak yanıtınızda satışa yönelik ifadeler var. Bu modülde öğrendiğimiz gibi, şimdi değer odaklı içeriğe geçiş zamanı. Satış mesajını çıkarıp yeniden deneyin.`;
      puanlar = [{t: 'Geliştirin: satış ifadeleri çıkarılmalı', s: 'gel'}, {t: 'İyi: konuyu belirlediniz', s: 'iyi'}];
    } else if (!uzunMu) {
      metin = `Doğru yöndesiniz. Biraz daha derinleştirin — neden bu konuyu seçtiniz, size ne hissettiriyor, okur için neden değerli? Aynı fikri 3-4 cümleyle genişletin.`;
      puanlar = [{t: 'İyi: değer odaklı', s: 'iyi'}, {t: 'Geliştirin: daha fazla derinlik ekleyin', s: 'gel'}];
    } else {
      metin = `Çok iyi! Bu yanıt doğru bir bakış açısı yansıtıyor. Somut, uygulanabilir ve ${hitap}'in durumuna uygun. Bu yaklaşımı tutarlı şekilde sürdürün.`;
      puanlar = [{t: 'Değer odaklı ✓', s: 'iyi'}, {t: 'Somut ve uygulanabilir ✓', s: 'iyi'}, {t: 'Doğru yön ✓', s: 'iyi'}];
    }
    setAiMeyin(metin);
    setAiPuanlar(puanlar);
    setYukl(false);
    setAiGoster(true);
    if (!tamamlananlar.includes(aktifMod)) {
      const yeniTam = [...tamamlananlar, aktifMod];
      setTamamlananlar(yeniTam);
      kayitEt(aktifMod, aktifAsama, yeniTam);
    }
  };

  return (
    <div className="ak-wrap">
      <style>{AKADEMI_CSS_KODU}</style>
      <div className="ak-ust">
        <div>
          <div className="ak-logo">MST YAYINCILIK</div>
          <div className="ak-alt-logo">YAZARLIK AKADEMİSİ · TEMEL SEVİYE</div>
        </div>
        <div className="ak-il-wrap">
          <div className="ak-il-metin">MODÜL {aktifMod+1}/10</div>
          <div className="ak-il-bar"><div className="ak-il-ic" style={{width: ilerleme+'%'}} /></div>
          <div className="ak-il-metin">%{ilerleme}</div>
          {onKapat && <button onClick={onKapat} style={{background:'none',border:'1px solid rgba(245,240,228,.15)',color:'rgba(245,240,228,.4)',fontFamily:'Jost,sans-serif',fontSize:10,letterSpacing:'.14em',padding:'5px 12px',cursor:'pointer',marginLeft:8}}>GERİ</button>}
        </div>
      </div>

      <div className="ak-ic">
        <div className="ak-rozet-wrap">
          <div className="ak-rozet">TEMEL SEVİYE</div>
          <div className="ak-modno">MODÜL {mod.no} · {mod.no}. GÜN</div>
        </div>
        <h1 className="ak-bas">{mod.bas}</h1>
        <div className="ak-alt">{mod.alt}</div>

        <div className="ak-asama-nav">
          {['SENARYO','ANALİZ','DOĞRUSU','GÖREV','ÖZET'].map((ad,i) => (
            <button key={i} className={`ak-asama-btn${aktifAsama===i+1?' ak':''}${tamamlananlar.includes(aktifMod)&&aktifAsama>i+1?' tam':''}`}
              onClick={() => asamaGit(i+1)}>
              <div className="ak-no">{aktifAsama>i+1&&tamamlananlar.includes(aktifMod)?'✓':i+1}</div>{ad}
            </button>
          ))}
        </div>

        {/* AŞAMA 1: SENARYO */}
        {aktifAsama===1 && (
          <div className="ak-blok">
            <div className="ak-senaryo">
              <div className="ak-senaryo-et">{mod.senaryo_et}</div>
              <div className="ak-senaryo-m" dangerouslySetInnerHTML={{__html: mod.senaryo}} />
              {mod.senaryo2 && <><div className="ak-ayirac">{mod.ayirac}</div><div className="ak-senaryo-m" dangerouslySetInnerHTML={{__html: mod.senaryo2}} /></>}
            </div>
            <div className="ak-soru">
              <div className="ak-soru-et">ŞİMDİ SİZ KARAR VERİN</div>
              <div className="ak-soru-m">{mod.soru}</div>
            </div>
            <button className="ak-btn" onClick={() => asamaGit(2)}>ANALİZE GEÇ →</button>
          </div>
        )}

        {/* AŞAMA 2: ANALİZ */}
        {aktifAsama===2 && (
          <div className="ak-blok">
            <div className="ak-derin">
              <div className="ak-derin-bas">{mod.analiz_bas}</div>
              <div className="ak-derin-m" dangerouslySetInnerHTML={{__html: mod.analiz_m}} />
              <div className="ak-vurgu">{mod.vurgu}</div>
            </div>
            <div className="ak-kiy">
              <div className="ak-kiy-k y">
                <div className="ak-kiy-bas"><span>✕</span>YANLIŞ YAKLAŞIM</div>
                {mod.yanlis.map((m,i) => <div key={i} className="ak-kiy-m">{m}</div>)}
              </div>
              <div className="ak-kiy-k d">
                <div className="ak-kiy-bas"><span>✓</span>DOĞRU YAKLAŞIM</div>
                {mod.dogru.map((m,i) => <div key={i} className="ak-kiy-m">{m}</div>)}
              </div>
            </div>
            <button className="ak-btn" onClick={() => asamaGit(3)}>DOĞRUSUNU GÖR →</button>
          </div>
        )}

        {/* AŞAMA 3: DOĞRUSU */}
        {aktifAsama===3 && (
          <div className="ak-blok">
            <div className="ak-derin">
              <div className="ak-derin-bas">{mod.dogru_bas}</div>
              <div className="ak-derin-m">{mod.dogru_m}</div>
              <div className="ak-derin">
                {mod.dogru_madler.map((m,i) => (
                  <div key={i} className="ak-mad"><span className="ak-mad-ikon">◆</span>{m}</div>
                ))}
              </div>
              {mod.vurgu2 && <div className="ak-vurgu">{mod.vurgu2}</div>}
            </div>
            <button className="ak-btn" onClick={() => asamaGit(4)}>GÖREVE GEÇ →</button>
          </div>
        )}

        {/* AŞAMA 4: GÖREV */}
        {aktifAsama===4 && (
          <div className="ak-blok">
            <div className="ak-gorev">
              <div className="ak-gorev-et">UYGULAMA GÖREVİ</div>
              <div className="ak-gorev-bas">{mod.gorev_bas}</div>
              <div className="ak-gorev-m">{mod.gorev_m}</div>
              {mod.gorev_adimlar.map((a,i) => (
                <div key={i} className="ak-adim">
                  <div className="ak-adim-no">{i+1}</div>
                  <div className="ak-adim-m">{a}</div>
                </div>
              ))}
              <textarea className="ak-textarea" value={cevap} onChange={e => setCevap(e.target.value)}
                placeholder={mod.placeholder} />
              <button className="ak-btn" onClick={geribildiri} disabled={!cevap.trim()}>AI GERİ BİLDİRİM AL →</button>
            </div>
            <div className={`ak-yukl${yukl?' goster':''}`}>
              <div className="ak-yukl-dot"/><div className="ak-yukl-dot"/><div className="ak-yukl-dot"/>
              <span>Yapay zekâ analiz ediyor...</span>
            </div>
            {aiGoster && (
              <div className="ak-ai goster">
                <div className="ak-ai-et">AI GERİ BİLDİRİM</div>
                <div className="ak-ai-m">{aiMeyin}</div>
                <div className="ak-ai-puanlar">
                  {aiPuanlar.map((p,i) => <div key={i} className={`ak-puan ${p.s}`}>{p.t}</div>)}
                </div>
                <div style={{marginTop:16}}>
                  <button className="ak-btn ikincil" onClick={() => asamaGit(5)}>ÖZETE GEÇ →</button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* AŞAMA 5: ÖZET */}
        {aktifAsama===5 && (
          <div className="ak-blok">
            <div className="ak-ozet">
              <div className="ak-ozet-et">MODÜL ÖZETİ</div>
              <div className="ak-ozet-m">{mod.ozet_m}</div>
              <div className="ak-anahtar">{mod.anahtar}</div>
            </div>
            <div className="ak-tamam">
              <div className="ak-tamam-ikon">✓</div>
              <div>
                <div className="ak-tamam-et">MODÜL {mod.no} TAMAMLANDI</div>
                <div className="ak-tamam-m">{aktifMod < 9 ? `Bir sonraki modüle geçmeye hazır mısınız?` : 'Tebrikler! Temel seviyeyi tamamladınız.'}</div>
              </div>
            </div>
            {aktifMod < 9 ? (
              <div className="ak-sonraki" onClick={() => modGit(aktifMod+1)}>
                <div>
                  <div className="ak-sonraki-et">SONRAKI · MODÜL {mod.no+1}</div>
                  <div className="ak-sonraki-bas">{mod.sonraki_bas}</div>
                </div>
                <div className="ak-sonraki-ok">→</div>
              </div>
            ) : (
              <div style={{background:'rgba(201,162,75,.08)',border:'1px solid rgba(201,162,75,.35)',padding:'24px 28px',textAlign:'center'}}>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:28,color:'#F0D68A',marginBottom:10}}>Temel Seviye Tamamlandı</div>
                <div style={{fontSize:14,color:'rgba(245,240,228,.6)',lineHeight:1.8}}>MST Yazarlık Akademisi Temel Seviye sertifikanız hazırlanıyor. Orta Seviye yakında açılacak.</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export { AKADEMI_CSS_KODU, MODULLER_DATA, MSTAkademi };
