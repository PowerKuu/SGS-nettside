import * as Bricks from "./bricks"

import test from "../../../assets/images/socialmedia.jpg"

function Post1() {
    return (
      <Bricks.VerticalLayout gap="3rem">
        <Bricks.VerticalLayout>
          <Bricks.Notation>
            Artikkel skrevet av Håkon - <Bricks.Bold>23 Des, 2022</Bricks.Bold>
          </Bricks.Notation>

          <Bricks.Title>
            Digital <Bricks.Highlight>Markedsføring</Bricks.Highlight>, 5 tips.
          </Bricks.Title>
          <Bricks.SubTitle>
            Her er 5 tips for å markedsføre i Norge.
          </Bricks.SubTitle>
        </Bricks.VerticalLayout>

        <Bricks.VerticalLayout gap="2.5rem">
          <Bricks.Image>{test}</Bricks.Image>

          <Bricks.Text>
            Når vi går inn i 2023, er det klart at digital markedsføring vil
            fortsette å være et avgjørende aspekt av enhver vellykket
            forretningsstrategi. Her er fem tips om hvordan du effektivt
            implementerer digital markedsføring i det kommende året.
          </Bricks.Text>

          <Bricks.Text>Trenger du hjelp med digital markedsføring? <Bricks.Link href="/?contact">Kontakt oss!</Bricks.Link></Bricks.Text>

          <Bricks.Split />

          <Bricks.VerticalLayout gap="5rem">
            <Bricks.VerticalLayout gap="1rem">
              <Bricks.Kicker>1. Definer målgruppen din.</Bricks.Kicker>
              <Bricks.Text>
                Et av hovedgrunnlagene for enhver vellykket digital
                markedsføringskampanje er en klar forståelse av hvem du prøver å
                nå. Ta deg tid til å undersøke og definere målgruppen din,
                inkludert deres demografi, interesser og behov. Dette vil hjelpe
                deg med å lage målrettede, relevante markedsføringsmeldinger som
                appellerer til publikummet ditt.
              </Bricks.Text>
            </Bricks.VerticalLayout>

            <Bricks.VerticalLayout gap="1rem">
              <Bricks.Kicker>2. Sterk digital tilstedeværelse.</Bricks.Kicker>
              <Bricks.Text>
                I dagens digitale tidsalder er det viktig for bedrifter å ha en
                sterk tilstedeværelse på nettet. Dette inkluderer å ha et godt
                designet nettsted, samt aktive sosiale mediekontoer på
                plattformer som Facebook, Instagram og LinkedIn. Disse kanalene
                lar deg få kontakt med potensielle kunder og dele informasjon om
                produktene eller tjenestene dine.
              </Bricks.Text>
            </Bricks.VerticalLayout>

            <Bricks.VerticalLayout gap="1rem">
              <Bricks.Kicker>3. SEO optimalisering.</Bricks.Kicker>
              <Bricks.Text>
                Søkemotoroptimalisering (SEO) er praksisen med å optimalisere
                nettstedet og innholdet ditt for å rangere høyere på
                søkemotorresultatsidene (SERPs). Dette er viktig fordi høyere
                rangering i SERP-ene betyr mer synlighet for virksomheten din,
                noe som kan føre til mer trafikk og salg. Sørg for å undersøke
                og bruke relevante søkeord i nettstedet og innholdet ditt, samt
                optimalisere for mobil og lokal SEO.
              </Bricks.Text>
            </Bricks.VerticalLayout>

            <Bricks.VerticalLayout gap="1rem">
              <Bricks.Kicker>4. Invester i betalt annonsering.</Bricks.Kicker>
              <Bricks.Text>
                Mens organisk rekkevidde på sosiale medier og søkemotorer kan
                være begrenset, kan betalt annonsering hjelpe deg å nå et
                bredere publikum. Plattformer som Google Ads, Facebook Ads og
                Instagram Ads lar deg målrette mot spesifikk demografi og
                interesser, og du kan angi budsjettet ditt basert på
                markedsføringsmålene dine.
              </Bricks.Text>
            </Bricks.VerticalLayout>

            <Bricks.VerticalLayout gap="1rem">
              <Bricks.Kicker>
                5. Analyser og spor resultatene dine.
              </Bricks.Kicker>
              <Bricks.Text>
                Analyser og spor resultatene dine: Det er viktig å kontinuerlig
                spore og analysere ytelsen til din digitale
                markedsføringstiltak. Bruk verktøy som Google Analytics for å
                spore nettstedtrafikk og konverteringer, og sosiale
                medier-analyser for å se hvordan innholdet ditt presterer. Dette
                vil tillate deg å ta datadrevne beslutninger om hvor du skal
                allokere markedsføringsressursene dine og foreta justeringer av
                strategien din etter behov.
              </Bricks.Text>
            </Bricks.VerticalLayout>
          </Bricks.VerticalLayout>

          <Bricks.Text>
          
          </Bricks.Text>
        </Bricks.VerticalLayout>
      </Bricks.VerticalLayout>
    );
}





export const posts =  [{
    title: "Hvordan bygge nettside",
    description: "123",
    blog: <Post1></Post1>
}]


export type Posts = typeof posts