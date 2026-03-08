import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Gradix.de – DSGVO-konform",
};

export default function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-6 text-2xl font-bold text-gray-900">
        Datenschutzerklärung
      </h1>

      <div className="space-y-6 text-sm text-gray-700">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            1. Verantwortlicher
          </h2>
          <p>
            Jan Siegmann — unlimited
            <br />
            c/o Online-Impressum.de #6013
            <br />
            Europaring 90
            <br />
            53757 Sankt Augustin
            <br />
            Deutschland
          </p>
          <p className="mt-2">
            E-Mail: jan@jansiegmann.de
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            2. Übersicht der Verarbeitungen
          </h2>
          <p>
            Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten
            und die Zwecke ihrer Verarbeitung zusammen und verweist auf die
            betroffenen Personen.
          </p>
          <ul className="ml-4 mt-2 list-disc space-y-1">
            <li>Bestandsdaten (z.B. Namen, Adressen)</li>
            <li>Nutzungsdaten (z.B. besuchte Webseiten, Zugriffszeiten)</li>
            <li>Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen)</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            3. Rechtsgrundlagen
          </h2>
          <p>
            Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der
            DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten:
          </p>
          <ul className="ml-4 mt-2 list-disc space-y-1">
            <li>
              <strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)</strong>{" "}
              — Die betroffene Person hat ihre Einwilligung in die Verarbeitung
              der sie betreffenden personenbezogenen Daten für einen
              spezifischen Zweck gegeben.
            </li>
            <li>
              <strong>
                Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)
              </strong>{" "}
              — Die Verarbeitung ist zur Wahrung der berechtigten Interessen
              des Verantwortlichen oder eines Dritten erforderlich, sofern
              nicht die Interessen oder Grundrechte und Grundfreiheiten der
              betroffenen Person überwiegen.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            4. Hosting
          </h2>
          <p>
            Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut,
            CA 91789, USA gehostet. Vercel verarbeitet Daten auch in den USA.
            Vercel ist Teilnehmer des EU-US Data Privacy Framework, das die
            Einhaltung europäischer Datenschutzstandards sicherstellt.
          </p>
          <p className="mt-2">
            Beim Besuch der Website werden automatisch Informationen erhoben,
            die Ihr Browser übermittelt. Dies sind:
          </p>
          <ul className="ml-4 mt-2 list-disc space-y-1">
            <li>Browsertyp und -version</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p className="mt-2">
            Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
            lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse
            an der technisch fehlerfreien Darstellung und Optimierung seiner
            Website.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            5. Cookies
          </h2>
          <p>
            Unsere Website verwendet Cookies. Cookies sind kleine Textdateien,
            die auf Ihrem Endgerät gespeichert werden und die Ihr Browser
            speichert. Sie richten keinen Schaden an und enthalten keine Viren.
          </p>
          <p className="mt-2">
            <strong>Technisch notwendige Cookies:</strong> Diese Cookies sind
            für das Funktionieren der Website erforderlich. Sie werden in der
            Regel als Reaktion auf von Ihnen getätigte Aktionen gesetzt, wie
            z.B. das Festlegen Ihrer Datenschutzeinstellungen oder das
            Speichern Ihrer Cookie-Einwilligung. Diese Cookies können nicht
            deaktiviert werden. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
            DSGVO.
          </p>
          <p className="mt-2">
            <strong>Optionale Cookies:</strong> Optionale Cookies werden nur
            mit Ihrer ausdrücklichen Einwilligung gesetzt (Art. 6 Abs. 1 lit.
            a DSGVO). Sie können Ihre Einwilligung jederzeit über den
            Cookie-Banner widerrufen.
          </p>
          <p className="mt-2">
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen
            von Cookies informiert werden und Cookies nur im Einzelfall
            erlauben, die Annahme von Cookies für bestimmte Fälle oder
            generell ausschließen sowie das automatische Löschen der Cookies
            beim Schließen des Browsers aktivieren.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            6. Affiliate-Programm (Amazon PartnerNet)
          </h2>
          <p>
            Wir nehmen am Amazon PartnerNet-Programm teil. Auf unseren Seiten
            werden Werbeanzeigen und Links zur Seite von Amazon.de eingebunden,
            an denen wir über Werbekostenerstattung Geld verdienen können.
          </p>
          <p className="mt-2">
            Amazon setzt Cookies ein, um die Herkunft der Bestellungen
            nachvollziehen zu können. Dadurch kann Amazon erkennen, dass Sie
            den Partnerlink auf unserer Website geklickt haben.
          </p>
          <p className="mt-2">
            Die Speicherung von Amazon-Cookies erfolgt auf Grundlage von Art.
            6 Abs. 1 lit. a DSGVO (Einwilligung über Cookie-Banner) bzw. Art.
            6 Abs. 1 lit. f DSGVO, soweit die Cookies technisch notwendig
            sind. Weitere Informationen zur Datennutzung durch Amazon erhalten
            Sie in der Datenschutzerklärung von Amazon.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            7. Ihre Rechte als betroffene Person
          </h2>
          <p>
            Ihnen stehen als betroffene Person nach der DSGVO verschiedene
            Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:
          </p>
          <ul className="ml-4 mt-2 list-disc space-y-2">
            <li>
              <strong>Recht auf Auskunft (Art. 15 DSGVO):</strong> Sie haben
              das Recht, eine Bestätigung darüber zu verlangen, ob
              personenbezogene Daten verarbeitet werden, und auf Auskunft über
              diese Daten sowie weitere Informationen und eine Kopie der Daten.
            </li>
            <li>
              <strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie
              haben das Recht, die Vervollständigung oder Berichtigung
              unrichtiger Daten zu verlangen.
            </li>
            <li>
              <strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie haben
              das Recht, die unverzügliche Löschung Ihrer Daten zu verlangen,
              sofern die Voraussetzungen hierfür erfüllt sind.
            </li>
            <li>
              <strong>
                Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):
              </strong>{" "}
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
              Daten zu verlangen.
            </li>
            <li>
              <strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong>{" "}
              Sie haben das Recht, Ihre Daten in einem gängigen,
              maschinenlesbaren Format zu erhalten oder die Übermittlung an
              einen anderen Verantwortlichen zu verlangen.
            </li>
            <li>
              <strong>Recht auf Widerspruch (Art. 21 DSGVO):</strong> Sie haben
              das Recht, aus Gründen, die sich aus Ihrer besonderen Situation
              ergeben, jederzeit gegen die Verarbeitung Ihrer Daten Widerspruch
              einzulegen.
            </li>
            <li>
              <strong>
                Recht auf Widerruf erteilter Einwilligungen (Art. 7 Abs. 3
                DSGVO):
              </strong>{" "}
              Sie haben das Recht, erteilte Einwilligungen jederzeit zu
              widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
              Verarbeitung bleibt davon unberührt.
            </li>
            <li>
              <strong>
                Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77
                DSGVO):
              </strong>{" "}
              Sie haben das Recht, sich bei einer Aufsichtsbehörde zu
              beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung
              Ihrer Daten gegen die DSGVO verstößt.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            8. Änderungen dieser Datenschutzerklärung
          </h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung zu aktualisieren,
            um sie an geänderte Rechtslagen oder bei Änderungen des Dienstes
            bzw. der Datenverarbeitung anzupassen. Die aktuelle Fassung ist
            stets auf dieser Seite verfügbar.
          </p>
          <p className="mt-2">Stand: März 2026</p>
        </section>
      </div>
    </div>
  );
}
