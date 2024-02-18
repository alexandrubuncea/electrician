import Image from 'next/image';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import InfoTop from '@/components/InfoTop';
import NavBar from '@/components/NavBar';
import Feature from '@/components/Feature';
import {
  BoltIcon,
  WrenchScrewdriverIcon,
  SunIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/solid';
import Stats from '@/components/Stats';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import Section from '@/components/Section';
import aboutMeImg from '../img/about-me.jpg';
import fotovoltaiceImg from '../img/fotovoltaice.jpg';
import prizePamantImg from '../img/priza-pamant.jpg';
import knxImg from '../img/knx.jpg';
import heroImg from '../img/hero.jpg';
import instalatiiImg from '../img/instalatii.jpg';
import Hero from '@/components/Hero';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Voicu D. Valentin | Electrician autorizat ANRE</title>
        <meta
          name="description"
          content="Voicu D. Valentin, Persoană Fizică Autorizată, un electrician
              cu o experiență vastă de peste 30 de ani în domeniul electric."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`flex w-full flex-col items-center ${inter.className}`}>
        <InfoTop />
        <NavBar />
        <div className="flex w-full max-w-screen-xl flex-col  gap-8 p-8 md:gap-24">
          <Hero
            title="Electrician autorizat
          ANRE cu experienta"
            subtitle="Cu o experienta de peste 30 de ani in domeniul
          electric, sunt un electrician autorizat ANRE cu calificare 
          in Instalarea Sistemelor Fotovoltaice solare."
            imageSrc={heroImg.src}
            primaryAction={{
              label: 'Suna acum',
              onClick: () => (window.location.href = 'tel:+0732843299'),
            }}
            secondaryAction={{
              label: 'Vezi servicii',
              onClick: () => (window.location.hash = 'servicii'),
            }}
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 sm:p-0">
            <Feature
              href="#servicii"
              icon={<BoltIcon className="h-6 w-6 text-neutral-900" />}
              title="Instalatii electrice"
              description="Ne ocupam de instalatii electrice rezidentiale si industriale."
            />
            <Feature
              href="#prize"
              icon={
                <WrenchScrewdriverIcon className="h-6 w-6 text-neutral-900" />
              }
              title="Prize de pamant"
              description="Proiectarea, executia, verificare si repararea prizelor de pamant."
            />
            <Feature
              href="#fotovoltaice"
              icon={<SunIcon className="h-6 w-6 text-neutral-900" />}
              title="Instalatii fotovoltaice solare"
              description="Instalarea și punerea în funcțiune a sistemelor fotovoltaice solare."
            />
            <Feature
              href="#knx"
              icon={
                <DevicePhoneMobileIcon className="h-6 w-6 text-neutral-900" />
              }
              title="Instalatii sisteme KNX"
              description="Executie instalatie electrica in conformitate cu proiectul KNX"
            />
          </div>
          <div className="grid grid-cols-1 gap-6 rounded-xl bg-neutral-50 px-6 py-8 md:grid-cols-3 md:gap-14">
            <Stats number="30" label="Ani experienta" />
            <Stats number="1000" label="Proiecte terminate" />
            <Stats number="1500" label="Clienti fericiti" />
          </div>
          <Section
            imgSrc={aboutMeImg.src}
            id="despre"
            badge="DESPRE"
            title="Electrician cu o experiență vastă de peste 30 de ani în domeniul electric"
          >
            <p>
              Sunt Voicu D. Valentin, Persoană Fizică Autorizată, un electrician
              cu o experiență vastă de peste 30 de ani în domeniul electric.
            </p>
            <p>
              Dețin autorizație ANRE, o calificare în Instalarea Sistemelor
              Fotovoltaice Solare si Certificat instalator Huawei profesionist.
            </p>
            <p>
              Portofoliul meu este diversificat și include realizarea
              instalațiilor electrice rezidențiale și industriale, atât noi, cât
              și cele existente. Mă specializez în dezvoltarea soluțiilor
              fotovoltaice durabile și în execuția instalațiilor electrice
              conform proiectelor KNX.
            </p>
            <p>
              Profesionalismul meu este evident în fiecare proiect, iar
              angajamentul meu față de siguranță și detalii de calitate rămâne
              constant. Cu o abordare centrată pe client, vă asigur că fiecare
              lucrare este abordată cu atenție la detalii și expertiză tehnică.
            </p>
          </Section>
          <Section
            imgSrc={instalatiiImg.src}
            id="servicii"
            title="Instalatii electrice rezidentiale si industriale"
            imgOnRight
            badge="SERVICII"
          >
            <p>
              Realizam instalatii electrice noi pentru locuinte, atat pentru
              constructii noi, cat si pentru renovari.
            </p>
            <p>
              Printre serviciile noastre pentru instalatii electrice
              rezidentiale si industriale se numara:
            </p>
            <ul className="flex list-disc flex-col gap-2 pl-6">
              <li>Proiectarea si executia instalatiilor electrice noi</li>
              <li>
                Intretinerea si reparatiile instalatiilor electrice existente
              </li>
              <li>Instalarea de tablouri electrice</li>
              <li>Instalarea de aparataj electric</li>
              <li>Instalarea de corpuri de iluminat,etc.</li>
            </ul>
          </Section>
          <Section
            imgSrc={prizePamantImg.src}
            id="prize"
            title="Prize de pamant"
            badge="SERVICII"
          >
            <p>
              Oferim servicii complete de realizare și verificare a prizelor de
              pamant pentru cladiri și instalații fotovoltaice, inclusiv buletin
              de verificare.
            </p>
            <p>
              Printre serviciile noastre pentru prizele de pamant se numara:
            </p>
            <ul className="flex list-disc flex-col gap-2 pl-6">
              <li>Proiectare și execuție de prize de pamant naturale</li>
              <li>Proiectare și execuție de prize de pamant artificiale</li>
              <li>
                Verificare a rezistenței de dispersie a prizelor de pamant
              </li>
              <li>Reparații ale prizelor de pamant</li>
              <li>Înlocuirea prizelor de pamant deteriorate</li>
            </ul>
          </Section>
          <Section
            imgSrc={fotovoltaiceImg.src}
            id="fotovoltaice"
            title="Instalatii fotovoltaice solare"
            imgOnRight
            badge="SERVICII"
          >
            <p>
              Oferim soluții complete pentru instalații fotovoltaice solare,
              punând la dispoziția clienților noștri expertiză și calitate
              înalte.
            </p>
            <p>Serviciile noastre includ:</p>
            <ul className="flex list-disc flex-col gap-2 pl-6">
              <li>Montaj Invertoare, Smart Meter, Becabox, Acumulatori </li>
              <li>Montaj Stații de Încărcare Auto</li>
              <li>
                Montaj Panouri Solare – de acest lucru se va ocupa partenerul
                nostru specializat.
              </li>
              <li>
                Planificare și Proiectare Personalizată – de acest lucru se va
                ocupa partenerul nostru specializat.
              </li>
            </ul>
          </Section>
          <Section
            imgSrc={knxImg.src}
            id="knx"
            title="Instalatii sisteme KNX"
            badge="SERVICII"
          >
            <p>
              Realizam instalatia electrica in conformitate cu proiectul KNX
              (cablarea instalatiei si executie tablouri electrice)
            </p>
            <p>
              In colaborare se pot face si proiectarea pentru instalatia KNX
            </p>
          </Section>
          <div
            id="contact"
            className="flex flex-col gap-4 bg-neutral-50 p-6 sm:rounded-lg sm:p-14"
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-4xl">Contact</h3>
              <p>Contacteaza-ma la numarul de telefon sau pe email.</p>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:gap-8">
              <div className="flex flex-row gap-2 py-2">
                <PhoneIcon className="h6 w-6 text-blue-500" />
                <a href="tel:0732843299">
                  <p className="cursor-pointer whitespace-nowrap text-lg font-medium text-blue-500 hover:text-blue-600 hover:underline">
                    0732 843 299
                  </p>
                </a>
              </div>
              <div className="flex flex-row gap-2 py-2">
                <EnvelopeIcon className="h6 w-6 text-blue-500" />
                <a href="mailto:voicu.electriciananre@gmail.com">
                  <p className="cursor-pointer whitespace-nowrap text-lg font-medium text-blue-500  hover:text-blue-600 hover:underline">
                    voicu.electriciananre@gmail.com
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <footer className="w-full border-t border-neutral-300">
          <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-1 p-8 py-10">
            <h3 className="text-base font-semibold text-neutral-900">
              VOICU D. VALENTIN PERSOANĂ FIZICĂ AUTORIZATĂ
            </h3>
            <p className="font-regular text-base text-neutral-700">
              CUI: 49146468
            </p>
            <p className="font-regular text-base text-neutral-700">
              Număr registrul comerțului: F40/8656/2023
            </p>
            <p className="font-regular text-base text-neutral-700">
              Adresa: B-dul Bucureștii Noi, 136, et. Parter, ap. 5, SECTOR 1,
              BUCURESTI
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
