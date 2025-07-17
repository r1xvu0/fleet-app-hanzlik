import Link from "next/link";

export default function TermsOfUsePage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-indigo-600 transition-colors">Domů</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Podmínky použití</span>
          </div>
        </div>
      </div>

      {/* Terms of Use Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-white">Podmínky použití</h1>
          
          <div className="prose prose-lg max-w-none text-gray-300">
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-4 text-white">OBCHODNÍ PODMÍNKY WEBU</h2>
              <p className="text-sm text-gray-400 mb-4">(sloužící k náboru řidičů taxislužby)</p>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Provozovatel:</h3>
                <div className="pl-4 space-y-1">
                  <p><strong className="text-white">P.H. Business Company s.r.o.</strong></p>
                  <p><strong className="text-white">Sídlo:</strong> Travná 1285, Kyje, 198 00 Praha 9</p>
                  <p><strong className="text-white">IČO:</strong> 05592089</p>
                  <p><strong className="text-white">Web:</strong> <a href="https://www.flotila-praha.eu" className="text-indigo-400 hover:text-indigo-300">www.flotila-praha.eu</a></p>
                  <p><strong className="text-white">E-mail:</strong> <a href="mailto:fleets@flotila-praha.eu" className="text-indigo-400 hover:text-indigo-300">fleets@flotila-praha.eu</a></p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-4 text-white">1. Úvodní ustanovení</h2>
              <p className="mb-4">
                Tyto podmínky upravují užívání webových stránek <a href="https://www.flotila-praha.eu" className="text-indigo-400 hover:text-indigo-300">www.flotila-praha.eu</a>, které slouží k náboru řidičů taxislužby.
              </p>
              <p className="mb-4">
                <strong className="text-white">Používáním webu uživatel potvrzuje, že se s těmito podmínkami seznámil a souhlasí s nimi.</strong>
              </p>
              <p>
                Tyto podmínky se vydávají v souladu s § 1751 zákona č. 89/2012 Sb., občanský zákoník.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-4 text-white">2. Obsah a autorská práva</h2>
              <p className="mb-4">
                Veškerý obsah webu (texty, fotografie, loga) je chráněn podle zákona č. 121/2000 Sb., autorský zákon.
              </p>
              <p>
                <strong className="text-white">Bez písemného souhlasu provozovatele nelze obsah kopírovat, upravovat ani jinak šířit.</strong>
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-4 text-white">3. Odpovědnost</h2>
              <p className="mb-4">
                Provozovatel nenese odpovědnost za případné škody způsobené využitím neaktuálních nebo nesprávných informací.
              </p>
              <p>
                <strong className="text-white">Web má pouze informativní charakter a nezaručuje navázání smluvního vztahu.</strong>
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-4 text-white">4. Kontaktní formulář</h2>
              <p className="mb-4">
                Formulář slouží výhradně pro účely náboru.
              </p>
              <p>
                <strong className="text-white">Odesláním formuláře dává uživatel souhlas se zpracováním údajů dle čl. 6 odst. 1 písm. a) a b) GDPR.</strong>
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-4 text-white">5. Zakázané jednání</h2>
              <p>
                Uživatel se zavazuje:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Nezasahovat do provozu webu</li>
                <li>Nezneužívat formulář</li>
                <li>Nevkládat falešné údaje</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-4 text-white">6. Cookies</h2>
              <p className="mb-4">
                Web může používat soubory cookies a nástroje třetích stran pro analytické a marketingové účely (např. Google Analytics).
              </p>
              <p>
                Podrobnosti viz <Link href="/ochrana-osobnich-udaju" className="text-indigo-400 hover:text-indigo-300">Zásady ochrany osobních údajů</Link>.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4 text-white">7. Změny podmínek</h2>
              <p className="mb-4">
                Provozovatel si vyhrazuje právo kdykoliv změnit tyto podmínky.
              </p>
              <p>
                <strong className="text-white">Vztahy se řídí právem České republiky.</strong>
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 p-6 bg-indigo-600 rounded-lg text-white">
            <h2 className="text-xl font-bold mb-4">Kontaktní informace</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="mb-2">
                  <strong>Email:</strong> 
                  <a href="mailto:fleets@flotila-praha.eu" className="text-indigo-200 hover:text-white ml-1">fleets@flotila-praha.eu</a>
                </p>
                <p className="mb-2">
                  <strong>Web:</strong> 
                  <a href="https://www.flotila-praha.eu" className="text-indigo-200 hover:text-white ml-1">www.flotila-praha.eu</a>
                </p>
              </div>
              <div>
                <p className="mb-2"><strong>P.H. Business Company s.r.o.</strong></p>
                <p className="mb-2">Travná 1285, Kyje</p>
                <p className="mb-2">198 00 Praha 9</p>
                <p><strong>IČO:</strong> 05592089</p>
              </div>
            </div>
            <p className="text-sm text-indigo-200 mt-4">
              Pro jakékoliv dotazy týkající se podmínek použití nás neváhejte kontaktovat.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}