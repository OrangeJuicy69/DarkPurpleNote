Hier finde man alle Infos wie das JSON aufgenaut ist und was wo reingehört


Leere Vorlage

       {
    "id": "",
    "title": "",
    "kategorie": "",
    "stufe": ,
    "shortver":"",
    "voraussetzungen": [""],
    "ziel": "",
    "deliverable": "",
    "abnahme": [""],
    "nachweis": { "commit": "", "datum": "" },
    "status": "",
    "reflexion": "",
    "bildungsplan": "",
    "position": { "x": , "y":  },
    "anschluss": [
      { "zu": "", "": , "":  }
    ]
    } 

id:
    In "id" legt man die Id fest für das Node um es zu verbinden mit anderen Nodes.

title:
    In "title" legt man den Title des Nodes fest der Angezeit wird im normalen node sowie in der Sidebar und aufgeklapten Ansicht.

kategoerie:
    In "kategorie" kann man einen Wert festlegen von "Coding, ui, server, school, Course" um ein Symbol vordem Title zu setzten.

stufe:
    in der Stufe kann man ein Wert von 1 bis 3 Festlegen für Stufenzuordnung.

shortver:
    In "shortver" kann man einen kleinen Text auf das Node schreiben für eine kurze Beschreibung.

voraussetzungen:
    In "voraussetzungen" kann man eine Voraussetzungen setzten. Zu beachten, die Voraussetzung muss einen ID Wert haben und muss immer in [""] geschrieben werden so dass die Webseite den Wert erkennt und brauche kann.

ziel:
    In "ziel" kann man ein freigefähltes Ziel setzen das man ereichen kann/muss in dieser Aufgabe.

deliverable:
    In "deliverable" wird ein kurzer Text rein gemacht der ein kleine kurze zusammenfasung hat was man bgibt nachdem man die aufgabe Fertig hat.

abnahme:
    in "abnahme" wird die abgegebene Aufgabe reingemacht, bspw: Github-Link, Link zu einem Word oder auch ein Link zu einer Webseite
    Wichtig zu beachten ist das der Wert gefolgt geschrieben wird: 
        
        ["", ""]

nachweis:
    In "nachweis" kannst du commit-links, Datum oder Links zu Screenshots reinmachen um einen nachweis zu geben von deiner Arbeit.
    Hier wichtig zu beachten ist das der wert wie unten angegeben:

        { "commit": "", "datum": "" }

status:
    In "status" kannst du den Status festlegen mit Werten um ein Node zu sperren damit man es nicht öffnen kann usw
        Werte die die Webseite lesen kann.

        "gesperrt, offen, in Arbeit, abgenommen"

reflexion:
    In "reflexion" kannst du einen kurzen einfachen Reflexions Text schreiben.

"bildungsplan:
    In "bildungsplan" kannst du einen Bildungspan von deiner Schule/Studium festlegen/verlinken. (Experimental)

position:
    In "position" kannst du die Position festlegen von einem Node. 
    Mit dem x Wet kannst du die Positon von Rechs und Links Bestimmen in PX (Der Wert kann im Pluss oder Minus sein)
    Mit dem y Wert kannst du die Positon von Oben gegen Unten und umgekehrt festlegen

        { "x": 85, "y": 500 }
"anschluss:
    In ""anschluss" kannst du Nodes verbinden. Um Nodes miteinader zu verbinden braucht du die ID des Nodes. 
    Im zweiten Abschnitt muss man die ID des Nodes angeben mit welchem man sich Verbinden will.
    Im dritten Abschnitt gibt man an von wo die connection Linie rauskommt/anfängt.
    Im vierten Abschnitt gibt man den end Wert an, auf welcher Seite das Node sich verbinden soll.
    "meineSeite" ist das Node von dem du anfängst und andereSeite, dort wo man hin will.
    WICHTIG: Der Wer muss ein Wert von 1 bis 4 haben.(1:links, 2 Rechts, 3 Oben, 4 Unten)


    "anschluss": [
      { "zu": "", "meineSeite": 3, "andereSeite": 4 }
    ]

Zeichensetzung/Voraussetzungen
    Nach jeder Zeile muss ein "," reingemacht werden auser am letzten da sonst das JSON nicht erkannt wird.
    Mache Werte brauchen "[]" vor und nach dem Wert.
    Wenn man ein neuen Node Abschnitt macht muss am ende des "}" ein ",", ausser beim letzten Wert von einem Node
    Am Anfang des JSON und am Ende muss man ein "[]" reinmachen
    WICHTIG: Wenn ein Wert Falsch Wert hat oder Nichts drin hat kann es zu fehler kommen wie Falschen Anzeigen usw



Fertige Vorlage

    {
    "id": "n3",
    "title": "Platzhalter Node 3",
    "kategorie": "coding",
    "stufe": 2,
    "shortver":"Platzhalter123",
    "voraussetzungen": ["n1"],
    "ziel": "Platzhaltertext für Ziel.",
    "deliverable": "Platzhaltertext für Deliverable.",
    "abnahme": ["Platzhalter Kriterium 1", "Platzhalter Kriterium 2"],
    "nachweis": { "commit": "", "datum": "" },
    "status": "in Arbeit",
    "reflexion": "Platzhaltertext für Reflexion.",
    "bildungsplan": "c",
    "position": { "x": 85, "y": 500 },
    "anschluss": [
      { "zu": "n1", "meineSeite": 3, "andereSeite": 4 }
    ]
    },


