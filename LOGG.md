# Logg – Smart Calorie Calculator

---

## Dag 1 – Oppstart og analyse

### Hva vi gjorde
Jeg startet med et tidligere prosjekt – en enkel kalorikalkulator laget i Next.js.

Første steg var å analysere eksisterende kode og forstå hvordan beregningene fungerte.

- gikk gjennom prosjektstrukturen
- identifiserte hva som manglet
- planla hvordan vi kunne videreutvikle løsningen

---

### Resultat
Jeg fikk en klar forståelse av prosjektet og definerte retningen videre:
fra en enkel kalkulator → til et mer intelligent og personlig system.

---

## Dag 2 – Kalkulasjon og struktur

### Hva vi gjorde
Jeg implementerte og forbedret selve kalkulasjonslogikken.

Applikasjonen beregner nå:
- kaloribehov
- protein
- fett
- karbohydrater
- vanninntak

Jeg organiserte også koden bedre ved å:
- flytte logikk til egne filer (`calculateNutrition.ts`)
- bruke TypeScript-typer for bedre struktur

---

### Teknisk forbedring
- Bruk av Mifflin-St Jeor formel
- Dynamisk tilpasning basert på aktivitetsnivå og mål

---

### Resultat
Kalkulatoren fungerer stabilt og gir konsistente resultater.

---

## Dag 3 – UI og brukeropplevelse

### Hva vi gjorde
Jeg forbedret designet og brukeropplevelsen.

Hva har jeg gjørt:
- laget en mer moderne layout
- la til animert bakgrunn med flytende former
- forbedret input-felter og struktur

---

### Utfordringer
- Problemer med CSS-animasjon (Tailwind + keyframes)
- Elementer som ikke ble synlige

---

### Løsning
- Justerte opacity og blur
- Flyttet animasjonen riktig i layouten (z-index og position)

---

### Resultat
Applikasjonen fikk et mer moderne og visuelt attraktivt uttrykk.

---

## Dag 4 – Smart logikk og personalisering

### Hva vi gjorde
Jeg utvidet prosjektet med en maskinlæring-inspirert klassifikasjonsmodell.

Jeg implementerte:
- `classifyGoal.ts`
- målklassifisering (fat loss / maintenance / muscle gain)

Systemet vurderer:
- BMI
- aktivitetsnivå
- brukerens mål

---

### Videre forbedring
Jeg la til støtte for flere datapunkter:
- kroppsfettprosent
- midje og hofter

Disse feltene er valgfrie, men gir mer presise resultater.

---

### Resultat
Applikasjonen gir nå:
- anbefalt mål
- forklaring på hvorfor dette målet er valgt

---

## Dag 5 – Treningsanbefaling og helhetlig system

### Hva vi gjorde
Jeg implementerte en egen modul for treningsanbefaling:

`generateTrainingPlan.ts`

Systemet gir nå:
- antall treningsøkter per uke
- antall styrkeøkter
- antall kondisjonsøkter
- anbefalt daglig aktivitetsnivå (steps)
- fokusområde
- prioritering
- restitusjonsråd

---

### Teknisk løsning
Jeg laget en regelbasert anbefalingsmodell som bruker:
- klassifisert mål
- aktivitetsnivå
- kroppsfett (hvis tilgjengelig)

---

### Resultat
Prosjektet har nå blitt et komplett system som kombinerer:
- ernæringsberegning
- målklassifisering
- personlig anbefaling
- treningsplan

---

## Refleksjon

Gjennom prosjektet har vi gått fra en enkel kalkulator til et mer avansert system.

Jeg har lært:
- hvordan strukturere kode i moduler
- hvordan bygge opp logikk steg for steg
- hvordan bruke flere datapunkter for å forbedre nøyaktighet
- hvordan lage et system som gir mer personlig verdi til brukeren

Prosjektet viser hvordan en enkel idé kan utvikles til et mer komplekst og realistisk produkt.