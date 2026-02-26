import Link from "next/link";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { locales, type Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === "es";
  return {
    title: isEs
      ? "Política de Tratamiento de Datos — Cabaña Sancibrian"
      : "Privacy & Data Policy — Cabaña Sancibrian",
    description: isEs
      ? "Política de tratamiento y protección de datos personales de Dehyl SAS — Cabaña Sancibrian, Sapzurro, Colombia. Cumplimiento Ley 1581 de 2012."
      : "Privacy and personal data treatment policy of Dehyl SAS — Cabaña Sancibrian, Sapzurro, Colombia.",
    robots: { index: false },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const isEs = locale === "es";

  return (
    <div className="min-h-screen bg-perla pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back link */}
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 text-caribe hover:text-bronze transition-colors font-medium mb-10 text-sm"
        >
          <span>←</span> {dict.common.backToHome}
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-14 prose prose-slate max-w-none">
          {isEs ? <PolicyES /> : <PolicyEN />}
        </div>
      </div>
    </div>
  );
}

/* ─── SPANISH VERSION ─────────────────────────────────────── */
function PolicyES() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-display font-bold text-oscuro mb-2">
        Política de Tratamiento y Protección de Datos Personales
      </h1>
      <p className="text-sm text-oscuro/50 mb-10">
        Versión 1.0 — Vigente desde el 1 de marzo de 2026
      </p>

      <Section title="1. Identificación del Responsable del Tratamiento">
        <p>
          <strong>Razón social:</strong> Dehyl SAS<br />
          <strong>NIT:</strong> 901.563.857-9<br />
          <strong>Marca comercial:</strong> Cabaña Sancibrian<br />
          <strong>Dirección:</strong> Carrera 30 # 7a – 167 Int 706, Medellín, Antioquia, Colombia<br />
          <strong>Sitio web:</strong> <a href="https://sancibrian.com" target="_blank" rel="noopener noreferrer">sancibrian.com</a><br />
          <strong>Correo electrónico:</strong>{" "}
          <a href="mailto:hola@sancibrian.com">hola@sancibrian.com</a><br />
          <strong>WhatsApp:</strong>{" "}
          <a href="https://wa.me/573053283357" target="_blank" rel="noopener noreferrer">+57 305 328 3357</a>
        </p>
      </Section>

      <Section title="2. Marco Legal">
        <p>
          La presente política se adopta en cumplimiento de las siguientes normas:
        </p>
        <ul>
          <li>Constitución Política de Colombia, Artículo 15 (Derecho al Habeas Data)</li>
          <li>Ley 1581 de 2012 — Protección de Datos Personales</li>
          <li>Decreto 1377 de 2013 — Reglamentación parcial de la Ley 1581 de 2012</li>
          <li>Decreto 1074 de 2015 (Decreto Único Reglamentario del Sector Comercio)</li>
          <li>Circulares de la Superintendencia de Industria y Comercio (SIC)</li>
        </ul>
        <p>
          La autoridad de vigilancia y control en materia de protección de datos personales es la{" "}
          <strong>Superintendencia de Industria y Comercio (SIC)</strong>.
        </p>
      </Section>

      <Section title="3. Definiciones">
        <dl className="space-y-3">
          <Definition term="Dato personal">
            Cualquier información vinculada o que pueda asociarse a una o varias personas naturales
            determinadas o determinables (nombre, correo electrónico, teléfono, documento de identidad, etc.).
          </Definition>
          <Definition term="Dato sensible">
            Información que afecta la intimidad del titular o cuyo uso indebido puede generar discriminación
            (origen racial, salud, orientación sexual, datos biométricos, entre otros). Dehyl SAS no recolecta
            datos sensibles de manera ordinaria.
          </Definition>
          <Definition term="Titular">
            Persona natural cuyos datos personales son objeto de tratamiento.
          </Definition>
          <Definition term="Responsable del tratamiento">
            Persona natural o jurídica que decide sobre la base de datos y su tratamiento.
            En este caso: Dehyl SAS.
          </Definition>
          <Definition term="Tratamiento">
            Cualquier operación sobre datos personales: recolección, almacenamiento, uso, circulación,
            supresión, entre otras.
          </Definition>
          <Definition term="Aviso de privacidad">
            Comunicación verbal o escrita dirigida al titular para informarle sobre el tratamiento de sus datos.
          </Definition>
          <Definition term="Base de datos">
            Conjunto organizado de datos personales objeto de tratamiento.
          </Definition>
        </dl>
      </Section>

      <Section title="4. Datos Personales Recolectados">
        <p>Dehyl SAS, en el marco de la operación de Cabaña Sancibrian, podrá recolectar los siguientes datos:</p>
        <ul>
          <li><strong>Datos de identificación:</strong> nombre completo, número de documento de identidad, nacionalidad, fecha de nacimiento.</li>
          <li><strong>Datos de contacto:</strong> correo electrónico, número de teléfono/WhatsApp, dirección de residencia.</li>
          <li><strong>Datos de la reserva:</strong> fechas de llegada y salida, número de huéspedes, preferencias especiales, plataforma de reserva utilizada (Airbnb, Booking.com, contacto directo).</li>
          <li><strong>Datos de pago:</strong> información necesaria para procesar pagos (sin almacenamiento de datos de tarjetas de crédito por nuestra parte).</li>
          <li><strong>Datos de comunicación:</strong> historial de mensajes por WhatsApp, correo electrónico u otras plataformas de comunicación.</li>
          <li><strong>Imágenes y videos:</strong> fotografías o videos compartidos voluntariamente por el titular o tomados con su autorización durante la estadía.</li>
          <li><strong>Datos de navegación:</strong> información técnica del navegador, dirección IP, cookies y datos de uso del sitio web.</li>
          <li><strong>Preferencias y reseñas:</strong> comentarios, valoraciones y preferencias expresadas por el huésped.</li>
        </ul>
      </Section>

      <Section title="5. Finalidades del Tratamiento">
        <p>Los datos personales recolectados serán utilizados para las siguientes finalidades:</p>
        <ol>
          <li>Gestión y confirmación de reservas de alojamiento.</li>
          <li>Registro de huéspedes conforme a la normativa colombiana de turismo (Resolución 2191 de 2015 y normas concordantes).</li>
          <li>Comunicación previa, durante y posterior a la estadía (información de llegada, logística, instrucciones).</li>
          <li>Facturación, cobro y contabilidad.</li>
          <li>Cumplimiento de obligaciones legales, fiscales y administrativas ante autoridades colombianas.</li>
          <li>Envío de comunicaciones de marketing, promociones y novedades de Cabaña Sancibrian (solo con autorización expresa del titular y con opción de cancelar la suscripción en cualquier momento).</li>
          <li>Mejora de servicios y atención al cliente.</li>
          <li>Publicación de reseñas o testimonios en el sitio web o redes sociales (solo con autorización expresa).</li>
          <li>Publicación de imágenes o videos en redes sociales (@SancibrianSapzurro) con previa autorización del titular.</li>
          <li>Seguridad del establecimiento y sus huéspedes.</li>
          <li>Análisis estadístico interno para mejorar la experiencia del huésped.</li>
        </ol>
      </Section>

      <Section title="6. Derechos del Titular">
        <p>
          De conformidad con el Artículo 8 de la Ley 1581 de 2012, el titular de los datos tiene los
          siguientes derechos:
        </p>
        <ul>
          <li><strong>Conocer</strong> los datos personales que Dehyl SAS tiene sobre él/ella.</li>
          <li><strong>Actualizar</strong> los datos personales cuando sean parciales, inexactos, incompletos o desactualizados.</li>
          <li><strong>Rectificar</strong> datos que sean incorrectos.</li>
          <li><strong>Suprimir</strong> datos cuando no exista obligación legal o contractual de conservarlos.</li>
          <li><strong>Revocar la autorización</strong> otorgada para el tratamiento, cuando no exista deber legal o contractual que lo impida.</li>
          <li><strong>Acceder gratuitamente</strong> a sus datos personales que hayan sido objeto de tratamiento.</li>
          <li><strong>Presentar quejas</strong> ante la Superintendencia de Industria y Comercio por infracciones a la Ley 1581 de 2012.</li>
          <li><strong>No ser objeto</strong> de tratamientos no autorizados de sus datos personales.</li>
        </ul>
      </Section>

      <Section title="7. Procedimiento para Ejercer los Derechos">
        <p>
          El titular o su causahabiente podrá ejercer sus derechos mediante solicitud escrita dirigida a
          Dehyl SAS a través de los siguientes canales:
        </p>
        <ul>
          <li>
            <strong>Correo electrónico:</strong>{" "}
            <a href="mailto:hola@sancibrian.com">hola@sancibrian.com</a>
          </li>
          <li>
            <strong>WhatsApp:</strong>{" "}
            <a href="https://wa.me/573053283357" target="_blank" rel="noopener noreferrer">+57 305 328 3357</a>
          </li>
          <li>
            <strong>Dirección:</strong> Carrera 30 # 7a – 167 Int 706, Medellín, Antioquia, Colombia
          </li>
        </ul>
        <p className="mt-4">
          <strong>Consultas:</strong> Dehyl SAS dará respuesta dentro de los diez (10) días hábiles
          siguientes a la fecha de recibo de la solicitud. Si no fuere posible atenderla en dicho término,
          se informará al interesado, expresando los motivos de la demora y señalando la fecha en que se
          atenderá la consulta, la cual en ningún caso podrá superar los cinco (5) días hábiles siguientes
          al vencimiento del primer término.
        </p>
        <p>
          <strong>Reclamos:</strong> El reclamo será tramitado en un plazo máximo de quince (15) días
          hábiles desde el día siguiente a la fecha de recibo. Si no fuere posible atender el reclamo en
          dicho término, se informará al interesado antes del vencimiento del plazo inicial.
        </p>
      </Section>

      <Section title="8. Autorización del Titular">
        <p>
          Dehyl SAS obtendrá la autorización previa, expresa e informada del titular antes de recolectar
          sus datos personales. Dicha autorización podrá constar en:
        </p>
        <ul>
          <li>Formulario de reserva en el sitio web (casilla de verificación explícita).</li>
          <li>Comunicación por correo electrónico o WhatsApp con confirmación de lectura.</li>
          <li>Documento físico firmado durante el registro en el establecimiento.</li>
          <li>Cualquier conducta inequívoca del titular que permita concluir razonablemente que otorgó la autorización.</li>
        </ul>
        <p>
          La reserva de alojamiento implica la aceptación de esta política para los datos estrictamente
          necesarios para la prestación del servicio. El tratamiento para fines adicionales (marketing,
          publicación de imágenes, etc.) requiere autorización expresa y separada.
        </p>
      </Section>

      <Section title="9. Transferencia y Transmisión de Datos">
        <p>
          Dehyl SAS podrá compartir datos personales con terceros únicamente en los siguientes casos:
        </p>
        <ul>
          <li>Plataformas de reserva (Airbnb, Booking.com) en la medida en que la reserva haya sido realizada a través de dichas plataformas y conforme a sus propias políticas de privacidad.</li>
          <li>Proveedores de servicios que actúan como encargados del tratamiento (procesadores de pago, servicios de correo electrónico, logística de transporte coordinada para el huésped), siempre bajo acuerdos de confidencialidad.</li>
          <li>Autoridades públicas colombianas cuando sea requerido por ley (Policía Nacional, DIAN, Migraciones Colombia, etc.).</li>
        </ul>
        <p>
          Dehyl SAS <strong>no venderá, cederá ni transferirá</strong> datos personales a terceros con
          fines comerciales sin la autorización expresa del titular.
        </p>
        <p>
          No se realizarán transferencias internacionales de datos a países que no cuenten con un nivel
          adecuado de protección, salvo que el titular otorgue autorización expresa para ello.
        </p>
      </Section>

      <Section title="10. Medidas de Seguridad">
        <p>
          Dehyl SAS adoptará las medidas técnicas, humanas y administrativas necesarias para garantizar
          la seguridad de los datos personales y evitar su adulteración, pérdida, consulta, uso o acceso
          no autorizado o fraudulento, entre otras:
        </p>
        <ul>
          <li>Almacenamiento en plataformas con cifrado (Google Workspace, servicios en la nube seguros).</li>
          <li>Acceso restringido a los datos únicamente al personal autorizado.</li>
          <li>Uso de protocolos HTTPS en el sitio web.</li>
          <li>No almacenamiento de datos de tarjetas de crédito en sistemas propios.</li>
          <li>Capacitación del equipo sobre confidencialidad y manejo de datos.</li>
        </ul>
      </Section>

      <Section title="11. Período de Conservación de los Datos">
        <p>
          Los datos personales serán conservados durante el tiempo necesario para cumplir las finalidades
          del tratamiento y las obligaciones legales aplicables. En particular:
        </p>
        <ul>
          <li>Datos de huéspedes: mínimo cinco (5) años, conforme a las obligaciones contables y fiscales colombianas.</li>
          <li>Datos de comunicaciones de marketing: hasta que el titular revoque su autorización.</li>
          <li>Datos de navegación y cookies: según la configuración del sitio web (máximo 12 meses).</li>
        </ul>
        <p>
          Una vez cumplido el período de conservación y sin obligación legal de retención, los datos
          serán suprimidos de forma segura.
        </p>
      </Section>

      <Section title="12. Cookies y Tecnologías de Seguimiento">
        <p>
          El sitio web sancibrian.com puede utilizar cookies y tecnologías similares para mejorar la
          experiencia del usuario, analizar el tráfico y personalizar el contenido. Las cookies utilizadas
          son de sesión (se eliminan al cerrar el navegador) y persistentes (permanecen por un período
          determinado).
        </p>
        <p>
          El usuario puede configurar su navegador para rechazar cookies, aunque esto puede afectar la
          funcionalidad del sitio.
        </p>
      </Section>

      <Section title="13. Datos de Menores de Edad">
        <p>
          Dehyl SAS no recolecta deliberadamente datos personales de menores de 18 años de manera directa.
          En caso de que una reserva incluya menores de edad como huéspedes, los datos serán proporcionados
          por su representante legal, quien asume la responsabilidad de la autorización.
        </p>
      </Section>

      <Section title="14. Modificaciones a la Política">
        <p>
          Dehyl SAS se reserva el derecho de modificar la presente política en cualquier momento para
          adaptarla a cambios normativos o empresariales. Las modificaciones serán publicadas en{" "}
          <a href="https://sancibrian.com" target="_blank" rel="noopener noreferrer">sancibrian.com</a>{" "}
          e informadas a los titulares registrados por correo electrónico con al menos diez (10) días
          de anticipación a su entrada en vigencia.
        </p>
      </Section>

      <Section title="15. Vigencia">
        <p>
          La presente Política de Tratamiento de Datos Personales entra en vigencia el{" "}
          <strong>1 de marzo de 2026</strong> y permanecerá vigente hasta que sea modificada o
          derogada por Dehyl SAS.
        </p>
        <p>
          Las bases de datos en que se almacenan los datos personales tendrán una vigencia igual al
          tiempo en que Dehyl SAS desarrolle su actividad comercial.
        </p>
      </Section>

      <div className="mt-12 p-6 bg-arena-light rounded-xl text-sm text-oscuro/70">
        <p className="font-semibold text-oscuro mb-2">Contacto — Responsable del Tratamiento</p>
        <p>
          Dehyl SAS — NIT 901.563.857-9<br />
          Cabaña Sancibrian, Sapzurro, Chocó, Colombia<br />
          <a href="mailto:hola@sancibrian.com" className="text-caribe">hola@sancibrian.com</a>{" "}
          ·{" "}
          <a href="https://wa.me/573053283357" target="_blank" rel="noopener noreferrer" className="text-caribe">
            +57 305 328 3357
          </a>
        </p>
      </div>
    </>
  );
}

/* ─── ENGLISH VERSION ─────────────────────────────────────── */
function PolicyEN() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-display font-bold text-oscuro mb-2">
        Privacy & Personal Data Policy
      </h1>
      <p className="text-sm text-oscuro/50 mb-10">
        Version 1.0 — Effective March 1, 2026
      </p>

      <p className="text-oscuro/70 italic mb-8 border-l-4 border-arena pl-4">
        This privacy policy is issued in compliance with Colombian Law 1581 of 2012 on Personal Data
        Protection. The legally binding version is the Spanish text available at{" "}
        <a href="/es/privacy" className="text-caribe underline">/es/privacy</a>.
      </p>

      <Section title="1. Data Controller">
        <p>
          <strong>Company:</strong> Dehyl SAS<br />
          <strong>Tax ID (NIT):</strong> 901.563.857-9<br />
          <strong>Brand:</strong> Cabaña Sancibrian<br />
          <strong>Address:</strong> Carrera 30 # 7a – 167 Int 706, Medellín, Antioquia, Colombia<br />
          <strong>Website:</strong> <a href="https://sancibrian.com" target="_blank" rel="noopener noreferrer">sancibrian.com</a><br />
          <strong>Email:</strong>{" "}
          <a href="mailto:hola@sancibrian.com">hola@sancibrian.com</a><br />
          <strong>WhatsApp:</strong>{" "}
          <a href="https://wa.me/573053283357" target="_blank" rel="noopener noreferrer">+57 305 328 3357</a>
        </p>
      </Section>

      <Section title="2. Legal Framework">
        <p>
          This policy complies with Colombian Law 1581 of 2012 (Personal Data Protection), Decree 1377
          of 2013, and the Colombian Constitution (Article 15 — Habeas Data right). The supervisory
          authority is the <strong>Superintendencia de Industria y Comercio (SIC)</strong>.
        </p>
      </Section>

      <Section title="3. Data We Collect">
        <ul>
          <li><strong>Identity data:</strong> full name, passport/ID number, nationality, date of birth.</li>
          <li><strong>Contact data:</strong> email address, phone/WhatsApp number, home address.</li>
          <li><strong>Booking data:</strong> check-in/out dates, number of guests, special requests, booking platform used.</li>
          <li><strong>Payment data:</strong> information required to process payments (we do not store card data).</li>
          <li><strong>Communication data:</strong> WhatsApp and email history.</li>
          <li><strong>Images/videos:</strong> photos or videos shared voluntarily or taken with explicit authorization.</li>
          <li><strong>Browsing data:</strong> IP address, browser type, cookies, website usage data.</li>
          <li><strong>Reviews and preferences:</strong> comments, ratings, and preferences expressed by guests.</li>
        </ul>
      </Section>

      <Section title="4. How We Use Your Data">
        <ol>
          <li>Booking management and confirmation.</li>
          <li>Guest registration as required by Colombian tourism regulations.</li>
          <li>Pre-arrival, during-stay, and post-stay communications.</li>
          <li>Invoicing and accounting.</li>
          <li>Legal and tax compliance with Colombian authorities.</li>
          <li>Marketing communications and promotions (only with your explicit consent — unsubscribe anytime).</li>
          <li>Service improvement and guest experience enhancement.</li>
          <li>Publishing reviews or testimonials (only with explicit authorization).</li>
          <li>Publishing photos/videos on social media (only with explicit authorization).</li>
          <li>Property and guest security.</li>
        </ol>
      </Section>

      <Section title="5. Your Rights">
        <p>Under Colombian Law 1581 of 2012, you have the right to:</p>
        <ul>
          <li><strong>Access</strong> your personal data held by us.</li>
          <li><strong>Update</strong> your data if it is inaccurate or incomplete.</li>
          <li><strong>Rectify</strong> incorrect data.</li>
          <li><strong>Delete</strong> your data when there is no legal obligation to retain it.</li>
          <li><strong>Revoke consent</strong> for data processing where no legal duty prevents it.</li>
          <li><strong>File a complaint</strong> with the Superintendencia de Industria y Comercio (SIC).</li>
        </ul>
        <p>To exercise your rights, contact us at:</p>
        <ul>
          <li><a href="mailto:hola@sancibrian.com">hola@sancibrian.com</a></li>
          <li><a href="https://wa.me/573053283357" target="_blank" rel="noopener noreferrer">+57 305 328 3357</a></li>
        </ul>
        <p>
          We will respond to <strong>inquiries within 10 business days</strong> and to{" "}
          <strong>claims within 15 business days</strong>.
        </p>
      </Section>

      <Section title="6. Data Sharing">
        <p>We may share your data with:</p>
        <ul>
          <li>Booking platforms (Airbnb, Booking.com) when the booking was made through them.</li>
          <li>Service providers acting as data processors (payment processors, email services, transport coordination), under confidentiality agreements.</li>
          <li>Colombian public authorities when required by law.</li>
        </ul>
        <p>
          We <strong>do not sell, assign, or transfer</strong> your personal data to third parties for
          commercial purposes without your explicit consent.
        </p>
      </Section>

      <Section title="7. Data Retention">
        <ul>
          <li>Guest data: minimum 5 years (Colombian accounting and tax obligations).</li>
          <li>Marketing communications: until you withdraw consent.</li>
          <li>Browsing/cookie data: up to 12 months.</li>
        </ul>
      </Section>

      <Section title="8. Security">
        <p>
          We implement technical and organizational measures to protect your personal data against
          unauthorized access, loss, or alteration, including encrypted storage, restricted access
          controls, HTTPS protocols, and staff training.
        </p>
      </Section>

      <Section title="9. Cookies">
        <p>
          sancibrian.com uses cookies to improve user experience and analyze traffic. You may configure
          your browser to reject cookies, though this may affect site functionality.
        </p>
      </Section>

      <Section title="10. Minors">
        <p>
          We do not deliberately collect personal data directly from individuals under 18. Where bookings
          include minors, data is provided by their legal guardian, who assumes responsibility for
          authorization.
        </p>
      </Section>

      <Section title="11. Policy Updates">
        <p>
          We may update this policy at any time. Changes will be published at{" "}
          <a href="https://sancibrian.com" target="_blank" rel="noopener noreferrer">sancibrian.com</a>{" "}
          and notified to registered users by email at least 10 days before taking effect.
        </p>
      </Section>

      <Section title="12. Effective Date">
        <p>This policy is effective from <strong>March 1, 2026</strong>.</p>
      </Section>

      <div className="mt-12 p-6 bg-arena-light rounded-xl text-sm text-oscuro/70">
        <p className="font-semibold text-oscuro mb-2">Data Controller Contact</p>
        <p>
          Dehyl SAS — NIT 901.563.857-9<br />
          Cabaña Sancibrian, Sapzurro, Chocó, Colombia<br />
          <a href="mailto:hola@sancibrian.com" className="text-caribe">hola@sancibrian.com</a>{" "}
          ·{" "}
          <a href="https://wa.me/573053283357" target="_blank" rel="noopener noreferrer" className="text-caribe">
            +57 305 328 3357
          </a>
        </p>
      </div>
    </>
  );
}

/* ─── HELPER COMPONENTS ───────────────────────────────────── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-display font-bold text-caribe mb-4 pb-2 border-b border-arena">
        {title}
      </h2>
      <div className="text-oscuro space-y-3 leading-relaxed">{children}</div>
    </section>
  );
}

function Definition({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="font-semibold text-oscuro inline">{term}: </dt>
      <dd className="inline text-oscuro/80">{children}</dd>
    </div>
  );
}
