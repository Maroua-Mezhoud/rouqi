// إعدادات يجب تخصيصها قبل النشر
const WHATSAPP_NUMBER = ""; // مثال: 213XXXXXXXXX — أضف الرقم مع مفتاح الدولة دون +
const CURRENCY = "دج";
const products = [
  {id:1,name:"اختيار مميز 01",category:"من المجموعة الجديدة",price:3500,tone:"tone-1",label:"NEW EDIT"},
  {id:2,name:"اختيار مميز 02",category:"تفاصيل تستحق الاكتشاف",price:4200,tone:"tone-2",label:"ESSENTIAL"},
  {id:3,name:"اختيار مميز 03",category:"قطعة بطابع خاص",price:2900,tone:"tone-3",label:"FAVORITE"},
  {id:4,name:"اختيار مميز 04",category:"لمسة تكمل أسلوبكِ",price:5100,tone:"tone-4",label:"LIMITED"}
];
let cart = [];
const $ = (s) => document.querySelector(s);
const money = (n) => `${n.toLocaleString("fr-FR")} ${CURRENCY}`;
function renderProducts(){
  $("#productGrid").innerHTML = products.map(p=>`<article class="product-card">
    <div class="product-visual ${p.tone}"><span>${p.label}</span></div>
    <div class="product-meta"><div><p class="product-name">${p.name}</p><p class="product-sub">${p.category}</p></div><span class="product-price">${money(p.price)}</span></div>
    <button class="add-button" data-add="${p.id}">أضيفي إلى الحقيبة +</button></article>`).join("");
}
function renderCart(){
  $("#cartCount").textContent=cart.reduce((s,i)=>s+i.qty,0);
  $("#cartTotal").textContent=money(cart.reduce((s,i)=>s+i.price*i.qty,0));
  $("#cartItems").innerHTML=cart.length?cart.map(i=>`<div class="cart-item"><div><strong>${i.name}</strong><small>${money(i.price)} × ${i.qty}</small></div><div class="qty-controls"><button data-dec="${i.id}" aria-label="تقليل الكمية">−</button><span>${i.qty}</span><button data-inc="${i.id}" aria-label="زيادة الكمية">+</button></div></div>`).join(""):'<p class="empty-cart">حقيبتكِ فارغة حاليًا.</p>';
}
function openCart(){document.body.classList.add("cart-open");$("#cartPanel").setAttribute("aria-hidden","false")}
function closeCart(){document.body.classList.remove("cart-open");$("#cartPanel").setAttribute("aria-hidden","true")}
$("#productGrid").addEventListener("click",e=>{const b=e.target.closest("[data-add]");if(!b)return;const p=products.find(x=>x.id===Number(b.dataset.add));const old=cart.find(x=>x.id===p.id);old?old.qty++:cart.push({...p,qty:1});renderCart();b.textContent="أُضيفت ✓";setTimeout(()=>b.textContent="أضيفي إلى الحقيبة +",1000)});
$("#cartItems").addEventListener("click",e=>{const inc=e.target.closest("[data-inc]"),dec=e.target.closest("[data-dec]");if(inc){const i=cart.find(x=>x.id===Number(inc.dataset.inc));i.qty++}if(dec){const id=Number(dec.dataset.dec),i=cart.find(x=>x.id===id);i.qty--;if(i.qty<=0)cart=cart.filter(x=>x.id!==id)}renderCart()});
$("#cartOpen").addEventListener("click",openCart);$("#cartClose").addEventListener("click",closeCart);$("#cartBackdrop").addEventListener("click",closeCart);
$("#checkout").addEventListener("click",()=>{if(!cart.length){alert("أضيفي منتجًا إلى الحقيبة أولًا.");return}if(!WHATSAPP_NUMBER){alert("هذه نسخة تجريبية. أضيفي رقم واتساب الخاص بالعلامة في ملف script.js قبل استقبال الطلبات.");return}const lines=cart.map(i=>`• ${i.name} × ${i.qty} — ${money(i.price*i.qty)}`).join("\n");const total=money(cart.reduce((s,i)=>s+i.price*i.qty,0));const msg=encodeURIComponent(`مرحبًا ROUQI ROUQI، أود طلب:\n${lines}\nالمجموع التقديري: ${total}\nالاسم:\nالولاية والعنوان:\nرقم الهاتف:`);window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`,"_blank","noopener")});
$("#whatsappLink").addEventListener("click",e=>{if(!WHATSAPP_NUMBER){e.preventDefault();alert("أضيفي رقم واتساب في ملف script.js قبل النشر.");return}e.currentTarget.href=`https://wa.me/${WHATSAPP_NUMBER}`});
$("#menuToggle").addEventListener("click",()=>$("#navMenu").classList.toggle("show"));$("#navMenu").querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>$("#navMenu").classList.remove("show")));
$("#year").textContent=new Date().getFullYear();renderProducts();renderCart();
