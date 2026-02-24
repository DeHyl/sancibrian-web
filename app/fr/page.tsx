import Image from "next/image";
import Link from "next/link";
import { CONTACT, SITE_CONFIG } from "@/lib/constants";

const WA_MESSAGE = encodeURIComponent(
  "Bonjour ! Je souhaite réserver une nuit à Cabaña Sancibrian à Sapzurro. Pouvez-vous me donner les disponibilités et les tarifs ?"
);
const WA_LINK = `https://wa.me/573053283357?text=${WA_MESSAGE}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Cabaña Sancibrian",
  description:
    "Cabane de luxe face à la mer à Sapzurro, Colombie. Starlink, électricité 24h/24, accès direct à la plage.",
  url: `${SITE_CONFIG.url}/fr`,
  telephone: CONTACT.whatsapp,
  image: `${SITE_CONFIG.url}/images/hero/hero-1.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Playa Sapzurro",
    addressLocality: "Sapzurro",
    addressRegion: "Chocó",
    addressCountry: "CO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 8.6614,
    longitude: -77.3636,
  },
  priceRange: "$$",
  checkinTime: "15:00",
  checkoutTime: "11:00",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "10",
    reviewCount: "2",
    bestRating: "10",
  },
};

export default function FrPage() {
  return (
    <div className="min-h-screen font-sans" lang="fr">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── NAVBAR ── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-oscuro/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/en" className="flex items-center gap-2">
            <Image
              src="/images/logo-white.png"
              alt="Cabaña Sancibrian"
              width={120}
              height={36}
              className="h-8 w-auto"
            />
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/en" className="text-arena-light/70 hover:text-perla text-sm transition-colors">EN</Link>
            <Link href="/es" className="text-arena-light/70 hover:text-perla text-sm transition-colors">ES</Link>
            <span className="text-bronze text-sm font-semibold">FR</span>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#1ebe57] transition-colors"
            >
              Réserver
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-1.jpg"
            alt="Cabaña Sancibrian — Sapzurro, Colombie"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-oscuro/60 via-oscuro/30 to-oscuro/70" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <p className="text-bronze uppercase tracking-widest text-sm font-semibold mb-4">
            Sapzurro · Colombie · Darién
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-perla mb-6 leading-tight">
            Votre refuge<br />au bout du monde
          </h1>
          <p className="text-xl md:text-2xl text-arena-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Cabane de luxe face à la mer dans le dernier village de Colombie avant le Panama.
            Starlink, électricité 24h/24, café & coworking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-[#1ebe57] transition-colors shadow-2xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Réserver sur WhatsApp
            </a>
            <a
              href="#comment-arriver"
              className="inline-flex items-center justify-center gap-2 border-2 border-perla text-perla font-semibold text-lg px-8 py-4 rounded-full hover:bg-perla/10 transition-colors"
            >
              Comment y aller ?
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-perla/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── QU'EST-CE QUE SANCIBRIAN ? ── */}
      <section className="py-24 bg-perla">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-bronze uppercase tracking-widest text-sm font-semibold mb-3">
                Le lieu
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-caribe mb-6 leading-tight">
                Cabaña Sancibrian
              </h2>
              <p className="text-lg text-oscuro/80 leading-relaxed mb-6">
                Sapzurro est le dernier village de Colombie — une baie encerclée de jungle,
                sans voitures, sans routes, sans bruit. À 20 minutes de marche se trouve La Miel,
                une plage panaméenne considérée parmi les plus belles du continent.
              </p>
              <p className="text-lg text-oscuro/80 leading-relaxed mb-8">
                Cabaña Sancibrian est l&apos;hébergement le plus confortable du village : cabane entière
                pour 4 personnes, directement au bord de la plage, avec des équipements que vous
                ne trouverez nulle part ailleurs dans la région.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: "4", l: "personnes max" },
                  { v: "40 m²", l: "espace cabane" },
                  { v: "2", l: "lits Queen size" },
                  { v: "10/10", l: "note Booking.com" },
                ].map((s) => (
                  <div key={s.l} className="bg-arena rounded-xl p-4 text-center">
                    <p className="text-3xl font-display font-bold text-caribe">{s.v}</p>
                    <p className="text-sm text-oscuro/60 mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/cabin/facade-front.jpg"
                alt="Cabaña Sancibrian — façade"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── ÉQUIPEMENTS ── */}
      <section className="py-24 bg-caribe text-perla">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-bronze uppercase tracking-widest text-sm font-semibold mb-3 text-center">
            Ce qui nous distingue
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-perla mb-4 text-center">
            Équipements
          </h2>
          <p className="text-xl text-arena-light/80 text-center mb-16 max-w-2xl mx-auto">
            Dans un village sans électricité stable et sans internet, Sancibrian fait exception.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🛜",
                title: "Starlink Satellite",
                desc: "Internet haut débit par satellite. Assez rapide pour les visioconférences, le streaming, ou juste poster vos photos.",
              },
              {
                icon: "⚡",
                title: "Électricité 24h/24",
                desc: "Batterie de secours BatX industrielle. Les autres hébergements coupent le courant à 22h — chez nous, jamais.",
              },
              {
                icon: "❄️",
                title: "Climatisation",
                desc: "La seule cabane du village avec AC. Dormez frais même en plein été caribéen.",
              },
              {
                icon: "🏖️",
                title: "Accès direct à la plage",
                desc: "La Playa Bonita est à quelques pas de votre porte. Réveillez-vous avec le bruit des vagues.",
              },
              {
                icon: "☕",
                title: "Hangar Café",
                desc: "Café colombien et espace coworking à ciel ouvert. Disponible 24h/24 pour les hôtes.",
              },
              {
                icon: "🛁",
                title: "Bain aux herbes",
                desc: "Baignoire extérieure avec fleurs et herbes. Une expérience unique dans le Darién.",
              },
              {
                icon: "📺",
                title: "Netflix & Alexa",
                desc: "Le confort moderne dans un endroit que le reste du monde ne connaît pas encore.",
              },
              {
                icon: "✈️",
                title: "Îles San Blas",
                desc: "Point de départ le plus rapide pour San Blas (Guna Yala, Panama). Expéditions tout inclus disponibles.",
              },
              {
                icon: "🌿",
                title: "Cour privée",
                desc: "Espace extérieur privatif avec hamac, terrasse et vue sur la baie.",
              },
            ].map((a) => (
              <div
                key={a.title}
                className="bg-perla/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-perla/15 transition-colors"
              >
                <span className="text-4xl mb-4 block">{a.icon}</span>
                <h3 className="text-xl font-display font-bold text-perla mb-2">{a.title}</h3>
                <p className="text-arena-light/80 leading-relaxed text-sm">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TARIFS ── */}
      <section className="py-24 bg-arena">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-bronze uppercase tracking-widest text-sm font-semibold mb-3">
            Tarifs
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-oscuro mb-6">
            Prix & Disponibilités
          </h2>
          <p className="text-lg text-oscuro/70 mb-12 max-w-xl mx-auto">
            Les tarifs varient selon la saison. Contactez-nous directement pour obtenir
            le meilleur prix et vérifier les disponibilités.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                label: "Basse saison",
                period: "Avr – Jun · Sep – Nov",
                price: "Depuis ~80 USD",
                note: "/ nuit · cabane entière",
                highlight: false,
              },
              {
                label: "Haute saison",
                period: "Déc – Mar · Jul – Aoû",
                price: "Depuis ~110 USD",
                note: "/ nuit · cabane entière",
                highlight: true,
              },
              {
                label: "Long séjour",
                period: "7 nuits ou plus",
                price: "Tarif préférentiel",
                note: "Demandez via WhatsApp",
                highlight: false,
              },
            ].map((t) => (
              <div
                key={t.label}
                className={`rounded-2xl p-8 shadow-lg ${
                  t.highlight
                    ? "bg-caribe text-perla ring-2 ring-bronze"
                    : "bg-perla text-oscuro"
                }`}
              >
                {t.highlight && (
                  <span className="inline-block bg-bronze text-oscuro text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                    Le plus demandé
                  </span>
                )}
                <h3 className={`text-xl font-bold mb-1 ${t.highlight ? "text-perla" : "text-caribe"}`}>
                  {t.label}
                </h3>
                <p className={`text-sm mb-4 ${t.highlight ? "text-arena-light/70" : "text-oscuro/60"}`}>
                  {t.period}
                </p>
                <p className={`text-3xl font-display font-bold mb-1 ${t.highlight ? "text-arena" : "text-oscuro"}`}>
                  {t.price}
                </p>
                <p className={`text-sm ${t.highlight ? "text-arena-light/60" : "text-oscuro/50"}`}>
                  {t.note}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm text-oscuro/50 italic">
            * Petit-déjeuner, activités et transferts en bateau en sus. Taxes incluses.
          </p>
        </div>
      </section>

      {/* ── COMMENT ARRIVER ── */}
      <section id="comment-arriver" className="py-24 bg-perla">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-bronze uppercase tracking-widest text-sm font-semibold mb-3 text-center">
            Accès
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-caribe mb-4 text-center">
            Comment arriver à Sapzurro ?
          </h2>
          <p className="text-lg text-oscuro/70 text-center mb-16 max-w-2xl mx-auto">
            Sapzurro n&apos;est pas accessible en voiture. C&apos;est ce qui en fait un paradis.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "🚌",
                title: "Option 1 — Bus + Bateau",
                steps: [
                  "Vol ou bus jusqu'à Medellín",
                  "Bus Medellín → Necoclí (8–9h)",
                  "Lancha rapide Necoclí → Sapzurro (1h30–2h)",
                ],
                note: "L'option la plus économique. Départ Necoclí à 8h et 14h.",
                cost: "~60–90 USD / pers.",
              },
              {
                icon: "✈️",
                title: "Option 2 — Avion + Bateau",
                steps: [
                  "Vol Medellín → Acandí (~1h, SATENA ou charter)",
                  "Bateau ou route Acandí → Sapzurro (30–45 min)",
                ],
                note: "Plus rapide mais moins fréquent. Réservez à l'avance.",
                cost: "~150–200 USD / pers.",
              },
            ].map((o) => (
              <div key={o.title} className="bg-arena rounded-2xl p-8 shadow-md">
                <span className="text-4xl mb-4 block">{o.icon}</span>
                <h3 className="text-xl font-display font-bold text-caribe mb-4">{o.title}</h3>
                <ol className="space-y-3 mb-6">
                  {o.steps.map((s, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-caribe text-perla text-xs font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-oscuro">{s}</span>
                    </li>
                  ))}
                </ol>
                <div className="border-t border-oscuro/10 pt-4 flex items-center justify-between">
                  <p className="text-sm text-oscuro/60 italic">{o.note}</p>
                  <span className="bg-bronze/20 text-bronze font-bold text-sm px-3 py-1 rounded-full">
                    {o.cost}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-caribe/10 border border-caribe/20 rounded-2xl p-6 text-center">
            <p className="text-caribe font-semibold">
              🚧 &nbsp; Dès 2027 — Le Túnel del Toyo réduira le trajet Medellín–Necoclí à 4h.
              Sapzurro deviendra accessible en une journée depuis Medellín.
            </p>
          </div>
        </div>
      </section>

      {/* ── AVIS ── */}
      <section className="py-24 bg-caribe text-perla">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-bronze uppercase tracking-widest text-sm font-semibold mb-3">
            Avis clients
          </p>
          <h2 className="text-4xl font-display font-bold text-perla mb-16">
            Ce que disent nos hôtes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Raul",
                from: "Colombie",
                text: "L'endroit est incroyable — il n'existe pas d'hébergement comme celui-ci à Sapzurro. Très confortable, avec tout ce dont on a besoin et un excellent service. Hautement recommandé !",
                rating: 10,
              },
              {
                name: "Montoya",
                from: "Mexique",
                text: "Très agréable, confortable, calme et dans un emplacement excellent. L'hôte s'occupe de tout de manière très professionnelle. 100% recommandé !",
                rating: 10,
              },
            ].map((r) => (
              <div key={r.name} className="bg-perla/10 rounded-2xl p-8 text-left">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-bronze text-xl">★</span>
                  ))}
                </div>
                <p className="text-arena-light/90 italic leading-relaxed mb-6">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="border-t border-perla/20 pt-4">
                  <p className="font-semibold text-perla">{r.name}</p>
                  <p className="text-sm text-arena-light/70">{r.from}</p>
                  <p className="text-xs text-bronze mt-1">via Booking.com · {r.rating}/10</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-28 bg-oscuro text-perla text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-bronze uppercase tracking-widest text-sm font-semibold mb-4">
            Prêt à partir ?
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-perla mb-6 leading-tight">
            Réservez votre séjour
          </h2>
          <p className="text-xl text-arena-light/80 mb-10 max-w-xl mx-auto leading-relaxed">
            Meilleurs tarifs garantis par message direct. Réponse en moins d&apos;une heure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold text-xl px-10 py-5 rounded-full hover:bg-[#1ebe57] transition-colors shadow-2xl"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Écrire sur WhatsApp
            </a>
            <a
              href={CONTACT.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-perla/40 text-perla font-semibold text-lg px-10 py-5 rounded-full hover:border-perla hover:bg-perla/10 transition-colors"
            >
              Voir sur Booking.com
            </a>
          </div>
          <p className="mt-10 text-arena-light/40 text-sm">
            +57 305 328 3357 · hola@sancibrian.com
          </p>
        </div>
      </section>

      {/* ── MINI FOOTER ── */}
      <footer className="py-8 bg-oscuro border-t border-perla/10 text-center">
        <p className="text-arena-light/40 text-sm">
          © {new Date().getFullYear()} Cabaña Sancibrian · Sapzurro, Chocó, Colombia
        </p>
        <div className="flex justify-center gap-6 mt-3">
          <Link href="/en" className="text-arena-light/40 hover:text-perla text-sm transition-colors">
            English
          </Link>
          <Link href="/es" className="text-arena-light/40 hover:text-perla text-sm transition-colors">
            Español
          </Link>
          <a
            href={CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-arena-light/40 hover:text-perla text-sm transition-colors"
          >
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}
