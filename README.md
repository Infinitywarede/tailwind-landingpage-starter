# Tailwind-Landingpage-Starter auf Deutsch

Eine komplette Landingpage aus elf einzelnen Abschnitten, gebaut mit Tailwind CSS 4. Alle Texte sind auf Deutsch, der Dunkelmodus ist eingebaut, und du brauchst keinen Build, um loszulegen.

**[Demo ansehen](https://infinitywarede.github.io/tailwind-landingpage-starter/)**

## Was drin ist

* `sections/` mit elf HTML-Abschnitten: Navigation, Hero, Funktionen, Kennzahlen, Checkliste, Kundenstimme, zwei Preisstufen, Fragen, Kontakt, Handlungsaufruf, Fußbereich
* `dist/kit.css`, das fertige Stylesheet
* `index.html`, die zusammengesetzte Seite
* `src/input.css`, die Tailwind-Eingabe mit deiner Markenfarbe
* `tools/build-demo.mjs`, setzt `index.html` aus den Abschnitten zusammen

Ohne JavaScript-Framework, ohne Schriften von fremden Servern, ohne Tracking.

## Ohne Build starten

1. Repository herunterladen und `index.html` im Browser öffnen.
2. Abschnitte, die du nicht brauchst, aus der Datei löschen.
3. Platzhalter durch deine Texte ersetzen. Die Zahlen, Preise und die Kundenstimme sind Beispiele und müssen raus, bevor du online gehst.

Dunkelmodus: setze die Klasse `dark` auf das `<html>`-Element. `demo/shell.html` zeigt, wie das per Schalter mit gespeicherter Auswahl geht.

## Mit Build (eigene Klassen, eigene Farbe)

Voraussetzung ist Node.js 20 oder neuer.

    npm install
    npm run all

Die Markenfarbe steht in `src/input.css` als `--color-brand-50` bis `--color-brand-900`. Tausche die Werte aus und baue neu. Tailwind durchsucht nur die Ordner, die dort mit `@source` stehen.

Das Formular im Kontaktabschnitt zeigt auf `#`. Trage dein eigenes Ziel ein und ergänze Impressum und Datenschutz, wenn die Seite öffentlich geht.

## Lizenz

MIT, auch für Kundenprojekte. Siehe [LICENSE](LICENSE).

## Mehr Abschnitte

Dieser Starter ist der freie Teil eines größeren Kits. Das [Tailwind-UI-Kit für Landingpages](https://vorlagerie.de/vorlagen/tailwind-ui-kit-landingpages) enthält 44 Abschnitte, darunter weitere Navigationen, Heros, Preistabellen und Fußbereiche. Fertige Branchen-Websites gibt es unter [Website-Themes](https://vorlagerie.de/kategorie/website-themes).
