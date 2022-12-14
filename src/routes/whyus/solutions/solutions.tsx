import styles from "./solutuons.module.css"

import websiteVector from "../../../assets/icons/website.svg"
import brandingVector from "../../../assets/icons/branding.svg"

import socialVector from "../../../assets/icons/social-media.svg"
import analyzeVector from "../../../assets/icons/analyze.svg"

import { JSX } from "solid-js/jsx-runtime" 

const SolutionContent = ({
  heading,
  icon,
  children,
}: {
  heading: string
  icon: string
  children: JSX.Element
}) => {
  return (
    <div class={styles.solutionsContent}>
      <div>
        <img src={icon} alt="Solution ikon for SGS markedsføring norge." />
        <h3>{heading}</h3>
      </div>
      <p>{children}</p>
    </div>
  )
}

const Solution = ({
  heading,
  image,
  children,
}: {
  heading: JSX.Element
  image: string
  children: JSX.Element
}) => {
  return (
    <div class={styles.solution}>
      <h2>{heading}</h2>
      <div>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default () => {
  return (
    <div class={styles.solutions}>
        <Solution
        heading={
          <>
            <span>Web</span> utvikling
          </>
        }
        image={""}
        >
        <SolutionContent heading="Nettside" icon={websiteVector}>
          Med vårt fokus på brukeropplevelse og søkemotoroptimalisering kan vi
          hjelpe nettstedet ditt med å tiltrekke og beholde besøkende, generere
          mer trafikk og øke salget på nett. Velg SGS Marketing for responsive
          og kreativ webutvikling.
        </SolutionContent>

        <SolutionContent heading="Merkevare" icon={brandingVector}>
          Som et fullservice selskap for webdesign og digital markedsføring, kan
          SGS Marketing hjelpe deg med å skape din merkevare fra grunnen av.
          Enten du er en oppstart eller en etablert bedrift, kan vi 
          hjelpe deg med å definere merkevaren din og få
          den til live gjennom overbevisende bilder og meldinger.
        </SolutionContent>

        </Solution>

        <Solution
        heading={
          <>
            <span>Markeds</span>føring
          </>
        }
        image={""}
        >
        <SolutionContent heading="Sosiale medier" icon={socialVector}>
          Markedsføring på sosiale medier er en nøkkelkomponent i enhver digital
          markedsføringsstrategi, og SGS Marketing har ekspertise og erfaringen
          til å hjelpe deg å få mest mulig ut av den. Vi kan hjelpe deg med å
          utvikle en markedsføringsplan for sosiale medier som er i tråd med
          forretningsmålene dine og retter seg mot den rette målgruppen.
        </SolutionContent>

        <SolutionContent heading="Analytikere" icon={analyzeVector}>
          Vi kan hjelpe deg med å utvikle en
          markedsføringsstrategi som er skreddersydd for din virksomhet og dine
          mål. Våre eksperter jobber tett med deg for å forstå målgruppen din,
          konkurrentene dine og ditt unike verdiforslag. Vi vil deretter bruke
          denne informasjonen til å utvikle en omfattende markedsføring.
        </SolutionContent>
      </Solution>
    </div>
  )
}
