import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-indigo-600 transition-colors">Domů</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Ochrana osobních údajů</span>
          </div>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-white">Ochrana osobních údajů</h1>
          
          <div className="prose prose-lg max-w-none text-gray-300">
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-4 text-white">Souhlas s poskytnutím osobních údajů</h2>
              <p className="mb-4">
                Informace o Správci osobních údajů a o Zpracovateli osobních údajů jsou k dostání na emailové adrese: 
                <a href="mailto:info@driverhome.cz" className="text-indigo-400 hover:text-indigo-300 ml-1">info@driverhome.cz</a>
              </p>
              <p>Osobní údaje je oprávněn také zpracovávat kterýkoliv zaměstnanec správce.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-4 text-white">Text souhlasu</h2>
              <p>
                Zaškrtnutím políčka před odesláním objednávky v souladu s čl. 6 odst. 1 písm. a) nařízení Evropského Parlamentu a Rady (EU) 2016/679 ze dne 27. dubna 2016, o ochraně fyzických osob v souvislosti se zpracováním osobních údajů a o volném pohybu těchto údajů a o zrušení směrnice 95/46/ES (dále jen „nařízení GDPR"), které nabylo účinnosti dne 25. 5. 2018, <strong className="text-white">souhlasím se shromažďováním, uchováním a zpracováním mých osobních údajů mnou poskytnutých správci.</strong>
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-4 text-white">Jaké údaje budou zpracovány</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Jméno a příjmení, popřípadě obchodní firma</li>
                <li>Bydliště (ulice, č. p./č. o, město, PSČ, stát) nebo sídlo</li>
                <li>E-mailová adresa</li>
                <li>Telefonní číslo</li>
                <li>IČO, DIČ</li>
                <li>IP adresa</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-4 text-white">K jakým účelům budou osobní údaje zpracovány a uchovány</h2>
              <p className="mb-4">Osobní údaje, kterými jsou:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Jméno a příjmení, popřípadě obchodní firma</li>
                <li>Bydliště (ulice, č. p./č. o, město, PSČ, stát) nebo sídlo</li>
                <li>E-mailová adresa</li>
                <li>Telefonní číslo</li>
                <li>IČO, DIČ</li>
                <li>IP adresa</li>
              </ul>
              <p>bude správce shromažďovat, uchovávat a zpracovávat pro následující účely:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pro zasílání obchodních a marketingových nabídek a oznámení správce</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-4 text-white">Doba, po kterou budou osobní údaje uchovány</h2>
              <p>
                Správce bude uchovávat osobní údaje po dobu nezbytně nutnou. <strong className="text-white">Nejdéle bude správce uchovávat osobní údaje po dobu 12 měsíců.</strong>
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-4 text-white">Jakým způsobem budou osobní údaje zpracovány a uchovány?</h2>
              <p>Osobní údaje budou zpracovány:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Strojově (automatizovaně) prostřednictvím počítačů a počítačových programů</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-4 text-white">Práva subjektu údajů, informace a přístup k osobním údajům</h2>
              <p className="mb-4">
                Jako subjekt údajů mám právo na přístup k mým osobním údajům, mám právo na jejich opravu nebo výmaz, popřípadě omezení zpracování. Mám právo požadovat informaci, jaké osobní údaje jsou zpracovávány a mám právo požadovat vysvětlení ohledně zpracování osobních údajů.
              </p>
              <p className="mb-4">
                Dále mám právo vznést námitku proti zpracování, jakož i práva na přenositelnost údajů (tj. právo získat osobní údaje, které se mne týkají, které jsem poskytl správci, ve strukturovaném, běžně používaném a strojově čitelném formátu, blíže viz. čl. 20 nařízení GDPR).
              </p>
              <p className="mb-4">
                Mám právo souhlas kdykoli odvolat, aniž by tím byla dotčena zákonnost zpracování založená na souhlasu uděleném před jeho odvoláním, pokud je zpracování založeno na čl. 6 odst. 1 písm. a) nebo čl. 9 odst. 2 písm. a) nařízení GDPR. To znamená, že takové právo nemám zejména tehdy, pokud je zpracování nezbytné pro splnění právní povinnosti, která se na správce vztahuje (zejména povinnosti vztahující se k LVTČ).
              </p>
              <p className="mb-4">
                Jako subjekt údajů jsem informován o tom, že souhlas s poskytnutím údajů mohu odvolat vyplněním formuláře a odesláním e-mailu na adresu 
                <a href="mailto:info@driverhome.cz" className="text-indigo-400 hover:text-indigo-300 ml-1">info@driverhome.cz</a>
              </p>
              <p className="mb-4">
                Jako subjekt údajů mám právo požádat o informaci o zpracování mých osobních údajů, přičemž tuto informaci je správce povinen mi bez zbytečného odkladu předat. Obsah informace je dán ustanovením článku 15 nařízení GDPR. Správce má právo za poskytnutí informace požadovat přiměřenou úhradu nepřevyšující náklady nezbytné na poskytnutí informace.
              </p>
              <p>
                Jako subjekt údajů mám v případě pochybností o dodržování povinností souvisejících se zpracováním osobních údajů právo obrátit se na správce nebo na Úřad pro ochranu osobních údajů.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-4 text-white">Další prohlášení správce</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Správce prohlašuje, že při zpracování nedochází k automatizovanému rozhodování, včetně profilování, uvedenému v čl. 22 odst. 1 a 4 nařízení GDPR.</li>
                <li>Správce prohlašuje, že osobní údaje nejsou zpracovávány pro účely vědeckého či historického výzkumu nebo pro statistické účely.</li>
                <li>Správce prohlašuje, že bude osobní údaje zpracovávat strojově (automatizovaně) prostřednictvím počítačů a počítačových programů.</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4 text-white">Závěrečná ustanovení</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Jako subjekt údajů prohlašuji, že jsem si vědom(a) svých práv podle kapitoly III nařízení GDPR.</li>
                <li>Prohlašuji, že všechny poskytnuté údaje jsou přesné a pravdivé a jsou poskytovány dobrovolně.</li>
                <li>Správce prohlašuje, že bude shromažďovat osobní údaje v rozsahu nezbytném pro naplnění účelu a zpracovávat je bude pouze v souladu s účelem, k němuž byly shromážděny.</li>
                <li>Tento souhlas je svobodný a vědomý projev vůle subjektu údajů, jehož obsahem je svolení subjektu údajů se zpracováním osobních údajů.</li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 p-6 bg-indigo-600 rounded-lg text-white">
            <h2 className="text-xl font-bold mb-4">Kontakt pro otázky ohledně ochrany osobních údajů</h2>
            <p className="mb-2">
              <strong>Email:</strong> 
              <a href="mailto:info@driverhome.cz" className="text-indigo-200 hover:text-white ml-1">info@driverhome.cz</a>
            </p>
            <p className="text-sm text-indigo-200">
              Pro jakékoliv dotazy týkající se zpracování vašich osobních údajů nás neváhejte kontaktovat.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}