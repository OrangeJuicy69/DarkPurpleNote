DarkPurpleNote


Eigende Notiz App für erfolge eines Abgeschlossenens Projekt zu Dokumentatiren



Benutzung:

    Alle Daten zu den Nodes findet man im "data.json".

    Alle Texte die im Node steht findet man auch im Json.

    Für neue Nodes, einfach ein neuen Abschnit im "data.json"
    Position, Voraussetzungen und Status muss man auch manuel eintragen im Json.

Aufbau des JSON (Vorlage)

       {
    "id": "",
    "title": "",
    "kategorie": "",
    "stufe": 2,
    "shortver":"",
    "voraussetzungen": [""],
    "ziel": "",
    "deliverable": "",
    "abnahme": [""],
    "nachweis": { "commit": "", "datum": "" },
    "status": "",
    "reflexion": "",
    "bildungsplan": "",
    "position": { "x": 350, "y": 100 },
    "anschluss": [
      { "zu": "", "": 1, "": 2 }
    ]
  } 



Wo?

    Im "node.jsx" werden alle funktionen des Nodes bestummen.

    Im "sidepanel.jsx" wird das Sidepanel des Nodes Verwaltet.

    Im "main.jsx" wird ales zusammen gefügt und dan ans "index.html geschickt"

    Das "index.css" ist für das Globale Styling wärend das "basicnode.css" nur für das Node System verantwortlich ist
Status, Kategoerie und verbinungen

    Im Json kann man den Staus der Nodes änder zwischen "gesperrt, offen, in Arbeit, abgenommen"


    Das gleiche geht für die symbole neben dem Title
        : Coding, ui, server, school, Course

    Im JSON unter *anschluss* kann man sagen zu welchen node man sich verbinden will und auf welcher der 4 seiten es ausgehen soll und wo es ankommen soll
    beispiel:
        "anschluss": [
      { "zu": "n1", "meineSeite": 1, "andereSeite": 2 }
      ]
        
Wie?
    Es muss der Packitmanager Instaliert sein um dan damit eine LocalHost zu starten

    npm run dev

###
Im Projekt kann man jetzt "Export JSON" drücken um das aktuele Json runter zu laden. 
Für ein Temopräses benutzung kann man jetzt auch JSON Importieren. (zu beachten ist das nur JSON hochgeladen werden können die die Anforderungen Entsprechen für ein volles Node)


