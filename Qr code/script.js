/* =========================================================
   ROUQI — links page
   Edit the CONFIG below. Leave a value empty ("") to hide
   that button.
   ========================================================= */
const CONFIG = {
  // Local format, e.g. "0563679978"  (Algeria, country code 213)
  whatsapp: "0563679978",
  // Phone number in local format, or a Telegram username without @
  telegram: "",
  instagram: "https://www.instagram.com/rouqi_rouqi/",
  tiktok: "https://www.tiktok.com/@rouqi.rouqi",
  facebook: "https://www.facebook.com/profile.php?id=61594160368094",
};

const COUNTRY_CODE = "213";

const ICONS = {
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88zM20.52 3.45A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.41z"/></svg>',
  telegram: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11.94 0A12 12 0 1 0 24 12 12 12 0 0 0 11.94 0zm5.63 8.22-1.98 9.33c-.15.66-.54.82-1.09.51l-3.02-2.22-1.46 1.4c-.16.16-.3.3-.61.3l.22-3.08 5.6-5.06c.24-.22-.05-.34-.38-.13l-6.92 4.36-2.98-.93c-.65-.2-.66-.65.14-.96l11.65-4.49c.54-.2 1.01.13.83.97z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
};

/* "0563679978" -> "213563679978" */
function toInternational(number) {
  const digits = String(number).replace(/\D/g, "");
  if (digits.startsWith(COUNTRY_CODE)) return digits;
  return COUNTRY_CODE + digits.replace(/^0+/, "");
}

function telegramUrl(value) {
  const v = String(value).trim();
  if (/^[+\d\s]+$/.test(v)) return "https://t.me/+" + toInternational(v);
  return "https://t.me/" + v.replace(/^@/, "");
}

const items = [
  { key: "whatsapp",  label: "WhatsApp",  primary: true,
    href: v => "https://wa.me/" + toInternational(v) },
  { key: "telegram",  label: "Telegram",  href: telegramUrl },
  { key: "instagram", label: "Instagram", href: v => v },
  { key: "tiktok",    label: "TikTok",    href: v => v },
  { key: "facebook",  label: "Facebook",  href: v => v },
];

const nav = document.getElementById("links");

items.forEach(item => {
  const value = CONFIG[item.key];
  if (!value) return;                       // empty value -> no button

  const a = document.createElement("a");
  a.className = "btn" + (item.primary ? " primary" : "");
  a.href = item.href(value);
  a.target = "_blank";
  a.rel = "noopener";
  a.innerHTML = ICONS[item.key] + '<span class="label">' + item.label + "</span>";
  nav.appendChild(a);
});
