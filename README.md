# DarkPurpleNote

Entwickelt von [OrangeJuicy69](https://github.com/OrangeJuicy69)

Eine eigene Notiz-App, um die Erfolge eines abgeschlossenen Projekts zu dokumentieren. Die Notizen werden als Nodes (Knoten) dargestellt, die über Linien miteinander verbunden sind.
![Screenshot von der aktuellen Node UI](/public/node_ui.png)
> [!NOTE]
> Diese Webapp ist noch in Bearbeitung. Fehler und Bugs sind zu erwarten.

> [!TIP]
> Lies die Installationsanleitung genau durch, um Fehler zu vermeiden.

> [!IMPORTANT]
> Das Projekt darf als Vorlage für eigene Projekte verwendet werden.

> [!WARNING]
> Bei Verwendung bitte **OrangeJuicy69** verlinken.

## Inhalt

- [Voraussetzungen](#voraussetzungen)
- [Installation](#installation)
- [App starten](#app-starten)
- [Verwendung](#verwendung)
- [Import und Export](#import-und-export)
- [Projektstruktur](#projektstruktur)
- [Geplante Updates](#geplante-updates)
- [Links](#links)

## Voraussetzungen

- [Node.js](https://nodejs.org/en/download) (LTS-Version)
- [pnpm](https://pnpm.io/installation) (empfohlen, das Projekt enthält eine `pnpm-lock.yaml`)
- Alternativ [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), das bei der Installation von Node.js automatisch dabei ist
- Für Option 1 zusätzlich [Git](https://git-scm.com/)

pnpm installierst du mit:

```bash
npm install -g pnpm
```

## Installation

```bash
git clone https://github.com/OrangeJuicy69/DarkPurpleNote.git
cd DarkPurpleNote
pnpm install
```

Aktuelle Änderungen holst du später mit:

```bash
git pull
pnpm install
```

```bash
pnpm install
```

### Installation mit npm (Alternative)

Wenn du npm statt pnpm verwendest, ersetze `pnpm install` durch:

```bash
npm install
```

## App starten

Starte den lokalen Entwicklungsserver mit:

```bash
pnpm dev
```

Mit npm lautet der Befehl `npm run dev`.

Die App ist danach im Browser unter der in der Konsole angezeigten Adresse erreichbar (standardmäßig `http://localhost:5173`).

## Verwendung

Alle Daten der Nodes stehen in der Datei `src/data/data.json`.

- Alle Texte, die in einem Node angezeigt werden, stehen ebenfalls in dieser Datei.
- Für einen neuen Node fügst du in der `data.json` einen neuen Abschnitt hinzu.
- Position, Voraussetzungen und Status trägst du manuell in der `data.json` ein.

Den genauen Aufbau der JSON-Datei und was wohin gehört, findest du in [docs/JsonSetup.md](docs/JsonSetup.md).

## Import und Export

- **Export:** Mit dem Button **Export JSON** lädst du das aktuelle JSON herunter. Die Datei enthält eine Kopie der Daten, die im Projekt verwendet werden.
- **Import:** Mit dem Import kannst du ein JSON vorübergehend laden. Es werden nur JSON-Dateien akzeptiert, die den Anforderungen für einen vollständigen Node entsprechen (siehe [docs/JsonSetup.md](docs/JsonSetup.md)).

> [!TIP]
> Wenn nach dem Import keine Änderungen sichtbar sind, öffne die Browser-Konsole (Taste `F12`) und prüfe dort die Fehlermeldung.

## Projektstruktur

```text
DarkPurpleNote/
├── docs/
│   └── JsonSetup.md        # Aufbau des JSON und was wohin gehört
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Node.jsx        # Funktionen der Nodes
│   │   ├── NewNode.jsx     # Neue Nodes hinzufügen (experimentell)
│   │   ├── Connections.jsx # Verbindungslinien zwischen den Nodes
│   │   ├── SidePanel.jsx   # Seitenpanel der Nodes
│   │   ├── ExportJson.jsx  # Export der Nodes als JSON
│   │   └── ImportJson.jsx  # Import der Nodes aus JSON
│   ├── data/
│   │   └── data.json       # Werte der Nodes
│   ├── styles/
│   │   ├── index.css       # Globales Styling
│   │   └── basicnode.css   # Styling des Node-Systems
│   └── main.jsx            # Fügt alle Komponenten zusammen und rendert sie in #root
├── .gitignore
├── eslint.config.js
├── index.html              # Einstiegsseite der Webapp
├── package.json
├── pnpm-lock.yaml
├── README.md
└── vite.config.js
```

## Geplante Updates

- [x] Export-Funktion
- [x] Import-Funktion
- [x] Neue Node-UI
- [ ] Neue Verbindungslinien
- [ ] Allgemeine UI der Webapp

## Links

- [OrangeJuicy69 auf GitHub](https://github.com/OrangeJuicy69)
- [Projekt-Repository](https://github.com/OrangeJuicy69/DarkPurpleNote/)
- [pnpm: Installation](https://pnpm.io/installation) und [pnpm: FAQ](https://pnpm.io/faq)
- [npm: Webseite](https://www.npmjs.com/) und [npm: Dokumentation](https://docs.npmjs.com/)
- [npm auf GitHub](https://github.com/npm)