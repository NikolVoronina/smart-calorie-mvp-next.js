# Logg – Fordypningsoppgave

## Dag 1 – Videreutvikling av Smart Calorie Calculator

| Tid | Hva jeg gjorde | Beskrivelse |
|-----|---------------|------------|
| 09:00 – 10:00 | Analyse av prosjekt | Startet med å gå gjennom eksisterende Next.js-prosjekt. Kalkulatoren var delvis implementert, men manglet struktur og utvidelser. |
| 10:00 – 11:30 | Implementering av kalkulasjon | Fullførte funksjonen for beregning av kalorier, makronæringsstoffer og vanninntak basert på brukerinput. |
| 11:30 – 12:30 | UI forbedringer | La til en animert bakgrunn med flytende former for å gjøre designet mer moderne og visuelt interessant. |
| 13:00 – 14:30 | Maskinlæring – målklassifisering | Implementerte en enkel klassifikasjonslogikk (`classifyGoal.ts`) basert på BMI og aktivitetsnivå. |
| 14:30 – 15:30 | Integrasjon | Integrerte klassifikasjonen i hovedfunksjonen (`calculateNutrition.ts`) og sendte resultatet til UI. |
| 15:30 – 16:00 | UI visning av anbefaling | Oppdaterte ResultCard-komponenten for å vise “Suggested goal” til brukeren. |

---

## Hva jeg har lært

- Hvordan strukturere kode i moduler (separere logikk og UI)
- Hvordan bruke TypeScript for å definere typer
- Hvordan lage en enkel klassifikasjonsmodell (regelbasert)
- Hvordan koble backend-logikk til frontend-visning

---

## Utfordringer

- Problemer med CSS-animasjon (Tailwind + keyframes)
- Elementer som ikke ble synlige på grunn av opacity-klasser
- Strukturering av komponenter og z-index

---

## Neste steg

- Deploy prosjektet på Vercel
- Forbedre klassifikasjonsmodellen (mer avansert logikk)
- Eventuelt lagre brukerdata eller historikk