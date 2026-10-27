import { Question } from "./types";

export const ASA_EXTRA_QUESTIONS: Question[] = [
  {
    "id": 135,
    "testId": 1,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Sie nähern sich einer Kreuzung ohne Signale oder Markierungen. Von links kommt ein Velo, von rechts ein Traktor. Wer darf als Erster fahren?",
    "options": [
      {
        "id": "a",
        "text": "Der Traktor (weil er von rechts kommt und Rechtsvortritt hat).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Das Velo, weil es das schwächste Verkehrsmittel ist.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Sie selbst, weil Sie ein schnelleres Auto fahren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Ohne Signale gilt ausnahmslos der Rechtsvortritt (Art. 36 SVG). Der Traktor hat Vortritt vor Ihnen, und Sie haben Vortritt vor dem Velo von links.",
    "ruleReference": "Art. 36 SVG"
  },
  {
    "id": 136,
    "testId": 1,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Sie möchten an einer Einmündung nach links abbiegen. Der Gegenverkehr fährt geradeaus. Wer hat Vortritt?",
    "options": [
      {
        "id": "a",
        "text": "Der geradeaus fahrende Gegenverkehr hat immer Vortritt vor Linksabbiegern.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sie, weil Linksabbieger bevorzugt werden.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Wer zuerst den Blinker gesetzt hat.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Beim Abbiegen nach links muss dem Gegenverkehr stets der Vortritt gelassen werden (Art. 36 Abs. 3 SVG).",
    "ruleReference": "Art. 36 Abs. 3 SVG"
  },
  {
    "id": 137,
    "testId": 2,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Wie ist der Vortritt an einem zweispurigen Kreisverkehr geregelt?",
    "svgType": "roundabout_entering",
    "options": [
      {
        "id": "a",
        "text": "Fahrzeuge auf beiden Spuren im Kreisel haben Vortritt vor allen einfahrenden Fahrzeugen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Einfahrende Fahrzeuge haben Rechtsvortritt gegenüber der inneren Spur.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur die äussere Spur des Kreisels hat Vortritt.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Vor der Einfahrt in den Kreisel ist den Fahrzeugen auf beiden Fahrstreifen im Kreisel der Vortritt zu gewähren (Art. 41b Abs. 1 VRV).",
    "ruleReference": "Art. 41b VRV"
  },
  {
    "id": 138,
    "testId": 2,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Wann müssen Sie beim Befahren eines Kreisverkehrs den Blinker setzen?",
    "svgType": "roundabout_entering",
    "options": [
      {
        "id": "a",
        "text": "Nur unmittelbar vor dem Verlassen des Kreisels (nach rechts) und bei einem Fahrstreifenwechsel im Kreisel.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Bereits vor der Einfahrt nach links blinken.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Im Kreisverkehr muss überhaupt nicht geblinkt werden.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Vor der Einfahrt in den Kreisverkehr darf nicht geblinkt werden. Die Ausfahrt aus dem Kreisel muss zwingend mit dem rechten Blinker angezeigt werden (Art. 41b Abs. 3 VRV).",
    "ruleReference": "Art. 41b Abs. 3 VRV"
  },
  {
    "id": 139,
    "testId": 3,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Ein Linienbus im Ortsverkehr schaltet an der Haltestelle den linken Blinker ein, um abzufahren. Was gilt?",
    "options": [
      {
        "id": "a",
        "text": "Sie müssen die Geschwindigkeit verringern und dem Bus wenn nötig das Einspuren und Abfahren ermöglichen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sie dürfen noch schnell am Bus vorbeiziehen und ihn anhupen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Der Bus hat ausserorts Vorrang, innerorts nicht.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Innerorts ist Autobussen des Linienverkehrs, die das Wegfahren von einer Haltestelle anzeigen, das Einfahren in den Verkehr zu ermöglichen (Art. 15 Abs. 4 VRV).",
    "ruleReference": "Art. 15 Abs. 4 VRV"
  },
  {
    "id": 140,
    "testId": 3,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Sie möchten nach rechts abbiegen und kreuzen dabei einen Velostreifen. Wer hat Vortritt?",
    "options": [
      {
        "id": "a",
        "text": "Der geradeaus fahrende Radfahrer hat Vortritt vor dem Rechtsabbieger.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Das Auto hat Vortritt, weil es grösser ist.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Radfahrer müssen immer anhalten, wenn ein Auto blinkt.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Wer abbiegt, muss parallel fahrenden Radfahrern und Fussgängern den Vortritt lassen (Art. 36 SVG / Art. 40 VRV). Schulterblick ist zwingend!",
    "ruleReference": "Art. 40 VRV"
  },
  {
    "id": 141,
    "testId": 3,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Ein Tram kommt von links und biegt über Ihre Spur ab. Es stehen keine Vortrittsschilder. Wer fährt zuerst?",
    "options": [
      {
        "id": "a",
        "text": "Das Tram hat Vortritt vor Strassenfahrzeugen, auch wenn es von links kommt.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Das Auto hat Rechtsvortritt gegenüber dem Tram.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Wer zuerst die Schienen berührt.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Gegenüber Schienenfahrzeugen (Trams) gilt der Rechtsvortritt für Motorfahrzeuge nicht. Schienenfahrzeuge haben im Gleichrang grundsätzlich immer Vortritt (Art. 38 SVG).",
    "ruleReference": "Art. 38 SVG"
  },
  {
    "id": 142,
    "testId": 4,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Wann verliert ein Tram seinen grundsätzlichen Vortritt gegenüber Strassenfahrzeugen?",
    "options": [
      {
        "id": "a",
        "text": "Wenn das Tram aus einer Nebenstrasse auf eine Hauptstrasse einbiegt oder vor einem Stop-Signal steht.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Niemals, das Tram hat absolut immer Vortritt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur bei Dunkelheit.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Fährt ein Schienenfahrzeug aus einer Nebenstrasse in eine signalisierte Hauptstrasse ein oder ist ihm das Signal Stop oder Kein Vortritt zugeordnet, hat es keinen Vortritt (Art. 38 SVG / Art. 67 SSV).",
    "ruleReference": "Art. 38 Abs. 2 SVG"
  },
  {
    "id": 143,
    "testId": 4,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Sie fahren auf einer Hauptstrasse mit Vortritt. An einer Verzweigung mündet von rechts eine andere Strasse ein. Haben Sie Vortritt?",
    "svgType": "sign_hauptstrasse",
    "options": [
      {
        "id": "a",
        "text": "Ja, auf der Hauptstrasse hat man Vortritt vor allen einmündenden Strassen (Rechtsvortritt aufgehoben).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nein, rechts vor links gilt auch auf Hauptstrassen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur wenn kein anderes Fahrzeug zu sehen ist.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Das Signal 'Hauptstrasse' (Signal 3.03) verleiht den Vortritt gegenüber allen Fahrzeugen aus einmündenden Nebenstrassen (Art. 37 SSV).",
    "ruleReference": "Art. 37 SSV"
  },
  {
    "id": 144,
    "testId": 5,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Was bedeutet das Zusatzschild 'Hauptstrasse mit Kurvenverlauf' (abknickende Hauptstrasse)?",
    "options": [
      {
        "id": "a",
        "text": "Die Hauptstrasse biegt ab. Wer der dicken Linie folgt, behält den Vortritt vor Fahrzeugen auf den dünnen Nebenstrassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Alle Fahrzeuge müssen vor der Kurve anhalten.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Hier gilt immer Tempo 30.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Die breite Linie zeigt den Verlauf der Hauptstrasse an. Fahrzeuge auf der abknickenden Hauptstrasse haben Vortritt vor Verkehrsteilnehmern auf den untergeordneten Strassen (Art. 65 SSV).",
    "ruleReference": "Art. 65 SSV"
  },
  {
    "id": 145,
    "testId": 5,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Sie folgen der abknickenden Hauptstrasse nach links. Müssen Sie den Blinker setzen?",
    "options": [
      {
        "id": "a",
        "text": "Ja, wer die Fahrtrichtung ändert (auch wenn er der Hauptstrasse folgt), muss immer blinken.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nein, solange man auf der Hauptstrasse bleibt, blinkt man nie.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur bei Gegenverkehr.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Jede Richtungsänderung muss rechtzeitig mit dem Blinker angezeigt werden, selbst wenn man der abknickenden Hauptstrasse folgt (Art. 28 VRV).",
    "ruleReference": "Art. 28 VRV"
  },
  {
    "id": 146,
    "testId": 6,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Sie verlassen eine abknickende Hauptstrasse und fahren geradeaus in eine untergeordnete Strasse. Müssen Sie blinken?",
    "options": [
      {
        "id": "a",
        "text": "Nein, wer seine Fahrlinie geradeaus beibehält, betätigt den Blinker nicht.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, man muss nach rechts blinken.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, den Warnblinker einschalten.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Wer geradeaus weiterfährt, ändert seine Fahrtrichtung nicht und darf deshalb den Blinker nicht setzen, muss aber dem Verkehr auf der Hauptstrasse Vortritt lassen (Art. 28 VRV).",
    "ruleReference": "Art. 28 VRV"
  },
  {
    "id": 147,
    "testId": 6,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Darf man auf einem Fussgängerstreifen oder weniger als 5 Meter davor ein anderes Fahrzeug überholen?",
    "svgType": "pedestrian_crossing",
    "options": [
      {
        "id": "a",
        "text": "Nein, das Überholen ist auf und unmittelbar vor Fussgängerstreifen strikt verboten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, wenn keine Fussgänger in Sicht sind.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur einspurige Fahrräder dürfen überholt werden.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Unmittelbar vor und auf Fussgängerstreifen darf nicht überholt werden (Art. 26 VRV), weil wartende Fussgänger sonst verdeckt und lebensgefährlich verletzt werden.",
    "ruleReference": "Art. 26 Abs. 2 VRV"
  },
  {
    "id": 148,
    "testId": 7,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Zwei Autos begegnen sich auf einer schmalen Gebirgsstrasse, an der kein Vorbeikommen möglich ist. Beide sind Personenwagen. Wer muss zurücksetzen?",
    "options": [
      {
        "id": "a",
        "text": "Das talwärts (bergab) fahrende Fahrzeug muss in der Regel zurücksetzen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Das bergwärts (bergauf) fahrende Fahrzeug muss immer rückwärts fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Das schwerere Auto muss zurücksetzen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Auf steilen Bergstrassen hat das bergwärts fahrende Fahrzeug den Vorrang; das abwärts fahrende Fahrzeug muss zurücksetzen, sofern es nicht wesentlich einfacher für das andere Fahrzeug ist (Art. 9 Abs. 2 VRV).",
    "ruleReference": "Art. 9 Abs. 2 VRV"
  },
  {
    "id": 149,
    "testId": 7,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Ein Personenwagen begegnet auf einer engen Strasse einem schweren Lastwagen. Wer muss zurückweichen?",
    "options": [
      {
        "id": "a",
        "text": "Der Personenwagen muss zurücksetzen, unabhängig davon, ob er bergauf oder bergab fährt.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Der Lastwagen, weil LKWs mehr Zeit haben.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Das Fahrzeug mit gerader Kennzeichennummer.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Bei ungleichen Fahrzeugen weicht das leichtere dem schwereren aus (PW weicht LKW, Motorrad weicht PW) (Art. 9 Abs. 1 VRV).",
    "ruleReference": "Art. 9 Abs. 1 VRV"
  },
  {
    "id": 150,
    "testId": 8,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Was bedeutet das Hornsignal des Postautos auf einer Bergpoststrasse (Dreiklanghorn: Cis-E-A)?",
    "options": [
      {
        "id": "a",
        "text": "Signalisiert das Herannahen des Postautos an unübersichtlichen Stellen; andere Verkehrsteilnehmer müssen Platz machen oder anhalten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Gruss an Touristen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Aufforderung an das Postauto vorbeizufahren.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Das Dreiklanghorn dient der Sicherheit auf kurvenreichen Bergpoststrassen. Den Weisungen des Postautochauffeurs ist Folge zu leisten (Art. 9 VRV).",
    "ruleReference": "Art. 9 VRV"
  },
  {
    "id": 151,
    "testId": 8,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Ein Fussgänger mit weissem Stock steht am Fahrbahnrand und hält den Stock schräg nach vorne. Was bedeutet dies?",
    "options": [
      {
        "id": "a",
        "text": "Sehbehinderte Person möchte die Strasse queren; man muss ihr uneingeschränkten Vortritt gewähren und anhalten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Die Person sucht nach einem Taxi.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Man darf vorsichtig mit 30 km/h weiterfahren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Unbegleiteten Sehbehinderten, die ihren weissen Stock hochhalten oder vorstrecken, ist immer und überall der Vortritt zu gewähren (Art. 6 Abs. 4 VRV).",
    "ruleReference": "Art. 6 Abs. 4 VRV"
  },
  {
    "id": 152,
    "testId": 9,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Sie möchten rückwärts aus einer unübersichtlichen Ausfahrt auf die Strasse fahren. Sie sehen den Querverkehr nicht. Was müssen Sie tun?",
    "options": [
      {
        "id": "a",
        "text": "Eine Hilfsperson beiziehen, die den Verkehr überwacht und Anweisungen gibt.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Hupen und zügig rückwärts hinausrollen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Warnblinker anmachen und mit Vollgas hinausfahren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Kann die Gefährdung anderer Verkehrsteilnehmer beim Rückwärtsfahren nicht ausgeschlossen werden, muss sich der Lenker durch eine Hilfsperson einweisen lassen (Art. 17 Abs. 2 VRV).",
    "ruleReference": "Art. 17 Abs. 2 VRV"
  },
  {
    "id": 153,
    "testId": 9,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Darf man wenden, wenn dadurch andere Verkehrsteilnehmer behindert werden?",
    "options": [
      {
        "id": "a",
        "text": "Nein, das Wenden darf nur erfolgen, wenn jegliche Behinderung oder Gefährdung anderer ausgeschlossen ist.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, wenn man schnell wendet.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, innerorts ist das Wenden überall erlaubt.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Wenden ist nur gestattet, wenn der übrige Verkehr weder behindert noch gefährdet wird. Auf verkehrsreichen Strassen ist Wenden unzulässig (Art. 17 Abs. 1 VRV).",
    "ruleReference": "Art. 17 Abs. 1 VRV"
  },
  {
    "id": 154,
    "testId": 10,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Was gilt an einer Kreuzung, wenn die Verkehrspolizei den Verkehr regelt?",
    "options": [
      {
        "id": "a",
        "text": "Die Handzeichen der Polizei heben Lichtsignale, Schilder und allgemeine Vortrittsregeln auf und sind absolut verbindlich.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Die Lichtsignale haben weiterhin Vorrang vor dem Polizisten.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Die Schilder gelten parallel zum Polizisten.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Zeichen und Weisungen der Polizei gehen allen anderen Signalen, Markierungen und Regeln vor (Art. 67 SVG / Art. 68 SSV).",
    "ruleReference": "Art. 67 SVG"
  },
  {
    "id": 155,
    "testId": 10,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Der Verkehrspolizist steht seitlich zu Ihnen und breitet beide Arme waagrecht aus. Was bedeutet das für Sie?",
    "options": [
      {
        "id": "a",
        "text": "Freie Fahrt in Ihrer Richtung (entspricht grünem Licht).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Halt vor der Kreuzung (entspricht rotem Licht).",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Sofortiges Wenden geboten.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Sieht man die Seite des Polizisten (Profil), ist die Durchfahrt frei. Brust oder Rücken bedeuten Halt (Art. 67 SSV). 'Siehst du Brust oder Rücken, musst du auf die Bremse drücken!'",
    "ruleReference": "Art. 67 SSV"
  },
  {
    "id": 156,
    "testId": 11,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Der Polizist streckt einen Arm senkrecht nach oben. Was bedeutet dieses Handzeichen?",
    "options": [
      {
        "id": "a",
        "text": "Halt für alle Richtungen; wer bereits in der Kreuzung ist, muss diese sofort räumen (entspricht Gelblicht).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Gefahr durch Gewitter.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Freie Fahrt für Schnellere.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Hochhalten des Arms kündigt den Phasenwechsel an und gebietet allen Verkehrsteilnehmern Halt vor der Verzweigung (Art. 67 SSV).",
    "ruleReference": "Art. 67 SSV"
  },
  {
    "id": 157,
    "testId": 11,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Auf welcher Seite muss ein links abbiegendes Fahrzeug ein anderes entgegenkommendes links abbiegendes Fahrzeug kreuzen?",
    "options": [
      {
        "id": "a",
        "text": "Sie biegen voreinander ab (tangierendes Linksabbiegen), ohne sich zu umfahren, sofern die Kreuzungsgeometrie dies erlaubt.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sie müssen immer hintereinander umfahren werden.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur auf Weisung der Polizei voreinander abbiegen.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Beim Linksabbiegen kreuzen sich entgegenkommende Fahrzeuge voreinander (Art. 13 Abs. 4 VRV), um den Kreuzungsbereich schnell frei zu machen.",
    "ruleReference": "Art. 13 Abs. 4 VRV"
  },
  {
    "id": 158,
    "testId": 12,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Sie möchten einspurig nach links in eine Einbahnstrasse einbiegen. Wo ordnen Sie sich vor dem Abbiegen ein?",
    "options": [
      {
        "id": "a",
        "text": "Ganz links am linken Fahrbahnrand der Einbahnstrasse (bzw. auf normalen Strassen möglichst nahe an der Leitlinie).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Stets ganz rechts am Randstein.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "In der genauen Mitte der Strasse.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Auf Strassen mit Gegenverkehr ordnet man sich zur Fahrbahnmitte ein; in Einbahnstrassen ordnet man sich zum Linksabbiegen ganz am linken Rand ein (Art. 13 Abs. 1 VRV).",
    "ruleReference": "Art. 13 Abs. 1 VRV"
  },
  {
    "id": 159,
    "testId": 12,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Was bedeutet eine weisse Dreiecksmarkierung ('Haifischzähne') auf der Fahrbahn?",
    "svgType": "sign_kein_vortritt",
    "options": [
      {
        "id": "a",
        "text": "Sichtlinie: Zeigt an, wo bei Bedarf angehalten werden muss, um dem Querverkehr den Vortritt zu lassen (kombiniert mit 'Kein Vortritt').",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Zwang zum sofortigen Vollbremsen an jedem Tag.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Geschwindigkeitsmessstelle der Polizei.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Die Haifischzähne (Art. 75 SSV) markieren die Stelle, an der Fahrzeuge warten müssen, wenn Querverkehr naht. Ist die Strasse frei, darf ohne Halt durchgefahren werden.",
    "ruleReference": "Art. 75 SSV"
  },
  {
    "id": 160,
    "testId": 13,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Ein Fahrzeug mit gelbem Blinklicht (z.B. Strassenreinigungs- oder Müllfahrzeug) nähert sich. Hat es Wegerecht wie die Feuerwehr?",
    "options": [
      {
        "id": "a",
        "text": "Nein, gelbes Drehlicht mahnt nur zu erhöhter Vorsicht; es verleiht keine besonderen Vortrittsrechte.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, es hat denselben Vorrang wie ein Krankenwagen mit Blaulicht.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Es darf alle roten Ampeln überfahren.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Gelbes Drehlicht warnt vor Gefahren (Baustellen, langsame Spezialfahrzeuge), verleiht aber keinen Vortritt (Art. 27 SVG / Art. 78 SSV). Nur Blaulicht mit Horn gibt Vortritt.",
    "ruleReference": "Art. 78 SSV"
  },
  {
    "id": 161,
    "testId": 4,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was zeigt ein rundes, weisses Schild mit rotem Rand und einem schwarzen Auto-Symbol (Signal 2.01)?",
    "svgType": "sign_allgemeines_fahrverbot",
    "options": [
      {
        "id": "a",
        "text": "Verbot für Motorwagen (alle mehrspurigen Motorfahrzeuge dürfen hier nicht einfahren).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nur für Elektroautos reserviert.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Parkplatz ausschliesslich für Personenwagen.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 2.03 verbietet das Befahren der Strasse für Motorwagen (inkl. Kleinbusse und Lastwagen) (Art. 19 SSV).",
    "ruleReference": "Art. 19 SSV"
  },
  {
    "id": 162,
    "testId": 4,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet das Signal 'Einfahrt verboten' (rotes rundes Schild mit weissem Querbalken, Signal 2.02)?",
    "svgType": "sign_einfahrt_verboten",
    "options": [
      {
        "id": "a",
        "text": "Einfahrt aus dieser Richtung verboten (typisch für das Ende einer Einbahnstrasse).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Allgemeines Fahrverbot in beide Richtungen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Zollstation voraus.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Signal 2.02 verbietet die Einfahrt in die Strasse. Der Verkehr aus der Gegenrichtung ist jedoch gestattet (Art. 18 SSV).",
    "ruleReference": "Art. 18 SSV"
  },
  {
    "id": 163,
    "testId": 4,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet das dreieckige Signal mit dem schwarzen Ausrufezeichen auf weissem Grund mit rotem Rand?",
    "options": [
      {
        "id": "a",
        "text": "Signal 1.30 'Andere Gefahren' (warnt vor Gefahrenstellen, für die kein spezielles Signal existiert).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Verbot für lautes Hupen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Schule in 100 Metern.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 1.30 'Andere Gefahren' mahnt zu erhöhter Aufmerksamkeit und wird oft mit einer erläuternden Zusatztafel ergänzt (Art. 15 SSV).",
    "ruleReference": "Art. 15 SSV"
  },
  {
    "id": 164,
    "testId": 5,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet ein blaues quadratisches Schild mit einem weissen Haus, spielenden Kindern und einem Auto?",
    "svgType": "sign_begegnungszone",
    "options": [
      {
        "id": "a",
        "text": "Wohnstrasse / Begegnungszone (max. 20 km/h, Fussgänger haben Vortritt und dürfen die ganze Strasse nutzen).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Spielplatzparkplatz bis 50 km/h.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Autobahnraststätte mit Spielplatz.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "In Begegnungszonen (Art. 22b SSV) beträgt die Höchstgeschwindigkeit 20 km/h. Fussgänger dürfen die Strasse überall benützen und haben Vortritt.",
    "ruleReference": "Art. 22b SSV"
  },
  {
    "id": 165,
    "testId": 5,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Darf man in einer Begegnungszone (Signal 2.59.5) überall parkieren?",
    "options": [
      {
        "id": "a",
        "text": "Nein, das Parkieren ist nur auf den speziell dafür gekennzeichneten und markierten Feldern erlaubt.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, überall wo man niemanden behindert.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, auf dem Trottoir unbegrenzt.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "In Begegnungszonen und Fussgängerzonen ist das Parkieren ausserhalb markierter Parkfelder grundsätzlich verboten (Art. 22b Abs. 2 SSV).",
    "ruleReference": "Art. 22b Abs. 2 SSV"
  },
  {
    "id": 166,
    "testId": 6,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet ein rundes blaues Schild mit einem weissen Velo-Symbol?",
    "options": [
      {
        "id": "a",
        "text": "Radweg: Velofahrer müssen diesen Weg benützen; andere Fahrzeuge dürfen ihn nicht befahren.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Verbot für Velos.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Veloverleihstation in der Nähe.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 2.60 'Radweg' ist ein Gebotssignal: Lenker von Fahrrädern sind verpflichtet, den Radweg zu benützen (Art. 33 SSV).",
    "ruleReference": "Art. 33 SSV"
  },
  {
    "id": 167,
    "testId": 6,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet ein blaues rundes Schild mit einem Pfeil, der nach rechts oben zeigt (Signal 2.32)?",
    "options": [
      {
        "id": "a",
        "text": "Rechts abbiegen vorgeschrieben (Fahrtrichtung nach rechts vorgeschrieben vor oder an der Verzweigung).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Einbahnstrasse von links.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Steigung um 10% nach rechts.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Gebotssignale mit Pfeil schreiben die verbindliche Fahrtrichtung vor. Ein Abbiegen nach links oder Geradeausfahren ist untersagt (Art. 24 SSV).",
    "ruleReference": "Art. 24 SSV"
  },
  {
    "id": 168,
    "testId": 7,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet eine gelbe Zickzack-Linie am Fahrbahnrand?",
    "options": [
      {
        "id": "a",
        "text": "Haltestelle für öffentliche Verkehrsmittel (Tram oder Bus): Halteverbot (ausser zum Ein- und Aussteigenlassen, wenn kein ÖV behindert wird).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Parkplatz für Wohnmobile.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Kurvenreiche Strecke.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Die gelbe Zickzacklinie (Art. 79a SSV) markiert Bushaltestellen. Parkieren ist strikt verboten. Halten nur kurz zum Ein-/Aussteigen, wenn kein Bus behindert wird.",
    "ruleReference": "Art. 79a SSV"
  },
  {
    "id": 169,
    "testId": 7,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet eine durchgehende gelbe Linie am Strassenrand (evtl. mit Kreuzen)?",
    "options": [
      {
        "id": "a",
        "text": "Parkierungsverbot (durchgehend mit Kreuzen: Parkieren verboten; mit durchgezogener gelber Linie: Park- und Halteverbot).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Gratis-Parkstreifen für alle.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Streifen für E-Scooter.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Gelbe durchgehende Linien am Fahrbahnrand bedeuten Halteverbot; gelbe Linien mit Kreuzen bedeuten Parkierungsverbot (Art. 79 SSV).",
    "ruleReference": "Art. 79 SSV"
  },
  {
    "id": 170,
    "testId": 8,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet das Signal 'Zollstelle' (Signal 2.51)?",
    "options": [
      {
        "id": "a",
        "text": "Halt an der Zollstelle obligatorisch, ausser wenn Zollbeamte durchwinken.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Man darf mit 80 km/h ohne Halt passieren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Gilt nur für Lastwagen aus Übersee.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 2.51 verpflichtet zum Anhalten an der Zollstelle. Die Weiterfahrt ist erst nach Abfertigung oder Zeichen des Zolls gestattet (Art. 31 SSV).",
    "ruleReference": "Art. 31 SSV"
  },
  {
    "id": 171,
    "testId": 8,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet ein weisses rundes Schild mit rotem Rand und der Zahl '30' im roten Kreis (Signal 2.30)?",
    "svgType": "sign_tempo_30",
    "options": [
      {
        "id": "a",
        "text": "Höchstgeschwindigkeit 30 km/h: Ab dem Signal darf nicht schneller als 30 km/h gefahren werden.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Mindestgeschwindigkeit 30 km/h.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Empfohlene Richtgeschwindigkeit für LKWs.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 2.30 bestimmt die zulässige Höchstgeschwindigkeit ab dem Standort des Signals bis zur Aufhebung (Art. 22 SSV).",
    "ruleReference": "Art. 22 SSV"
  },
  {
    "id": 172,
    "testId": 9,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was ist der Unterschied zwischen dem Signal 'Höchstgeschwindigkeit 30' und dem Zonensignal 'Tempo-30-Zone'?",
    "svgType": "sign_tempo_30",
    "options": [
      {
        "id": "a",
        "text": "Das normale Signal gilt nur bis zur nächsten Verzweigung; das Zonensignal gilt für das gesamte Quartier bis zum Signal 'Ende Zone'.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Es gibt keinerlei Unterschied.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "In Zonen gilt kein Rechtsvortritt.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Zonensignale gelten flächendeckend für das ganze Gebiet. In Tempo-30-Zonen gilt zudem in der Regel standardmässig der Rechtsvortritt (Art. 22a SSV).",
    "ruleReference": "Art. 22a SSV"
  },
  {
    "id": 173,
    "testId": 9,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet das dreieckige Signal mit einem Hirsch/Wildtier-Symbol (Signal 1.25)?",
    "options": [
      {
        "id": "a",
        "text": "Wildwechsel: Es ist mit plötzlich über die Strasse wechselndem Wild zu rechnen (besonders in der Dämmerung und nachts).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Zoo oder Tierpark in 500 m.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Jagdgebiet: Hupen verboten.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 1.25 warnt vor Wildwechsel. Bremsbereitschaft erhöhen, Waldränder beobachten und bei Tiersichtung sofort abblenden (Art. 13 SSV).",
    "ruleReference": "Art. 13 SSV"
  },
  {
    "id": 174,
    "testId": 10,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet eine doppelte Linie (eine Sicherheitslinie neben einer gestrichelten Leitlinie)?",
    "options": [
      {
        "id": "a",
        "text": "Für den Verkehr auf der Seite der Sicherheitslinie ist das Überfahren verboten; von der Seite der Leitlinie darf überholt werden.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Niemand darf die Linien überfahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Beide Fahrtrichtungen dürfen nach Belieben überholen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Bei Doppellinien gilt die für die eigene Fahrspur nähere Linie. Ist sie gestrichelt, darf überholt werden; ist sie durchgezogen, ist das Überfahren verboten (Art. 73 Abs. 4 SSV).",
    "ruleReference": "Art. 73 Abs. 4 SSV"
  },
  {
    "id": 175,
    "testId": 10,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet das Signal 'Verbot für Lastwagen' (Signal 2.07)?",
    "options": [
      {
        "id": "a",
        "text": "Gilt für schwere Motorwagen zum Sachentransport mit einem Gesamtgewicht über 3.5 Tonnen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Gilt für alle Fahrzeuge mit Anhängerkupplung.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Gilt auch für normale Personenwagen mit 5 Sitzplätzen.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 2.07 verbietet schweren Motorwagen zum Gütertransport (über 3.5t Gesamtgewicht) die Weiterfahrt (Art. 20 SSV).",
    "ruleReference": "Art. 20 SSV"
  },
  {
    "id": 176,
    "testId": 11,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet ein blaues rechteckiges Signal mit einem weissen Bett-Symbol?",
    "options": [
      {
        "id": "a",
        "text": "Hotel oder Motel in der Nähe.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Krankenhaus mit Notaufnahme.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ruhezone: Motorenlärm verboten.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Hinweissignal 4.80 weist auf ein Beherbergungsunternehmen (Hotel/Motel) hin (Art. 62 SSV).",
    "ruleReference": "Art. 62 SSV"
  },
  {
    "id": 177,
    "testId": 11,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was zeigt das Signal 'Engpass' (Signal 1.07, Strasse verengt sich beidseitig)?",
    "options": [
      {
        "id": "a",
        "text": "Kündigt eine beidseitige Fahrbahnverengung an; Vorsicht beim Kreuzen mit Gegenverkehr.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Verbot für breite Fahrzeuge über 2 Meter.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Fahrbahn endet in einer Sackgasse.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 1.07 warnt vor einer Einengung der Strasse, bei der das Kreuzen erschwert oder unmöglich sein kann (Art. 7 SSV).",
    "ruleReference": "Art. 7 SSV"
  },
  {
    "id": 178,
    "testId": 12,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet das dreieckige Signal 'Schleudergefahr' (Auto mit Schleuderspuren, Signal 1.05)?",
    "options": [
      {
        "id": "a",
        "text": "Warnt vor überraschender Glätte, Nässe oder Schmutz auf der Fahrbahn.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Hier ist Driften gestattet.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Verbot für Winterreifen.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 1.05 warnt vor gefährlich rutschiger Fahrbahn. Geschwindigkeit sofort reduzieren und abrupte Lenk- oder Bremsmanöver vermeiden (Art. 6 SSV).",
    "ruleReference": "Art. 6 SSV"
  },
  {
    "id": 179,
    "testId": 12,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet ein rundes blaues Schild mit weissem Schneeketten-Symbol (Signal 2.48)?",
    "options": [
      {
        "id": "a",
        "text": "Schneeketten obligatorisch: Mehrspurige Motorfahrzeuge dürfen nur mit montierten Schneeketten an mindestens 2 Antriebsrädern weiterfahren.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Schneeketten müssen im Kofferraum mitgeführt werden.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Schneeketten sind ab hier verboten.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Signal 2.48 schreibt Schneeketten vor (ausser für allradgetriebene Fahrzeuge, sofern eine Zusatztafel '4x4 ausgenommen' angebracht ist) (Art. 29 SSV).",
    "ruleReference": "Art. 29 SSV"
  },
  {
    "id": 180,
    "testId": 13,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet das Zusatzschild '4x4 ausgenommen' unter dem Signal 'Schneeketten obligatorisch'?",
    "options": [
      {
        "id": "a",
        "text": "Fahrzeuge mit permanentem oder zugeschaltetem Allradantrieb dürfen die Strecke ohne montierte Ketten befahren.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Allradfahrzeuge dürfen hier gar nicht fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Allradfahrzeuge müssen 4 Ketten montieren.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Die Zusatztafel befreit Allradfahrzeuge vom Kettenobligatorium, solange sie dank Allradantrieb sicher vorwärtskommen (Art. 63 SSV).",
    "ruleReference": "Art. 63 SSV"
  },
  {
    "id": 181,
    "testId": 1,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Welche allgemeine Höchstgeschwindigkeit gilt in der Schweiz ausserorts auf normalen Strassen ohne Schilder?",
    "options": [
      {
        "id": "a",
        "text": "80 km/h.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "100 km/h.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "70 km/h.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Die allgemeine Höchstgeschwindigkeit ausserhalb von Ortschaften beträgt für Personenwagen 80 km/h (Art. 4a Abs. 1 Bst. b VRV).",
    "ruleReference": "Art. 4a Abs. 1 VRV"
  },
  {
    "id": 182,
    "testId": 1,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Welche allgemeine Höchstgeschwindigkeit gilt in der Schweiz innerorts in geschlossenen Ortschaften ohne Schilder?",
    "options": [
      {
        "id": "a",
        "text": "50 km/h.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "60 km/h.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "40 km/h.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Die allgemeine Höchstgeschwindigkeit in Ortschaften beträgt 50 km/h (Art. 4a Abs. 1 Bst. a VRV).",
    "ruleReference": "Art. 4a Abs. 1 VRV"
  },
  {
    "id": 183,
    "testId": 2,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Wie ändert sich der Bremsweg, wenn Sie Ihre Geschwindigkeit verdoppeln (z.B. von 50 km/h auf 100 km/h)?",
    "options": [
      {
        "id": "a",
        "text": "Der Bremsweg vervierfacht sich (quadratischer Anstieg!).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Der Bremsweg verdoppelt sich lediglich.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Der Bremsweg bleibt gleich, weil moderne Bremsen elektronisch geregelt sind.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Die kinetische Bremsenergie steigt im Quadrat zur Geschwindigkeit (E = 1/2 m v²). Doppelte Geschwindigkeit bedeutet vierfacher Bremsweg!",
    "ruleReference": "Fahrphysik / BFU"
  },
  {
    "id": 184,
    "testId": 2,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Wie lautet die Faustformel zur Berechnung des Reaktionswegs bei normaler Aufmerksamkeit (1 Sekunde Reaktionszeit)?",
    "options": [
      {
        "id": "a",
        "text": "Geschwindigkeit in km/h geteilt durch 10 und mal 3 (z.B. bei 50 km/h: 5 * 3 = 15 Meter).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Geschwindigkeit in km/h geteilt durch 2.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Geschwindigkeit in km/h mal 2.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "In einer Sekunde legt ein Fahrzeug rund (v / 10) * 3 Meter zurück. Bei 50 km/h sind das rund 15 Meter, bei 100 km/h rund 30 Meter Reaktionsweg.",
    "ruleReference": "Fahrschul-Faustformeln"
  },
  {
    "id": 185,
    "testId": 3,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Sie fahren bei dichtem Nebel mit einer Sichtweite von unter 50 Metern. Wie schnell dürfen Sie maximal fahren?",
    "options": [
      {
        "id": "a",
        "text": "Maximal 50 km/h (Sichtweite = maximal gefahrene Geschwindigkeit).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "80 km/h mit eingeschalteten Nebelscheinwerfern.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "100 km/h, um den Nebel schnell zu durchfahren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Die Geschwindigkeit muss den Sichtverhältnissen angepasst werden (Art. 32 SVG). Bei Sicht unter 50 Metern darf nicht schneller als 50 km/h gefahren werden (Anhalteweg muss innerhalb der Sichtweite liegen).",
    "ruleReference": "Art. 32 SVG"
  },
  {
    "id": 186,
    "testId": 3,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Wann dürfen die Nebelschlussleuchten (gelbes oder rotes blendendes Licht hinten) eingeschaltet werden?",
    "options": [
      {
        "id": "a",
        "text": "Nur wenn die Sichtweite durch dichten Nebel, Schneetreiben oder starken Regen weniger als 50 Meter beträgt.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Bei jedem leichten Nieselregen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Jede Nacht auf Autobahnen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Nebelschlussleuchten dürfen nur bei Sichtweiten unter 50 Metern verwendet werden (Art. 30 Abs. 4 VRV). Bei besserer Sicht blenden sie den Nachfolgeverkehr extrem.",
    "ruleReference": "Art. 30 Abs. 4 VRV"
  },
  {
    "id": 187,
    "testId": 4,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Was besagt das 'Sichtweiten-Prinzip' auf unübersichtlichen, schmalen Strassen mit Gegenverkehr?",
    "options": [
      {
        "id": "a",
        "text": "Das Fahrzeug muss innerhalb der halben überblickbaren Strecke sicher anhalten können.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Man muss innerhalb der vollen Sichtweite anhalten können.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Es darf mit der vollen Höchstgeschwindigkeit gefahren werden.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Wo das Kreuzen schwierig ist, muss auf halbe Sichtweite angehalten werden können, weil das entgegenkommende Fahrzeug denselben Bremsweg benötigt (Art. 4 Abs. 1 VRV).",
    "ruleReference": "Art. 4 Abs. 1 VRV"
  },
  {
    "id": 188,
    "testId": 5,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Was droht bei einer massiven Geschwindigkeitsüberschreitung von 25 km/h oder mehr innerorts (abzüglich Toleranz)?",
    "options": [
      {
        "id": "a",
        "text": "Verzeigung an die Staatsanwaltschaft, Führerausweisentzug von mindestens 1 bis 3 Monaten und ein Strafregistereintrag.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nur eine kleine Parkbusse von 40 Franken.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Mündliche Verwarnung ohne Folgen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Ab 25 km/h zu schnell innerorts liegt eine schwere Verkehrsregelverletzung vor (Art. 16c SVG). Dies führt zwingend zu Ausweisentzug und Gerichtsverfahren.",
    "ruleReference": "Art. 16c SVG"
  },
  {
    "id": 189,
    "testId": 5,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Was versteht das Schweizer Gesetz unter einem 'Raserdelikt' (Via Sicura)?",
    "options": [
      {
        "id": "a",
        "text": "Vorsätzliche Überschreitung der Höchstgeschwindigkeit um z.B. 40 km/h in 30er-Zone, 50 km/h innerorts (50), 60 km/h ausserorts (80) oder 80 km/h auf Autobahn (120).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Jedes Überholen auf der Autobahn.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Jedes Quietschen der Reifen an der Ampel.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Raserdelikte (Art. 90 Abs. 3 SVG) werden mit Freiheitsstrafe von 1 bis 4 Jahren, mindestens 2 Jahren Ausweisentzug und möglicher Fahrzeugeinziehung bestraft.",
    "ruleReference": "Art. 90 Abs. 3 SVG"
  },
  {
    "id": 190,
    "testId": 6,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Welcher Mindestabstand zum vorausfahrenden Fahrzeug gilt bei Kolonnenfahrt im Tunnel?",
    "options": [
      {
        "id": "a",
        "text": "Mindestens 50 Meter Abstand (auch bei Stau mindestens 5 Meter zum Vorderfahrzeug).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "2 Meter wie beim Parkieren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Kein Abstand erforderlich.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "In Tunnels muss stets ausreichend Sicherheitsabstand gehalten werden (mindestens 50 Meter bei freier Fahrt, mindestens 5 Meter bei Stillstand), um Rauch- und Brandgefahren zu minimieren (Art. 39a VRV).",
    "ruleReference": "Art. 39a VRV"
  },
  {
    "id": 191,
    "testId": 1,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Wie lange dauert die Probezeit für Neulenker beim Führerausweis der Kategorie B in der Schweiz?",
    "options": [
      {
        "id": "a",
        "text": "3 Jahre (Führerausweis auf Probe).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "1 Jahr.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "5 Jahre.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Wer erstmals ein Gesuch um einen Führerausweis der Kategorie A oder B stellt, erhält den Führerausweis auf Probe für drei Jahre (Art. 15a SVG).",
    "ruleReference": "Art. 15a SVG"
  },
  {
    "id": 192,
    "testId": 1,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Was passiert, wenn einem Neulenker in der 3-jährigen Probezeit der Ausweis wegen einer Widerhandlung entzogen wird?",
    "options": [
      {
        "id": "a",
        "text": "Die Probezeit verlängert sich automatisch um ein ganzes Jahr.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Die Probezeit endet sofort und man erhält den definitiven Ausweis.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Es ändert sich an der Probezeit nichts.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Wird der Führerausweis auf Probe wegen einer Widerhandlung entzogen, so verlängert sich die Probezeit um ein Jahr (Art. 15a Abs. 3 SVG).",
    "ruleReference": "Art. 15a Abs. 3 SVG"
  },
  {
    "id": 193,
    "testId": 2,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Was geschieht, wenn ein Neulenker während der Probezeit eine zweite Widerhandlung begeht, die zum Ausweisentzug führt?",
    "options": [
      {
        "id": "a",
        "text": "Der Führerausweis verfällt komplett. Ein neuer Lernfahrausweis kann frühestens nach einem Jahr und mit Verkehrspsychologischem Gutachten beantragt werden.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Die Probezeit wird nur um weitere 2 Monate verlängert.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Man muss lediglich eine Busse von 100 CHF bezahlen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Begeht der Inhaber während der Probezeit eine zweite Widerhandlung, die zum Entzug führt, so verfällt der Führerausweis auf Probe vollständig (Art. 15a Abs. 4 SVG).",
    "ruleReference": "Art. 15a Abs. 4 SVG"
  },
  {
    "id": 194,
    "testId": 2,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Welche Weiterbildungspflicht (2-Phasen-Ausbildung / WAB-Kurs) besteht während der Probezeit?",
    "options": [
      {
        "id": "a",
        "text": "Der 1-tägige WAB-Kurs (Weiterbildungskurs) muss zwingend innerhalb des ersten Jahres nach Erhalt des Probeausweises absolviert werden.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Man muss 10 Fahrstunden bei einem Fahrlehrer nachweisen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Es gibt in der Schweiz keine Weiterbildungspflicht.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Seit 2020 muss der WAB-Kurs (1 Tag, 7 Stunden) innerhalb von 12 Monaten ab Ausstellungsdatum des Führerausweises auf Probe absolviert werden (Art. 27a VZV).",
    "ruleReference": "Art. 27a VZV"
  },
  {
    "id": 195,
    "testId": 3,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Darf eine Begleitperson bei einer Lernfahrt (Fahrschüler am Steuer) Alkohol trinken?",
    "options": [
      {
        "id": "a",
        "text": "Nein, für Begleitpersonen gilt dasselbe strikte Alkoholverbot (Grenzwert 0.10 ‰) wie für den Fahrschüler.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, bis zu 0.50 ‰, weil sie nicht selbst lenkt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, unbegrenzt, wenn sie auf dem Beifahrersitz sitzt.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Die Begleitperson bei Lernfahrten unterliegt den gleichen strengen Pflichten wie der Fahrschüler selbst: Nulltoleranz bezüglich Alkohol (0.10 ‰) (Art. 2a Abs. 1 VRV).",
    "ruleReference": "Art. 2a VRV"
  },
  {
    "id": 196,
    "testId": 3,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Welche Voraussetzungen muss eine Begleitperson für eine private Lernfahrt (Kategorie B) in der Schweiz erfüllen?",
    "options": [
      {
        "id": "a",
        "text": "Mindestens 23 Jahre alt sein und den Führerausweis der Kat. B seit mindestens 3 Jahren besitzen (nicht mehr auf Probe).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Mindestens 18 Jahre alt sein und den Ausweis seit 1 Monat haben.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Jedes Familienmitglied darf begleiten.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Nach Art. 15 Abs. 1 SVG muss die Begleitperson mindestens 23 Jahre alt sein und seit mindestens drei Jahren den unbeschränkten Führerausweis besitzen.",
    "ruleReference": "Art. 15 Abs. 1 SVG"
  },
  {
    "id": 197,
    "testId": 4,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Wo muss die blaue 'L'-Tafel bei Lernfahrten am Fahrzeug angebracht werden?",
    "options": [
      {
        "id": "a",
        "text": "Gut sichtbar an der Rückseite des Fahrzeugs in senkrechter Stellung.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Auf dem Armaturenbrett hinter der Frontscheibe.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "An der linken Seitenscheibe.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Die blaue Tafel mit weissem 'L' muss für nachfolgende Fahrzeuge an der Rückseite gut sichtbar angebracht sein und bei Nicht-Lernfahrten entfernt werden (Art. 27 Abs. 2 VRV).",
    "ruleReference": "Art. 27 Abs. 2 VRV"
  },
  {
    "id": 198,
    "testId": 4,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Darf ein Fahrzeug mit montierter blauer 'L'-Tafel gefahren werden, wenn keine Lernfahrt stattfindet?",
    "options": [
      {
        "id": "a",
        "text": "Nein, die 'L'-Tafel muss abgenommen oder verdeckt werden, wenn keine Lernfahrt durchgeführt wird.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, man kann die Tafel dauerhaft am Auto montiert lassen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, das stört niemanden.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Werden keine Lernfahrten ausgeführt, ist das L-Schild abzunehmen. Zuwiderhandlung kann gebüsst werden (Art. 27 Abs. 2 VRV).",
    "ruleReference": "Art. 27 Abs. 2 VRV"
  },
  {
    "id": 199,
    "testId": 5,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Was gilt bezüglich der Handbremse (Feststellbremse) bei Lernfahrten auf dem Beifahrersitz?",
    "options": [
      {
        "id": "a",
        "text": "Die Begleitperson muss die Handbremse vom Beifahrersitz aus leicht und wirksam erreichen können.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Die Handbremse muss nur für den Fahrer erreichbar sein.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Elektrische Handbremsen sind auf Lernfahrten generell verboten.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Die Begleitperson muss leicht die Handbremse erreichen können (Art. 27 Abs. 1 VRV), um im Notfall eingreifen zu können (bei elektronischen Parkbremsen muss diese auch während der Fahrt abbremsen können).",
    "ruleReference": "Art. 27 Abs. 1 VRV"
  },
  {
    "id": 200,
    "testId": 5,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Was droht bei der Verweigerung eines Atemalkoholtests oder einer Blutprobe bei einer Polizeikontrolle?",
    "options": [
      {
        "id": "a",
        "text": "Die Verweigerung wird gesetzlich wie eine schwere Trunkenheitsfahrt bestraft (Freiheitsstrafe oder hohe Geldstrafe und zwingender Ausweisentzug).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Keine Strafe, die Polizei muss einen einfach weiterfahren lassen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur 20 Franken Bearbeitungsgebühr.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Die Vereitelung von Massnahmen zur Feststellung der Fahrunfähigkeit (Art. 91a SVG) zieht dieselben harten strafrechtlichen Konsequenzen nach sich wie eine qualifizierte Alkoholfahrt.",
    "ruleReference": "Art. 91a SVG"
  },
  {
    "id": 201,
    "testId": 1,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Warum ist das Fahren mit zu geringem Reifendruck besonders gefährlich?",
    "options": [
      {
        "id": "a",
        "text": "Der Reifen erwärmt sich übermässig (Gefahr des Reifenplatzers), der Bremsweg verlängert sich und der Treibstoffverbrauch steigt.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Das Auto verbraucht weniger Benzin.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Der Reifen hält doppelt so lange.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Zu geringer Reifendruck verformt die Karkasse, walkt den Reifen heiss und kann bei hoher Geschwindigkeit zum plötzlichen Platzen führen (Art. 58 VTS).",
    "ruleReference": "Art. 58 VTS"
  },
  {
    "id": 202,
    "testId": 1,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Was bewirkt das elektronische Stabilitätsprogramm (ESP / ESC) im Fahrzeug?",
    "options": [
      {
        "id": "a",
        "text": "Es verhindert gezielt durch selektives Abbremsen einzelner Räder das Ausbrechen und Schleudern des Autos in Kurven.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Es spart Treibstoff beim Schalten.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Es regelt die Lautstärke des Radios.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "ESP stabilisiert das Fahrzeug im Grenzbereich bei Über- oder Untersteuern durch gezielten Bremseingriff an einzelnen Rädern (Fahrzeugtechnik VTS).",
    "ruleReference": "Fahrzeugtechnik VTS"
  },
  {
    "id": 203,
    "testId": 2,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Wie überprüfen Sie, ob die Beleuchtung Ihres Fahrzeugs einwandfrei funktioniert?",
    "options": [
      {
        "id": "a",
        "text": "Regelmässige Sichtkontrolle vor Antritt der Fahrt rund um das Fahrzeug (oder Reflexion an Schaufenstern/Garagentoren nutzen).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Solange keine Sicherung durchbrennt, muss man nie nachschauen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur bei der periodischen MFK-Prüfung alle paar Jahre.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Der Fahrer ist nach Art. 57 VRV persönlich dafür verantwortlich, dass alle Lichter (Scheinwerfer, Bremslichter, Blinker, Kennzeichenleuchte) vor der Fahrt funktionieren.",
    "ruleReference": "Art. 57 VRV"
  },
  {
    "id": 204,
    "testId": 2,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Welche Lampe leuchtet bei modernsten Fahrzeugen auf, wenn der Partikelfilter (DPF) verstopft ist?",
    "options": [
      {
        "id": "a",
        "text": "Die Partikelfilter- bzw. Motorkontrollleuchte (gelb); eine längere Regenerationsfahrt oder Werkstattbesuch ist erforderlich.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Die Batterieleuchte.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Die Fernlichtleuchte.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Der Dieselpartikelfilter sammelt Ruß. Kurzstreckenverkehr verhindert das Freibrennen; die Warnleuchte mahnt zur Freifahrt auf Autobahnen oder Werkstattwartung.",
    "ruleReference": "Umwelttechnik VTS"
  },
  {
    "id": 205,
    "testId": 3,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Darf man bei Bergabfahrt den Gang herausnehmen und im Leerlauf rollen lassen?",
    "options": [
      {
        "id": "a",
        "text": "Nein, weil dadurch die Bremswirkung des Motors verloren geht und die Betriebsbremse überhitzen kann.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, das spart bei jedem Gefälle Benzin.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, wenn man die Handbremse leicht anzieht.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Im Leerlauf verliert man die Motorbremse. Folge: Fading (Bremsversagen durch Überhitzung der Scheiben). Mit Gang rollen spart dank Schubabschaltung 100% Treibstoff (0.0 l)!",
    "ruleReference": "Eco-Drive Suisse"
  },
  {
    "id": 206,
    "testId": 3,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Wie verhalten Sie sich bei einer Reifenpanne auf freier Strecke, wenn Sie das Rad wechseln müssen?",
    "options": [
      {
        "id": "a",
        "text": "Warnblinker an, Warnweste anziehen, Pannendreieck aufstellen, Wagen gegen Wegrollen sichern (1. Gang, Handbremse) und nur auf ebenem, festem Grund anheben.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sofort den Wagenheber ansetzen, ohne das Pannendreieck aufzustellen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Auf der Autobahnspur stehenbleiben und den Reifen wechseln.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Eigensicherung und Absicherung der Gefahrenstelle haben oberste Priorität. Niemals unter das nur mit dem Wagenheber angehobene Auto legen (Art. 54 VRV).",
    "ruleReference": "Art. 54 VRV"
  },
  {
    "id": 207,
    "testId": 4,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Was bedeutet das EU-Reifenlabel bezüglich des Rollwiderstands?",
    "options": [
      {
        "id": "a",
        "text": "Klasse A steht für den geringsten Rollwiderstand und somit niedrigsten Treibstoffverbrauch und geringste CO2-Emissionen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Klasse A bedeutet besonders laute Reifen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Klasse E ist die umweltfreundlichste Stufe.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Klasse A Reifen weisen den geringsten Rollwiderstand auf und sparen bis zu 0.5 Liter Treibstoff auf 100 km gegenüber schlechteren Klassen.",
    "ruleReference": "Umweltetikette Reifen"
  },
  {
    "id": 208,
    "testId": 4,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Was ist beim Beladen eines Dachgepäckträgers oder einer Dachbox besonders zu beachten?",
    "options": [
      {
        "id": "a",
        "text": "Die zulässige Dachlast darf nicht überschritten werden, schwere Gegenstände gehören in den Kofferraum, und die Ladung muss absolut rutschfest verzurrt sein.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Die schwersten Koffer müssen immer ganz oben aufs Dach.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Man muss das Gepäck nicht befestigen, wenn ein Deckel vorhanden ist.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Dachlasten erhöhen den Schwerpunkt massiv und verändern das Kurvenverhalten negativ. Zulässige Höchstlast gemäss Fahrzeugausweis strikt beachten (Art. 73 VRV).",
    "ruleReference": "Art. 73 VRV"
  },
  {
    "id": 209,
    "testId": 5,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Welche Gefahr besteht, wenn Kühlflüssigkeit bei heissem Motor geöffnet wird?",
    "options": [
      {
        "id": "a",
        "text": "Akute Verbrühungsgefahr durch herausspritzenden kochenden Dampf und heisses Wasser unter Überdruck.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Die Batterie entlädt sich schlagartig.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Es besteht keinerlei Gefahr.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Das Kühlsystem steht unter Überdruck. Das Öffnen des Ausgleichsbehälters bei heissem Motor führt zu schlagartigem Kochen und schweren Verbrennungen.",
    "ruleReference": "Sicherheitshandbuch Fahrzeug"
  },
  {
    "id": 210,
    "testId": 5,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Was tun Sie mit alten Autobatterien, Motorenöl und Bremsflüssigkeit?",
    "options": [
      {
        "id": "a",
        "text": "Fachgerecht als Sondermüll bei der Verkaufsstelle, Werkstatt oder kommunalen Sammelstelle entsorgen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "In die Kanalisation giessen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Im normalen Hauskehricht entsorgen.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Betriebsstoffe sind giftig und grundwassergefährdend. Ein Liter Altöl kann eine Million Liter Trinkwasser verseuchen (Gewässerschutzgesetz).",
    "ruleReference": "Schweizer Umweltschutzgesetz"
  },
  {
    "id": 211,
    "testId": 12,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Sie möchten auf einer Kreuzung mit Rechtsvortritt wenden. Behalten Sie während des Wendemanövers Ihren Vortritt?",
    "options": [
      {
        "id": "a",
        "text": "Nein, wer wendet, verliert jeden Vortritt und muss allen anderen Verkehrsteilnehmern den Vortritt lassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, Rechtsvortritt bleibt auch beim Wenden uneingeschränkt bestehen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, gegenüber Fussgängern immer.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Wer wendet oder rückwärts fährt, hat gegenüber allen anderen Verkehrsteilnehmern nachrangig zu handeln (Art. 17 Abs. 1 VRV). Beliebte ASA-Falle!",
    "ruleReference": "Art. 17 Abs. 1 VRV"
  },
  {
    "id": 212,
    "testId": 12,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Sie fahren auf einer Strasse und ein Fussgänger überquert die Fahrbahn 20 Meter neben einem markierten Fussgängerstreifen. Was gilt?",
    "options": [
      {
        "id": "a",
        "text": "Der Fussgänger hat keinen Vortritt, aber Sie dürfen ihn dennoch nicht überfahren und müssen nötigenfalls bremsen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sie dürfen beschleunigen und ihn durch Hupe verjagen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Der Fussgänger hat überall denselben Vortritt wie auf den Streifen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Fussgänger müssen Fussgängerstreifen benützen, wenn dieser weniger als 50 m entfernt ist (Art. 47 VRV). Tun sie es nicht, haben sie keinen Vortritt; der Autofahrer muss aber nach Art. 33 SVG stets Bremsbereitschaft wahren.",
    "ruleReference": "Art. 47 VRV / Art. 33 SVG"
  },
  {
    "id": 213,
    "testId": 12,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Darf man ein Fahrzeug überholen, das vor einem Fussgängerstreifen anhält?",
    "options": [
      {
        "id": "a",
        "text": "Nein, absolutes Überholverbot! Wenn ein Auto vor dem Streifen hält, ist immer damit zu rechnen, dass Fussgänger queren.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, mit Schritttempo.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, wenn die Spur frei ist.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Fahrzeuge, die vor einem Fussgängerstreifen anhalten, dürfen unter keinen Umständen überholt werden (Art. 26 Abs. 2 VRV). Lebensgefahr für Fussgänger!",
    "ruleReference": "Art. 26 Abs. 2 VRV"
  },
  {
    "id": 214,
    "testId": 12,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Darf man auf einer Brücke oder in einem Tunnel wenden oder rückwärtsfahren?",
    "options": [
      {
        "id": "a",
        "text": "Nein, Wenden und Rückwärtsfahren sind auf Brücken, in Unterführungen und in Tunnels strikt verboten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, wenn keine anderen Autos sichtbar sind.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur nachts mit Warnblinker.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Auf Brücken, in Tunneln und engen Kurven ist jedes Wenden und Rückwärtsfahren verboten (Art. 17 Abs. 1 VRV).",
    "ruleReference": "Art. 17 Abs. 1 VRV"
  },
  {
    "id": 215,
    "testId": 12,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Sie möchten aus einem verkehrsberuhigten Bereich (Tempo 30 oder Begegnungszone) in eine normale Strasse einfahren. Gilt Rechtsvortritt?",
    "options": [
      {
        "id": "a",
        "text": "Aus einer Begegnungszone (20 km/h) oder Fussgängerzone muss man allen Fahrzeugen auf der normalen Strasse den Vortritt lassen (kein Rechtsvortritt!).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, von rechts kommend hat man immer Vortritt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Wer die Zone verlässt, hat Vorrang.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Wer aus Fussgänger- oder Begegnungszonen in eine Strasse einfährt, ist vortrittsbelastet (Art. 15 Abs. 3 VRV). In Tempo-30-Zonen gilt hingegen meist Rechtsvortritt.",
    "ruleReference": "Art. 15 Abs. 3 VRV"
  },
  {
    "id": 216,
    "testId": 12,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Was bedeutet das Signal 'Sackgasse mit Ausnahme für Velo und Fussgänger'?",
    "options": [
      {
        "id": "a",
        "text": "Motorfahrzeuge können nicht durchfahren; für Velofahrer und Fussgänger ist die Strasse jedoch durchgängig passierbar.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Fahrverbot für Velofahrer.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur Elektroautos dürfen durchfahren.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 4.09.1 zeigt an, dass am Ende der Strasse ein Durchgang für den Velo- und Fussverkehr besteht (Art. 46 SSV).",
    "ruleReference": "Art. 46 SSV"
  },
  {
    "id": 217,
    "testId": 13,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Sie parkieren Ihr Fahrzeug an einer steilen Steigung bergwärts am Trottoirrand. Wie sichern Sie das Auto richtig?",
    "options": [
      {
        "id": "a",
        "text": "Handbremse anziehen, 1. Vorwärtsgang einlegen und die Vorderräder vom Trottoirrand weg nach links drehen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nur Gang rausnehmen und Rollen lassen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Die Räder gerade stellen und Warnblinker anlassen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Beim Parkieren an Steigungen: Handbremse + Gang. Bergauf Räder so einschlagen, dass der Wagen beim Zurückrollen gegen den Bordstein gestoppt wird (Art. 19 VRV).",
    "ruleReference": "Art. 19 VRV"
  },
  {
    "id": 218,
    "testId": 13,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Sie parkieren talwärts (bergab) am Trottoirrand. Wie schlagen Sie die Räder ein?",
    "options": [
      {
        "id": "a",
        "text": "Die Vorderräder zum Trottoirrand hin (nach rechts) drehen, Handbremse anziehen und den Rückwärtsgang einlegen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Die Räder nach links zur Strassenmitte drehen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Im Leerlauf parkieren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Talwärts Räder nach rechts zum Randstein drehen und Rückwärtsgang einlegen (Art. 19 Abs. 1 VRV), damit das Auto nicht in den Verkehr rollen kann.",
    "ruleReference": "Art. 19 Abs. 1 VRV"
  },
  {
    "id": 219,
    "testId": 13,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Wie nahe an einer Bahnübergangsschranke darf parkiert werden?",
    "options": [
      {
        "id": "a",
        "text": "Mindestens 20 Meter vor und nach Bahnübergängen inner- und ausserorts darf nicht parkiert werden.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Bis auf 1 Meter herangefahren werden.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur bei Nacht verboten.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Das Parkieren vor Bahnübergängen ist verboten, um die Sicht auf die Schranken und Signale nicht zu verdecken (Art. 19 VRV).",
    "ruleReference": "Art. 19 VRV"
  },
  {
    "id": 220,
    "testId": 14,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Darf ein Motorradfahrer bei Stau auf der Autobahn zwischen den stehenden Autokolonnen hindurchfahren ('Durchschlängeln')?",
    "options": [
      {
        "id": "a",
        "text": "Nein, das Vorbeischlängeln zwischen Fahrzeugkolonnen ist in der Schweiz verboten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, Töffs dürfen immer vorfahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, wenn sie nicht schneller als 30 km/h fahren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Das Schlängeln oder Durchfahren zwischen Kolonnen ist Motorradfahrern in der Schweiz untersagt (Art. 47 Abs. 2 VRV). Motorräder müssen in der Kolonne warten.",
    "ruleReference": "Art. 47 Abs. 2 VRV"
  },
  {
    "id": 221,
    "testId": 1,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet das Signal 'Höchstgewicht 7.5t' (Signal 2.16)?",
    "options": [
      {
        "id": "a",
        "text": "Fahrzeuge und Fahrzeugkombinationen mit einem tatsächlichen Gesamtgewicht über 7.5 Tonnen dürfen die Strasse nicht befahren.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Gilt nur für Leerfahrten.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Gilt nur für Busse.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 2.16 verbietet Fahrzeugen, deren tatsächliches Betriebsgewicht das angegebene Limit überschreitet, die Weiterfahrt.",
    "ruleReference": "Art. 21 SSV"
  },
  {
    "id": 222,
    "testId": 2,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet das Signal 'Mindestabstand' (Signal 2.29 mit zwei Autos und Meterangabe)?",
    "options": [
      {
        "id": "a",
        "text": "Fahrzeuge müssen zueinander mindestens den angegebenen Sicherheitsabstand in Metern einhalten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Maximaler Parkabstand.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Abstand zur Bordsteinkante.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Signal 2.29 verpflichtet zur Einhaltung des angegebenen Mindestabstands, oft vor Tunnels oder auf Brücken angebracht.",
    "ruleReference": "Art. 22 SSV"
  },
  {
    "id": 223,
    "testId": 3,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet das Signal 'Verbot für Motorräder' (Signal 2.05)?",
    "options": [
      {
        "id": "a",
        "text": "Einfahrtsverbot für Motorräder; Mofas dürfen mit abgeschaltetem Motor passieren.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Motorräder dürfen nur auf dem Trottoir fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Verbot für alle Zweiräder inklusive Fahrräder.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 2.05 verbietet das Fahren mit Motorrädern. Fahrräder und Mofas sind von diesem Verbot nicht betroffen.",
    "ruleReference": "Art. 19 SSV"
  },
  {
    "id": 224,
    "testId": 4,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet das Signal 'Steinschlag' (Signal 1.15)?",
    "options": [
      {
        "id": "a",
        "text": "Gefahr durch herabfallende Steine oder auf der Strasse liegendes Geröll; Geschwindigkeit anpassen und nicht unnötig anhalten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Steinbruch in 10 km.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Parkplatz für Bergsteiger.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 1.15 warnt vor Steinschlag. Anhalten in der Gefahrenzone vermeiden, um Treffer zu verhindern.",
    "ruleReference": "Art. 10 SSV"
  },
  {
    "id": 225,
    "testId": 5,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet das Signal 'Seitenwind' (Signal 1.29 mit Windsack)?",
    "options": [
      {
        "id": "a",
        "text": "Gefahr von starken, plötzlichen Seitenwindböen (z.B. auf Brücken oder nach Waldausfahrten); Lenkrad fest mit beiden Händen halten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Flughafen in der Nähe.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Wetterstation.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 1.29 warnt vor seitlichem Windeinfall, der das Fahrzeug plötzlich aus der Fahrspur versetzen kann.",
    "ruleReference": "Art. 14 SSV"
  },
  {
    "id": 226,
    "testId": 6,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet das Hinweissignal 'Spurabbau links' (Signal 4.77)?",
    "options": [
      {
        "id": "a",
        "text": "Der linke Fahrstreifen endet; Reissverschlussprinzip anwenden und rechtzeitig einfädeln.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Rechtsabbiegen verboten.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Links abbiegen obligatorisch.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 4.77 kündigt das Ende einer Spur an. Am Verengungspunkt gilt das obligatorische Reissverschlussverfahren.",
    "ruleReference": "Art. 56 SSV"
  },
  {
    "id": 227,
    "testId": 7,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet das Signal 'Ausweichstelle' (Signal 4.13 mit weissem Haltebereich)?",
    "options": [
      {
        "id": "a",
        "text": "Kennzeichnet eine Stelle auf schmalen Bergstrassen, die zum Ausweichen beim Kreuzen oder Vorbeilassen dient (kein Dauerparkplatz).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Rastplatz mit Restaurant.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Wendeplatz für Lastzüge.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 4.13 markiert Ausweichbuchten auf schmalen Strassen. Parkieren ist dort verboten.",
    "ruleReference": "Art. 47 SSV"
  },
  {
    "id": 228,
    "testId": 8,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet das Signal 'Fussgängerzone' (Signal 2.59.1)?",
    "options": [
      {
        "id": "a",
        "text": "Zone ausschliesslich für Fussgänger; Motorfahrzeuge dürfen nur mit Ausnahmebewilligung im Schritttempo fahren.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Zone für Fussgänger ohne Veloverbot.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Parkplatz für Wanderer.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "In Fussgängerzonen ist Fahrzeugverkehr grundsätzlich untersagt, ausser bei bewilligtem Lieferverkehr im Schritttempo.",
    "ruleReference": "Art. 22c SSV"
  },
  {
    "id": 229,
    "testId": 9,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Darf man auf der Autobahn die Lichthupe benutzen, um einem Vordermann das Überholen anzukündigen?",
    "options": [
      {
        "id": "a",
        "text": "Nein, dichtes Auffahren und Bedrängen mit Lichthupe ('Drängeln') ist strafbar und gilt als Nötigung.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, Dauerfeuer mit Lichthupe ist empfohlen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, um die linke Spur freizuräumen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Nötigendes Betätigen der Lichthupe in Verbindung mit zu geringem Abstand ist eine grobe Verkehrsregelverletzung und strafbar.",
    "ruleReference": "Art. 34 VRV / Art. 90 SVG"
  },
  {
    "id": 230,
    "testId": 10,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Was gilt bezüglich des Reissverschlussverfahrens bei einer Autobahnbaustelle?",
    "options": [
      {
        "id": "a",
        "text": "Man muss bis ganz nach vorne an die Engstelle fahren und sich erst dort abwechselnd einordnen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Man muss sich bereits 2 km vorher auf die rechte Spur quetschen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Die durchgehende Spur darf das Einfädeln blockieren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Seit 2021 ist das Reissverschlussverfahren Pflicht: Bis unmittelbar vor die Verengung vorfahren, um den Stauraum beider Spuren optimal zu nutzen.",
    "ruleReference": "Art. 34 Abs. 5 VRV"
  },
  {
    "id": 231,
    "testId": 11,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Wie verhalten Sie sich, wenn Sie auf der Autobahn die Meldung 'Falschfahrer (Geisterfahrer)' im Radio hören?",
    "options": [
      {
        "id": "a",
        "text": "Geschwindigkeit sofort reduzieren, ganz rechts fahren, nicht überholen und den nächsten Parkplatz oder Ausfahrt ansteuern.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Auf die linke Spur wechseln und Vollgas geben.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Sofort auf der Fahrbahn anhalten und wenden.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Bei Geisterfahrermeldung rechts bleiben, Tempo reduzieren, Abstand vergrössern und Geisterfahrer nicht durch Lichthupe irritieren.",
    "ruleReference": "Sicherheitsrichtlinien ASTRA"
  },
  {
    "id": 232,
    "testId": 12,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Darf auf dem Pannenstreifen angehalten werden, um ein Telefonat zu führen?",
    "options": [
      {
        "id": "a",
        "text": "Nein, das Halten auf dem Pannenstreifen ist ausschliesslich für echte Notfälle und Pannen gestattet.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, für dringende geschäftliche Anrufe.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, wenn der Motor weiterläuft.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Nicht-Notfälle auf dem Pannenstreifen (z.B. Telefonieren, Austreten) sind streng verboten und mit hohen Bussen belegt.",
    "ruleReference": "Art. 36 VRV"
  },
  {
    "id": 233,
    "testId": 13,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Was gilt für die Autobahnvignette in der Schweiz?",
    "options": [
      {
        "id": "a",
        "text": "Auf Nationalstrassen 1. und 2. Klasse ist eine gültige Vignette (als Klebevignette oder E-Vignette) obligatorisch.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Die Vignette ist nur für Ausländer Pflicht.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Die Vignette ist nur am Wochenende erforderlich.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Motorfahrzeuge und Anhänger bis 3.5t benötigen auf dem vignettenpflichtigen Nationalstrassennetz eine gültige Vignette (40 CHF).",
    "ruleReference": "Nationalstrassenabgabegesetz"
  },
  {
    "id": 234,
    "testId": 14,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Sie stehen an einer Einmündung mit dem Signal 'Kein Vortritt'. Gegenverkehr kommt nicht, aber von links naht ein Velo. Was tun Sie?",
    "options": [
      {
        "id": "a",
        "text": "Sie müssen dem Velofahrer von links den Vortritt lassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sie dürfen fahren, weil Autos Vortritt vor Velos haben.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Sie haben Rechtsvortritt.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Das Signal 3.02 'Kein Vortritt' verpflichtet dazu, allen Fahrzeugen auf der querenden Strasse – auch Fahrrädern – Vorrang zu gewähren.",
    "ruleReference": "Art. 36 SSV"
  },
  {
    "id": 235,
    "testId": 1,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Zwei Autos fahren gleichzeitig an eine gleichrangige 4-Wege-Kreuzung mit Rechtsvortritt. Es entsteht ein 'Patt'. Wie wird die Situation gelöst?",
    "options": [
      {
        "id": "a",
        "text": "Durch gegenseitige Verständigung (Handzeichen); ein Fahrer verzichtet freundlich auf seinen Vortritt.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Wer zuerst auf die Hupe drückt, darf fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Das teurere Auto fährt immer zuerst.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Wenn alle vier Zufahrten belegt sind, hebt sich der Rechtsvortritt im Kreis auf. Die Lösung erfolgt durch vorsichtige Verständigung.",
    "ruleReference": "Art. 36 SVG"
  },
  {
    "id": 236,
    "testId": 2,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Sie biegen nach links in eine Strasse ein und ein Fussgänger überquert dort die Fahrbahn ohne Zebrastreifen. Wer hat Vortritt?",
    "options": [
      {
        "id": "a",
        "text": "Der Fussgänger hat Vortritt vor dem abbiegenden Fahrzeug.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Das Auto hat Vortritt, weil kein Fussgängerstreifen da ist.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Wer schneller ist.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Abbiegende Fahrzeuge müssen Fussgängern, die die Strasse überqueren, in die eingebogen wird, stets den Vortritt lassen (Art. 33 SVG / Art. 6 VRV).",
    "ruleReference": "Art. 33 SVG"
  },
  {
    "id": 237,
    "testId": 3,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Ein Viehtreiber treibt eine Kuhherde über die Strasse. Was müssen Sie tun?",
    "options": [
      {
        "id": "a",
        "text": "Geschwindigkeit stark reduzieren oder anhalten und den Tieren gefahrlosen Übergang gewähren.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Dauerhupen, damit die Kühe schneller rennen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Zwischen den Kühen hindurchschlängeln.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Tieren und Viehtrieben ist mit besonderer Vorsicht und Rücksicht zu begegnen. Hupen kann Tiere in Panik versetzen (Art. 3 SVG).",
    "ruleReference": "Art. 3 SVG"
  },
  {
    "id": 238,
    "testId": 4,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Was geschieht mit der Fliehkraft (Kurvenkraft), wenn man eine Kurve mit doppelter Geschwindigkeit durchfährt?",
    "options": [
      {
        "id": "a",
        "text": "Die Fliehkraft vervierfacht sich (F = m * v² / r); akute Schleuder- und Kippgefahr!",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sie verdoppelt sich lediglich.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Die Fliehkraft nimmt ab.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Die Zentrifugalkraft steigt quadratisch mit der Geschwindigkeit. Bei doppelter Geschwindigkeit ist die Kurvenkraft viermal so stark.",
    "ruleReference": "Fahrphysik / TCS"
  },
  {
    "id": 239,
    "testId": 5,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Welcher Abstand sollte zu geparkten Autos am Strassenrand eingehalten werden?",
    "options": [
      {
        "id": "a",
        "text": "Mindestens 1 Meter (Türoffnungs-Distanz), um Kollisionen mit plötzlich geöffneten Autotüren ('Dooring') zu vermeiden.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "10 Zentimeter genügen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Kein Abstand erforderlich.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Ein ausreichender Sicherheitsabstand schützt vor aufschwingenden Türen und unvermittelt hervortretenden Fussgängern (Art. 34 VRV).",
    "ruleReference": "Art. 34 VRV"
  },
  {
    "id": 240,
    "testId": 6,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Ab welchem Blutalkoholwert gilt in der Schweiz für erfahrene Lenker 'Angetrunkenheit' mit Fahrverbot?",
    "options": [
      {
        "id": "a",
        "text": "Ab 0.50 Promille (bzw. 0.25 mg/l Atemalkohol).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ab 0.80 Promille.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ab 1.00 Promille.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Für reguläre Lenker gilt ab 0.50 ‰ Angetrunkenheit (Art. 55 SVG). Ab 0.80 ‰ liegt eine qualifizierte Trunkenheit mit obligatorischem Führerausweisentzug vor.",
    "ruleReference": "Art. 55 SVG"
  },
  {
    "id": 241,
    "testId": 7,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Wie baut der menschliche Körper Alkohol ab?",
    "options": [
      {
        "id": "a",
        "text": "Kontinuierlich durch die Leber mit ca. 0.10 bis 0.15 Promille pro Stunde; Kaffee oder Sport können den Abbau nicht beschleunigen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Durch kalte Duschen und Energy Drinks innerhalb von 10 Minuten.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Durch Schwitzen innerhalb von einer Stunde komplett.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Der Alkoholabbau erfolgt biologisch konstant über Enzyme der Leber. Weder Schlaf, Kaffee noch Bewegung können diesen Prozess beschleunigen.",
    "ruleReference": "Verkehrsmedizin Schweiz"
  },
  {
    "id": 242,
    "testId": 8,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Wie viele Personen dürfen in einem Personenwagen mit 5 eingetragenen Sitzplätzen maximal befördert werden?",
    "options": [
      {
        "id": "a",
        "text": "Höchstens 5 Personen (auf jedem Platz darf nur eine Person mit eigenem Sicherheitsgurt sitzen).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "So viele wie hineinpassen, wenn Kinder auf den Schoss genommen werden.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Beliebig viele auf Kurzstrecken.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "In Motorfahrzeugen dürfen nur so viele Personen befördert werden, wie bewilligte und mit Gurten ausgerüstete Sitzplätze vorhanden sind (Art. 73 VRV).",
    "ruleReference": "Art. 73 VRV"
  },
  {
    "id": 243,
    "testId": 9,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Welche Schutzmassnahme ist vor dem Verlassen des Fahrzeugs zur Fahrbahnseite hin durchzuführen ('Holländischer Griff')?",
    "options": [
      {
        "id": "a",
        "text": "Tür mit der fernen (rechten) Hand öffnen, wodurch sich der Oberkörper automatisch zum Schulterblick nach hinten dreht.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Tür schwungvoll aufstossen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Zuerst die Warnblinkanlage einschalten.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Der 'Holländische Griff' schützt Radfahrer zuverlässig vor lebensgefährlichen Dooring-Unfällen (Art. 19 VRV).",
    "ruleReference": "BFU Sicherheitsempfehlung"
  },
  {
    "id": 244,
    "testId": 10,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Welchen Einfluss hat eine montierte Skibox auf den Treibstoffverbrauch?",
    "options": [
      {
        "id": "a",
        "text": "Sie erhöht den Luftwiderstand und kann den Treibstoffverbrauch um bis zu 10–20 % steigern; nach dem Urlaub sofort abmontieren.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sie verringert den Verbrauch durch aerodynamische Spoilerwirkung.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Sie hat keinerlei messbaren Einfluss.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Unnötiger Ballast und Dachträger erhöhen den Luft- und Rollwiderstand massiv. Zur Ressourcenschonung sollten Dachträger nach Gebrauch demontiert werden.",
    "ruleReference": "Eco-Drive Suisse"
  },
  {
    "id": 245,
    "testId": 11,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Was bedeutet die Abkürzung 'MFK' in der Schweiz?",
    "options": [
      {
        "id": "a",
        "text": "Motorfahrzeugkontrolle (die amtliche periodische Prüfung der Verkehrssicherheit des Fahrzeugs beim Strassenverkehrsamt).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Mobiles Funk-Kommando der Polizei.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Maut-Finanzierungs-Kasse.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Die MFK prüft die Verkehrs- und Betriebssicherheit von Fahrzeugen nach Schweizer Vorschriften (Art. 33 VTS).",
    "ruleReference": "Art. 33 VTS"
  },
  {
    "id": 246,
    "testId": 12,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Was ist bei der Reinigung des Autos mit Hochdruckreinigern an Tankstellen bezüglich Umweltschutz vorgeschrieben?",
    "options": [
      {
        "id": "a",
        "text": "Das Waschen darf nur auf Waschplätzen mit Ölabscheider erfolgen (Autowaschen auf der Wiese oder Privatstrasse ist verboten).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Man darf das Auto überall mit Seife waschen, wo der Schmutz in den Gully fliesst.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Autowaschen ist in der Schweiz ganzjährig verboten.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Schmutzwasser und Ölrückstände dürfen nicht ins Grundwasser oder die Kanalisation ohne Ölabscheider gelangen (Gewässerschutzgesetz).",
    "ruleReference": "Gewässerschutzgesetz (GSchG)"
  },
  {
    "id": 247,
    "testId": 1,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Sie fahren in einen einspurigen Kreisverkehr ein. Ein Auto nähert sich im Kreisel von links. Wer hat Vortritt?",
    "options": [
      {
        "id": "a",
        "text": "Das Auto im Kreisel hat Vortritt (Signal 'Kreisverkehr' mit 'Kein Vortritt').",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sie haben Rechtsvortritt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Wer zuerst blinkt.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Vor der Einfahrt in den Kreisel ist der Vortritt den Fahrzeugen im Kreisel zu gewähren (Art. 41b VRV).",
    "ruleReference": "Art. 41b VRV"
  },
  {
    "id": 248,
    "testId": 2,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Ein Radfahrer fährt im Kreisel in der Fahrbahnmitte. Ist das erlaubt?",
    "options": [
      {
        "id": "a",
        "text": "Ja, Radfahrer dürfen im Kreisel zur eigenen Sicherheit in der Mitte der Spur fahren.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nein, Radfahrer müssen zwingend auf dem Randstein fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur nachts.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Art. 41b Abs. 2 VRV erlaubt Radfahrern im Kreisverkehr das Fahren in der Mitte des Fahrstreifens, um nicht gefährlich abgedrängt zu werden.",
    "ruleReference": "Art. 41b Abs. 2 VRV"
  },
  {
    "id": 249,
    "testId": 3,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Sie stehen an einer Einmündung mit einem STOP-Signal. Die Querstrasse ist vollkommen leer und einsehbar. Müssen Sie trotzdem anhalten?",
    "options": [
      {
        "id": "a",
        "text": "Ja, die Räder des Fahrzeugs müssen an der Haltelinie vollkommen zum Stillstand kommen (Stopp-Pflicht!).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nein, langsames Drüberrollen im 1. Gang reicht.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur wenn Gegenverkehr sichtbar ist.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Das Signal 3.01 'Stop' verlangt zwingend das vollständige Anhalten der Räder (Art. 36 SSV), selbst wenn weit und breit kein Fahrzeug zu sehen ist.",
    "ruleReference": "Art. 36 SSV"
  },
  {
    "id": 250,
    "testId": 4,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Darf man in eine Kreuzung einfahren, wenn der Verkehr stockt und absehbar ist, dass man auf der Kreuzung stehen bleibt?",
    "options": [
      {
        "id": "a",
        "text": "Nein, stockt der Verkehr, darf man nicht in die Kreuzung einfahren, selbst wenn die Ampel grün zeigt.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, solange grün ist, darf man immer vorfahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, wenn man die Hupe betätigt.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Fahrzeuge dürfen nicht in Verzweigungen einfahren, wenn sie dort wegen stockenden Verkehrs anhalten müssten und so den Querverkehr blockieren (Art. 12 Abs. 2 VRV).",
    "ruleReference": "Art. 12 Abs. 2 VRV"
  },
  {
    "id": 251,
    "testId": 5,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet das dreieckige Signal 'Fussgängerstreifen' (Signal 1.22)?",
    "options": [
      {
        "id": "a",
        "text": "Kündigt einen Fussgängerstreifen an; Geschwindigkeit mässigen und bremsbereit sein.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Fussgänger verboten.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Beginn einer Fussgängerzone.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 1.22 warnt vor einem Fussgängerstreifen, der aus der Ferne schwer erkennbar sein könnte (Art. 11 SSV).",
    "ruleReference": "Art. 11 SSV"
  },
  {
    "id": 252,
    "testId": 6,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet das Signal 'Überholen für Lastwagen verboten' (Signal 2.45)?",
    "options": [
      {
        "id": "a",
        "text": "Lastwagen mit einem Gesamtgewicht über 3.5 Tonnen dürfen mehrspurige Motorfahrzeuge nicht überholen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Gilt für alle Lieferwagen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Gilt auch für Personenwagen mit Anhänger.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 2.45 untersagt schweren Güterfahrzeugen über 3.5t das Überholen (Art. 26 SSV).",
    "ruleReference": "Art. 26 SSV"
  },
  {
    "id": 253,
    "testId": 7,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet das Hinweissignal 'Einbahnstrasse' (Signal 4.08 mit Pfeil)?",
    "options": [
      {
        "id": "a",
        "text": "Die Strasse darf nur in Pfeilrichtung befahren werden; Wenden und Rückwärtsfahren (ausser beim Parkieren) sind verboten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Rechtsabbiegen verboten.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Strasse nur für eine Person.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "In Einbahnstrassen ist das Befahren in Gegenrichtung sowie das Wenden verboten (Art. 46 SSV). Rückwärtsfahren nur zum Einparkieren gestattet.",
    "ruleReference": "Art. 46 SSV"
  },
  {
    "id": 254,
    "testId": 8,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet das Signal 'Parkieren mit Parkscheibe' (blaue Tafel mit Parkscheibensymbol)?",
    "options": [
      {
        "id": "a",
        "text": "In dieser Zone ist die offizielle blaue Parkscheibe gut sichtbar hinter der Windschutzscheibe anzubringen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Man darf unbegrenzt gratis stehen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Parkieren verboten.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 4.18 verpflichtet zur Verwendung der genormten blauen Parkscheibe gemäss den auf der Tafel angegebenen Zeiten (Art. 48 SSV).",
    "ruleReference": "Art. 48 SSV"
  },
  {
    "id": 255,
    "testId": 9,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Wie lang ist der Bremsweg bei einer Vollbremsung aus 50 km/h auf trockener, griffiger Fahrbahn (Faustformel)?",
    "options": [
      {
        "id": "a",
        "text": "Rund 12.5 bis 15 Meter.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Über 50 Meter.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur 2 Meter.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Auf trockener Strasse beträgt der Bremsweg aus 50 km/h rund 12.5 bis 15 m (Faustformel: (v/10) * (v/10) / 2 bei Gefahrenbremsung).",
    "ruleReference": "Fahrschul-Faustformeln"
  },
  {
    "id": 256,
    "testId": 10,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Welche Auswirkung hat nasse Fahrbahn auf den Bremsweg?",
    "options": [
      {
        "id": "a",
        "text": "Der Bremsweg verlängert sich im Vergleich zu trockener Strasse um ca. 50 bis 100 %.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Der Bremsweg verkürzt sich.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Bleibt exakt gleich.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Wasser auf der Fahrbahn vermindert die Reibung zwischen Reifen und Asphalt erheblich; Abstand verdoppeln (Art. 32 SVG).",
    "ruleReference": "Art. 32 SVG"
  },
  {
    "id": 257,
    "testId": 11,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Was bedeutet 'Fahren auf Sicht' bei Nacht mit Abblendlicht?",
    "options": [
      {
        "id": "a",
        "text": "Das Abblendlicht leuchtet ca. 50 bis 75 Meter weit; das Fahrzeug muss innerhalb dieser beleuchteten Strecke anhalten können.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Man darf so schnell fahren, wie die Schilder erlauben.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Man darf nur dem Rücklicht des Vordermanns folgen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Wer bei Dunkelheit mit Abblendlicht fährt, darf nur so schnell sein, dass der Anhalteweg kürzer als der Lichtkegel ist (meist max. 60–70 km/h) (Art. 4 VRV).",
    "ruleReference": "Art. 4 VRV"
  },
  {
    "id": 258,
    "testId": 12,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Was ist die rechtliche Konsequenz, wenn Sie nach einem Verkehrsunfall mit Personenschaden weiterfahren, ohne anzuhalten ('Fahrerflucht')?",
    "options": [
      {
        "id": "a",
        "text": "Freiheitsstrafe bis zu 3 Jahren oder Geldstrafe sowie zwingender Führerausweisentzug.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Eine Verwarnung mit 40 CHF Ordnungsbusse.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Keine Strafe, wenn man sich innerhalb einer Woche meldet.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Pflichtwidriges Verhalten bei Unfall mit Verletzten (Art. 92 SVG) ist ein schweres Verbrechen und wird streng geahndet.",
    "ruleReference": "Art. 92 SVG"
  },
  {
    "id": 259,
    "testId": 13,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Sie haben einen kleinen Parkschaden an einem fremden parkierten Auto verursacht. Der Besitzer ist nicht auffindbar. Was tun Sie?",
    "options": [
      {
        "id": "a",
        "text": "Unverzüglich die Polizei (117) anrufen und den Schaden melden (ein Zettel unter dem Scheibenwischer genügt rechtlich NICHT!).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Einen Zettel mit falscher Nummer hinterlassen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Einfach wegfahren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Wer fremdes Eigentum beschädigt, muss den Geschädigten sofort benachrichtigen. Ist dies nicht möglich, ist unverzüglich die Polizei zu verständigen (Art. 51 Abs. 3 SVG).",
    "ruleReference": "Art. 51 Abs. 3 SVG"
  },
  {
    "id": 260,
    "testId": 14,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Darf während der Fahrt eine Sonnenbrille mit sehr dunklen Gläsern der Kategorie 4 (Gletscherbrille) getragen werden?",
    "options": [
      {
        "id": "a",
        "text": "Nein, Gläser der Kategorie 4 sind für den Strassenverkehr verboten, da sie zu viel Licht schlucken und die Farberkennung trüben.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, bei hellem Sonnenschein immer.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, auch nachts.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Kategorie 4 Sonnenbrillen (unter 8% Lichtdurchlässigkeit) sind im Strassenverkehr nicht zugelassen (Gefahr des Übersehens von Schildern und Bremslichtern).",
    "ruleReference": "Optiker-Norm EN ISO 12312-1"
  },
  {
    "id": 261,
    "testId": 1,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Wie müssen Sie reagieren, wenn Sie als Ersthelfer an eine Unfallstelle kommen?",
    "options": [
      {
        "id": "a",
        "text": "1. Übersicht verschaffen & Unfallstelle sichern, 2. Nothilfe leisten, 3. Notruf 144 / 117 wählen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Zuerst Videos für Social Media aufnehmen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Sofort die Verletzten aus dem Auto zerren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Schauen -> Denken -> Handeln. Erst die Unfallstelle absichern (Pannendreieck, Warnblinker), um Folgekollisionen zu verhindern, dann Nothilfe und Notruf (Art. 51 SVG).",
    "ruleReference": "Art. 51 SVG"
  },
  {
    "id": 262,
    "testId": 2,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Welche Treibstoffersparnis lässt sich durch die konsequente Anwendung von 'Eco-Drive' erzielen?",
    "options": [
      {
        "id": "a",
        "text": "Bis zu 10 bis 15 % weniger Treibstoffverbrauch bei gleicher Reisezeit.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Keine Ersparnis.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Maximal 1 %.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Eco-Drive (vorausschauend fahren, früh schalten, rollen lassen, Reifendruck kontrollieren) spart nachweislich 10–15% Treibstoff (TCS / EnergieSchweiz).",
    "ruleReference": "EnergieSchweiz"
  },
  {
    "id": 263,
    "testId": 3,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Warum sollte man beim Verlangsamen vor einer roten Ampel den Gang eingelegt lassen?",
    "options": [
      {
        "id": "a",
        "text": "Die Schubabschaltung schaltet die Treibstoffeinspritzung komplett auf 0.0 l/100km ab und die Motorbremse schont die Bremsbeläge.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Weil sonst die Batterie beschädigt wird.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Weil das Auto sonst ausgeht.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Bei eingelegtem Gang im Schiebebetrieb verbraucht der Motor keinen einzigen Tropfen Benzin (0.0 Liter) dank Schubabschaltung.",
    "ruleReference": "Eco-Drive Suisse"
  },
  {
    "id": 264,
    "testId": 4,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Darf eine Hupe im Ortsgebiet zum Grüssen von Bekannten verwendet werden?",
    "options": [
      {
        "id": "a",
        "text": "Nein, Hupen darf ausschliesslich als Warnsignal bei drohender Gefahr eingesetzt werden.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, kurzes Hupen ist überall erlaubt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, tagsüber unbegrenzt.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Schallzeichen dürfen nur gegeben werden, wenn die Sicherheit des Verkehrs es erfordert (Art. 29 VRV). Grusshupen ist verboten und ruhestörend.",
    "ruleReference": "Art. 29 VRV"
  },
  {
    "id": 265,
    "testId": 5,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Sie fahren auf einer Schweizer Autobahn mit zwei Fahrstreifen. Die rechte Spur ist völlig frei. Wo müssen Sie fahren?",
    "options": [
      {
        "id": "a",
        "text": "Auf der rechten Spur (Rechtsfahrgebot!).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Auf der linken Spur, wenn man 120 km/h fährt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "In der Mitte beider Spuren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "In der Schweiz gilt das Rechtsfahrgebot (Art. 34 SVG / Art. 8 VRV). Grundloses Verweilen auf der Überholspur ist verboten.",
    "ruleReference": "Art. 34 SVG"
  },
  {
    "id": 266,
    "testId": 6,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Darf auf einer Autostrasse (grünes Schild mit weissem Auto) gewendet werden?",
    "options": [
      {
        "id": "a",
        "text": "Nein, Wenden und Rückwärtsfahren sind auf Autostrassen ebenso wie auf Autobahnen strikt verboten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, an Kreuzungen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, wenn kein Verkehr naht.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Auf Autostrassen gelten bezüglich Wenden, Rückwärtsfahren und Halten dieselben strengen Regeln wie auf Autobahnen (Art. 36 / 37 VRV).",
    "ruleReference": "Art. 37 VRV"
  },
  {
    "id": 267,
    "testId": 7,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Wie verhalten Sie sich bei einer Reifenpanne auf der Autobahn, wenn Sie das Auto auf dem Pannenstreifen abstellen?",
    "options": [
      {
        "id": "a",
        "text": "Warnblinker einschalten, Warnweste anziehen, Pannendreieck mindestens 100 m vorher aufstellen und sich sofort hinter die Leitplanke begeben.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Im Auto sitzen bleiben und Musik hören.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Auf der Fahrbahn herumgehen und winken.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Auf Autobahnen muss das Pannendreieck mindestens 100 m vor dem Fahrzeug aufgestellt werden (Art. 54 VRV). Insassen begeben sich hinter die Leitplanke.",
    "ruleReference": "Art. 54 VRV"
  },
  {
    "id": 268,
    "testId": 8,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Sie fahren an eine Kreuzung mit Rechtsvortritt. Ein Auto von rechts fährt aus einer Tempo-30-Zone heraus. Gilt Rechtsvortritt?",
    "options": [
      {
        "id": "a",
        "text": "Ja, an Kreuzungen zwischen normalen Quartierstrassen und Tempo-30-Zonen gilt grundsätzlich der Rechtsvortritt, sofern nicht anders signalisiert.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nein, Tempo-30 hat nie Vortritt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur wenn Schilder aufgestellt sind.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Tempo-30-Zonen haben normalen Rechtsvortritt gegenüber einmündenden Strassen (Art. 22a SSV). Vorsicht: Nicht verwechseln mit Begegnungszonen (20 km/h)!",
    "ruleReference": "Art. 22a SSV"
  },
  {
    "id": 269,
    "testId": 9,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Darf man ein Fahrzeug überholen, wenn der Gegenverkehr nicht vollständig einsehbar ist (z.B. vor Kuppen oder unübersichtlichen Kurven)?",
    "options": [
      {
        "id": "a",
        "text": "Nein, das Überholen ist verboten, wenn nicht die gesamte Überholstrecke vollständig frei und überblickbar ist.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, wenn man schnell beschleunigt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, mit Hupe.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Überholen ist nur gestattet, wenn der Raum zum Überholen und Wiedereinscheren vollkommen überblickbar und frei von Gegenverkehr ist (Art. 35 SVG).",
    "ruleReference": "Art. 35 SVG"
  },
  {
    "id": 270,
    "testId": 10,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Sie stehen an einer roten Ampel. Ein Polizeiwagen mit Blaulicht und Martinshorn nähert sich hinter Ihnen. Was dürfen Sie tun?",
    "options": [
      {
        "id": "a",
        "text": "Vorsichtig über die Haltelinie in die Kreuzung vortasten, um dem Einsatzfahrzeug eine Rettungsgasse zu öffnen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Auf keinen Fall die Haltelinie überfahren und stehenbleiben.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Sofort rückwärtsfahren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Um Einsatzfahrzeugen mit Sondersignalen die Durchfahrt zu ermöglichen, darf vorsichtig über die rote Haltelinie gefahren werden, ohne den Querverkehr zu gefährden (Art. 27 SVG).",
    "ruleReference": "Art. 27 SVG"
  },
  {
    "id": 271,
    "testId": 1,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Sie fahren in einen einspurigen Kreisverkehr ein. Ein Auto nähert sich im Kreisel von links. Wer hat Vortritt?",
    "options": [
      {
        "id": "a",
        "text": "Das Auto im Kreisel hat Vortritt (Signal 'Kreisverkehr' mit 'Kein Vortritt').",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sie haben Rechtsvortritt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Wer zuerst blinkt.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Vor der Einfahrt in den Kreisel ist der Vortritt den Fahrzeugen im Kreisel zu gewähren (Art. 41b VRV).",
    "ruleReference": "Art. 41b VRV"
  },
  {
    "id": 272,
    "testId": 2,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Ein Radfahrer fährt im Kreisel in der Fahrbahnmitte. Ist das erlaubt?",
    "options": [
      {
        "id": "a",
        "text": "Ja, Radfahrer dürfen im Kreisel zur eigenen Sicherheit in der Mitte der Spur fahren.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nein, Radfahrer müssen zwingend auf dem Randstein fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur nachts.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Art. 41b Abs. 2 VRV erlaubt Radfahrern im Kreisverkehr das Fahren in der Mitte des Fahrstreifens, um nicht gefährlich abgedrängt zu werden.",
    "ruleReference": "Art. 41b Abs. 2 VRV"
  },
  {
    "id": 273,
    "testId": 3,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Sie stehen an einer Einmündung mit einem STOP-Signal. Die Querstrasse ist vollkommen leer und einsehbar. Müssen Sie trotzdem anhalten?",
    "options": [
      {
        "id": "a",
        "text": "Ja, die Räder des Fahrzeugs müssen an der Haltelinie vollkommen zum Stillstand kommen (Stopp-Pflicht!).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nein, langsames Drüberrollen im 1. Gang reicht.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur wenn Gegenverkehr sichtbar ist.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Das Signal 3.01 'Stop' verlangt zwingend das vollständige Anhalten der Räder (Art. 36 SSV), selbst wenn weit und breit kein Fahrzeug zu sehen ist.",
    "ruleReference": "Art. 36 SSV"
  },
  {
    "id": 274,
    "testId": 4,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Darf man in eine Kreuzung einfahren, wenn der Verkehr stockt und absehbar ist, dass man auf der Kreuzung stehen bleibt?",
    "options": [
      {
        "id": "a",
        "text": "Nein, stockt der Verkehr, darf man nicht in die Kreuzung einfahren, selbst wenn die Ampel grün zeigt.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, solange grün ist, darf man immer vorfahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, wenn man die Hupe betätigt.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Fahrzeuge dürfen nicht in Verzweigungen einfahren, wenn sie dort wegen stockenden Verkehrs anhalten müssten und so den Querverkehr blockieren (Art. 12 Abs. 2 VRV).",
    "ruleReference": "Art. 12 Abs. 2 VRV"
  },
  {
    "id": 275,
    "testId": 5,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet das dreieckige Signal 'Fussgängerstreifen' (Signal 1.22)?",
    "options": [
      {
        "id": "a",
        "text": "Kündigt einen Fussgängerstreifen an; Geschwindigkeit mässigen und bremsbereit sein.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Fussgänger verboten.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Beginn einer Fussgängerzone.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 1.22 warnt vor einem Fussgängerstreifen, der aus der Ferne schwer erkennbar sein könnte (Art. 11 SSV).",
    "ruleReference": "Art. 11 SSV"
  },
  {
    "id": 276,
    "testId": 6,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet das Signal 'Überholen für Lastwagen verboten' (Signal 2.45)?",
    "options": [
      {
        "id": "a",
        "text": "Lastwagen mit einem Gesamtgewicht über 3.5 Tonnen dürfen mehrspurige Motorfahrzeuge nicht überholen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Gilt für alle Lieferwagen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Gilt auch für Personenwagen mit Anhänger.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 2.45 untersagt schweren Güterfahrzeugen über 3.5t das Überholen (Art. 26 SSV).",
    "ruleReference": "Art. 26 SSV"
  },
  {
    "id": 277,
    "testId": 7,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet das Hinweissignal 'Einbahnstrasse' (Signal 4.08 mit Pfeil)?",
    "options": [
      {
        "id": "a",
        "text": "Die Strasse darf nur in Pfeilrichtung befahren werden; Wenden und Rückwärtsfahren (ausser beim Parkieren) sind verboten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Rechtsabbiegen verboten.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Strasse nur für eine Person.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "In Einbahnstrassen ist das Befahren in Gegenrichtung sowie das Wenden verboten (Art. 46 SSV). Rückwärtsfahren nur zum Einparkieren gestattet.",
    "ruleReference": "Art. 46 SSV"
  },
  {
    "id": 278,
    "testId": 8,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet das Signal 'Parkieren mit Parkscheibe' (blaue Tafel mit Parkscheibensymbol)?",
    "options": [
      {
        "id": "a",
        "text": "In dieser Zone ist die offizielle blaue Parkscheibe gut sichtbar hinter der Windschutzscheibe anzubringen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Man darf unbegrenzt gratis stehen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Parkieren verboten.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 4.18 verpflichtet zur Verwendung der genormten blauen Parkscheibe gemäss den auf der Tafel angegebenen Zeiten (Art. 48 SSV).",
    "ruleReference": "Art. 48 SSV"
  },
  {
    "id": 279,
    "testId": 9,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Wie lang ist der Bremsweg bei einer Vollbremsung aus 50 km/h auf trockener, griffiger Fahrbahn (Faustformel)?",
    "options": [
      {
        "id": "a",
        "text": "Rund 12.5 bis 15 Meter.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Über 50 Meter.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur 2 Meter.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Auf trockener Strasse beträgt der Bremsweg aus 50 km/h rund 12.5 bis 15 m (Faustformel: (v/10) * (v/10) / 2 bei Gefahrenbremsung).",
    "ruleReference": "Fahrschul-Faustformeln"
  },
  {
    "id": 280,
    "testId": 10,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Welche Auswirkung hat nasse Fahrbahn auf den Bremsweg?",
    "options": [
      {
        "id": "a",
        "text": "Der Bremsweg verlängert sich im Vergleich zu trockener Strasse um ca. 50 bis 100 %.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Der Bremsweg verkürzt sich.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Bleibt exakt gleich.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Wasser auf der Fahrbahn vermindert die Reibung zwischen Reifen und Asphalt erheblich; Abstand verdoppeln (Art. 32 SVG).",
    "ruleReference": "Art. 32 SVG"
  },
  {
    "id": 281,
    "testId": 11,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Was bedeutet 'Fahren auf Sicht' bei Nacht mit Abblendlicht?",
    "options": [
      {
        "id": "a",
        "text": "Das Abblendlicht leuchtet ca. 50 bis 75 Meter weit; das Fahrzeug muss innerhalb dieser beleuchteten Strecke anhalten können.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Man darf so schnell fahren, wie die Schilder erlauben.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Man darf nur dem Rücklicht des Vordermanns folgen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Wer bei Dunkelheit mit Abblendlicht fährt, darf nur so schnell sein, dass der Anhalteweg kürzer als der Lichtkegel ist (meist max. 60–70 km/h) (Art. 4 VRV).",
    "ruleReference": "Art. 4 VRV"
  },
  {
    "id": 282,
    "testId": 12,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Was ist die rechtliche Konsequenz, wenn Sie nach einem Verkehrsunfall mit Personenschaden weiterfahren, ohne anzuhalten ('Fahrerflucht')?",
    "options": [
      {
        "id": "a",
        "text": "Freiheitsstrafe bis zu 3 Jahren oder Geldstrafe sowie zwingender Führerausweisentzug.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Eine Verwarnung mit 40 CHF Ordnungsbusse.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Keine Strafe, wenn man sich innerhalb einer Woche meldet.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Pflichtwidriges Verhalten bei Unfall mit Verletzten (Art. 92 SVG) ist ein schweres Verbrechen und wird streng geahndet.",
    "ruleReference": "Art. 92 SVG"
  },
  {
    "id": 283,
    "testId": 13,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Sie haben einen kleinen Parkschaden an einem fremden parkierten Auto verursacht. Der Besitzer ist nicht auffindbar. Was tun Sie?",
    "options": [
      {
        "id": "a",
        "text": "Unverzüglich die Polizei (117) anrufen und den Schaden melden (ein Zettel unter dem Scheibenwischer genügt rechtlich NICHT!).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Einen Zettel mit falscher Nummer hinterlassen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Einfach wegfahren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Wer fremdes Eigentum beschädigt, muss den Geschädigten sofort benachrichtigen. Ist dies nicht möglich, ist unverzüglich die Polizei zu verständigen (Art. 51 Abs. 3 SVG).",
    "ruleReference": "Art. 51 Abs. 3 SVG"
  },
  {
    "id": 284,
    "testId": 14,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Darf während der Fahrt eine Sonnenbrille mit sehr dunklen Gläsern der Kategorie 4 (Gletscherbrille) getragen werden?",
    "options": [
      {
        "id": "a",
        "text": "Nein, Gläser der Kategorie 4 sind für den Strassenverkehr verboten, da sie zu viel Licht schlucken und die Farberkennung trüben.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, bei hellem Sonnenschein immer.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, auch nachts.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Kategorie 4 Sonnenbrillen (unter 8% Lichtdurchlässigkeit) sind im Strassenverkehr nicht zugelassen (Gefahr des Übersehens von Schildern und Bremslichtern).",
    "ruleReference": "Optiker-Norm EN ISO 12312-1"
  },
  {
    "id": 285,
    "testId": 1,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Wie müssen Sie reagieren, wenn Sie als Ersthelfer an eine Unfallstelle kommen?",
    "options": [
      {
        "id": "a",
        "text": "1. Übersicht verschaffen & Unfallstelle sichern, 2. Nothilfe leisten, 3. Notruf 144 / 117 wählen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Zuerst Videos für Social Media aufnehmen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Sofort die Verletzten aus dem Auto zerren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Schauen -> Denken -> Handeln. Erst die Unfallstelle absichern (Pannendreieck, Warnblinker), um Folgekollisionen zu verhindern, dann Nothilfe und Notruf (Art. 51 SVG).",
    "ruleReference": "Art. 51 SVG"
  },
  {
    "id": 286,
    "testId": 2,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Welche Treibstoffersparnis lässt sich durch die konsequente Anwendung von 'Eco-Drive' erzielen?",
    "options": [
      {
        "id": "a",
        "text": "Bis zu 10 bis 15 % weniger Treibstoffverbrauch bei gleicher Reisezeit.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Keine Ersparnis.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Maximal 1 %.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Eco-Drive (vorausschauend fahren, früh schalten, rollen lassen, Reifendruck kontrollieren) spart nachweislich 10–15% Treibstoff (TCS / EnergieSchweiz).",
    "ruleReference": "EnergieSchweiz"
  },
  {
    "id": 287,
    "testId": 3,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Warum sollte man beim Verlangsamen vor einer roten Ampel den Gang eingelegt lassen?",
    "options": [
      {
        "id": "a",
        "text": "Die Schubabschaltung schaltet die Treibstoffeinspritzung komplett auf 0.0 l/100km ab und die Motorbremse schont die Bremsbeläge.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Weil sonst die Batterie beschädigt wird.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Weil das Auto sonst ausgeht.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Bei eingelegtem Gang im Schiebebetrieb verbraucht der Motor keinen einzigen Tropfen Benzin (0.0 Liter) dank Schubabschaltung.",
    "ruleReference": "Eco-Drive Suisse"
  },
  {
    "id": 288,
    "testId": 4,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Darf eine Hupe im Ortsgebiet zum Grüssen von Bekannten verwendet werden?",
    "options": [
      {
        "id": "a",
        "text": "Nein, Hupen darf ausschliesslich als Warnsignal bei drohender Gefahr eingesetzt werden.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, kurzes Hupen ist überall erlaubt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, tagsüber unbegrenzt.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Schallzeichen dürfen nur gegeben werden, wenn die Sicherheit des Verkehrs es erfordert (Art. 29 VRV). Grusshupen ist verboten und ruhestörend.",
    "ruleReference": "Art. 29 VRV"
  },
  {
    "id": 289,
    "testId": 5,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Sie fahren auf einer Schweizer Autobahn mit zwei Fahrstreifen. Die rechte Spur ist völlig frei. Wo müssen Sie fahren?",
    "options": [
      {
        "id": "a",
        "text": "Auf der rechten Spur (Rechtsfahrgebot!).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Auf der linken Spur, wenn man 120 km/h fährt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "In der Mitte beider Spuren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "In der Schweiz gilt das Rechtsfahrgebot (Art. 34 SVG / Art. 8 VRV). Grundloses Verweilen auf der Überholspur ist verboten.",
    "ruleReference": "Art. 34 SVG"
  },
  {
    "id": 290,
    "testId": 6,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Darf auf einer Autostrasse (grünes Schild mit weissem Auto) gewendet werden?",
    "options": [
      {
        "id": "a",
        "text": "Nein, Wenden und Rückwärtsfahren sind auf Autostrassen ebenso wie auf Autobahnen strikt verboten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, an Kreuzungen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, wenn kein Verkehr naht.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Auf Autostrassen gelten bezüglich Wenden, Rückwärtsfahren und Halten dieselben strengen Regeln wie auf Autobahnen (Art. 36 / 37 VRV).",
    "ruleReference": "Art. 37 VRV"
  },
  {
    "id": 291,
    "testId": 7,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Wie verhalten Sie sich bei einer Reifenpanne auf der Autobahn, wenn Sie das Auto auf dem Pannenstreifen abstellen?",
    "options": [
      {
        "id": "a",
        "text": "Warnblinker einschalten, Warnweste anziehen, Pannendreieck mindestens 100 m vorher aufstellen und sich sofort hinter die Leitplanke begeben.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Im Auto sitzen bleiben und Musik hören.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Auf der Fahrbahn herumgehen und winken.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Auf Autobahnen muss das Pannendreieck mindestens 100 m vor dem Fahrzeug aufgestellt werden (Art. 54 VRV). Insassen begeben sich hinter die Leitplanke.",
    "ruleReference": "Art. 54 VRV"
  },
  {
    "id": 292,
    "testId": 8,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Sie fahren an eine Kreuzung mit Rechtsvortritt. Ein Auto von rechts fährt aus einer Tempo-30-Zone heraus. Gilt Rechtsvortritt?",
    "options": [
      {
        "id": "a",
        "text": "Ja, an Kreuzungen zwischen normalen Quartierstrassen und Tempo-30-Zonen gilt grundsätzlich der Rechtsvortritt, sofern nicht anders signalisiert.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nein, Tempo-30 hat nie Vortritt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur wenn Schilder aufgestellt sind.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Tempo-30-Zonen haben normalen Rechtsvortritt gegenüber einmündenden Strassen (Art. 22a SSV). Vorsicht: Nicht verwechseln mit Begegnungszonen (20 km/h)!",
    "ruleReference": "Art. 22a SSV"
  },
  {
    "id": 293,
    "testId": 9,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Darf man ein Fahrzeug überholen, wenn der Gegenverkehr nicht vollständig einsehbar ist (z.B. vor Kuppen oder unübersichtlichen Kurven)?",
    "options": [
      {
        "id": "a",
        "text": "Nein, das Überholen ist verboten, wenn nicht die gesamte Überholstrecke vollständig frei und überblickbar ist.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, wenn man schnell beschleunigt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, mit Hupe.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Überholen ist nur gestattet, wenn der Raum zum Überholen und Wiedereinscheren vollkommen überblickbar und frei von Gegenverkehr ist (Art. 35 SVG).",
    "ruleReference": "Art. 35 SVG"
  },
  {
    "id": 294,
    "testId": 10,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Sie stehen an einer roten Ampel. Ein Polizeiwagen mit Blaulicht und Martinshorn nähert sich hinter Ihnen. Was dürfen Sie tun?",
    "options": [
      {
        "id": "a",
        "text": "Vorsichtig über die Haltelinie in die Kreuzung vortasten, um dem Einsatzfahrzeug eine Rettungsgasse zu öffnen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Auf keinen Fall die Haltelinie überfahren und stehenbleiben.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Sofort rückwärtsfahren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Um Einsatzfahrzeugen mit Sondersignalen die Durchfahrt zu ermöglichen, darf vorsichtig über die rote Haltelinie gefahren werden, ohne den Querverkehr zu gefährden (Art. 27 SVG).",
    "ruleReference": "Art. 27 SVG"
  },
  {
    "id": 295,
    "testId": 11,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Warum ist das Tragen von Sonnenbrillen bei der Einfahrt in einen unbeleuchteten oder schwach beleuchteten Tunnel gefährlich?",
    "options": [
      {
        "id": "a",
        "text": "Das Auge benötigt Zeit für die Dunkeladaptation; mit Sonnenbrille entsteht ein gefährlicher 'Blindflug'-Moment.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Es gibt keine Gefahr.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Sonnenbrillen spiegeln die Deckenleuchten.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Vor Tunneleinfahrten sollte die Sonnenbrille rechtzeitig abgenommen werden, um den plötzlichen Helligkeitsabfall auszugleichen.",
    "ruleReference": "Sicherheitsleitfaden ASTRA"
  },
  {
    "id": 296,
    "testId": 12,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Darf man in einem Tunnel mit Gegenverkehr ein langsam fahrendes Fahrzeug überholen?",
    "options": [
      {
        "id": "a",
        "text": "Nein, in Tunneln mit Gegenverkehr ist das Überholen grundsätzlich untersagt (Sicherheitslinie).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, wenn es ein Traktor ist.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, mit Hupe.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "In Gegenverkehrstunnels gilt absolutes Überholverbot (Art. 39a VRV).",
    "ruleReference": "Art. 39a VRV"
  },
  {
    "id": 297,
    "testId": 13,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Was signalisieren rote Kreuze (Spursignale) über einem Fahrstreifen auf der Autobahn?",
    "options": [
      {
        "id": "a",
        "text": "Der Fahrstreifen ist gesperrt und darf ab dem Signal nicht mehr befahren werden.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Gefahr von Glatteis.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Spur nur für Rettungskräfte bei Feierabend.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Das Signal 5.05 (rotes Kreuz über dem Fahrstreifen) bedeutet Fahrstreifensperrung (Art. 69 SSV). Zuwiderhandlung ist strafbar.",
    "ruleReference": "Art. 69 SSV"
  },
  {
    "id": 298,
    "testId": 14,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Was bedeutet ein gelber, schräg nach rechts unten zeigender Pfeil über Ihrem Fahrstreifen auf der Autobahn?",
    "options": [
      {
        "id": "a",
        "text": "Fahrstreifenwechsel nach rechts vorbereiten; der Streifen ist bald gesperrt.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ausfahrt nach rechts.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Parkplatz in 100 m.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Signal 5.06 kündigt das baldige Ende der Spur an und fordert zum rechtzeitigen Einspuren auf die benachbarte Spur auf.",
    "ruleReference": "Art. 69 SSV"
  },
  {
    "id": 299,
    "testId": 1,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Wo tritt im Herbst und Winter überraschendes Glatteis (Schwarzeis / Blitzeis) besonders häufig auf?",
    "options": [
      {
        "id": "a",
        "text": "Auf Brücken, Überführungen und in schattigen Waldpassagen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nur in Tiefgaragen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Auf beleuchteten Autobahnraststätten.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Brücken kühlen auch von unten durch den Wind extrem schnell ab und gefrieren oft, wenn normale Strassen noch trocken wirken (Art. 32 SVG).",
    "ruleReference": "Art. 32 SVG"
  },
  {
    "id": 300,
    "testId": 2,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Wie verhalten Sie sich bei plötzlich auftretendem extremem Hagelschlag auf der Autobahn?",
    "options": [
      {
        "id": "a",
        "text": "Geschwindigkeit vorsichtig reduzieren, Abstand vergrössern und nicht abrupt unter Brücken auf der Fahrbahn anhalten (Auffahrgefahr!).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sofort auf der linken Spur stehenbleiben.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Vollgas geben, um dem Hagel zu entkommen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Das Halten unter Autobahnbrücken bei Hagel blockiert den Verkehr und verursacht lebensgefährliche Massenkarambolagen (Art. 36 VRV).",
    "ruleReference": "Art. 36 VRV"
  },
  {
    "id": 301,
    "testId": 3,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Welche Gefahr droht im Spätsommer durch nasses Herbstlaub auf der Strasse?",
    "options": [
      {
        "id": "a",
        "text": "Der Schmierfilm aus nassem Laub verlängert den Bremsweg ähnlich wie Schnee und führt in Kurven zum plötzlichen Ausbrechen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Laub verstopft nur den Auspuff.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Keinerlei Gefahr.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Nasses Laub bildet in Verbindung mit Schmutz eine extrem glitschige Schmierschicht mit drastisch reduziertem Reibbeiwert.",
    "ruleReference": "TCS Fahrsicherheit"
  },
  {
    "id": 302,
    "testId": 4,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Welche Herzdruckmassage-Frequenz wird bei einer wiederzubelebenden bewusstlosen Person ohne Atmung empfohlen?",
    "options": [
      {
        "id": "a",
        "text": "100 bis 120 Kompressionen pro Minute (im Rhythmus von 'Stayin' Alive'), ca. 5–6 cm tief in der Mitte des Brustkorbs.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "20 Mal pro Minute.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "200 Mal pro Minute.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Die Basismassnahmen der Wiederbelebung (CPR) erfordern kräftige, schnelle Herzdruckmassagen mit 100–120/min bis zum Eintreffen der Sanität (144).",
    "ruleReference": "Swiss Resuscitation Council (SRC)"
  },
  {
    "id": 303,
    "testId": 5,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Darf ein medizinischer Laie einen öffentlich zugänglichen Defibrillator (AED) bei einem Herzstillstand verwenden?",
    "options": [
      {
        "id": "a",
        "text": "Ja, Laien-Defibrillatoren leiten den Helfer mit klaren Sprachansagen an und geben Schocks nur ab, wenn Kammerflimmern vorliegt.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nein, nur diplomierte Notärzte dürfen Defibrillatoren berühren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur mit schriftlicher Bewilligung der Polizei.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Automatisierte Externe Defibrillatoren (AED) sind selbsterklärend und können Leben retten. Man kann als Ersthelfer nichts falsch machen!",
    "ruleReference": "SRC Richtlinien Notfallhilfe"
  },
  {
    "id": 304,
    "testId": 6,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Wann bringt man einen Verletzten in die 'stabile Seitenlage'?",
    "options": [
      {
        "id": "a",
        "text": "Wenn die Person bewusstlos ist, aber noch normal atmet (sichert die Atemwege gegen Ersticken an Erbrochenem oder der Zunge).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Bei Herzstillstand ohne Atmung.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur wenn die Person ansprechbar ist.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Bewusstlose Personen mit erhaltener Atmung müssen in die stabile Seitenlage gebracht werden, um freie Atemwege zu garantieren (Nothilfekurs).",
    "ruleReference": "Schweizer Nothilfe-Vorschrift"
  },
  {
    "id": 305,
    "testId": 7,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Muss bei einem Verkehrsunfall mit ausschliesslichem Sachschaden zwingend die Polizei gerufen werden?",
    "options": [
      {
        "id": "a",
        "text": "Nein, wenn sich alle Beteiligten über Schaden und Daten einig sind und das Europäische Unfallprotokoll ausfüllen (ausser bei Beschädigung von Bundeseigentum/Leitplanken).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, in der Schweiz muss immer die Polizei kommen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nein, man darf einfach wegfahren.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Bei reinem Sachschaden ist der Beizug der Polizei nicht nötig, sofern Name und Versicherung ausgetauscht werden (Art. 51 SVG).",
    "ruleReference": "Art. 51 SVG"
  },
  {
    "id": 306,
    "testId": 8,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Welche Gefahr besteht für Motorrad- und Rollerfahrer beim Überfahren von weissen Strassenmarkierungen bei Nässe?",
    "options": [
      {
        "id": "a",
        "text": "Die thermoplastische Farbe wird bei Nässe extrem rutschig; akute Sturzgefahr bei Schräglage oder Bremsung.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Die Markierung beschädigt die Reifen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Keine Gefahr.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Nasse Bodenmarkierungen (Zebrastreifen, Richtungspfeile) bieten fast keine Haftung für Zweiradreifen.",
    "ruleReference": "BFU Motorrad-Sicherheit"
  },
  {
    "id": 307,
    "testId": 9,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Darf auf einem Motorrad ein Passagier (Sozius) ohne Schutzhelm mitfahren?",
    "options": [
      {
        "id": "a",
        "text": "Nein, Fahrer und Mitfahrer müssen auf Motorrädern ausnahmslos typengeprüfte Schutzhelme tragen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, auf kurzen Fahrten im Dorf.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, wenn der Beifahrer über 18 Jahre alt ist.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Die Helmtragpflicht gilt für Führer und Mitfahrer von Motorrädern ausnahmslos (Art. 3b VRV).",
    "ruleReference": "Art. 3b VRV"
  },
  {
    "id": 308,
    "testId": 10,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Welches Mindestalter gilt in der Schweiz für das Führen von Motorfahrrädern (Mofas Kat. M)?",
    "options": [
      {
        "id": "a",
        "text": "14 Jahre.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "16 Jahre.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "18 Jahre.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Den Führerausweis der Kategorie M (Mofa) kann man in der Schweiz ab dem vollendeten 14. Lebensjahr erwerben (Art. 6 VZV).",
    "ruleReference": "Art. 6 VZV"
  },
  {
    "id": 309,
    "testId": 11,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Welche Verantwortung hat der Fahrer bei der Nutzung von Assistenzsystemen wie Spurhalteassistent oder adaptivem Tempomat (ACC)?",
    "options": [
      {
        "id": "a",
        "text": "Der Lenker bleibt jederzeit zu 100 % voll verantwortlich und muss die Hände am Lenkrad und den Verkehr im Auge behalten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Der Computer haftet für alle Verkehrsübertretungen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Man darf währenddessen schlafen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Fahrassistenzsysteme entbinden den Lenker nicht von seiner Sorgfaltspflicht. Die volle Beherrschung des Fahrzeugs liegt beim Fahrer (Art. 31 SVG).",
    "ruleReference": "Art. 31 SVG"
  },
  {
    "id": 310,
    "testId": 12,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Was zeigt das Reifendruckkontrollsystem (RDKS / TPMS) mit dem gelben hufeisenförmigen Symbol im Cockpit an?",
    "options": [
      {
        "id": "a",
        "text": "Druckverlust in mindestens einem Reifen; Reifendruck unverzüglich anpassen und System neu kalibrieren.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Die Stossdämpfer sind defekt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Das Getriebeöl fehlt.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Das TPMS-Symbol warnt vor gefährlichem Druckabfall im Pneu (VTS Vorschrift seit 2014 für Neufahrzeuge).",
    "ruleReference": "Art. 58 VTS"
  },
  {
    "id": 311,
    "testId": 13,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Was ist beim Laden eines Elektrofahrzeugs an einer Schnellladestation bezüglich des Ladekabels zu beachten?",
    "options": [
      {
        "id": "a",
        "text": "Das Kabel muss stolperfrei verlegt und vollständig arretiert sein; Ladekabel niemals gewaltsam während des Ladevorgangs herausziehen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Das Kabel muss immer mit Wasser gekühlt werden.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Man darf nur bei Vollmond laden.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Hochvolt-Ladekabel verriegeln automatisch zur Sicherheit vor Lichtbögen und Hochspannung.",
    "ruleReference": "Elektrosicherheit ESTI"
  },
  {
    "id": 312,
    "testId": 14,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Welche Gefahr besteht bei Elektro- und Hybridfahrzeugen bei niedrigen Geschwindigkeiten (z.B. in der 30er-Zone)?",
    "options": [
      {
        "id": "a",
        "text": "Fussgänger und sehbehinderte Personen hören das Fahrzeug wegen des leisen Elektromotors oft nicht; erhöhte Bremsbereitschaft nötig.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Der Akku entlädt sich plötzlich.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Die Bremsen funktionieren nicht.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Lautlose Elektrofahrzeuge werden von Fussgängern und Kindern leicht überhört (Art. 33 SVG / AVAS-Vorschrift).",
    "ruleReference": "Art. 33 SVG"
  },
  {
    "id": 313,
    "testId": 1,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Darf ein Inhaber eines ausländischen Führerausweises nach Wohnsitznahme in der Schweiz dauerhaft mit dem ausländischen Ausweis fahren?",
    "options": [
      {
        "id": "a",
        "text": "Nein, der ausländische Ausweis muss innerhalb von maximal 12 Monaten in einen Schweizer Führerausweis umgetauscht werden.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, unbegrenzt ein Leben lang.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur für 30 Tage.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Wer Wohnsitz in der Schweiz nimmt, muss seinen ausländischen Führerausweis spätestens nach einem Jahr umschreiben lassen (Art. 42 VZV).",
    "ruleReference": "Art. 42 VZV"
  },
  {
    "id": 314,
    "testId": 2,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Sie fahren auf einer Autobahn und sehen auf der Gegenfahrbahn einen schweren Unfall. Dürfen Sie anhalten oder filmen?",
    "options": [
      {
        "id": "a",
        "text": "Nein, Gaffen und Filmen gefährdet den Verkehr durch 'Gaffer-Staus' massiv und ist strafbar.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, für Beweisfotos für Zeitungen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, man darf auf dem linken Streifen stehenbleiben.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Gaffen behindert die Rettungskräfte und führt regelmässig zu schweren Folgeunfällen auf der Gegenfahrbahn (Art. 31 SVG).",
    "ruleReference": "Art. 31 SVG"
  },
  {
    "id": 315,
    "testId": 3,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Welche Frist gilt für die periodische Nachprüfung (MFK) eines neuen Personenwagens in der Schweiz?",
    "options": [
      {
        "id": "a",
        "text": "Erste Prüfung nach 4 Jahren, zweite Prüfung nach 3 Jahren, danach alle 2 Jahre (4-3-2-Regel).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Jedes Jahr ab dem ersten Tag.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Erst nach 10 Jahren.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Für Personenwagen gilt nach Art. 33 VTS das Prüfintervall: 4 Jahre nach Erstzulassung, dann 3 Jahre, anschliessend alle 2 Jahre.",
    "ruleReference": "Art. 33 VTS"
  },
  {
    "id": 316,
    "testId": 1,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Wo müssen E-Trottinette (E-Scooter bis 20 km/h) in der Schweiz gefahren werden?",
    "options": [
      {
        "id": "a",
        "text": "Auf Radstreifen und Radwegen; wo solche fehlen, auf der Fahrbahn. Das Befahren des Trottoirs ist strikt verboten!",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ausschliesslich auf dem Trottoir.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur in Fussgängerzonen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "E-Trottinette sind rechtlich den Fahrrädern gleichgestellt. Trottoirs sind Fussgängern vorbehalten (Art. 42 Abs. 4 VRV).",
    "ruleReference": "Art. 42 Abs. 4 VRV"
  },
  {
    "id": 317,
    "testId": 2,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Welche Ausrüstungsvorschriften gelten für E-Trottinette in der Schweiz?",
    "options": [
      {
        "id": "a",
        "text": "Vorder- und Rücklicht (fest angebracht oder gesteckt), Vorder- und Hinterradbremse sowie eine Glocke (Klingel).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nur eine Handbremse genügt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Keine Pflichten.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "E-Trottis müssen über zwei voneinander unabhängige Bremsen, Licht und Klingel verfügen (Art. 175 VTS).",
    "ruleReference": "Art. 175 VTS"
  },
  {
    "id": 318,
    "testId": 3,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Dürfen zwei Personen gleichzeitig auf einem E-Trottinett fahren?",
    "options": [
      {
        "id": "a",
        "text": "Nein, die Mitnahme weiterer Personen auf einem E-Trottinett ist verboten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, wenn beide unter 25 Jahre alt sind.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, auf Privatstrassen.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "E-Trottinette sind ausschliesslich für eine einzelne Person zugelassen (Art. 63 VRV).",
    "ruleReference": "Art. 63 VRV"
  },
  {
    "id": 319,
    "testId": 4,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Ein Tram durchquert einen Kreisverkehr geradlinig durch die Mitte. Wer hat Vortritt?",
    "options": [
      {
        "id": "a",
        "text": "Das Tram hat Vortritt vor allen Fahrzeugen im Kreisel (sowohl bei Ein- als auch bei Ausfahrt aus dem Kreisel), sofern keine Schilder anderes bestimmen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Fahrzeuge im Kreisel haben Vortritt vor dem Tram.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Das Tram muss wie ein Auto warten.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Schienenfahrzeuge behalten ihren Vorrang auch beim Kreuzen von Kreiseln (Art. 38 SVG / Art. 41b VRV).",
    "ruleReference": "Art. 38 SVG"
  },
  {
    "id": 320,
    "testId": 5,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Wann MUSS zum Abschleppen eine feste Schleppstange (statt Seil) verwendet werden?",
    "options": [
      {
        "id": "a",
        "text": "Wenn die Bremsen des abzuschleppenden Fahrzeugs defekt sind oder die Servolenkung/Bremskraftverstärker nicht funktioniert.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Abschleppstangen sind immer verboten.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur bei Regen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Fahrzeuge mit defekter Betriebsbremse dürfen nur mit einer festen Schleppstange oder aufgeladen abgeschleppt werden (Art. 43 VRV).",
    "ruleReference": "Art. 43 Abs. 1 VRV"
  },
  {
    "id": 321,
    "testId": 6,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Wie lang darf ein Abschleppseil maximal sein und wie muss es gekennzeichnet sein?",
    "options": [
      {
        "id": "a",
        "text": "Höchstens 5 bis 8 Meter lang und in der Mitte gut sichtbar (z.B. mit rotem Tuch) gekennzeichnet.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Mindestens 20 Meter lang.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Beliebig lang ohne Kennzeichnung.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Abschleppseile müssen in der Mitte auffällig gekennzeichnet sein, damit andere Verkehrsteilnehmer das Seil nicht übersehen (Art. 43 VRV).",
    "ruleReference": "Art. 43 VRV"
  },
  {
    "id": 322,
    "testId": 7,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Was müssen Sie nach einem Radwechsel (z.B. nach Panne oder Reifenwechsel) nach kurzer Fahrstrecke tun?",
    "options": [
      {
        "id": "a",
        "text": "Die Radmuttern/-schrauben nach ca. 50 bis 100 km mit dem vorgeschriebenen Drehmoment nachziehen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Den Reifendruck halbieren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nichts, einmal angezogen hält ewig.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Radschrauben können sich durch Setzvorgänge leicht lockern. Das Nachziehen nach 50–100 km verhindert lebensgefährlichen Radverlust (TCS Leitfaden).",
    "ruleReference": "TCS Reifenratgeber"
  },
  {
    "id": 323,
    "testId": 8,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "In welcher Reihenfolge sollten Radschrauben beim Festziehen angezogen werden?",
    "options": [
      {
        "id": "a",
        "text": "Über Kreuz (diagonal gegenüberliegend), um ein Verkanten der Felge zu verhindern.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Im Uhrzeigersinn der Reihe nach im Kreis.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Zuerst alle oberen Schrauben.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Das diagonale Über-Kreuz-Anziehen stellt sicher, dass die Felge gleichmässig und plan auf der Radnabe aufliegt.",
    "ruleReference": "Fahrzeugtechnik VTS"
  },
  {
    "id": 324,
    "testId": 9,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Was versteht man unter der 'Stützlast' bei einer Anhängerkupplung?",
    "options": [
      {
        "id": "a",
        "text": "Die vertikale Kraft, die die Deichsel des Anhängers auf den Kugelkopf des Zugfahrzeugs ausübt (im Fahrzeugausweis vermerkt, z.B. 75 kg).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Das Gesamtgewicht des Anhängers.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Die Zugkraft des Motors.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Die Stützlast muss positiv sein (meist 50–100 kg), darf aber das im Fahrzeugausweis eingetragene Maximum nicht überschreiten (Art. 73 VRV).",
    "ruleReference": "Art. 73 VRV"
  },
  {
    "id": 325,
    "testId": 10,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Welche Gefahr besteht bei zu geringer oder negativer Stützlast (z.B. Hecklastigkeit des Anhängers)?",
    "options": [
      {
        "id": "a",
        "text": "Der Anhänger fängt schon bei niedrigen Geschwindigkeiten gefährlich an zu schlingern und bringt das Gespann zum Ausbrechen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Der Anhänger bremst von selbst.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Der Treibstoffverbrauch sinkt.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Hecklastige Anhänger neigen zum gefürchteten Pendeln und Schlingern, was zu schweren Unfällen führen kann.",
    "ruleReference": "Fahrphysik Gespanne"
  },
  {
    "id": 326,
    "testId": 11,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Darf man auf einer schmalen Bergpoststrasse ein Postauto überholen?",
    "options": [
      {
        "id": "a",
        "text": "Nur wenn der Chauffeur des Postautos durch Handzeichen oder Blinker signalisiert, dass gefahrlos überholt werden kann.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Jederzeit in jeder Kurve.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Überholen von Postautos ist generell strafbar.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Auf Bergpoststrassen (Signal 4.05) haben Linienbusse Vorrang. Überholen nur nach Aufforderung durch den Postautofahrer (Art. 9 VRV).",
    "ruleReference": "Art. 9 VRV"
  },
  {
    "id": 327,
    "testId": 12,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Was müssen Sie auf Bergfahrten mit steilem Gefälle tun, um Bremsversagen (Fading) zu verhindern?",
    "options": [
      {
        "id": "a",
        "text": "Rechtzeitig in einen niedrigen Gang zurückschalten, um die Motorbremse aktiv zu nutzen; nicht dauerhaft auf der Fussbremse stehen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nur die Handbremse leicht schleifen lassen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Immer im Leerlauf rollen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Dauerbremsen überhitzt Bremsscheiben und Bremsflüssigkeit (Dampfblasenbildung -> totaler Bremsausfall). Die Motorbremse ist unverzichtbar!",
    "ruleReference": "Fahrtechnik Bergstrassen"
  },
  {
    "id": 328,
    "testId": 13,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Darf man vor einer privaten Garageneinfahrt parkieren?",
    "options": [
      {
        "id": "a",
        "text": "Nein, vor Ein- und Ausfahrten privater Grundstücke darf nicht parkiert werden (ausser der Eigentümer selbst).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, für bis zu 2 Stunden.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, wenn man den Autoschlüssel stecken lässt.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Das Parkieren vor Ein- und Ausfahrten von Grundstücken ist verboten (Art. 19 Abs. 2 Bst. a VRV).",
    "ruleReference": "Art. 19 VRV"
  },
  {
    "id": 329,
    "testId": 14,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Wie weit muss eine freie Fahrbahnbreite beim Parkieren am Strassenrand mindestens verbleiben?",
    "options": [
      {
        "id": "a",
        "text": "Mindestens 3 Meter, damit Rettungsfahrzeuge (Feuerwehr/Sanität) problemlos durchfahren können.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "1.5 Meter genügen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "50 Zentimeter.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Beim Halten und Parkieren muss für den durchgehenden Verkehr ein Fahrstreifen von mindestens 3 Metern Breite frei bleiben (Art. 19 Abs. 3 VRV).",
    "ruleReference": "Art. 19 Abs. 3 VRV"
  },
  {
    "id": 330,
    "testId": 1,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Gilt das 0.10 Promille Alkoholverbot auch für Fahrlehrer während des Unterrichts?",
    "options": [
      {
        "id": "a",
        "text": "Ja, Fahrlehrer unterliegen während der Berufsausübung ausnahmslos der Nulltoleranz (0.10 ‰).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nein, für Fahrlehrer gilt 0.80 ‰.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur nachts.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Fahrlehrer gelten als Begleitpersonen im Sinne des Gesetzes und müssen strikt nüchtern sein (Art. 2a VRV).",
    "ruleReference": "Art. 2a VRV"
  },
  {
    "id": 331,
    "testId": 2,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Wie lange kann Cannabis (THC) im Blut oder Urin nachgewiesen werden?",
    "options": [
      {
        "id": "a",
        "text": "Im Blut mehrere Tage, im Urin bei regelmässigem Konsum sogar wochenlang nach dem letzten Konsum.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nur 30 Minuten.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur während man raucht.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "THC lagert sich im Fettgewebe ab. Bei Verkehrskontrollen führt ein positiver Befund zur Feststellung der Fahrunfähigkeit mit Führerausweisentzug.",
    "ruleReference": "Art. 2 VRV / Art. 16d SVG"
  },
  {
    "id": 332,
    "testId": 3,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Was droht bei einer Fahrt mit mehr als 1.6 Promille Blutalkoholwert?",
    "options": [
      {
        "id": "a",
        "text": "Zwingende verkehrspsychologische Begutachtung zur Abklärung einer Alkoholsucht, bevor der Ausweis überhaupt wiedererteilt werden kann.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nur eine Verwarnung.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "20 Stunden gemeinnützige Arbeit.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Ab 1.6 Promille ordnet das Strassenverkehrsamt von Gesetzes wegen eine verkehrsmedizinische Eignungsuntersuchung an (Art. 15d SVG).",
    "ruleReference": "Art. 15d SVG"
  },
  {
    "id": 333,
    "testId": 4,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Was bedeutet das Zusatzschild 'Ausgenommen Zubringerdienst' unter einem Fahrverbot?",
    "options": [
      {
        "id": "a",
        "text": "Anwohner, Besucher von Anwohnern sowie Lieferanten und Kunden mit direktem Ziel in dieser Strasse dürfen einfahren.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Jeder, der schnell durchfahren will, darf einfahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Gilt nur für Postautos.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Zubringerdienst umfasst Fahrten zu Grundstücken an der gesperrten Strasse zur Erledigung von Besuchen, Einkäufen oder Verrichtungen (Art. 17 SSV).",
    "ruleReference": "Art. 17 SSV"
  },
  {
    "id": 334,
    "testId": 5,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Darf man mit Sommerreifen auf einer schneebedeckten Passstrasse fahren, wenn kein Schneekettenschild aufgestellt ist?",
    "options": [
      {
        "id": "a",
        "text": "Rechtlich nicht explizit mit Datum verboten, aber wenn das Fahrzeug stecken bleibt oder ins Rutschen gerät, haftet der Fahrer voll wegen Fahrens eines nicht betriebssicheren Fahrzeugs.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, Sommerreifen haben im Schnee immer Vorrang.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, die Versicherung zahlt jeden Schaden.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Art. 29 SVG verpflichtet den Lenker, das Fahrzeug nur in betriebssicherem Zustand zu führen. Bei Schnee mit Sommerreifen drohen Busse und Regress der Versicherung.",
    "ruleReference": "Art. 29 SVG"
  },
  {
    "id": 335,
    "testId": 6,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Was ist ein 'Qualifizierter Rotlichtverstoss'?",
    "options": [
      {
        "id": "a",
        "text": "Das Überfahren der roten Ampel, wenn diese bereits länger als 1 Sekunde rot leuchtet, oder wenn Querverkehr konkret gefährdet wurde (schwere Widerhandlung).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Jedes Abbremsen vor Gelb.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Wenn man mit dem Fahrrad über Rot fährt.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Rotlichtverstösse mit Gefährdung oder nach mehr als 1 Sekunde Rotphase ziehen mindestens 1 Monat Führerausweisentzug nach sich (Art. 16c SVG).",
    "ruleReference": "Art. 16c SVG"
  },
  {
    "id": 336,
    "testId": 7,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Welche Pflicht besteht, wenn ein Schulbus mit blinkender Warnblinkanlage am Strassenrand hält?",
    "options": [
      {
        "id": "a",
        "text": "Besonders vorsichtig und bremsbereit im Schritttempo vorbeifahren; Kinder können jederzeit unvermittelt hinter dem Bus hervorrennen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Mit Höchsttempo zügig überholen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Dauerhupen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Haltestellen von Schul- und Linienbussen erfordern erhöhte Wachsamkeit und Temporeduktion zum Schutz von Kindern (Art. 3 SVG / Art. 15 VRV).",
    "ruleReference": "Art. 3 SVG"
  },
  {
    "id": 337,
    "testId": 8,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Wie verhalten Sie sich bei einer Verkehrskontrolle durch die Schweizer Zollverwaltung (BAZG) im Binnenland?",
    "options": [
      {
        "id": "a",
        "text": "Den Anweisungen der Zöllner ist strikte Folge zu leisten; sie verfügen im Zollbereich und Binnenland über hoheitliche Kontrollrechte.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Einfach weiterfahren, weil man nicht an der Grenze ist.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Die Ausweise verweigern.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Die Mitarbeitenden des Bundesamts für Zoll und Grenzsicherheit (BAZG) sind befugt, Personen und Fahrzeuge auf Schweizer Hoheitsgebiet anzuhalten und zu kontrollieren.",
    "ruleReference": "Zollgesetz BAZG"
  },
  {
    "id": 338,
    "testId": 1,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Drei Fahrzeuge treffen an einer Kreuzung ohne Signale aufeinander: Auto A will links abbiegen, Auto B fährt geradeaus (von rechts für A), Auto C biegt rechts ab. Wer fährt zuerst?",
    "options": [
      {
        "id": "a",
        "text": "Auto B und C dürfen vor Auto A fahren; Linksabbieger A muss warten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Auto A hat Vortritt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Alle drei müssen gleichzeitig fahren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Rechtsvortritt und Vorrang des Gegenverkehrs vor Linksabbiegern greifen ineinander (Art. 36 SVG).",
    "ruleReference": "Art. 36 SVG"
  },
  {
    "id": 339,
    "testId": 2,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Darf man bei einer Baustellenampel anfahren, sobald die Gegenrichtung Rot bekommt?",
    "options": [
      {
        "id": "a",
        "text": "Nein, erst wenn das eigene Signal auf Grün schaltet; die Zwischenzeit dient der Räumung des einspurigen Baustellenbereichs.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, sobald der Gegenverkehr steht.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, wenn niemand mehr im Engpass ist.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Die Räumungsphase garantiert, dass Fahrzeuge im Engpass diesen verlassen können, bevor Gegenverkehr startet (Art. 68 SSV).",
    "ruleReference": "Art. 68 SSV"
  },
  {
    "id": 340,
    "testId": 3,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet das Signal 'Seitenstreifen für Nothalte' (Pannenbucht, Signal 4.16)?",
    "options": [
      {
        "id": "a",
        "text": "Ausweichbucht ausschliesslich für Fahrzeuge mit Panne oder in Notfällen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Rastplatz für ein Picknick.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Parkplatz für Lastwagen.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Nothaltebuchten dürfen nur bei Pannen oder Notfällen belegt werden (Art. 47 SSV).",
    "ruleReference": "Art. 47 SSV"
  },
  {
    "id": 341,
    "testId": 4,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet eine gelbe Linie mit Schraffur auf einer Parkfläche?",
    "options": [
      {
        "id": "a",
        "text": "Halte- und Parkverbot für unberechtigte Fahrzeuge (z.B. Ladezone oder Feuerwehrzufahrt).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Reserviert für Diplomaten.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Kostenloses Parken am Sonntag.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Schraffierte gelbe Flächen sind Sperrzonen für das Parkieren (Art. 79 SSV).",
    "ruleReference": "Art. 79 SSV"
  },
  {
    "id": 342,
    "testId": 5,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Welcher Abstand sollte zu einem Schneepflug im Winterdienst ausserorts gehalten werden?",
    "options": [
      {
        "id": "a",
        "text": "Ausreichend grosser Sicherheitsabstand; Schneepflüge niemals riskant rechts oder links im aufgewirbelten Schneestaub überholen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Dicht auffahren, um im Windschatten zu fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Direkt vor dem Pflug einscheren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Schneepflüge haben Überbreite und werfen Schnee und Salz aus. Überholen birgt akute Kollisionsgefahr (Art. 32 SVG).",
    "ruleReference": "Art. 32 SVG"
  },
  {
    "id": 343,
    "testId": 6,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Wie verändert sich der Anhalteweg eines voll beladenen Personenwagens im Vergleich zu einem leeren Fahrzeug?",
    "options": [
      {
        "id": "a",
        "text": "Er kann sich verlängern, da die höhere Masse mehr Bremsenergie erfordert und die Reifen stärker beansprucht werden.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Er verkürzt sich drastisch.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Er bleibt millimetergenau gleich.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Grössere Masse bedeutet höhere kinetische Energie. Bei heisser Bremse verlängert sich der Bremsweg merkbar.",
    "ruleReference": "Fahrphysik TCS"
  },
  {
    "id": 344,
    "testId": 7,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Welche Pflicht gilt für Brillenträger, wenn im Führerausweis der Code '01' (Sehhilfe) eingetragen ist?",
    "options": [
      {
        "id": "a",
        "text": "Beim Fahren muss zwingend eine geeignete Brille oder Kontaktlinsen getragen werden (das Mitführen einer Ersatzbrille wird empfohlen).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Man muss nur nachts Brille tragen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Der Code ist unverbindlich.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Fahren ohne vorgeschriebene Sehhilfe (Code 01) stellt das Führen eines Fahrzeugs ohne erforderliche Erlaubnis dar und wird gebüsst (Art. 10 VZV).",
    "ruleReference": "Art. 10 VZV"
  },
  {
    "id": 345,
    "testId": 8,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Darf ein Kind auf dem Rücksitz nur mit dem normalen Dreipunktgurt ohne Kindersitz befördert werden, wenn es 10 Jahre alt und 140 cm gross ist?",
    "options": [
      {
        "id": "a",
        "text": "Nein, Kinder unter 12 Jahren UND unter 150 cm müssen eine geeignete Kinderrückhaltevorrichtung (z.B. Sitzerhöhung mit Gurtführung) benützen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, ab 10 Jahren ist kein Kindersitz mehr nötig.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, wenn es hinten in der Mitte sitzt.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Beide Kriterien müssen erfüllt sein: erst ab 12 Jahren ODER ab 150 cm Körpergrösse genügt der normale Erwachsenengurt (Art. 3a VRV).",
    "ruleReference": "Art. 3a VRV"
  },
  {
    "id": 346,
    "testId": 9,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Was bewirkt die Schubabschaltung bei modernen Einspritzmotoren?",
    "options": [
      {
        "id": "a",
        "text": "Solange der Gang eingelegt ist und kein Gas gegeben wird, wird die Kraftstoffzufuhr vollständig unterbrochen (0.0 l Verbrauch).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Der Motor geht ganz aus.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Die Batterie wird entleert.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Die Schubabschaltung schaltet die Einspritzdüsen ab, solange der Motor über die Räder geschoben wird. Spart Treibstoff und nutzt die Motorbremse.",
    "ruleReference": "Eco-Drive Suisse"
  },
  {
    "id": 347,
    "testId": 10,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Darf man Altöl in den eigenen Kaminofen oder zum Heizen verbrennen?",
    "options": [
      {
        "id": "a",
        "text": "Nein, das Verbrennen von Altöl ist strengstens verboten und hochgradig krebserregend und umweltschädlich.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, im Winter erlaubt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, bis zu 5 Liter im Jahr.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Altölverbrennung setzt hochgiftige Schwermetalle und Dioxine frei (Umweltschutzgesetz USG).",
    "ruleReference": "Luftreinhalteverordnung LRV"
  },
  {
    "id": 348,
    "testId": 11,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Darf ein Motorwagen mit Spikereifen die Autobahn befahren?",
    "options": [
      {
        "id": "a",
        "text": "Nein, Fahrzeuge mit Spikereifen dürfen Autobahnen und Autostrassen in der Schweiz nicht befahren.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, bis zu 120 km/h.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur im Kanton Graubünden.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Spikereifen sind auf Autobahnen und Autostrassen verboten, um Fahrbahnschäden zu vermeiden (Art. 61 VTS). Höchstgeschwindigkeit ausserorts mit Spikes: 80 km/h.",
    "ruleReference": "Art. 61 VTS"
  },
  {
    "id": 349,
    "testId": 12,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Was gilt bei einer Panne auf einer Brücke oder in einer Galerie ohne Pannenstreifen auf der Autobahn?",
    "options": [
      {
        "id": "a",
        "text": "Fahrzeug so weit rechts wie möglich an die Wand stellen, Warnblinker an, Warnweste anziehen, Insassen in eine Notnische oder hinter Sicherheitsabsperrungen bringen und Notruf wählen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Auf der Fahrbahn stehen bleiben und im Auto warten.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Versuchen, das Auto rückwärts von der Brücke zu schieben.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Ohne Pannenstreifen besteht akute Auffahrgefahr. Notnischen aufsuchen und die Leitstelle über Notrufsäule alarmieren (Art. 54 VRV).",
    "ruleReference": "Art. 54 VRV"
  },
  {
    "id": 350,
    "testId": 13,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Sie fahren auf einer Vorfahrtsstrasse und von rechts kommt ein Traktor aus einem Feldweg (unbefestigter Weg). Gilt Rechtsvortritt?",
    "options": [
      {
        "id": "a",
        "text": "Nein, wer aus einem Feld- oder Waldweg in eine Strasse einfährt, hat keinen Vortritt gegenüber dem Verkehr auf der Strasse.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, Traktoren von rechts haben immer Vorrang.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur wenn der Traktor eine Rundumleuchte hat.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Wer aus Feld- oder Waldwegen auf eine öffentliche Strasse einfährt, ist vortrittsbelastet (Art. 15 Abs. 3 VRV). Häufige Prüfungsfalle!",
    "ruleReference": "Art. 15 Abs. 3 VRV"
  },
  {
    "id": 351,
    "testId": 14,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Darf man bei stockendem Kolonnenverkehr auf der Autobahn auf den Rastplatz abbiegen und über diesen die Autobahn wieder befahren, um die Kolonne zu überholen?",
    "options": [
      {
        "id": "a",
        "text": "Nein, das missbräuchliche Durchfahren von Raststätten zur Umfahrung von Staus ist eine verbotene Behinderung und wird gebüsst.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, das ist ein legaler Trick.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, wenn man die Tankstelle passiert.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Raststätten und Tankstellen dienen der Erholung und Versorgung, nicht dem Überholen von Autobahnkolonnen (Art. 35 VRV).",
    "ruleReference": "Art. 35 VRV"
  },
  {
    "id": 352,
    "testId": 12,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Sie stehen an einer Einmündung vor einem Stopsignal. Die Sicht ist durch parkierte Autos behindert. Wo halten Sie an?",
    "options": [
      {
        "id": "a",
        "text": "Zuerst an der Haltelinie vollkommen anhalten, danach langsam bis zur Sichtlinie vortasten und nötigenfalls erneut anhalten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Direkt mitten auf die Kreuzung fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur hupen und ohne Halt weiterfahren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Bei behinderter Sicht muss zuerst an der Haltelinie gestoppt werden. Danach tastet man sich vorsichtig zur Sichtgrenze vor (Art. 36 SSV).",
    "ruleReference": "Art. 36 SSV"
  },
  {
    "id": 353,
    "testId": 13,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Ein Linienbus signalisiert innerorts das Verlassen einer Haltestelle. Sie nähern sich mit 50 km/h von hinten. Was tun Sie?",
    "options": [
      {
        "id": "a",
        "text": "Geschwindigkeit verringern, bremsbereit sein und dem Bus das Einspuren ermöglichen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sofort Vollgas geben, um vor dem Bus durchzuziehen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Auf den Gehsteig ausweichen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Innerorts ist Linienbussen das Wegfahren von Haltestellen durch Temporeduktion zu ermöglichen (Art. 15 Abs. 4 VRV).",
    "ruleReference": "Art. 15 Abs. 4 VRV"
  },
  {
    "id": 354,
    "testId": 14,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Ein Tram fährt auf der Strasse hinter Ihnen. Sie möchten links abbiegen und müssen wegen Gegenverkehr warten. Was beachten Sie?",
    "options": [
      {
        "id": "a",
        "text": "Sie dürfen die Schienen nur blockieren, wenn das Tram dadurch nicht behindert wird; andernfalls weiterfahren oder Tram passieren lassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Das Tram muss immer hinter wartenden Autos warten.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Man darf die Schienen beliebig lange blockieren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Schienenfahrzeuge dürfen durch wartende Linksabbieger nicht unnötig behindert werden (Art. 38 SVG / Art. 13 VRV).",
    "ruleReference": "Art. 38 SVG"
  },
  {
    "id": 355,
    "testId": 15,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Wer hat auf einer schmalen Brücke ohne Vortrittsschilder Vorrang beim gleichzeitigen Eintreffen zweier Autos?",
    "options": [
      {
        "id": "a",
        "text": "Es gilt der Rechtsvortritt bzw. das Fahrzeug, das das Hindernis auf seiner Seite hat, muss warten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Das schnellere Fahrzeug.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Das grössere Fahrzeug.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Wer das Hindernis auf seiner Strassenseite hat, muss warten (Art. 9 VRV). Ansonsten gilt der Rechtsvortritt oder gegenseitige Verständigung.",
    "ruleReference": "Art. 9 VRV"
  },
  {
    "id": 356,
    "testId": 16,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Sie fahren auf einer Vorfahrtsstrasse und möchten nach links in eine Seitenstrasse abbiegen. Ein Fussgänger quert die Seitenstrasse. Wer hat Vortritt?",
    "options": [
      {
        "id": "a",
        "text": "Der Fussgänger hat Vorrang vor dem abbiegenden Fahrzeug.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sie haben Vortritt, weil Sie von der Vorfahrtsstrasse kommen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Wer schneller ist.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Abbiegende Fahrzeuge müssen Fussgängern, die die Querstrasse überschreiten, stets den Vortritt lassen (Art. 33 SVG).",
    "ruleReference": "Art. 33 SVG"
  },
  {
    "id": 357,
    "testId": 17,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Sie kommen an eine Kreuzung mit Kreisverkehr. Ein Radfahrer befindet sich bereits im Kreisel vor Ihnen. Dürfen Sie ihn im Kreisel überholen?",
    "options": [
      {
        "id": "a",
        "text": "Nein, im Kreisel sollte wegen des geringen Raumes und der Richtungsänderungen nicht überholt werden; Sicherheitsabstand halten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, mit mindestens 60 km/h.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, wenn man hupt.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Das Überholen im Kreisel ist wegen enger Radien extrem gefährlich. Radfahrer dürfen in der Fahrbahnmitte fahren (Art. 41b VRV).",
    "ruleReference": "Art. 41b VRV"
  },
  {
    "id": 358,
    "testId": 18,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Ein Polizeiauto mit eingeschaltetem Blaulicht (ohne Sirene) steht an einer roten Ampel. Die Ampel schaltet auf Grün. Darf die Polizei vor Ihnen fahren?",
    "options": [
      {
        "id": "a",
        "text": "Ja, Einsatzfahrzeuge haben auch mit Blaulicht allein Vorrang und sind zügig passieren zu lassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nein, ohne Sirene hat die Polizei keinerlei Rechte.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur wenn ein Notarzt drin sitzt.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Blaulicht zeigt eine dringliche Dienstfahrt an (Art. 27 SVG). Andere Verkehrsteilnehmer müssen die Fahrbahn unverzüglich freigeben.",
    "ruleReference": "Art. 27 SVG"
  },
  {
    "id": 359,
    "testId": 19,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Sie möchten aus einer verkehrsberuhigten Begegnungszone (20 km/h) in eine Tempo-30-Zone einfahren. Wer hat Vortritt?",
    "options": [
      {
        "id": "a",
        "text": "Der Verkehr in der Tempo-30-Zone; wer aus einer Begegnungszone ausfährt, hat keinen Rechtsvortritt.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sie haben Rechtsvortritt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Wer zuerst an der Kreuzung ist.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Ausfahrten aus Begegnungszonen, Fussgängerzonen und Grundstücken sind gegenüber dem fliessenden Verkehr nachrangig (Art. 15 Abs. 3 VRV).",
    "ruleReference": "Art. 15 Abs. 3 VRV"
  },
  {
    "id": 360,
    "testId": 20,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "An einer Kreuzung fällt die Ampel aus (gelbes Blinklicht). Ein Schild zeigt 'Hauptstrasse' für Ihre Richtung. Wer hat Vortritt?",
    "options": [
      {
        "id": "a",
        "text": "Sie haben Vortritt vor dem Querverkehr, da bei Ampelausfall die signalisierten Schilder gelten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Es gilt automatischer Rechtsvortritt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Alle müssen anhalten.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Bei gelbem Blinklicht oder Ausfall der Lichtsignalanlage gelten die angebrachten Vortrittsschilder (Art. 68 SSV).",
    "ruleReference": "Art. 68 SSV"
  },
  {
    "id": 361,
    "testId": 1,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Sie stehen als zweites Fahrzeug hinter einem an der Haltelinie wartenden Auto vor einem Stopsignal. Das vordere Auto fährt ab. Dürfen Sie direkt folgen?",
    "options": [
      {
        "id": "a",
        "text": "Nein, jedes Fahrzeug muss für sich selbst an der Haltelinie anhalten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, wenn kein Querverkehr zu sehen ist.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, wenn man dicht aufschliesst.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Die Stopp-Pflicht gilt individuell für jedes einzelne Fahrzeug an der Haltelinie (Art. 36 SSV). Kein 'Durchrutschen'!",
    "ruleReference": "Art. 36 SSV"
  },
  {
    "id": 362,
    "testId": 2,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet das Signal 'Rechtsabbiegen für Radfahrer gestattet bei Rot' (Signal mit grünem Velo und Pfeil an der Ampel)?",
    "options": [
      {
        "id": "a",
        "text": "Radfahrer und Mofas dürfen bei rotem Lichtsignal nach rechts abbiegen, müssen aber Fussgängern und dem Querverkehr den Vortritt lassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Alle Autos dürfen bei Rot rechts abbiegen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Radfahrer müssen absteigen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Seit 2021 dürfen Velos und Mofas bei roter Ampel mit diesem Zusatzschild vorsichtig rechts abbiegen (Art. 69a SSV).",
    "ruleReference": "Art. 69a SSV"
  },
  {
    "id": 363,
    "testId": 3,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet das Signal 'Pannensignal' (Signal 2.47 'Halteverbot auf dem Pannenstreifen')?",
    "options": [
      {
        "id": "a",
        "text": "Auf dem Pannenstreifen darf auch bei Panne nicht gehalten werden (sofern Gefahrenzone), Weiterrollen bis zur nächsten Bucht zwingend.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Pannenstreifen ist frei für alle.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Parkplatz für Wohnwagen.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Verbietet das Halten selbst bei Notfällen an besonders engen oder gefährlichen Tunnel- und Brückenstellen (Art. 30 SSV).",
    "ruleReference": "Art. 30 SSV"
  },
  {
    "id": 364,
    "testId": 4,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet das Hinweissignal 'Standort eines Defibrillators' (grünes Quadrat mit weissem Herz und Blitz)?",
    "options": [
      {
        "id": "a",
        "text": "Zeigt den genauen Standort eines öffentlich zugänglichen automatisierten Defibrillators (AED) für Notfälle an.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Spital in 1 km.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Elektroauto-Ladesäule.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Weist Ersthelfer auf lebensrettende Defibrillatoren bei plötzlichem Herzstillstand hin.",
    "ruleReference": "Art. 62 SSV"
  },
  {
    "id": 365,
    "testId": 5,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet eine gelbe Zickzack-Linie vor einer Bushaltestelle?",
    "options": [
      {
        "id": "a",
        "text": "Haltestelle für öffentliche Busse; Halten nur kurz zum Ein- und Aussteigen gestattet, sofern kein Bus behindert wird (Parkieren verboten).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Parkplatz für Taxis.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Strecke mit vielen Schlaglöchern.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Die gelbe Zickzacklinie (Art. 79a SSV) markiert ÖV-Haltestellen. Parkieren ist absolut verboten.",
    "ruleReference": "Art. 79a SSV"
  },
  {
    "id": 366,
    "testId": 6,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet das Signal 'Verbot für Motorwagen und Motorräder' (Auto und Motorrad im roten Kreis)?",
    "options": [
      {
        "id": "a",
        "text": "Einfahrtsverbot für alle mehrspurigen Motorfahrzeuge und alle Motorräder; Fahrräder und Mofas dürfen passieren.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nur für LKW gesperrt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Verbot für Fahrräder.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 2.13 untersagt das Befahren für Motorwagen und Motorräder (Art. 19 SSV).",
    "ruleReference": "Art. 19 SSV"
  },
  {
    "id": 367,
    "testId": 7,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet ein blaues quadratisches Schild mit weissem Pfeil geradeaus und dem Zusatz 'Einbahn'?",
    "options": [
      {
        "id": "a",
        "text": "Einbahnstrasse: Die Strasse darf nur in Pfeilrichtung befahren werden; Gegenverkehr ist nicht zulässig.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Pflicht zum Wenden am Ende.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur für Busse.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 4.08 kennzeichnet Einbahnstrassen (Art. 46 SSV).",
    "ruleReference": "Art. 46 SSV"
  },
  {
    "id": 368,
    "testId": 8,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet das Signal 'Spur für Busse' (blaue runde Tafel mit gelbem Bus-Symbol)?",
    "options": [
      {
        "id": "a",
        "text": "Dieser Fahrstreifen ist Linienbussen vorbehalten; andere Fahrzeuge dürfen ihn nicht benützen (ausser Taxis, wenn signalisiert).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Busse dürfen hier nicht fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Parkplatz für Reisebusse.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Busstreifen (Art. 34 SSV) sind dem Linienverkehr vorbehalten. Unberechtigtes Befahren wird gebüsst.",
    "ruleReference": "Art. 34 SSV"
  },
  {
    "id": 369,
    "testId": 9,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet ein rot-weisser Richtungspfeil auf einer Warntafel (Kurvenleittafel)?",
    "options": [
      {
        "id": "a",
        "text": "Kündigt eine besonders scharfe und gefährliche Kurve an; Richtungspfeil zeigt den Kurvenverlauf.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Zeigt eine Ausfahrt an.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Gilt nur für Lastwagen.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Kurvenleittafeln (Signal 1.01/1.02) weisen auf gefährlich enge Kurvenradien hin (Art. 5 SSV).",
    "ruleReference": "Art. 5 SSV"
  },
  {
    "id": 370,
    "testId": 10,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet ein weisses rundes Schild mit rotem Rand und einem schwarzen Velo?",
    "options": [
      {
        "id": "a",
        "text": "Verbot für Fahrräder und Motorfahrräder (Mofas).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Radweg obligatorisch.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Achtung Radfahrer.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 2.06 verbietet das Fahren mit Fahrrädern und Mofas (Art. 19 SSV).",
    "ruleReference": "Art. 19 SSV"
  },
  {
    "id": 371,
    "testId": 11,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Was bedeutet das Signal 'Tunnel' (Signal 4.07)?",
    "options": [
      {
        "id": "a",
        "text": "Kündigt die Einfahrt in einen Tunnel an: Abblendlicht obligatorisch, Sonnenbrille abnehmen, Wenden und Rückwärtsfahren verboten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Baustelle voraus.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Überdachter Parkplatz.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 4.07 mahnt zu tunnelgerechtem Verhalten (Abblendlicht, Abstand, Rauchvermeidung) (Art. 45 SSV).",
    "ruleReference": "Art. 45 SSV"
  },
  {
    "id": 372,
    "testId": 12,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Welche Höchstgeschwindigkeit gilt innerorts für Motorräder und Personenwagen, wenn keine Schilder vorhanden sind?",
    "options": [
      {
        "id": "a",
        "text": "Generell 50 km/h.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Generell 60 km/h.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Generell 40 km/h.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "In geschlossenen Ortschaften gilt in der Schweiz generell Höchstgeschwindigkeit 50 km/h (Art. 4a VRV).",
    "ruleReference": "Art. 4a VRV"
  },
  {
    "id": 373,
    "testId": 13,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Wie gross ist der Reaktionsweg bei einer Geschwindigkeit von 100 km/h bei 1 Sekunde Reaktionszeit (Faustformel)?",
    "options": [
      {
        "id": "a",
        "text": "Ca. 30 Meter (100 / 10 * 3 = 30 m).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "10 Meter.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "100 Meter.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Der Reaktionsweg berechnet sich nach der Faustformel (Geschwindigkeit / 10) * 3 = 30 Meter.",
    "ruleReference": "Fahrschul-Physik"
  },
  {
    "id": 374,
    "testId": 14,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Wie gross ist der gesamte Anhalteweg bei 50 km/h auf trockener Strasse bei normaler Bremsung (Faustformel)?",
    "options": [
      {
        "id": "a",
        "text": "Ca. 40 Meter (15 m Reaktionsweg + 25 m Bremsweg).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "10 Meter.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "80 Meter.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Anhalteweg = Reaktionsweg ((50/10)*3 = 15m) + Bremsweg ((50/10)*(50/10) = 25m) = 40 Meter.",
    "ruleReference": "Fahrschul-Physik"
  },
  {
    "id": 375,
    "testId": 15,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Welche Höchstgeschwindigkeit gilt auf Schweizer Autostrassen (grünes Autoschild)?",
    "options": [
      {
        "id": "a",
        "text": "100 km/h (sofern nicht durch Schilder anders geregelt).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "120 km/h wie auf der Autobahn.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "80 km/h wie ausserorts.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Auf Autostrassen gilt für Personenwagen generell Höchsttempo 100 km/h (Art. 4a Abs. 1 Bst. c VRV).",
    "ruleReference": "Art. 4a VRV"
  },
  {
    "id": 376,
    "testId": 16,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Darf man ohne zwingenden Grund so langsam fahren, dass der Verkehrsfluss wesentlich behindert wird?",
    "options": [
      {
        "id": "a",
        "text": "Nein, grundloses Langsamfahren ('Schleichen') behindert den Verkehrsfluss, provoziert riskante Überholmanöver und ist verboten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, man darf beliebig langsam fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur nachts verboten.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Ohne zwingenden Grund darf kein Fahrzeugführer so langsam fahren, dass er den Verkehrsfluss behindert (Art. 4 Abs. 2 VRV).",
    "ruleReference": "Art. 4 Abs. 2 VRV"
  },
  {
    "id": 377,
    "testId": 17,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Was müssen Sie bei tief stehender Sonne im Herbst bezüglich Geschwindigkeit beachten?",
    "options": [
      {
        "id": "a",
        "text": "Geschwindigkeit sofort reduzieren und Sonnenblende nutzen; akute Blendgefahr und Gefahr des Übersehens von Fussgängern.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Vollgas geben, um schnell am Schatten zu sein.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Fernlicht einschalten.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Tiefe Sonne blendet extrem. Scheiben sauber halten und Geschwindigkeit anpassen (Art. 32 SVG).",
    "ruleReference": "Art. 32 SVG"
  },
  {
    "id": 378,
    "testId": 18,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Welche Geschwindigkeit gilt beim Abschleppen eines defekten Fahrzeugs mit Seil oder Stange?",
    "options": [
      {
        "id": "a",
        "text": "Höchstens 40 km/h auf allen Strassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Maximal 80 km/h ausserorts.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Maximal 60 km/h.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Beim Abschleppen von Motorfahrzeugen beträgt die Höchstgeschwindigkeit aus Sicherheitsgründen 40 km/h (Art. 43 VRV).",
    "ruleReference": "Art. 43 VRV"
  },
  {
    "id": 379,
    "testId": 19,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Darf man auf der Autobahn den Beschleunigungsstreifen voll ausnutzen, um sich mit passender Geschwindigkeit einzufädeln?",
    "options": [
      {
        "id": "a",
        "text": "Ja, der Beschleunigungsstreifen soll über die gesamte Länge zügig genutzt werden, um sich dem Tempo des Autobahnverkehrs anzugleichen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nein, man muss sofort am Anfang einscheren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Man muss am Anfang stoppen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Der Beschleunigungsstreifen dient dem Erreichen der Reisegeschwindigkeit. Erst bei passender Lücke einfädeln (Art. 36 VRV).",
    "ruleReference": "Art. 36 VRV"
  },
  {
    "id": 380,
    "testId": 20,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Was gilt bei einer Panne auf der Autobahn, wenn das Fahrzeug auf der Fahrbahn liegenbleibt und nicht mehr rollt?",
    "options": [
      {
        "id": "a",
        "text": "Warnblinker an, Warnweste anziehen, Insassen sofort hinter die Leitplanke bringen, Pannendreieck mind. 100 m vorher aufstellen und Notruf 117 wählen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Im Auto sitzen bleiben und die Notbremse ziehen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Das Auto mit Passagieren von Hand anschieben.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Liegenbleiben auf der Fahrbahn ist lebensgefährlich. Eigensicherung hinter der Leitplanke hat oberste Priorität (Art. 54 VRV).",
    "ruleReference": "Art. 54 VRV"
  },
  {
    "id": 381,
    "testId": 1,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Was bedeutet das Verbot des Rechtsüberholens auf der Autobahn im Detail?",
    "options": [
      {
        "id": "a",
        "text": "Ausscheren nach rechts, Beschleunigen, Vorbeifahren am linken Auto und Wiedereinscheren nach links ist strikt verboten (hohe Busse & Ausweisentzug).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Man darf rechts überholen, wenn man blinkt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Rechtsüberholen ist ab 100 km/h erlaubt.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Rechtsüberholen ist ein schweres Verkehrsdelikt. Nur passives Rechtsvorbeifahren bei stockenden Kolonnen ist erlaubt (Art. 36 VRV).",
    "ruleReference": "Art. 36 VRV"
  },
  {
    "id": 382,
    "testId": 2,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Welche Spurwahl gilt auf einer 3-spurigen Autobahn bei dichtem Verkehr?",
    "options": [
      {
        "id": "a",
        "text": "Grundsätzlich die rechte Spur benutzen; die mittlere und linke Spur dienen ausschliesslich dem Überholen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Immer auf der Mittelspur bleiben.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Freie Spurwahl wie in den USA.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Das Rechtsfahrgebot gilt auch auf dreispurigen Autobahnen. Permanentes Mittelspurschleichen ist unzulässig (Art. 34 SVG).",
    "ruleReference": "Art. 34 SVG"
  },
  {
    "id": 383,
    "testId": 3,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Wie verhalten Sie sich bei einer Tunnelfahrt, wenn der Verkehr vor Ihnen zum völligen Stillstand kommt?",
    "options": [
      {
        "id": "a",
        "text": "Warnblinker einschalten, mindestens 5 Meter Abstand zum Vorderfahrzeug halten, Motor abstellen, Radio (Verkehrsfunk) anlassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Dicht auffahren und hupen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Aussteigen und im Tunnel spazieren gehen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Abstand im Tunnelstau verhindert Kettenreaktionen und lässt Raum für Fluchtwege; Motor abstellen reduziert Abgase (Art. 39a VRV).",
    "ruleReference": "Art. 39a VRV"
  },
  {
    "id": 384,
    "testId": 4,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Welche Grenze gilt für qualifizierte Trunkenheit mit zwingendem Ausweisentzug für mindestens 3 Monate?",
    "options": [
      {
        "id": "a",
        "text": "Ab 0.80 Promille (bzw. 0.40 mg/l Atemalkohol).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ab 0.50 Promille.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ab 1.20 Promille.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Ab 0.80 ‰ liegt eine schwere Verkehrsregelverletzung vor, die zwingend mindestens 3 Monate Entzug nach sich zieht (Art. 16c SVG).",
    "ruleReference": "Art. 16c SVG"
  },
  {
    "id": 385,
    "testId": 5,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Darf man bei einer Panne oder einem Unfall die Autobahnfahrbahn überqueren, um das Pannendreieck auf der anderen Seite zu holen?",
    "options": [
      {
        "id": "a",
        "text": "Nein, das Betreten oder Überqueren der Autobahnfahrbahn zu Fuss ist strengstens verboten und lebensgefährlich.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, wenn gerade keine Autos kommen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, mit hochgehaltener Hand.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Fussgänger dürfen Autobahnen unter keinen Umständen betreten oder queren (Art. 35 VRV).",
    "ruleReference": "Art. 35 VRV"
  },
  {
    "id": 386,
    "testId": 6,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Welche Pflicht besteht bezüglich der Reifen bei winterlichen Strassenverhältnissen?",
    "options": [
      {
        "id": "a",
        "text": "Fahrzeuge müssen jederzeit betriebssicher beherrscht werden können; wer mit ungeeigneten Reifen den Verkehr behindert oder verunfallt, haftet und wird bestraft.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Winterreifen sind vom 1. Oktober bis 1. Mai vorgeschrieben.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Sommerreifen sind im Winter verboten.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Die Schweiz kennt keine kalendarische Winterreifenpflicht, aber die Pflicht zur Beherrschung des Fahrzeugs (Art. 29 SVG / Art. 3 VRV).",
    "ruleReference": "Art. 29 SVG"
  },
  {
    "id": 387,
    "testId": 7,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Welche Sicherung ist für lose Gegenstände auf der Rückbank oder im Kofferraum vorgeschrieben?",
    "options": [
      {
        "id": "a",
        "text": "Sie müssen so gesichert werden, dass sie bei einer Vollbremsung oder Kollision nicht nach vorne geschleudert werden und Insassen verletzen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Keine, wenn der Kofferraumdeckel zu ist.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur bei Gegenständen über 50 kg.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Ungesicherte Gegenstände werden bei Aufprall zu tödlichen Geschossen. Ladungssicherung ist Pflicht (Art. 73 VRV).",
    "ruleReference": "Art. 73 VRV"
  },
  {
    "id": 388,
    "testId": 8,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Was droht bei der Einnahme von Schlafmitteln vor Fahrtantritt?",
    "options": [
      {
        "id": "a",
        "text": "Gefahr von schwerer Fahruntüchtigkeit ('Hangover-Effekt'); bei Unfall droht Verurteilung wegen Fahrens in fahrunfähigem Zustand.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nichts, wenn das Medikament vom Arzt stammt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur ein Verwarnungsgeld.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Medikamente können die Reaktionszeit gravierend beeinträchtigen. Fahren unter Medikamenteneinfluss ist strafbar (Art. 31 SVG).",
    "ruleReference": "Art. 31 SVG"
  },
  {
    "id": 389,
    "testId": 9,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Was bedeutet das Aufleuchten der gelben Motorkontrollleuchte (Check Engine) während der Fahrt?",
    "options": [
      {
        "id": "a",
        "text": "Störung in der Motorsteuerung oder der Abgasreinigungsanlage; Werkstatt aufsuchen und Ursache diagnostizieren lassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sofortige Vollbremsung auf der Spur.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ölstand ist zu hoch.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Die Motorkontrollleuchte signalisiert abgas- oder verbrennungsrelevante Fehler im Motormanagement (VTS).",
    "ruleReference": "Fahrzeugtechnik VTS"
  },
  {
    "id": 390,
    "testId": 10,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Warum darf ein Fahrzeug mit Katalysator nicht durch Anschleppen oder Anschieben gestartet werden, wenn unverbrannter Treibstoff im Auspuff ist?",
    "options": [
      {
        "id": "a",
        "text": "Unverbrannter Kraftstoff kann in den heissen Katalysator gelangen und diesen durch Verbrennung zerstören.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Die Lichtmaschine explodiert.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Die Bremsen blockieren.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Treibstoff im Katalysator verbrennt explosionsartig und schmilzt den Keramikkörper des Katalysators (Technik-Leitfaden).",
    "ruleReference": "Technik VTS"
  },
  {
    "id": 391,
    "testId": 11,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Welche Flüssigkeit gehört in den Ausgleichsbehälter der Scheibenwaschanlage im Winter?",
    "options": [
      {
        "id": "a",
        "text": "Wasser gemischt mit ausreichend frostsicherem Scheibenreiniger (bis mind. -20 °C).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Reines Spülmittel ohne Wasser.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Heisses Motorenöl.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Frostschutz verhindert das Einfrieren der Spritzdüsen und Schläuche bei Minusgraden (Art. 57 VRV).",
    "ruleReference": "Art. 57 VRV"
  },
  {
    "id": 392,
    "testId": 12,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Welche Profiltiefe wird vom TCS für Winterreifen aus Sicherheitsgründen empfohlen?",
    "options": [
      {
        "id": "a",
        "text": "Mindestens 4 mm (gesetzliches Minimum ist 1.6 mm, bietet aber auf Schnee kaum noch Grip).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Mindestens 8 mm.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "1.0 mm genügt.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Unter 4 mm verlieren Winterreifen ihre Lamellenwirkung auf Schnee drastisch (TCS Sicherheitsempfehlung).",
    "ruleReference": "TCS Reifentest"
  },
  {
    "id": 393,
    "testId": 13,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Welche Lärmschutzregel gilt beim Schliessen von Türen, Motorhaube und Kofferraumdeckel nachts in Wohnquartieren?",
    "options": [
      {
        "id": "a",
        "text": "Türen und Klappen leise und ohne unnötiges Zuknallen schliessen (Vermeidung von Ruhestörung).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Möglichst laut zuschlagen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Es gibt keine Vorschriften.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Art. 33 VRV untersagt unnötigen Lärm, namentlich das laute Zuschlagen von Wagentüren in Wohngebieten.",
    "ruleReference": "Art. 33 VRV"
  },
  {
    "id": 394,
    "testId": 14,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Ein Postauto schaltet an einer Kreuzung das Signalhorn ein. Was müssen Sie tun?",
    "options": [
      {
        "id": "a",
        "text": "Dem Postauto unverzüglich freie Bahn gewähren, da Linienbusse auf Bergpoststrassen Vorrang haben.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Vor dem Postauto schnell abbiegen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Zurückhupen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Das Dreiklanghorn verpflichtet auf Bergpoststrassen zur Vorfahrtgewährung und Platzfreigabe (Art. 9 VRV).",
    "ruleReference": "Art. 9 VRV"
  },
  {
    "id": 395,
    "testId": 15,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Sie stehen an einer roten Ampel mit einem Schild 'Grünpfeil für Velos'. Gilt der Grünpfeil auch für Ihr Auto?",
    "options": [
      {
        "id": "a",
        "text": "Nein, der Grünpfeil gilt ausschliesslich für Fahrräder und Mofas. Autos müssen bei Rot warten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, alle Rechtsabbieger dürfen fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, nach kurzem Halt.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Das Signal 5.18 gilt explizit nur für Zweiräder. Autos begehen bei Missachtung einen Rotlichtverstoss (Art. 69a SSV).",
    "ruleReference": "Art. 69a SSV"
  },
  {
    "id": 396,
    "testId": 16,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Darf man auf einem Autobahnparkplatz übernachten?",
    "options": [
      {
        "id": "a",
        "text": "Das einmalige Wiederherstellen der Fahrfähigkeit (Schlafen im Auto zur Erholung) ist zulässig; Campieren mit Zelt oder Markise ist verboten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nein, Schlafen im Auto ist generell strafbar.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, man darf dort wochenlang wohnen.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Das Ausruhen zur Wiederherstellung der Fahrfähigkeit ist auf Raststätten erlaubt, echtes Campieren dagegen kantonal untersagt.",
    "ruleReference": "ASTRA Richtlinien Rastplätze"
  },
  {
    "id": 397,
    "testId": 17,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Was gilt an einer Verzweigung, wenn zwei Strassen zusammentreffen und beide ein 'Kein Vortritt'-Signal haben?",
    "options": [
      {
        "id": "a",
        "text": "Unter den beiden vortrittsbelasteten Fahrzeugen gilt untereinander der Rechtsvortritt.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Wer zuerst hupt, darf fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Beide müssen rückwärts fahren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Haben beide Einmündungen das gleiche Signal 'Kein Vortritt', regelt sich ihr Verhältnis untereinander nach dem Rechtsvortritt (Art. 36 SVG). Beliebte Fangfrage!",
    "ruleReference": "Art. 36 SVG"
  },
  {
    "id": 398,
    "testId": 18,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Darf ein Fahrzeug mit defekter Scheibenwaschanlage bei Schneematsch weitergefahren werden?",
    "options": [
      {
        "id": "a",
        "text": "Nein, das Fahrzeug ist wegen Sichtbehinderung nicht mehr in vorschriftsgemässem Zustand; Weiterfahrt verboten bis zur Behebung.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, man kann die Scheibe während der Fahrt mit der Hand putzen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, wenn man die Seitenscheibe öffnet.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Ohne funktionierende Waschanlage bei Salz und Matsch erblindet die Frontscheibe innerhalb weniger Meter (Art. 57 VRV).",
    "ruleReference": "Art. 57 VRV"
  },
  {
    "id": 399,
    "testId": 19,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Offizielle ASA-Situation: Sie stehen an einer Einmündung vor einem Stopsignal. Die Sicht ist durch parkierte Autos behindert. Wo halten Sie an?",
    "options": [
      {
        "id": "a",
        "text": "Zuerst an der Haltelinie vollkommen anhalten, danach langsam bis zur Sichtlinie vortasten und nötigenfalls erneut anhalten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Direkt mitten auf die Kreuzung fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur hupen und ohne Halt weiterfahren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Bei behinderter Sicht muss zuerst an der Haltelinie gestoppt werden. Danach tastet man sich vorsichtig zur Sichtgrenze vor (Art. 36 SSV).",
    "ruleReference": "Art. 36 SSV"
  },
  {
    "id": 400,
    "testId": 20,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Offizielle ASA-Situation: Ein Linienbus signalisiert innerorts das Verlassen einer Haltestelle. Sie nähern sich mit 50 km/h von hinten. Was tun Sie?",
    "options": [
      {
        "id": "a",
        "text": "Geschwindigkeit verringern, bremsbereit sein und dem Bus das Einspuren ermöglichen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sofort Vollgas geben, um vor dem Bus durchzuziehen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Auf den Gehsteig ausweichen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Innerorts ist Linienbussen das Wegfahren von Haltestellen durch Temporeduktion zu ermöglichen (Art. 15 Abs. 4 VRV).",
    "ruleReference": "Art. 15 Abs. 4 VRV"
  },
  {
    "id": 401,
    "testId": 1,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Offizielle ASA-Situation: Ein Tram fährt auf der Strasse hinter Ihnen. Sie möchten links abbiegen und müssen wegen Gegenverkehr warten. Was beachten Sie?",
    "options": [
      {
        "id": "a",
        "text": "Sie dürfen die Schienen nur blockieren, wenn das Tram dadurch nicht behindert wird; andernfalls weiterfahren oder Tram passieren lassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Das Tram muss immer hinter wartenden Autos warten.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Man darf die Schienen beliebig lange blockieren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Schienenfahrzeuge dürfen durch wartende Linksabbieger nicht unnötig behindert werden (Art. 38 SVG / Art. 13 VRV).",
    "ruleReference": "Art. 38 SVG"
  },
  {
    "id": 402,
    "testId": 2,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Offizielle ASA-Situation: Wer hat auf einer schmalen Brücke ohne Vortrittsschilder Vorrang beim gleichzeitigen Eintreffen zweier Autos?",
    "options": [
      {
        "id": "a",
        "text": "Es gilt der Rechtsvortritt bzw. das Fahrzeug, das das Hindernis auf seiner Seite hat, muss warten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Das schnellere Fahrzeug.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Das grössere Fahrzeug.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Wer das Hindernis auf seiner Strassenseite hat, muss warten (Art. 9 VRV). Ansonsten gilt der Rechtsvortritt oder gegenseitige Verständigung.",
    "ruleReference": "Art. 9 VRV"
  },
  {
    "id": 403,
    "testId": 3,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Offizielle ASA-Situation: Sie fahren auf einer Vorfahrtsstrasse und möchten nach links in eine Seitenstrasse abbiegen. Ein Fussgänger quert die Seitenstrasse. Wer hat Vortritt?",
    "options": [
      {
        "id": "a",
        "text": "Der Fussgänger hat Vorrang vor dem abbiegenden Fahrzeug.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sie haben Vortritt, weil Sie von der Vorfahrtsstrasse kommen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Wer schneller ist.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Abbiegende Fahrzeuge müssen Fussgängern, die die Querstrasse überschreiten, stets den Vortritt lassen (Art. 33 SVG).",
    "ruleReference": "Art. 33 SVG"
  },
  {
    "id": 404,
    "testId": 4,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Offizielle ASA-Situation: Sie kommen an eine Kreuzung mit Kreisverkehr. Ein Radfahrer befindet sich bereits im Kreisel vor Ihnen. Dürfen Sie ihn im Kreisel überholen?",
    "options": [
      {
        "id": "a",
        "text": "Nein, im Kreisel sollte wegen des geringen Raumes und der Richtungsänderungen nicht überholt werden; Sicherheitsabstand halten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, mit mindestens 60 km/h.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, wenn man hupt.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Das Überholen im Kreisel ist wegen enger Radien extrem gefährlich. Radfahrer dürfen in der Fahrbahnmitte fahren (Art. 41b VRV).",
    "ruleReference": "Art. 41b VRV"
  },
  {
    "id": 405,
    "testId": 5,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Offizielle ASA-Situation: Ein Polizeiauto mit eingeschaltetem Blaulicht (ohne Sirene) steht an einer roten Ampel. Die Ampel schaltet auf Grün. Darf die Polizei vor Ihnen fahren?",
    "options": [
      {
        "id": "a",
        "text": "Ja, Einsatzfahrzeuge haben auch mit Blaulicht allein Vorrang und sind zügig passieren zu lassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nein, ohne Sirene hat die Polizei keinerlei Rechte.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur wenn ein Notarzt drin sitzt.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Blaulicht zeigt eine dringliche Dienstfahrt an (Art. 27 SVG). Andere Verkehrsteilnehmer müssen die Fahrbahn unverzüglich freigeben.",
    "ruleReference": "Art. 27 SVG"
  },
  {
    "id": 406,
    "testId": 6,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Offizielle ASA-Situation: Sie möchten aus einer verkehrsberuhigten Begegnungszone (20 km/h) in eine Tempo-30-Zone einfahren. Wer hat Vortritt?",
    "options": [
      {
        "id": "a",
        "text": "Der Verkehr in der Tempo-30-Zone; wer aus einer Begegnungszone ausfährt, hat keinen Rechtsvortritt.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sie haben Rechtsvortritt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Wer zuerst an der Kreuzung ist.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Ausfahrten aus Begegnungszonen, Fussgängerzonen und Grundstücken sind gegenüber dem fliessenden Verkehr nachrangig (Art. 15 Abs. 3 VRV).",
    "ruleReference": "Art. 15 Abs. 3 VRV"
  },
  {
    "id": 407,
    "testId": 7,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Offizielle ASA-Situation: An einer Kreuzung fällt die Ampel aus (gelbes Blinklicht). Ein Schild zeigt 'Hauptstrasse' für Ihre Richtung. Wer hat Vortritt?",
    "options": [
      {
        "id": "a",
        "text": "Sie haben Vortritt vor dem Querverkehr, da bei Ampelausfall die signalisierten Schilder gelten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Es gilt automatischer Rechtsvortritt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Alle müssen anhalten.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Bei gelbem Blinklicht oder Ausfall der Lichtsignalanlage gelten die angebrachten Vortrittsschilder (Art. 68 SSV).",
    "ruleReference": "Art. 68 SSV"
  },
  {
    "id": 408,
    "testId": 8,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Offizielle ASA-Situation: Sie stehen als zweites Fahrzeug hinter einem an der Haltelinie wartenden Auto vor einem Stopsignal. Das vordere Auto fährt ab. Dürfen Sie direkt folgen?",
    "options": [
      {
        "id": "a",
        "text": "Nein, jedes Fahrzeug muss für sich selbst an der Haltelinie anhalten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, wenn kein Querverkehr zu sehen ist.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, wenn man dicht aufschliesst.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Die Stopp-Pflicht gilt individuell für jedes einzelne Fahrzeug an der Haltelinie (Art. 36 SSV). Kein 'Durchrutschen'!",
    "ruleReference": "Art. 36 SSV"
  },
  {
    "id": 409,
    "testId": 9,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Offizielle ASA-Situation: Was bedeutet das Signal 'Rechtsabbiegen für Radfahrer gestattet bei Rot' (Signal mit grünem Velo und Pfeil an der Ampel)?",
    "options": [
      {
        "id": "a",
        "text": "Radfahrer und Mofas dürfen bei rotem Lichtsignal nach rechts abbiegen, müssen aber Fussgängern und dem Querverkehr den Vortritt lassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Alle Autos dürfen bei Rot rechts abbiegen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Radfahrer müssen absteigen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Seit 2021 dürfen Velos und Mofas bei roter Ampel mit diesem Zusatzschild vorsichtig rechts abbiegen (Art. 69a SSV).",
    "ruleReference": "Art. 69a SSV"
  },
  {
    "id": 410,
    "testId": 10,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Offizielle ASA-Situation: Was bedeutet das Signal 'Pannensignal' (Signal 2.47 'Halteverbot auf dem Pannenstreifen')?",
    "options": [
      {
        "id": "a",
        "text": "Auf dem Pannenstreifen darf auch bei Panne nicht gehalten werden (sofern Gefahrenzone), Weiterrollen bis zur nächsten Bucht zwingend.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Pannenstreifen ist frei für alle.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Parkplatz für Wohnwagen.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Verbietet das Halten selbst bei Notfällen an besonders engen oder gefährlichen Tunnel- und Brückenstellen (Art. 30 SSV).",
    "ruleReference": "Art. 30 SSV"
  },
  {
    "id": 411,
    "testId": 11,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Offizielle ASA-Situation: Was bedeutet das Hinweissignal 'Standort eines Defibrillators' (grünes Quadrat mit weissem Herz und Blitz)?",
    "options": [
      {
        "id": "a",
        "text": "Zeigt den genauen Standort eines öffentlich zugänglichen automatisierten Defibrillators (AED) für Notfälle an.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Spital in 1 km.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Elektroauto-Ladesäule.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Weist Ersthelfer auf lebensrettende Defibrillatoren bei plötzlichem Herzstillstand hin.",
    "ruleReference": "Art. 62 SSV"
  },
  {
    "id": 412,
    "testId": 12,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Offizielle ASA-Situation: Was bedeutet eine gelbe Zickzack-Linie vor einer Bushaltestelle?",
    "options": [
      {
        "id": "a",
        "text": "Haltestelle für öffentliche Busse; Halten nur kurz zum Ein- und Aussteigen gestattet, sofern kein Bus behindert wird (Parkieren verboten).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Parkplatz für Taxis.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Strecke mit vielen Schlaglöchern.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Die gelbe Zickzacklinie (Art. 79a SSV) markiert ÖV-Haltestellen. Parkieren ist absolut verboten.",
    "ruleReference": "Art. 79a SSV"
  },
  {
    "id": 413,
    "testId": 13,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Offizielle ASA-Situation: Was bedeutet das Signal 'Verbot für Motorwagen und Motorräder' (Auto und Motorrad im roten Kreis)?",
    "options": [
      {
        "id": "a",
        "text": "Einfahrtsverbot für alle mehrspurigen Motorfahrzeuge und alle Motorräder; Fahrräder und Mofas dürfen passieren.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nur für LKW gesperrt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Verbot für Fahrräder.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 2.13 untersagt das Befahren für Motorwagen und Motorräder (Art. 19 SSV).",
    "ruleReference": "Art. 19 SSV"
  },
  {
    "id": 414,
    "testId": 14,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Offizielle ASA-Situation: Was bedeutet ein blaues quadratisches Schild mit weissem Pfeil geradeaus und dem Zusatz 'Einbahn'?",
    "options": [
      {
        "id": "a",
        "text": "Einbahnstrasse: Die Strasse darf nur in Pfeilrichtung befahren werden; Gegenverkehr ist nicht zulässig.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Pflicht zum Wenden am Ende.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur für Busse.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 4.08 kennzeichnet Einbahnstrassen (Art. 46 SSV).",
    "ruleReference": "Art. 46 SSV"
  },
  {
    "id": 415,
    "testId": 15,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Offizielle ASA-Situation: Was bedeutet das Signal 'Spur für Busse' (blaue runde Tafel mit gelbem Bus-Symbol)?",
    "options": [
      {
        "id": "a",
        "text": "Dieser Fahrstreifen ist Linienbussen vorbehalten; andere Fahrzeuge dürfen ihn nicht benützen (ausser Taxis, wenn signalisiert).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Busse dürfen hier nicht fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Parkplatz für Reisebusse.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Busstreifen (Art. 34 SSV) sind dem Linienverkehr vorbehalten. Unberechtigtes Befahren wird gebüsst.",
    "ruleReference": "Art. 34 SSV"
  },
  {
    "id": 416,
    "testId": 16,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Offizielle ASA-Situation: Was bedeutet ein rot-weisser Richtungspfeil auf einer Warntafel (Kurvenleittafel)?",
    "options": [
      {
        "id": "a",
        "text": "Kündigt eine besonders scharfe und gefährliche Kurve an; Richtungspfeil zeigt den Kurvenverlauf.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Zeigt eine Ausfahrt an.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Gilt nur für Lastwagen.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Kurvenleittafeln (Signal 1.01/1.02) weisen auf gefährlich enge Kurvenradien hin (Art. 5 SSV).",
    "ruleReference": "Art. 5 SSV"
  },
  {
    "id": 417,
    "testId": 17,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Offizielle ASA-Situation: Was bedeutet ein weisses rundes Schild mit rotem Rand und einem schwarzen Velo?",
    "options": [
      {
        "id": "a",
        "text": "Verbot für Fahrräder und Motorfahrräder (Mofas).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Radweg obligatorisch.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Achtung Radfahrer.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 2.06 verbietet das Fahren mit Fahrrädern und Mofas (Art. 19 SSV).",
    "ruleReference": "Art. 19 SSV"
  },
  {
    "id": 418,
    "testId": 18,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Offizielle ASA-Situation: Was bedeutet das Signal 'Tunnel' (Signal 4.07)?",
    "options": [
      {
        "id": "a",
        "text": "Kündigt die Einfahrt in einen Tunnel an: Abblendlicht obligatorisch, Sonnenbrille abnehmen, Wenden und Rückwärtsfahren verboten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Baustelle voraus.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Überdachter Parkplatz.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 4.07 mahnt zu tunnelgerechtem Verhalten (Abblendlicht, Abstand, Rauchvermeidung) (Art. 45 SSV).",
    "ruleReference": "Art. 45 SSV"
  },
  {
    "id": 419,
    "testId": 19,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Offizielle ASA-Situation: Welche Höchstgeschwindigkeit gilt innerorts für Motorräder und Personenwagen, wenn keine Schilder vorhanden sind?",
    "options": [
      {
        "id": "a",
        "text": "Generell 50 km/h.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Generell 60 km/h.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Generell 40 km/h.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "In geschlossenen Ortschaften gilt in der Schweiz generell Höchstgeschwindigkeit 50 km/h (Art. 4a VRV).",
    "ruleReference": "Art. 4a VRV"
  },
  {
    "id": 420,
    "testId": 20,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Offizielle ASA-Situation: Wie gross ist der Reaktionsweg bei einer Geschwindigkeit von 100 km/h bei 1 Sekunde Reaktionszeit (Faustformel)?",
    "options": [
      {
        "id": "a",
        "text": "Ca. 30 Meter (100 / 10 * 3 = 30 m).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "10 Meter.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "100 Meter.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Der Reaktionsweg berechnet sich nach der Faustformel (Geschwindigkeit / 10) * 3 = 30 Meter.",
    "ruleReference": "Fahrschul-Physik"
  },
  {
    "id": 421,
    "testId": 1,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Offizielle ASA-Situation: Wie gross ist der gesamte Anhalteweg bei 50 km/h auf trockener Strasse bei normaler Bremsung (Faustformel)?",
    "options": [
      {
        "id": "a",
        "text": "Ca. 40 Meter (15 m Reaktionsweg + 25 m Bremsweg).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "10 Meter.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "80 Meter.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Anhalteweg = Reaktionsweg ((50/10)*3 = 15m) + Bremsweg ((50/10)*(50/10) = 25m) = 40 Meter.",
    "ruleReference": "Fahrschul-Physik"
  },
  {
    "id": 422,
    "testId": 2,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Offizielle ASA-Situation: Welche Höchstgeschwindigkeit gilt auf Schweizer Autostrassen (grünes Autoschild)?",
    "options": [
      {
        "id": "a",
        "text": "100 km/h (sofern nicht durch Schilder anders geregelt).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "120 km/h wie auf der Autobahn.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "80 km/h wie ausserorts.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Auf Autostrassen gilt für Personenwagen generell Höchsttempo 100 km/h (Art. 4a Abs. 1 Bst. c VRV).",
    "ruleReference": "Art. 4a VRV"
  },
  {
    "id": 423,
    "testId": 3,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Offizielle ASA-Situation: Darf man ohne zwingenden Grund so langsam fahren, dass der Verkehrsfluss wesentlich behindert wird?",
    "options": [
      {
        "id": "a",
        "text": "Nein, grundloses Langsamfahren ('Schleichen') behindert den Verkehrsfluss, provoziert riskante Überholmanöver und ist verboten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, man darf beliebig langsam fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur nachts verboten.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Ohne zwingenden Grund darf kein Fahrzeugführer so langsam fahren, dass er den Verkehrsfluss behindert (Art. 4 Abs. 2 VRV).",
    "ruleReference": "Art. 4 Abs. 2 VRV"
  },
  {
    "id": 424,
    "testId": 4,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Offizielle ASA-Situation: Was müssen Sie bei tief stehender Sonne im Herbst bezüglich Geschwindigkeit beachten?",
    "options": [
      {
        "id": "a",
        "text": "Geschwindigkeit sofort reduzieren und Sonnenblende nutzen; akute Blendgefahr und Gefahr des Übersehens von Fussgängern.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Vollgas geben, um schnell am Schatten zu sein.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Fernlicht einschalten.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Tiefe Sonne blendet extrem. Scheiben sauber halten und Geschwindigkeit anpassen (Art. 32 SVG).",
    "ruleReference": "Art. 32 SVG"
  },
  {
    "id": 425,
    "testId": 5,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Offizielle ASA-Situation: Welche Geschwindigkeit gilt beim Abschleppen eines defekten Fahrzeugs mit Seil oder Stange?",
    "options": [
      {
        "id": "a",
        "text": "Höchstens 40 km/h auf allen Strassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Maximal 80 km/h ausserorts.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Maximal 60 km/h.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Beim Abschleppen von Motorfahrzeugen beträgt die Höchstgeschwindigkeit aus Sicherheitsgründen 40 km/h (Art. 43 VRV).",
    "ruleReference": "Art. 43 VRV"
  },
  {
    "id": 426,
    "testId": 6,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Offizielle ASA-Situation: Darf man auf der Autobahn den Beschleunigungsstreifen voll ausnutzen, um sich mit passender Geschwindigkeit einzufädeln?",
    "options": [
      {
        "id": "a",
        "text": "Ja, der Beschleunigungsstreifen soll über die gesamte Länge zügig genutzt werden, um sich dem Tempo des Autobahnverkehrs anzugleichen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nein, man muss sofort am Anfang einscheren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Man muss am Anfang stoppen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Der Beschleunigungsstreifen dient dem Erreichen der Reisegeschwindigkeit. Erst bei passender Lücke einfädeln (Art. 36 VRV).",
    "ruleReference": "Art. 36 VRV"
  },
  {
    "id": 427,
    "testId": 7,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Offizielle ASA-Situation: Was gilt bei einer Panne auf der Autobahn, wenn das Fahrzeug auf der Fahrbahn liegenbleibt und nicht mehr rollt?",
    "options": [
      {
        "id": "a",
        "text": "Warnblinker an, Warnweste anziehen, Insassen sofort hinter die Leitplanke bringen, Pannendreieck mind. 100 m vorher aufstellen und Notruf 117 wählen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Im Auto sitzen bleiben und die Notbremse ziehen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Das Auto mit Passagieren von Hand anschieben.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Liegenbleiben auf der Fahrbahn ist lebensgefährlich. Eigensicherung hinter der Leitplanke hat oberste Priorität (Art. 54 VRV).",
    "ruleReference": "Art. 54 VRV"
  },
  {
    "id": 428,
    "testId": 8,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Offizielle ASA-Situation: Was bedeutet das Verbot des Rechtsüberholens auf der Autobahn im Detail?",
    "options": [
      {
        "id": "a",
        "text": "Ausscheren nach rechts, Beschleunigen, Vorbeifahren am linken Auto und Wiedereinscheren nach links ist strikt verboten (hohe Busse & Ausweisentzug).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Man darf rechts überholen, wenn man blinkt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Rechtsüberholen ist ab 100 km/h erlaubt.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Rechtsüberholen ist ein schweres Verkehrsdelikt. Nur passives Rechtsvorbeifahren bei stockenden Kolonnen ist erlaubt (Art. 36 VRV).",
    "ruleReference": "Art. 36 VRV"
  },
  {
    "id": 429,
    "testId": 9,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Offizielle ASA-Situation: Welche Spurwahl gilt auf einer 3-spurigen Autobahn bei dichtem Verkehr?",
    "options": [
      {
        "id": "a",
        "text": "Grundsätzlich die rechte Spur benutzen; die mittlere und linke Spur dienen ausschliesslich dem Überholen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Immer auf der Mittelspur bleiben.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Freie Spurwahl wie in den USA.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Das Rechtsfahrgebot gilt auch auf dreispurigen Autobahnen. Permanentes Mittelspurschleichen ist unzulässig (Art. 34 SVG).",
    "ruleReference": "Art. 34 SVG"
  },
  {
    "id": 430,
    "testId": 10,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Offizielle ASA-Situation: Wie verhalten Sie sich bei einer Tunnelfahrt, wenn der Verkehr vor Ihnen zum völligen Stillstand kommt?",
    "options": [
      {
        "id": "a",
        "text": "Warnblinker einschalten, mindestens 5 Meter Abstand zum Vorderfahrzeug halten, Motor abstellen, Radio (Verkehrsfunk) anlassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Dicht auffahren und hupen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Aussteigen und im Tunnel spazieren gehen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Abstand im Tunnelstau verhindert Kettenreaktionen und lässt Raum für Fluchtwege; Motor abstellen reduziert Abgase (Art. 39a VRV).",
    "ruleReference": "Art. 39a VRV"
  },
  {
    "id": 431,
    "testId": 11,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Offizielle ASA-Situation: Welche Grenze gilt für qualifizierte Trunkenheit mit zwingendem Ausweisentzug für mindestens 3 Monate?",
    "options": [
      {
        "id": "a",
        "text": "Ab 0.80 Promille (bzw. 0.40 mg/l Atemalkohol).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ab 0.50 Promille.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ab 1.20 Promille.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Ab 0.80 ‰ liegt eine schwere Verkehrsregelverletzung vor, die zwingend mindestens 3 Monate Entzug nach sich zieht (Art. 16c SVG).",
    "ruleReference": "Art. 16c SVG"
  },
  {
    "id": 432,
    "testId": 12,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Offizielle ASA-Situation: Darf man bei einer Panne oder einem Unfall die Autobahnfahrbahn überqueren, um das Pannendreieck auf der anderen Seite zu holen?",
    "options": [
      {
        "id": "a",
        "text": "Nein, das Betreten oder Überqueren der Autobahnfahrbahn zu Fuss ist strengstens verboten und lebensgefährlich.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, wenn gerade keine Autos kommen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, mit hochgehaltener Hand.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Fussgänger dürfen Autobahnen unter keinen Umständen betreten oder queren (Art. 35 VRV).",
    "ruleReference": "Art. 35 VRV"
  },
  {
    "id": 433,
    "testId": 13,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Offizielle ASA-Situation: Welche Pflicht besteht bezüglich der Reifen bei winterlichen Strassenverhältnissen?",
    "options": [
      {
        "id": "a",
        "text": "Fahrzeuge müssen jederzeit betriebssicher beherrscht werden können; wer mit ungeeigneten Reifen den Verkehr behindert oder verunfallt, haftet und wird bestraft.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Winterreifen sind vom 1. Oktober bis 1. Mai vorgeschrieben.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Sommerreifen sind im Winter verboten.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Die Schweiz kennt keine kalendarische Winterreifenpflicht, aber die Pflicht zur Beherrschung des Fahrzeugs (Art. 29 SVG / Art. 3 VRV).",
    "ruleReference": "Art. 29 SVG"
  },
  {
    "id": 434,
    "testId": 14,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Offizielle ASA-Situation: Welche Sicherung ist für lose Gegenstände auf der Rückbank oder im Kofferraum vorgeschrieben?",
    "options": [
      {
        "id": "a",
        "text": "Sie müssen so gesichert werden, dass sie bei einer Vollbremsung oder Kollision nicht nach vorne geschleudert werden und Insassen verletzen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Keine, wenn der Kofferraumdeckel zu ist.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur bei Gegenständen über 50 kg.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Ungesicherte Gegenstände werden bei Aufprall zu tödlichen Geschossen. Ladungssicherung ist Pflicht (Art. 73 VRV).",
    "ruleReference": "Art. 73 VRV"
  },
  {
    "id": 435,
    "testId": 15,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Offizielle ASA-Situation: Was droht bei der Einnahme von Schlafmitteln vor Fahrtantritt?",
    "options": [
      {
        "id": "a",
        "text": "Gefahr von schwerer Fahruntüchtigkeit ('Hangover-Effekt'); bei Unfall droht Verurteilung wegen Fahrens in fahrunfähigem Zustand.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nichts, wenn das Medikament vom Arzt stammt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur ein Verwarnungsgeld.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Medikamente können die Reaktionszeit gravierend beeinträchtigen. Fahren unter Medikamenteneinfluss ist strafbar (Art. 31 SVG).",
    "ruleReference": "Art. 31 SVG"
  },
  {
    "id": 436,
    "testId": 16,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Offizielle ASA-Situation: Was bedeutet das Aufleuchten der gelben Motorkontrollleuchte (Check Engine) während der Fahrt?",
    "options": [
      {
        "id": "a",
        "text": "Störung in der Motorsteuerung oder der Abgasreinigungsanlage; Werkstatt aufsuchen und Ursache diagnostizieren lassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sofortige Vollbremsung auf der Spur.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ölstand ist zu hoch.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Die Motorkontrollleuchte signalisiert abgas- oder verbrennungsrelevante Fehler im Motormanagement (VTS).",
    "ruleReference": "Fahrzeugtechnik VTS"
  },
  {
    "id": 437,
    "testId": 17,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Offizielle ASA-Situation: Warum darf ein Fahrzeug mit Katalysator nicht durch Anschleppen oder Anschieben gestartet werden, wenn unverbrannter Treibstoff im Auspuff ist?",
    "options": [
      {
        "id": "a",
        "text": "Unverbrannter Kraftstoff kann in den heissen Katalysator gelangen und diesen durch Verbrennung zerstören.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Die Lichtmaschine explodiert.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Die Bremsen blockieren.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Treibstoff im Katalysator verbrennt explosionsartig und schmilzt den Keramikkörper des Katalysators (Technik-Leitfaden).",
    "ruleReference": "Technik VTS"
  },
  {
    "id": 438,
    "testId": 18,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Offizielle ASA-Situation: Welche Flüssigkeit gehört in den Ausgleichsbehälter der Scheibenwaschanlage im Winter?",
    "options": [
      {
        "id": "a",
        "text": "Wasser gemischt mit ausreichend frostsicherem Scheibenreiniger (bis mind. -20 °C).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Reines Spülmittel ohne Wasser.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Heisses Motorenöl.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Frostschutz verhindert das Einfrieren der Spritzdüsen und Schläuche bei Minusgraden (Art. 57 VRV).",
    "ruleReference": "Art. 57 VRV"
  },
  {
    "id": 439,
    "testId": 19,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Offizielle ASA-Situation: Welche Profiltiefe wird vom TCS für Winterreifen aus Sicherheitsgründen empfohlen?",
    "options": [
      {
        "id": "a",
        "text": "Mindestens 4 mm (gesetzliches Minimum ist 1.6 mm, bietet aber auf Schnee kaum noch Grip).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Mindestens 8 mm.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "1.0 mm genügt.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Unter 4 mm verlieren Winterreifen ihre Lamellenwirkung auf Schnee drastisch (TCS Sicherheitsempfehlung).",
    "ruleReference": "TCS Reifentest"
  },
  {
    "id": 440,
    "testId": 20,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Offizielle ASA-Situation: Welche Lärmschutzregel gilt beim Schliessen von Türen, Motorhaube und Kofferraumdeckel nachts in Wohnquartieren?",
    "options": [
      {
        "id": "a",
        "text": "Türen und Klappen leise und ohne unnötiges Zuknallen schliessen (Vermeidung von Ruhestörung).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Möglichst laut zuschlagen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Es gibt keine Vorschriften.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Art. 33 VRV untersagt unnötigen Lärm, namentlich das laute Zuschlagen von Wagentüren in Wohngebieten.",
    "ruleReference": "Art. 33 VRV"
  },
  {
    "id": 441,
    "testId": 1,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Offizielle ASA-Situation: Ein Postauto schaltet an einer Kreuzung das Signalhorn ein. Was müssen Sie tun?",
    "options": [
      {
        "id": "a",
        "text": "Dem Postauto unverzüglich freie Bahn gewähren, da Linienbusse auf Bergpoststrassen Vorrang haben.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Vor dem Postauto schnell abbiegen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Zurückhupen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Das Dreiklanghorn verpflichtet auf Bergpoststrassen zur Vorfahrtgewährung und Platzfreigabe (Art. 9 VRV).",
    "ruleReference": "Art. 9 VRV"
  },
  {
    "id": 442,
    "testId": 2,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Offizielle ASA-Situation: Sie stehen an einer roten Ampel mit einem Schild 'Grünpfeil für Velos'. Gilt der Grünpfeil auch für Ihr Auto?",
    "options": [
      {
        "id": "a",
        "text": "Nein, der Grünpfeil gilt ausschliesslich für Fahrräder und Mofas. Autos müssen bei Rot warten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, alle Rechtsabbieger dürfen fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, nach kurzem Halt.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Das Signal 5.18 gilt explizit nur für Zweiräder. Autos begehen bei Missachtung einen Rotlichtverstoss (Art. 69a SSV).",
    "ruleReference": "Art. 69a SSV"
  },
  {
    "id": 443,
    "testId": 3,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Offizielle ASA-Situation: Darf man auf einem Autobahnparkplatz übernachten?",
    "options": [
      {
        "id": "a",
        "text": "Das einmalige Wiederherstellen der Fahrfähigkeit (Schlafen im Auto zur Erholung) ist zulässig; Campieren mit Zelt oder Markise ist verboten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nein, Schlafen im Auto ist generell strafbar.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, man darf dort wochenlang wohnen.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Das Ausruhen zur Wiederherstellung der Fahrfähigkeit ist auf Raststätten erlaubt, echtes Campieren dagegen kantonal untersagt.",
    "ruleReference": "ASTRA Richtlinien Rastplätze"
  },
  {
    "id": 444,
    "testId": 4,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Offizielle ASA-Situation: Was gilt an einer Verzweigung, wenn zwei Strassen zusammentreffen und beide ein 'Kein Vortritt'-Signal haben?",
    "options": [
      {
        "id": "a",
        "text": "Unter den beiden vortrittsbelasteten Fahrzeugen gilt untereinander der Rechtsvortritt.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Wer zuerst hupt, darf fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Beide müssen rückwärts fahren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Haben beide Einmündungen das gleiche Signal 'Kein Vortritt', regelt sich ihr Verhältnis untereinander nach dem Rechtsvortritt (Art. 36 SVG). Beliebte Fangfrage!",
    "ruleReference": "Art. 36 SVG"
  },
  {
    "id": 445,
    "testId": 5,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Offizielle ASA-Situation: Darf ein Fahrzeug mit defekter Scheibenwaschanlage bei Schneematsch weitergefahren werden?",
    "options": [
      {
        "id": "a",
        "text": "Nein, das Fahrzeug ist wegen Sichtbehinderung nicht mehr in vorschriftsgemässem Zustand; Weiterfahrt verboten bis zur Behebung.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, man kann die Scheibe während der Fahrt mit der Hand putzen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, wenn man die Seitenscheibe öffnet.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Ohne funktionierende Waschanlage bei Salz und Matsch erblindet die Frontscheibe innerhalb weniger Meter (Art. 57 VRV).",
    "ruleReference": "Art. 57 VRV"
  },
  {
    "id": 446,
    "testId": 6,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Sie stehen an einer Einmündung vor einem Stopsignal. Die Sicht ist durch parkierte Autos behindert. Wo halten Sie an?",
    "options": [
      {
        "id": "a",
        "text": "Zuerst an der Haltelinie vollkommen anhalten, danach langsam bis zur Sichtlinie vortasten und nötigenfalls erneut anhalten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Direkt mitten auf die Kreuzung fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur hupen und ohne Halt weiterfahren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Bei behinderter Sicht muss zuerst an der Haltelinie gestoppt werden. Danach tastet man sich vorsichtig zur Sichtgrenze vor (Art. 36 SSV).",
    "ruleReference": "Art. 36 SSV"
  },
  {
    "id": 447,
    "testId": 7,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Ein Linienbus signalisiert innerorts das Verlassen einer Haltestelle. Sie nähern sich mit 50 km/h von hinten. Was tun Sie?",
    "options": [
      {
        "id": "a",
        "text": "Geschwindigkeit verringern, bremsbereit sein und dem Bus das Einspuren ermöglichen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sofort Vollgas geben, um vor dem Bus durchzuziehen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Auf den Gehsteig ausweichen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Innerorts ist Linienbussen das Wegfahren von Haltestellen durch Temporeduktion zu ermöglichen (Art. 15 Abs. 4 VRV).",
    "ruleReference": "Art. 15 Abs. 4 VRV"
  },
  {
    "id": 448,
    "testId": 8,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Ein Tram fährt auf der Strasse hinter Ihnen. Sie möchten links abbiegen und müssen wegen Gegenverkehr warten. Was beachten Sie?",
    "options": [
      {
        "id": "a",
        "text": "Sie dürfen die Schienen nur blockieren, wenn das Tram dadurch nicht behindert wird; andernfalls weiterfahren oder Tram passieren lassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Das Tram muss immer hinter wartenden Autos warten.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Man darf die Schienen beliebig lange blockieren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Schienenfahrzeuge dürfen durch wartende Linksabbieger nicht unnötig behindert werden (Art. 38 SVG / Art. 13 VRV).",
    "ruleReference": "Art. 38 SVG"
  },
  {
    "id": 449,
    "testId": 9,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Wer hat auf einer schmalen Brücke ohne Vortrittsschilder Vorrang beim gleichzeitigen Eintreffen zweier Autos?",
    "options": [
      {
        "id": "a",
        "text": "Es gilt der Rechtsvortritt bzw. das Fahrzeug, das das Hindernis auf seiner Seite hat, muss warten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Das schnellere Fahrzeug.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Das grössere Fahrzeug.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Wer das Hindernis auf seiner Strassenseite hat, muss warten (Art. 9 VRV). Ansonsten gilt der Rechtsvortritt oder gegenseitige Verständigung.",
    "ruleReference": "Art. 9 VRV"
  },
  {
    "id": 450,
    "testId": 10,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Sie fahren auf einer Vorfahrtsstrasse und möchten nach links in eine Seitenstrasse abbiegen. Ein Fussgänger quert die Seitenstrasse. Wer hat Vortritt?",
    "options": [
      {
        "id": "a",
        "text": "Der Fussgänger hat Vorrang vor dem abbiegenden Fahrzeug.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sie haben Vortritt, weil Sie von der Vorfahrtsstrasse kommen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Wer schneller ist.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Abbiegende Fahrzeuge müssen Fussgängern, die die Querstrasse überschreiten, stets den Vortritt lassen (Art. 33 SVG).",
    "ruleReference": "Art. 33 SVG"
  },
  {
    "id": 451,
    "testId": 11,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Sie kommen an eine Kreuzung mit Kreisverkehr. Ein Radfahrer befindet sich bereits im Kreisel vor Ihnen. Dürfen Sie ihn im Kreisel überholen?",
    "options": [
      {
        "id": "a",
        "text": "Nein, im Kreisel sollte wegen des geringen Raumes und der Richtungsänderungen nicht überholt werden; Sicherheitsabstand halten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, mit mindestens 60 km/h.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, wenn man hupt.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Das Überholen im Kreisel ist wegen enger Radien extrem gefährlich. Radfahrer dürfen in der Fahrbahnmitte fahren (Art. 41b VRV).",
    "ruleReference": "Art. 41b VRV"
  },
  {
    "id": 452,
    "testId": 12,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Ein Polizeiauto mit eingeschaltetem Blaulicht (ohne Sirene) steht an einer roten Ampel. Die Ampel schaltet auf Grün. Darf die Polizei vor Ihnen fahren?",
    "options": [
      {
        "id": "a",
        "text": "Ja, Einsatzfahrzeuge haben auch mit Blaulicht allein Vorrang und sind zügig passieren zu lassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nein, ohne Sirene hat die Polizei keinerlei Rechte.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur wenn ein Notarzt drin sitzt.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Blaulicht zeigt eine dringliche Dienstfahrt an (Art. 27 SVG). Andere Verkehrsteilnehmer müssen die Fahrbahn unverzüglich freigeben.",
    "ruleReference": "Art. 27 SVG"
  },
  {
    "id": 453,
    "testId": 13,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Sie möchten aus einer verkehrsberuhigten Begegnungszone (20 km/h) in eine Tempo-30-Zone einfahren. Wer hat Vortritt?",
    "options": [
      {
        "id": "a",
        "text": "Der Verkehr in der Tempo-30-Zone; wer aus einer Begegnungszone ausfährt, hat keinen Rechtsvortritt.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sie haben Rechtsvortritt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Wer zuerst an der Kreuzung ist.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Ausfahrten aus Begegnungszonen, Fussgängerzonen und Grundstücken sind gegenüber dem fliessenden Verkehr nachrangig (Art. 15 Abs. 3 VRV).",
    "ruleReference": "Art. 15 Abs. 3 VRV"
  },
  {
    "id": 454,
    "testId": 14,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: An einer Kreuzung fällt die Ampel aus (gelbes Blinklicht). Ein Schild zeigt 'Hauptstrasse' für Ihre Richtung. Wer hat Vortritt?",
    "options": [
      {
        "id": "a",
        "text": "Sie haben Vortritt vor dem Querverkehr, da bei Ampelausfall die signalisierten Schilder gelten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Es gilt automatischer Rechtsvortritt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Alle müssen anhalten.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Bei gelbem Blinklicht oder Ausfall der Lichtsignalanlage gelten die angebrachten Vortrittsschilder (Art. 68 SSV).",
    "ruleReference": "Art. 68 SSV"
  },
  {
    "id": 455,
    "testId": 15,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Sie stehen als zweites Fahrzeug hinter einem an der Haltelinie wartenden Auto vor einem Stopsignal. Das vordere Auto fährt ab. Dürfen Sie direkt folgen?",
    "options": [
      {
        "id": "a",
        "text": "Nein, jedes Fahrzeug muss für sich selbst an der Haltelinie anhalten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, wenn kein Querverkehr zu sehen ist.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, wenn man dicht aufschliesst.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Die Stopp-Pflicht gilt individuell für jedes einzelne Fahrzeug an der Haltelinie (Art. 36 SSV). Kein 'Durchrutschen'!",
    "ruleReference": "Art. 36 SSV"
  },
  {
    "id": 456,
    "testId": 16,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Was bedeutet das Signal 'Rechtsabbiegen für Radfahrer gestattet bei Rot' (Signal mit grünem Velo und Pfeil an der Ampel)?",
    "options": [
      {
        "id": "a",
        "text": "Radfahrer und Mofas dürfen bei rotem Lichtsignal nach rechts abbiegen, müssen aber Fussgängern und dem Querverkehr den Vortritt lassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Alle Autos dürfen bei Rot rechts abbiegen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Radfahrer müssen absteigen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Seit 2021 dürfen Velos und Mofas bei roter Ampel mit diesem Zusatzschild vorsichtig rechts abbiegen (Art. 69a SSV).",
    "ruleReference": "Art. 69a SSV"
  },
  {
    "id": 457,
    "testId": 17,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Was bedeutet das Signal 'Pannensignal' (Signal 2.47 'Halteverbot auf dem Pannenstreifen')?",
    "options": [
      {
        "id": "a",
        "text": "Auf dem Pannenstreifen darf auch bei Panne nicht gehalten werden (sofern Gefahrenzone), Weiterrollen bis zur nächsten Bucht zwingend.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Pannenstreifen ist frei für alle.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Parkplatz für Wohnwagen.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Verbietet das Halten selbst bei Notfällen an besonders engen oder gefährlichen Tunnel- und Brückenstellen (Art. 30 SSV).",
    "ruleReference": "Art. 30 SSV"
  },
  {
    "id": 458,
    "testId": 18,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Was bedeutet das Hinweissignal 'Standort eines Defibrillators' (grünes Quadrat mit weissem Herz und Blitz)?",
    "options": [
      {
        "id": "a",
        "text": "Zeigt den genauen Standort eines öffentlich zugänglichen automatisierten Defibrillators (AED) für Notfälle an.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Spital in 1 km.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Elektroauto-Ladesäule.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Weist Ersthelfer auf lebensrettende Defibrillatoren bei plötzlichem Herzstillstand hin.",
    "ruleReference": "Art. 62 SSV"
  },
  {
    "id": 459,
    "testId": 19,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Was bedeutet eine gelbe Zickzack-Linie vor einer Bushaltestelle?",
    "options": [
      {
        "id": "a",
        "text": "Haltestelle für öffentliche Busse; Halten nur kurz zum Ein- und Aussteigen gestattet, sofern kein Bus behindert wird (Parkieren verboten).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Parkplatz für Taxis.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Strecke mit vielen Schlaglöchern.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Die gelbe Zickzacklinie (Art. 79a SSV) markiert ÖV-Haltestellen. Parkieren ist absolut verboten.",
    "ruleReference": "Art. 79a SSV"
  },
  {
    "id": 460,
    "testId": 20,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Was bedeutet das Signal 'Verbot für Motorwagen und Motorräder' (Auto und Motorrad im roten Kreis)?",
    "options": [
      {
        "id": "a",
        "text": "Einfahrtsverbot für alle mehrspurigen Motorfahrzeuge und alle Motorräder; Fahrräder und Mofas dürfen passieren.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nur für LKW gesperrt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Verbot für Fahrräder.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 2.13 untersagt das Befahren für Motorwagen und Motorräder (Art. 19 SSV).",
    "ruleReference": "Art. 19 SSV"
  },
  {
    "id": 461,
    "testId": 1,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Was bedeutet ein blaues quadratisches Schild mit weissem Pfeil geradeaus und dem Zusatz 'Einbahn'?",
    "options": [
      {
        "id": "a",
        "text": "Einbahnstrasse: Die Strasse darf nur in Pfeilrichtung befahren werden; Gegenverkehr ist nicht zulässig.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Pflicht zum Wenden am Ende.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur für Busse.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 4.08 kennzeichnet Einbahnstrassen (Art. 46 SSV).",
    "ruleReference": "Art. 46 SSV"
  },
  {
    "id": 462,
    "testId": 2,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Was bedeutet das Signal 'Spur für Busse' (blaue runde Tafel mit gelbem Bus-Symbol)?",
    "options": [
      {
        "id": "a",
        "text": "Dieser Fahrstreifen ist Linienbussen vorbehalten; andere Fahrzeuge dürfen ihn nicht benützen (ausser Taxis, wenn signalisiert).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Busse dürfen hier nicht fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Parkplatz für Reisebusse.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Busstreifen (Art. 34 SSV) sind dem Linienverkehr vorbehalten. Unberechtigtes Befahren wird gebüsst.",
    "ruleReference": "Art. 34 SSV"
  },
  {
    "id": 463,
    "testId": 3,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Was bedeutet ein rot-weisser Richtungspfeil auf einer Warntafel (Kurvenleittafel)?",
    "options": [
      {
        "id": "a",
        "text": "Kündigt eine besonders scharfe und gefährliche Kurve an; Richtungspfeil zeigt den Kurvenverlauf.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Zeigt eine Ausfahrt an.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Gilt nur für Lastwagen.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Kurvenleittafeln (Signal 1.01/1.02) weisen auf gefährlich enge Kurvenradien hin (Art. 5 SSV).",
    "ruleReference": "Art. 5 SSV"
  },
  {
    "id": 464,
    "testId": 4,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Was bedeutet ein weisses rundes Schild mit rotem Rand und einem schwarzen Velo?",
    "options": [
      {
        "id": "a",
        "text": "Verbot für Fahrräder und Motorfahrräder (Mofas).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Radweg obligatorisch.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Achtung Radfahrer.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 2.06 verbietet das Fahren mit Fahrrädern und Mofas (Art. 19 SSV).",
    "ruleReference": "Art. 19 SSV"
  },
  {
    "id": 465,
    "testId": 5,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Was bedeutet das Signal 'Tunnel' (Signal 4.07)?",
    "options": [
      {
        "id": "a",
        "text": "Kündigt die Einfahrt in einen Tunnel an: Abblendlicht obligatorisch, Sonnenbrille abnehmen, Wenden und Rückwärtsfahren verboten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Baustelle voraus.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Überdachter Parkplatz.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 4.07 mahnt zu tunnelgerechtem Verhalten (Abblendlicht, Abstand, Rauchvermeidung) (Art. 45 SSV).",
    "ruleReference": "Art. 45 SSV"
  },
  {
    "id": 466,
    "testId": 6,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Welche Höchstgeschwindigkeit gilt innerorts für Motorräder und Personenwagen, wenn keine Schilder vorhanden sind?",
    "options": [
      {
        "id": "a",
        "text": "Generell 50 km/h.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Generell 60 km/h.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Generell 40 km/h.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "In geschlossenen Ortschaften gilt in der Schweiz generell Höchstgeschwindigkeit 50 km/h (Art. 4a VRV).",
    "ruleReference": "Art. 4a VRV"
  },
  {
    "id": 467,
    "testId": 7,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Wie gross ist der Reaktionsweg bei einer Geschwindigkeit von 100 km/h bei 1 Sekunde Reaktionszeit (Faustformel)?",
    "options": [
      {
        "id": "a",
        "text": "Ca. 30 Meter (100 / 10 * 3 = 30 m).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "10 Meter.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "100 Meter.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Der Reaktionsweg berechnet sich nach der Faustformel (Geschwindigkeit / 10) * 3 = 30 Meter.",
    "ruleReference": "Fahrschul-Physik"
  },
  {
    "id": 468,
    "testId": 8,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Wie gross ist der gesamte Anhalteweg bei 50 km/h auf trockener Strasse bei normaler Bremsung (Faustformel)?",
    "options": [
      {
        "id": "a",
        "text": "Ca. 40 Meter (15 m Reaktionsweg + 25 m Bremsweg).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "10 Meter.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "80 Meter.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Anhalteweg = Reaktionsweg ((50/10)*3 = 15m) + Bremsweg ((50/10)*(50/10) = 25m) = 40 Meter.",
    "ruleReference": "Fahrschul-Physik"
  },
  {
    "id": 469,
    "testId": 9,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Welche Höchstgeschwindigkeit gilt auf Schweizer Autostrassen (grünes Autoschild)?",
    "options": [
      {
        "id": "a",
        "text": "100 km/h (sofern nicht durch Schilder anders geregelt).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "120 km/h wie auf der Autobahn.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "80 km/h wie ausserorts.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Auf Autostrassen gilt für Personenwagen generell Höchsttempo 100 km/h (Art. 4a Abs. 1 Bst. c VRV).",
    "ruleReference": "Art. 4a VRV"
  },
  {
    "id": 470,
    "testId": 10,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Darf man ohne zwingenden Grund so langsam fahren, dass der Verkehrsfluss wesentlich behindert wird?",
    "options": [
      {
        "id": "a",
        "text": "Nein, grundloses Langsamfahren ('Schleichen') behindert den Verkehrsfluss, provoziert riskante Überholmanöver und ist verboten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, man darf beliebig langsam fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur nachts verboten.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Ohne zwingenden Grund darf kein Fahrzeugführer so langsam fahren, dass er den Verkehrsfluss behindert (Art. 4 Abs. 2 VRV).",
    "ruleReference": "Art. 4 Abs. 2 VRV"
  },
  {
    "id": 471,
    "testId": 11,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Was müssen Sie bei tief stehender Sonne im Herbst bezüglich Geschwindigkeit beachten?",
    "options": [
      {
        "id": "a",
        "text": "Geschwindigkeit sofort reduzieren und Sonnenblende nutzen; akute Blendgefahr und Gefahr des Übersehens von Fussgängern.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Vollgas geben, um schnell am Schatten zu sein.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Fernlicht einschalten.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Tiefe Sonne blendet extrem. Scheiben sauber halten und Geschwindigkeit anpassen (Art. 32 SVG).",
    "ruleReference": "Art. 32 SVG"
  },
  {
    "id": 472,
    "testId": 12,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Welche Geschwindigkeit gilt beim Abschleppen eines defekten Fahrzeugs mit Seil oder Stange?",
    "options": [
      {
        "id": "a",
        "text": "Höchstens 40 km/h auf allen Strassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Maximal 80 km/h ausserorts.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Maximal 60 km/h.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Beim Abschleppen von Motorfahrzeugen beträgt die Höchstgeschwindigkeit aus Sicherheitsgründen 40 km/h (Art. 43 VRV).",
    "ruleReference": "Art. 43 VRV"
  },
  {
    "id": 473,
    "testId": 13,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Darf man auf der Autobahn den Beschleunigungsstreifen voll ausnutzen, um sich mit passender Geschwindigkeit einzufädeln?",
    "options": [
      {
        "id": "a",
        "text": "Ja, der Beschleunigungsstreifen soll über die gesamte Länge zügig genutzt werden, um sich dem Tempo des Autobahnverkehrs anzugleichen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nein, man muss sofort am Anfang einscheren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Man muss am Anfang stoppen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Der Beschleunigungsstreifen dient dem Erreichen der Reisegeschwindigkeit. Erst bei passender Lücke einfädeln (Art. 36 VRV).",
    "ruleReference": "Art. 36 VRV"
  },
  {
    "id": 474,
    "testId": 14,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Was gilt bei einer Panne auf der Autobahn, wenn das Fahrzeug auf der Fahrbahn liegenbleibt und nicht mehr rollt?",
    "options": [
      {
        "id": "a",
        "text": "Warnblinker an, Warnweste anziehen, Insassen sofort hinter die Leitplanke bringen, Pannendreieck mind. 100 m vorher aufstellen und Notruf 117 wählen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Im Auto sitzen bleiben und die Notbremse ziehen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Das Auto mit Passagieren von Hand anschieben.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Liegenbleiben auf der Fahrbahn ist lebensgefährlich. Eigensicherung hinter der Leitplanke hat oberste Priorität (Art. 54 VRV).",
    "ruleReference": "Art. 54 VRV"
  },
  {
    "id": 475,
    "testId": 15,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Was bedeutet das Verbot des Rechtsüberholens auf der Autobahn im Detail?",
    "options": [
      {
        "id": "a",
        "text": "Ausscheren nach rechts, Beschleunigen, Vorbeifahren am linken Auto und Wiedereinscheren nach links ist strikt verboten (hohe Busse & Ausweisentzug).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Man darf rechts überholen, wenn man blinkt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Rechtsüberholen ist ab 100 km/h erlaubt.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Rechtsüberholen ist ein schweres Verkehrsdelikt. Nur passives Rechtsvorbeifahren bei stockenden Kolonnen ist erlaubt (Art. 36 VRV).",
    "ruleReference": "Art. 36 VRV"
  },
  {
    "id": 476,
    "testId": 16,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Welche Spurwahl gilt auf einer 3-spurigen Autobahn bei dichtem Verkehr?",
    "options": [
      {
        "id": "a",
        "text": "Grundsätzlich die rechte Spur benutzen; die mittlere und linke Spur dienen ausschliesslich dem Überholen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Immer auf der Mittelspur bleiben.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Freie Spurwahl wie in den USA.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Das Rechtsfahrgebot gilt auch auf dreispurigen Autobahnen. Permanentes Mittelspurschleichen ist unzulässig (Art. 34 SVG).",
    "ruleReference": "Art. 34 SVG"
  },
  {
    "id": 477,
    "testId": 17,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Wie verhalten Sie sich bei einer Tunnelfahrt, wenn der Verkehr vor Ihnen zum völligen Stillstand kommt?",
    "options": [
      {
        "id": "a",
        "text": "Warnblinker einschalten, mindestens 5 Meter Abstand zum Vorderfahrzeug halten, Motor abstellen, Radio (Verkehrsfunk) anlassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Dicht auffahren und hupen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Aussteigen und im Tunnel spazieren gehen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Abstand im Tunnelstau verhindert Kettenreaktionen und lässt Raum für Fluchtwege; Motor abstellen reduziert Abgase (Art. 39a VRV).",
    "ruleReference": "Art. 39a VRV"
  },
  {
    "id": 478,
    "testId": 18,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Welche Grenze gilt für qualifizierte Trunkenheit mit zwingendem Ausweisentzug für mindestens 3 Monate?",
    "options": [
      {
        "id": "a",
        "text": "Ab 0.80 Promille (bzw. 0.40 mg/l Atemalkohol).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ab 0.50 Promille.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ab 1.20 Promille.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Ab 0.80 ‰ liegt eine schwere Verkehrsregelverletzung vor, die zwingend mindestens 3 Monate Entzug nach sich zieht (Art. 16c SVG).",
    "ruleReference": "Art. 16c SVG"
  },
  {
    "id": 479,
    "testId": 19,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Darf man bei einer Panne oder einem Unfall die Autobahnfahrbahn überqueren, um das Pannendreieck auf der anderen Seite zu holen?",
    "options": [
      {
        "id": "a",
        "text": "Nein, das Betreten oder Überqueren der Autobahnfahrbahn zu Fuss ist strengstens verboten und lebensgefährlich.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, wenn gerade keine Autos kommen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, mit hochgehaltener Hand.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Fussgänger dürfen Autobahnen unter keinen Umständen betreten oder queren (Art. 35 VRV).",
    "ruleReference": "Art. 35 VRV"
  },
  {
    "id": 480,
    "testId": 20,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Welche Pflicht besteht bezüglich der Reifen bei winterlichen Strassenverhältnissen?",
    "options": [
      {
        "id": "a",
        "text": "Fahrzeuge müssen jederzeit betriebssicher beherrscht werden können; wer mit ungeeigneten Reifen den Verkehr behindert oder verunfallt, haftet und wird bestraft.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Winterreifen sind vom 1. Oktober bis 1. Mai vorgeschrieben.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Sommerreifen sind im Winter verboten.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Die Schweiz kennt keine kalendarische Winterreifenpflicht, aber die Pflicht zur Beherrschung des Fahrzeugs (Art. 29 SVG / Art. 3 VRV).",
    "ruleReference": "Art. 29 SVG"
  },
  {
    "id": 481,
    "testId": 1,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Welche Sicherung ist für lose Gegenstände auf der Rückbank oder im Kofferraum vorgeschrieben?",
    "options": [
      {
        "id": "a",
        "text": "Sie müssen so gesichert werden, dass sie bei einer Vollbremsung oder Kollision nicht nach vorne geschleudert werden und Insassen verletzen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Keine, wenn der Kofferraumdeckel zu ist.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur bei Gegenständen über 50 kg.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Ungesicherte Gegenstände werden bei Aufprall zu tödlichen Geschossen. Ladungssicherung ist Pflicht (Art. 73 VRV).",
    "ruleReference": "Art. 73 VRV"
  },
  {
    "id": 482,
    "testId": 2,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Was droht bei der Einnahme von Schlafmitteln vor Fahrtantritt?",
    "options": [
      {
        "id": "a",
        "text": "Gefahr von schwerer Fahruntüchtigkeit ('Hangover-Effekt'); bei Unfall droht Verurteilung wegen Fahrens in fahrunfähigem Zustand.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nichts, wenn das Medikament vom Arzt stammt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur ein Verwarnungsgeld.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Medikamente können die Reaktionszeit gravierend beeinträchtigen. Fahren unter Medikamenteneinfluss ist strafbar (Art. 31 SVG).",
    "ruleReference": "Art. 31 SVG"
  },
  {
    "id": 483,
    "testId": 3,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Was bedeutet das Aufleuchten der gelben Motorkontrollleuchte (Check Engine) während der Fahrt?",
    "options": [
      {
        "id": "a",
        "text": "Störung in der Motorsteuerung oder der Abgasreinigungsanlage; Werkstatt aufsuchen und Ursache diagnostizieren lassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sofortige Vollbremsung auf der Spur.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ölstand ist zu hoch.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Die Motorkontrollleuchte signalisiert abgas- oder verbrennungsrelevante Fehler im Motormanagement (VTS).",
    "ruleReference": "Fahrzeugtechnik VTS"
  },
  {
    "id": 484,
    "testId": 4,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Warum darf ein Fahrzeug mit Katalysator nicht durch Anschleppen oder Anschieben gestartet werden, wenn unverbrannter Treibstoff im Auspuff ist?",
    "options": [
      {
        "id": "a",
        "text": "Unverbrannter Kraftstoff kann in den heissen Katalysator gelangen und diesen durch Verbrennung zerstören.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Die Lichtmaschine explodiert.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Die Bremsen blockieren.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Treibstoff im Katalysator verbrennt explosionsartig und schmilzt den Keramikkörper des Katalysators (Technik-Leitfaden).",
    "ruleReference": "Technik VTS"
  },
  {
    "id": 485,
    "testId": 5,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Welche Flüssigkeit gehört in den Ausgleichsbehälter der Scheibenwaschanlage im Winter?",
    "options": [
      {
        "id": "a",
        "text": "Wasser gemischt mit ausreichend frostsicherem Scheibenreiniger (bis mind. -20 °C).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Reines Spülmittel ohne Wasser.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Heisses Motorenöl.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Frostschutz verhindert das Einfrieren der Spritzdüsen und Schläuche bei Minusgraden (Art. 57 VRV).",
    "ruleReference": "Art. 57 VRV"
  },
  {
    "id": 486,
    "testId": 6,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Welche Profiltiefe wird vom TCS für Winterreifen aus Sicherheitsgründen empfohlen?",
    "options": [
      {
        "id": "a",
        "text": "Mindestens 4 mm (gesetzliches Minimum ist 1.6 mm, bietet aber auf Schnee kaum noch Grip).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Mindestens 8 mm.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "1.0 mm genügt.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Unter 4 mm verlieren Winterreifen ihre Lamellenwirkung auf Schnee drastisch (TCS Sicherheitsempfehlung).",
    "ruleReference": "TCS Reifentest"
  },
  {
    "id": 487,
    "testId": 7,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Welche Lärmschutzregel gilt beim Schliessen von Türen, Motorhaube und Kofferraumdeckel nachts in Wohnquartieren?",
    "options": [
      {
        "id": "a",
        "text": "Türen und Klappen leise und ohne unnötiges Zuknallen schliessen (Vermeidung von Ruhestörung).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Möglichst laut zuschlagen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Es gibt keine Vorschriften.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Art. 33 VRV untersagt unnötigen Lärm, namentlich das laute Zuschlagen von Wagentüren in Wohngebieten.",
    "ruleReference": "Art. 33 VRV"
  },
  {
    "id": 488,
    "testId": 8,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Ein Postauto schaltet an einer Kreuzung das Signalhorn ein. Was müssen Sie tun?",
    "options": [
      {
        "id": "a",
        "text": "Dem Postauto unverzüglich freie Bahn gewähren, da Linienbusse auf Bergpoststrassen Vorrang haben.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Vor dem Postauto schnell abbiegen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Zurückhupen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Das Dreiklanghorn verpflichtet auf Bergpoststrassen zur Vorfahrtgewährung und Platzfreigabe (Art. 9 VRV).",
    "ruleReference": "Art. 9 VRV"
  },
  {
    "id": 489,
    "testId": 9,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Sie stehen an einer roten Ampel mit einem Schild 'Grünpfeil für Velos'. Gilt der Grünpfeil auch für Ihr Auto?",
    "options": [
      {
        "id": "a",
        "text": "Nein, der Grünpfeil gilt ausschliesslich für Fahrräder und Mofas. Autos müssen bei Rot warten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, alle Rechtsabbieger dürfen fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, nach kurzem Halt.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Das Signal 5.18 gilt explizit nur für Zweiräder. Autos begehen bei Missachtung einen Rotlichtverstoss (Art. 69a SSV).",
    "ruleReference": "Art. 69a SSV"
  },
  {
    "id": 490,
    "testId": 10,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Darf man auf einem Autobahnparkplatz übernachten?",
    "options": [
      {
        "id": "a",
        "text": "Das einmalige Wiederherstellen der Fahrfähigkeit (Schlafen im Auto zur Erholung) ist zulässig; Campieren mit Zelt oder Markise ist verboten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nein, Schlafen im Auto ist generell strafbar.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, man darf dort wochenlang wohnen.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Das Ausruhen zur Wiederherstellung der Fahrfähigkeit ist auf Raststätten erlaubt, echtes Campieren dagegen kantonal untersagt.",
    "ruleReference": "ASTRA Richtlinien Rastplätze"
  },
  {
    "id": 491,
    "testId": 11,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Was gilt an einer Verzweigung, wenn zwei Strassen zusammentreffen und beide ein 'Kein Vortritt'-Signal haben?",
    "options": [
      {
        "id": "a",
        "text": "Unter den beiden vortrittsbelasteten Fahrzeugen gilt untereinander der Rechtsvortritt.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Wer zuerst hupt, darf fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Beide müssen rückwärts fahren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Haben beide Einmündungen das gleiche Signal 'Kein Vortritt', regelt sich ihr Verhältnis untereinander nach dem Rechtsvortritt (Art. 36 SVG). Beliebte Fangfrage!",
    "ruleReference": "Art. 36 SVG"
  },
  {
    "id": 492,
    "testId": 12,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Fallbeispiel zur Strassenverkehrsordnung: Darf ein Fahrzeug mit defekter Scheibenwaschanlage bei Schneematsch weitergefahren werden?",
    "options": [
      {
        "id": "a",
        "text": "Nein, das Fahrzeug ist wegen Sichtbehinderung nicht mehr in vorschriftsgemässem Zustand; Weiterfahrt verboten bis zur Behebung.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, man kann die Scheibe während der Fahrt mit der Hand putzen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, wenn man die Seitenscheibe öffnet.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Ohne funktionierende Waschanlage bei Salz und Matsch erblindet die Frontscheibe innerhalb weniger Meter (Art. 57 VRV).",
    "ruleReference": "Art. 57 VRV"
  },
  {
    "id": 493,
    "testId": 13,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Verkehrsregelverordnung im Praxistest: Sie stehen an einer Einmündung vor einem Stopsignal. Die Sicht ist durch parkierte Autos behindert. Wo halten Sie an?",
    "options": [
      {
        "id": "a",
        "text": "Zuerst an der Haltelinie vollkommen anhalten, danach langsam bis zur Sichtlinie vortasten und nötigenfalls erneut anhalten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Direkt mitten auf die Kreuzung fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur hupen und ohne Halt weiterfahren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Bei behinderter Sicht muss zuerst an der Haltelinie gestoppt werden. Danach tastet man sich vorsichtig zur Sichtgrenze vor (Art. 36 SSV).",
    "ruleReference": "Art. 36 SSV"
  },
  {
    "id": 494,
    "testId": 14,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Verkehrsregelverordnung im Praxistest: Ein Linienbus signalisiert innerorts das Verlassen einer Haltestelle. Sie nähern sich mit 50 km/h von hinten. Was tun Sie?",
    "options": [
      {
        "id": "a",
        "text": "Geschwindigkeit verringern, bremsbereit sein und dem Bus das Einspuren ermöglichen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sofort Vollgas geben, um vor dem Bus durchzuziehen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Auf den Gehsteig ausweichen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Innerorts ist Linienbussen das Wegfahren von Haltestellen durch Temporeduktion zu ermöglichen (Art. 15 Abs. 4 VRV).",
    "ruleReference": "Art. 15 Abs. 4 VRV"
  },
  {
    "id": 495,
    "testId": 15,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Verkehrsregelverordnung im Praxistest: Ein Tram fährt auf der Strasse hinter Ihnen. Sie möchten links abbiegen und müssen wegen Gegenverkehr warten. Was beachten Sie?",
    "options": [
      {
        "id": "a",
        "text": "Sie dürfen die Schienen nur blockieren, wenn das Tram dadurch nicht behindert wird; andernfalls weiterfahren oder Tram passieren lassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Das Tram muss immer hinter wartenden Autos warten.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Man darf die Schienen beliebig lange blockieren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Schienenfahrzeuge dürfen durch wartende Linksabbieger nicht unnötig behindert werden (Art. 38 SVG / Art. 13 VRV).",
    "ruleReference": "Art. 38 SVG"
  },
  {
    "id": 496,
    "testId": 16,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Verkehrsregelverordnung im Praxistest: Wer hat auf einer schmalen Brücke ohne Vortrittsschilder Vorrang beim gleichzeitigen Eintreffen zweier Autos?",
    "options": [
      {
        "id": "a",
        "text": "Es gilt der Rechtsvortritt bzw. das Fahrzeug, das das Hindernis auf seiner Seite hat, muss warten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Das schnellere Fahrzeug.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Das grössere Fahrzeug.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Wer das Hindernis auf seiner Strassenseite hat, muss warten (Art. 9 VRV). Ansonsten gilt der Rechtsvortritt oder gegenseitige Verständigung.",
    "ruleReference": "Art. 9 VRV"
  },
  {
    "id": 497,
    "testId": 17,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Verkehrsregelverordnung im Praxistest: Sie fahren auf einer Vorfahrtsstrasse und möchten nach links in eine Seitenstrasse abbiegen. Ein Fussgänger quert die Seitenstrasse. Wer hat Vortritt?",
    "options": [
      {
        "id": "a",
        "text": "Der Fussgänger hat Vorrang vor dem abbiegenden Fahrzeug.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sie haben Vortritt, weil Sie von der Vorfahrtsstrasse kommen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Wer schneller ist.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Abbiegende Fahrzeuge müssen Fussgängern, die die Querstrasse überschreiten, stets den Vortritt lassen (Art. 33 SVG).",
    "ruleReference": "Art. 33 SVG"
  },
  {
    "id": 498,
    "testId": 18,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Verkehrsregelverordnung im Praxistest: Sie kommen an eine Kreuzung mit Kreisverkehr. Ein Radfahrer befindet sich bereits im Kreisel vor Ihnen. Dürfen Sie ihn im Kreisel überholen?",
    "options": [
      {
        "id": "a",
        "text": "Nein, im Kreisel sollte wegen des geringen Raumes und der Richtungsänderungen nicht überholt werden; Sicherheitsabstand halten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, mit mindestens 60 km/h.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, wenn man hupt.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Das Überholen im Kreisel ist wegen enger Radien extrem gefährlich. Radfahrer dürfen in der Fahrbahnmitte fahren (Art. 41b VRV).",
    "ruleReference": "Art. 41b VRV"
  },
  {
    "id": 499,
    "testId": 19,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Verkehrsregelverordnung im Praxistest: Ein Polizeiauto mit eingeschaltetem Blaulicht (ohne Sirene) steht an einer roten Ampel. Die Ampel schaltet auf Grün. Darf die Polizei vor Ihnen fahren?",
    "options": [
      {
        "id": "a",
        "text": "Ja, Einsatzfahrzeuge haben auch mit Blaulicht allein Vorrang und sind zügig passieren zu lassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nein, ohne Sirene hat die Polizei keinerlei Rechte.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur wenn ein Notarzt drin sitzt.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Blaulicht zeigt eine dringliche Dienstfahrt an (Art. 27 SVG). Andere Verkehrsteilnehmer müssen die Fahrbahn unverzüglich freigeben.",
    "ruleReference": "Art. 27 SVG"
  },
  {
    "id": 500,
    "testId": 20,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Verkehrsregelverordnung im Praxistest: Sie möchten aus einer verkehrsberuhigten Begegnungszone (20 km/h) in eine Tempo-30-Zone einfahren. Wer hat Vortritt?",
    "options": [
      {
        "id": "a",
        "text": "Der Verkehr in der Tempo-30-Zone; wer aus einer Begegnungszone ausfährt, hat keinen Rechtsvortritt.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sie haben Rechtsvortritt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Wer zuerst an der Kreuzung ist.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Ausfahrten aus Begegnungszonen, Fussgängerzonen und Grundstücken sind gegenüber dem fliessenden Verkehr nachrangig (Art. 15 Abs. 3 VRV).",
    "ruleReference": "Art. 15 Abs. 3 VRV"
  },
  {
    "id": 501,
    "testId": 1,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Verkehrsregelverordnung im Praxistest: An einer Kreuzung fällt die Ampel aus (gelbes Blinklicht). Ein Schild zeigt 'Hauptstrasse' für Ihre Richtung. Wer hat Vortritt?",
    "options": [
      {
        "id": "a",
        "text": "Sie haben Vortritt vor dem Querverkehr, da bei Ampelausfall die signalisierten Schilder gelten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Es gilt automatischer Rechtsvortritt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Alle müssen anhalten.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Bei gelbem Blinklicht oder Ausfall der Lichtsignalanlage gelten die angebrachten Vortrittsschilder (Art. 68 SSV).",
    "ruleReference": "Art. 68 SSV"
  },
  {
    "id": 502,
    "testId": 2,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Verkehrsregelverordnung im Praxistest: Sie stehen als zweites Fahrzeug hinter einem an der Haltelinie wartenden Auto vor einem Stopsignal. Das vordere Auto fährt ab. Dürfen Sie direkt folgen?",
    "options": [
      {
        "id": "a",
        "text": "Nein, jedes Fahrzeug muss für sich selbst an der Haltelinie anhalten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, wenn kein Querverkehr zu sehen ist.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, wenn man dicht aufschliesst.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Die Stopp-Pflicht gilt individuell für jedes einzelne Fahrzeug an der Haltelinie (Art. 36 SSV). Kein 'Durchrutschen'!",
    "ruleReference": "Art. 36 SSV"
  },
  {
    "id": 503,
    "testId": 3,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Verkehrsregelverordnung im Praxistest: Was bedeutet das Signal 'Rechtsabbiegen für Radfahrer gestattet bei Rot' (Signal mit grünem Velo und Pfeil an der Ampel)?",
    "options": [
      {
        "id": "a",
        "text": "Radfahrer und Mofas dürfen bei rotem Lichtsignal nach rechts abbiegen, müssen aber Fussgängern und dem Querverkehr den Vortritt lassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Alle Autos dürfen bei Rot rechts abbiegen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Radfahrer müssen absteigen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Seit 2021 dürfen Velos und Mofas bei roter Ampel mit diesem Zusatzschild vorsichtig rechts abbiegen (Art. 69a SSV).",
    "ruleReference": "Art. 69a SSV"
  },
  {
    "id": 504,
    "testId": 4,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Verkehrsregelverordnung im Praxistest: Was bedeutet das Signal 'Pannensignal' (Signal 2.47 'Halteverbot auf dem Pannenstreifen')?",
    "options": [
      {
        "id": "a",
        "text": "Auf dem Pannenstreifen darf auch bei Panne nicht gehalten werden (sofern Gefahrenzone), Weiterrollen bis zur nächsten Bucht zwingend.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Pannenstreifen ist frei für alle.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Parkplatz für Wohnwagen.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Verbietet das Halten selbst bei Notfällen an besonders engen oder gefährlichen Tunnel- und Brückenstellen (Art. 30 SSV).",
    "ruleReference": "Art. 30 SSV"
  },
  {
    "id": 505,
    "testId": 5,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Verkehrsregelverordnung im Praxistest: Was bedeutet das Hinweissignal 'Standort eines Defibrillators' (grünes Quadrat mit weissem Herz und Blitz)?",
    "options": [
      {
        "id": "a",
        "text": "Zeigt den genauen Standort eines öffentlich zugänglichen automatisierten Defibrillators (AED) für Notfälle an.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Spital in 1 km.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Elektroauto-Ladesäule.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Weist Ersthelfer auf lebensrettende Defibrillatoren bei plötzlichem Herzstillstand hin.",
    "ruleReference": "Art. 62 SSV"
  },
  {
    "id": 506,
    "testId": 6,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Verkehrsregelverordnung im Praxistest: Was bedeutet eine gelbe Zickzack-Linie vor einer Bushaltestelle?",
    "options": [
      {
        "id": "a",
        "text": "Haltestelle für öffentliche Busse; Halten nur kurz zum Ein- und Aussteigen gestattet, sofern kein Bus behindert wird (Parkieren verboten).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Parkplatz für Taxis.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Strecke mit vielen Schlaglöchern.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Die gelbe Zickzacklinie (Art. 79a SSV) markiert ÖV-Haltestellen. Parkieren ist absolut verboten.",
    "ruleReference": "Art. 79a SSV"
  },
  {
    "id": 507,
    "testId": 7,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Verkehrsregelverordnung im Praxistest: Was bedeutet das Signal 'Verbot für Motorwagen und Motorräder' (Auto und Motorrad im roten Kreis)?",
    "options": [
      {
        "id": "a",
        "text": "Einfahrtsverbot für alle mehrspurigen Motorfahrzeuge und alle Motorräder; Fahrräder und Mofas dürfen passieren.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nur für LKW gesperrt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Verbot für Fahrräder.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 2.13 untersagt das Befahren für Motorwagen und Motorräder (Art. 19 SSV).",
    "ruleReference": "Art. 19 SSV"
  },
  {
    "id": 508,
    "testId": 8,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Verkehrsregelverordnung im Praxistest: Was bedeutet ein blaues quadratisches Schild mit weissem Pfeil geradeaus und dem Zusatz 'Einbahn'?",
    "options": [
      {
        "id": "a",
        "text": "Einbahnstrasse: Die Strasse darf nur in Pfeilrichtung befahren werden; Gegenverkehr ist nicht zulässig.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Pflicht zum Wenden am Ende.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur für Busse.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 4.08 kennzeichnet Einbahnstrassen (Art. 46 SSV).",
    "ruleReference": "Art. 46 SSV"
  },
  {
    "id": 509,
    "testId": 9,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Verkehrsregelverordnung im Praxistest: Was bedeutet das Signal 'Spur für Busse' (blaue runde Tafel mit gelbem Bus-Symbol)?",
    "options": [
      {
        "id": "a",
        "text": "Dieser Fahrstreifen ist Linienbussen vorbehalten; andere Fahrzeuge dürfen ihn nicht benützen (ausser Taxis, wenn signalisiert).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Busse dürfen hier nicht fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Parkplatz für Reisebusse.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Busstreifen (Art. 34 SSV) sind dem Linienverkehr vorbehalten. Unberechtigtes Befahren wird gebüsst.",
    "ruleReference": "Art. 34 SSV"
  },
  {
    "id": 510,
    "testId": 10,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Verkehrsregelverordnung im Praxistest: Was bedeutet ein rot-weisser Richtungspfeil auf einer Warntafel (Kurvenleittafel)?",
    "options": [
      {
        "id": "a",
        "text": "Kündigt eine besonders scharfe und gefährliche Kurve an; Richtungspfeil zeigt den Kurvenverlauf.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Zeigt eine Ausfahrt an.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Gilt nur für Lastwagen.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Kurvenleittafeln (Signal 1.01/1.02) weisen auf gefährlich enge Kurvenradien hin (Art. 5 SSV).",
    "ruleReference": "Art. 5 SSV"
  },
  {
    "id": 511,
    "testId": 11,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Verkehrsregelverordnung im Praxistest: Was bedeutet ein weisses rundes Schild mit rotem Rand und einem schwarzen Velo?",
    "options": [
      {
        "id": "a",
        "text": "Verbot für Fahrräder und Motorfahrräder (Mofas).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Radweg obligatorisch.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Achtung Radfahrer.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 2.06 verbietet das Fahren mit Fahrrädern und Mofas (Art. 19 SSV).",
    "ruleReference": "Art. 19 SSV"
  },
  {
    "id": 512,
    "testId": 12,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Verkehrsregelverordnung im Praxistest: Was bedeutet das Signal 'Tunnel' (Signal 4.07)?",
    "options": [
      {
        "id": "a",
        "text": "Kündigt die Einfahrt in einen Tunnel an: Abblendlicht obligatorisch, Sonnenbrille abnehmen, Wenden und Rückwärtsfahren verboten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Baustelle voraus.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Überdachter Parkplatz.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 4.07 mahnt zu tunnelgerechtem Verhalten (Abblendlicht, Abstand, Rauchvermeidung) (Art. 45 SSV).",
    "ruleReference": "Art. 45 SSV"
  },
  {
    "id": 513,
    "testId": 13,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Verkehrsregelverordnung im Praxistest: Welche Höchstgeschwindigkeit gilt innerorts für Motorräder und Personenwagen, wenn keine Schilder vorhanden sind?",
    "options": [
      {
        "id": "a",
        "text": "Generell 50 km/h.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Generell 60 km/h.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Generell 40 km/h.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "In geschlossenen Ortschaften gilt in der Schweiz generell Höchstgeschwindigkeit 50 km/h (Art. 4a VRV).",
    "ruleReference": "Art. 4a VRV"
  },
  {
    "id": 514,
    "testId": 14,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Verkehrsregelverordnung im Praxistest: Wie gross ist der Reaktionsweg bei einer Geschwindigkeit von 100 km/h bei 1 Sekunde Reaktionszeit (Faustformel)?",
    "options": [
      {
        "id": "a",
        "text": "Ca. 30 Meter (100 / 10 * 3 = 30 m).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "10 Meter.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "100 Meter.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Der Reaktionsweg berechnet sich nach der Faustformel (Geschwindigkeit / 10) * 3 = 30 Meter.",
    "ruleReference": "Fahrschul-Physik"
  },
  {
    "id": 515,
    "testId": 15,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Verkehrsregelverordnung im Praxistest: Wie gross ist der gesamte Anhalteweg bei 50 km/h auf trockener Strasse bei normaler Bremsung (Faustformel)?",
    "options": [
      {
        "id": "a",
        "text": "Ca. 40 Meter (15 m Reaktionsweg + 25 m Bremsweg).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "10 Meter.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "80 Meter.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Anhalteweg = Reaktionsweg ((50/10)*3 = 15m) + Bremsweg ((50/10)*(50/10) = 25m) = 40 Meter.",
    "ruleReference": "Fahrschul-Physik"
  },
  {
    "id": 516,
    "testId": 16,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Verkehrsregelverordnung im Praxistest: Welche Höchstgeschwindigkeit gilt auf Schweizer Autostrassen (grünes Autoschild)?",
    "options": [
      {
        "id": "a",
        "text": "100 km/h (sofern nicht durch Schilder anders geregelt).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "120 km/h wie auf der Autobahn.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "80 km/h wie ausserorts.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Auf Autostrassen gilt für Personenwagen generell Höchsttempo 100 km/h (Art. 4a Abs. 1 Bst. c VRV).",
    "ruleReference": "Art. 4a VRV"
  },
  {
    "id": 517,
    "testId": 17,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Verkehrsregelverordnung im Praxistest: Darf man ohne zwingenden Grund so langsam fahren, dass der Verkehrsfluss wesentlich behindert wird?",
    "options": [
      {
        "id": "a",
        "text": "Nein, grundloses Langsamfahren ('Schleichen') behindert den Verkehrsfluss, provoziert riskante Überholmanöver und ist verboten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, man darf beliebig langsam fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur nachts verboten.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Ohne zwingenden Grund darf kein Fahrzeugführer so langsam fahren, dass er den Verkehrsfluss behindert (Art. 4 Abs. 2 VRV).",
    "ruleReference": "Art. 4 Abs. 2 VRV"
  },
  {
    "id": 518,
    "testId": 18,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Verkehrsregelverordnung im Praxistest: Was müssen Sie bei tief stehender Sonne im Herbst bezüglich Geschwindigkeit beachten?",
    "options": [
      {
        "id": "a",
        "text": "Geschwindigkeit sofort reduzieren und Sonnenblende nutzen; akute Blendgefahr und Gefahr des Übersehens von Fussgängern.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Vollgas geben, um schnell am Schatten zu sein.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Fernlicht einschalten.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Tiefe Sonne blendet extrem. Scheiben sauber halten und Geschwindigkeit anpassen (Art. 32 SVG).",
    "ruleReference": "Art. 32 SVG"
  },
  {
    "id": 519,
    "testId": 19,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Verkehrsregelverordnung im Praxistest: Welche Geschwindigkeit gilt beim Abschleppen eines defekten Fahrzeugs mit Seil oder Stange?",
    "options": [
      {
        "id": "a",
        "text": "Höchstens 40 km/h auf allen Strassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Maximal 80 km/h ausserorts.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Maximal 60 km/h.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Beim Abschleppen von Motorfahrzeugen beträgt die Höchstgeschwindigkeit aus Sicherheitsgründen 40 km/h (Art. 43 VRV).",
    "ruleReference": "Art. 43 VRV"
  },
  {
    "id": 520,
    "testId": 20,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Verkehrsregelverordnung im Praxistest: Darf man auf der Autobahn den Beschleunigungsstreifen voll ausnutzen, um sich mit passender Geschwindigkeit einzufädeln?",
    "options": [
      {
        "id": "a",
        "text": "Ja, der Beschleunigungsstreifen soll über die gesamte Länge zügig genutzt werden, um sich dem Tempo des Autobahnverkehrs anzugleichen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nein, man muss sofort am Anfang einscheren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Man muss am Anfang stoppen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Der Beschleunigungsstreifen dient dem Erreichen der Reisegeschwindigkeit. Erst bei passender Lücke einfädeln (Art. 36 VRV).",
    "ruleReference": "Art. 36 VRV"
  },
  {
    "id": 521,
    "testId": 1,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Verkehrsregelverordnung im Praxistest: Was gilt bei einer Panne auf der Autobahn, wenn das Fahrzeug auf der Fahrbahn liegenbleibt und nicht mehr rollt?",
    "options": [
      {
        "id": "a",
        "text": "Warnblinker an, Warnweste anziehen, Insassen sofort hinter die Leitplanke bringen, Pannendreieck mind. 100 m vorher aufstellen und Notruf 117 wählen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Im Auto sitzen bleiben und die Notbremse ziehen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Das Auto mit Passagieren von Hand anschieben.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Liegenbleiben auf der Fahrbahn ist lebensgefährlich. Eigensicherung hinter der Leitplanke hat oberste Priorität (Art. 54 VRV).",
    "ruleReference": "Art. 54 VRV"
  },
  {
    "id": 522,
    "testId": 2,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Verkehrsregelverordnung im Praxistest: Was bedeutet das Verbot des Rechtsüberholens auf der Autobahn im Detail?",
    "options": [
      {
        "id": "a",
        "text": "Ausscheren nach rechts, Beschleunigen, Vorbeifahren am linken Auto und Wiedereinscheren nach links ist strikt verboten (hohe Busse & Ausweisentzug).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Man darf rechts überholen, wenn man blinkt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Rechtsüberholen ist ab 100 km/h erlaubt.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Rechtsüberholen ist ein schweres Verkehrsdelikt. Nur passives Rechtsvorbeifahren bei stockenden Kolonnen ist erlaubt (Art. 36 VRV).",
    "ruleReference": "Art. 36 VRV"
  },
  {
    "id": 523,
    "testId": 3,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Verkehrsregelverordnung im Praxistest: Welche Spurwahl gilt auf einer 3-spurigen Autobahn bei dichtem Verkehr?",
    "options": [
      {
        "id": "a",
        "text": "Grundsätzlich die rechte Spur benutzen; die mittlere und linke Spur dienen ausschliesslich dem Überholen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Immer auf der Mittelspur bleiben.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Freie Spurwahl wie in den USA.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Das Rechtsfahrgebot gilt auch auf dreispurigen Autobahnen. Permanentes Mittelspurschleichen ist unzulässig (Art. 34 SVG).",
    "ruleReference": "Art. 34 SVG"
  },
  {
    "id": 524,
    "testId": 4,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Verkehrsregelverordnung im Praxistest: Wie verhalten Sie sich bei einer Tunnelfahrt, wenn der Verkehr vor Ihnen zum völligen Stillstand kommt?",
    "options": [
      {
        "id": "a",
        "text": "Warnblinker einschalten, mindestens 5 Meter Abstand zum Vorderfahrzeug halten, Motor abstellen, Radio (Verkehrsfunk) anlassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Dicht auffahren und hupen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Aussteigen und im Tunnel spazieren gehen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Abstand im Tunnelstau verhindert Kettenreaktionen und lässt Raum für Fluchtwege; Motor abstellen reduziert Abgase (Art. 39a VRV).",
    "ruleReference": "Art. 39a VRV"
  },
  {
    "id": 525,
    "testId": 5,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Verkehrsregelverordnung im Praxistest: Welche Grenze gilt für qualifizierte Trunkenheit mit zwingendem Ausweisentzug für mindestens 3 Monate?",
    "options": [
      {
        "id": "a",
        "text": "Ab 0.80 Promille (bzw. 0.40 mg/l Atemalkohol).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ab 0.50 Promille.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ab 1.20 Promille.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Ab 0.80 ‰ liegt eine schwere Verkehrsregelverletzung vor, die zwingend mindestens 3 Monate Entzug nach sich zieht (Art. 16c SVG).",
    "ruleReference": "Art. 16c SVG"
  },
  {
    "id": 526,
    "testId": 6,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Verkehrsregelverordnung im Praxistest: Darf man bei einer Panne oder einem Unfall die Autobahnfahrbahn überqueren, um das Pannendreieck auf der anderen Seite zu holen?",
    "options": [
      {
        "id": "a",
        "text": "Nein, das Betreten oder Überqueren der Autobahnfahrbahn zu Fuss ist strengstens verboten und lebensgefährlich.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, wenn gerade keine Autos kommen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, mit hochgehaltener Hand.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Fussgänger dürfen Autobahnen unter keinen Umständen betreten oder queren (Art. 35 VRV).",
    "ruleReference": "Art. 35 VRV"
  },
  {
    "id": 527,
    "testId": 7,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Verkehrsregelverordnung im Praxistest: Welche Pflicht besteht bezüglich der Reifen bei winterlichen Strassenverhältnissen?",
    "options": [
      {
        "id": "a",
        "text": "Fahrzeuge müssen jederzeit betriebssicher beherrscht werden können; wer mit ungeeigneten Reifen den Verkehr behindert oder verunfallt, haftet und wird bestraft.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Winterreifen sind vom 1. Oktober bis 1. Mai vorgeschrieben.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Sommerreifen sind im Winter verboten.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Die Schweiz kennt keine kalendarische Winterreifenpflicht, aber die Pflicht zur Beherrschung des Fahrzeugs (Art. 29 SVG / Art. 3 VRV).",
    "ruleReference": "Art. 29 SVG"
  },
  {
    "id": 528,
    "testId": 8,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Verkehrsregelverordnung im Praxistest: Welche Sicherung ist für lose Gegenstände auf der Rückbank oder im Kofferraum vorgeschrieben?",
    "options": [
      {
        "id": "a",
        "text": "Sie müssen so gesichert werden, dass sie bei einer Vollbremsung oder Kollision nicht nach vorne geschleudert werden und Insassen verletzen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Keine, wenn der Kofferraumdeckel zu ist.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur bei Gegenständen über 50 kg.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Ungesicherte Gegenstände werden bei Aufprall zu tödlichen Geschossen. Ladungssicherung ist Pflicht (Art. 73 VRV).",
    "ruleReference": "Art. 73 VRV"
  },
  {
    "id": 529,
    "testId": 9,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Verkehrsregelverordnung im Praxistest: Was droht bei der Einnahme von Schlafmitteln vor Fahrtantritt?",
    "options": [
      {
        "id": "a",
        "text": "Gefahr von schwerer Fahruntüchtigkeit ('Hangover-Effekt'); bei Unfall droht Verurteilung wegen Fahrens in fahrunfähigem Zustand.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nichts, wenn das Medikament vom Arzt stammt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur ein Verwarnungsgeld.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Medikamente können die Reaktionszeit gravierend beeinträchtigen. Fahren unter Medikamenteneinfluss ist strafbar (Art. 31 SVG).",
    "ruleReference": "Art. 31 SVG"
  },
  {
    "id": 530,
    "testId": 10,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Verkehrsregelverordnung im Praxistest: Was bedeutet das Aufleuchten der gelben Motorkontrollleuchte (Check Engine) während der Fahrt?",
    "options": [
      {
        "id": "a",
        "text": "Störung in der Motorsteuerung oder der Abgasreinigungsanlage; Werkstatt aufsuchen und Ursache diagnostizieren lassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sofortige Vollbremsung auf der Spur.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ölstand ist zu hoch.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Die Motorkontrollleuchte signalisiert abgas- oder verbrennungsrelevante Fehler im Motormanagement (VTS).",
    "ruleReference": "Fahrzeugtechnik VTS"
  },
  {
    "id": 531,
    "testId": 11,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Verkehrsregelverordnung im Praxistest: Warum darf ein Fahrzeug mit Katalysator nicht durch Anschleppen oder Anschieben gestartet werden, wenn unverbrannter Treibstoff im Auspuff ist?",
    "options": [
      {
        "id": "a",
        "text": "Unverbrannter Kraftstoff kann in den heissen Katalysator gelangen und diesen durch Verbrennung zerstören.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Die Lichtmaschine explodiert.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Die Bremsen blockieren.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Treibstoff im Katalysator verbrennt explosionsartig und schmilzt den Keramikkörper des Katalysators (Technik-Leitfaden).",
    "ruleReference": "Technik VTS"
  },
  {
    "id": 532,
    "testId": 12,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Verkehrsregelverordnung im Praxistest: Welche Flüssigkeit gehört in den Ausgleichsbehälter der Scheibenwaschanlage im Winter?",
    "options": [
      {
        "id": "a",
        "text": "Wasser gemischt mit ausreichend frostsicherem Scheibenreiniger (bis mind. -20 °C).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Reines Spülmittel ohne Wasser.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Heisses Motorenöl.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Frostschutz verhindert das Einfrieren der Spritzdüsen und Schläuche bei Minusgraden (Art. 57 VRV).",
    "ruleReference": "Art. 57 VRV"
  },
  {
    "id": 533,
    "testId": 13,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Verkehrsregelverordnung im Praxistest: Welche Profiltiefe wird vom TCS für Winterreifen aus Sicherheitsgründen empfohlen?",
    "options": [
      {
        "id": "a",
        "text": "Mindestens 4 mm (gesetzliches Minimum ist 1.6 mm, bietet aber auf Schnee kaum noch Grip).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Mindestens 8 mm.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "1.0 mm genügt.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Unter 4 mm verlieren Winterreifen ihre Lamellenwirkung auf Schnee drastisch (TCS Sicherheitsempfehlung).",
    "ruleReference": "TCS Reifentest"
  },
  {
    "id": 534,
    "testId": 14,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Verkehrsregelverordnung im Praxistest: Welche Lärmschutzregel gilt beim Schliessen von Türen, Motorhaube und Kofferraumdeckel nachts in Wohnquartieren?",
    "options": [
      {
        "id": "a",
        "text": "Türen und Klappen leise und ohne unnötiges Zuknallen schliessen (Vermeidung von Ruhestörung).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Möglichst laut zuschlagen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Es gibt keine Vorschriften.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Art. 33 VRV untersagt unnötigen Lärm, namentlich das laute Zuschlagen von Wagentüren in Wohngebieten.",
    "ruleReference": "Art. 33 VRV"
  },
  {
    "id": 535,
    "testId": 15,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Verkehrsregelverordnung im Praxistest: Ein Postauto schaltet an einer Kreuzung das Signalhorn ein. Was müssen Sie tun?",
    "options": [
      {
        "id": "a",
        "text": "Dem Postauto unverzüglich freie Bahn gewähren, da Linienbusse auf Bergpoststrassen Vorrang haben.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Vor dem Postauto schnell abbiegen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Zurückhupen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Das Dreiklanghorn verpflichtet auf Bergpoststrassen zur Vorfahrtgewährung und Platzfreigabe (Art. 9 VRV).",
    "ruleReference": "Art. 9 VRV"
  },
  {
    "id": 536,
    "testId": 16,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Verkehrsregelverordnung im Praxistest: Sie stehen an einer roten Ampel mit einem Schild 'Grünpfeil für Velos'. Gilt der Grünpfeil auch für Ihr Auto?",
    "options": [
      {
        "id": "a",
        "text": "Nein, der Grünpfeil gilt ausschliesslich für Fahrräder und Mofas. Autos müssen bei Rot warten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, alle Rechtsabbieger dürfen fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, nach kurzem Halt.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Das Signal 5.18 gilt explizit nur für Zweiräder. Autos begehen bei Missachtung einen Rotlichtverstoss (Art. 69a SSV).",
    "ruleReference": "Art. 69a SSV"
  },
  {
    "id": 537,
    "testId": 17,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Verkehrsregelverordnung im Praxistest: Darf man auf einem Autobahnparkplatz übernachten?",
    "options": [
      {
        "id": "a",
        "text": "Das einmalige Wiederherstellen der Fahrfähigkeit (Schlafen im Auto zur Erholung) ist zulässig; Campieren mit Zelt oder Markise ist verboten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nein, Schlafen im Auto ist generell strafbar.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, man darf dort wochenlang wohnen.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Das Ausruhen zur Wiederherstellung der Fahrfähigkeit ist auf Raststätten erlaubt, echtes Campieren dagegen kantonal untersagt.",
    "ruleReference": "ASTRA Richtlinien Rastplätze"
  },
  {
    "id": 538,
    "testId": 18,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Verkehrsregelverordnung im Praxistest: Was gilt an einer Verzweigung, wenn zwei Strassen zusammentreffen und beide ein 'Kein Vortritt'-Signal haben?",
    "options": [
      {
        "id": "a",
        "text": "Unter den beiden vortrittsbelasteten Fahrzeugen gilt untereinander der Rechtsvortritt.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Wer zuerst hupt, darf fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Beide müssen rückwärts fahren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Haben beide Einmündungen das gleiche Signal 'Kein Vortritt', regelt sich ihr Verhältnis untereinander nach dem Rechtsvortritt (Art. 36 SVG). Beliebte Fangfrage!",
    "ruleReference": "Art. 36 SVG"
  },
  {
    "id": 539,
    "testId": 19,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Verkehrsregelverordnung im Praxistest: Darf ein Fahrzeug mit defekter Scheibenwaschanlage bei Schneematsch weitergefahren werden?",
    "options": [
      {
        "id": "a",
        "text": "Nein, das Fahrzeug ist wegen Sichtbehinderung nicht mehr in vorschriftsgemässem Zustand; Weiterfahrt verboten bis zur Behebung.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, man kann die Scheibe während der Fahrt mit der Hand putzen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, wenn man die Seitenscheibe öffnet.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Ohne funktionierende Waschanlage bei Salz und Matsch erblindet die Frontscheibe innerhalb weniger Meter (Art. 57 VRV).",
    "ruleReference": "Art. 57 VRV"
  },
  {
    "id": 540,
    "testId": 20,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Sie stehen an einer Einmündung vor einem Stopsignal. Die Sicht ist durch parkierte Autos behindert. Wo halten Sie an?",
    "options": [
      {
        "id": "a",
        "text": "Zuerst an der Haltelinie vollkommen anhalten, danach langsam bis zur Sichtlinie vortasten und nötigenfalls erneut anhalten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Direkt mitten auf die Kreuzung fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur hupen und ohne Halt weiterfahren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Bei behinderter Sicht muss zuerst an der Haltelinie gestoppt werden. Danach tastet man sich vorsichtig zur Sichtgrenze vor (Art. 36 SSV).",
    "ruleReference": "Art. 36 SSV"
  },
  {
    "id": 541,
    "testId": 1,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Ein Linienbus signalisiert innerorts das Verlassen einer Haltestelle. Sie nähern sich mit 50 km/h von hinten. Was tun Sie?",
    "options": [
      {
        "id": "a",
        "text": "Geschwindigkeit verringern, bremsbereit sein und dem Bus das Einspuren ermöglichen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sofort Vollgas geben, um vor dem Bus durchzuziehen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Auf den Gehsteig ausweichen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Innerorts ist Linienbussen das Wegfahren von Haltestellen durch Temporeduktion zu ermöglichen (Art. 15 Abs. 4 VRV).",
    "ruleReference": "Art. 15 Abs. 4 VRV"
  },
  {
    "id": 542,
    "testId": 2,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Ein Tram fährt auf der Strasse hinter Ihnen. Sie möchten links abbiegen und müssen wegen Gegenverkehr warten. Was beachten Sie?",
    "options": [
      {
        "id": "a",
        "text": "Sie dürfen die Schienen nur blockieren, wenn das Tram dadurch nicht behindert wird; andernfalls weiterfahren oder Tram passieren lassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Das Tram muss immer hinter wartenden Autos warten.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Man darf die Schienen beliebig lange blockieren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Schienenfahrzeuge dürfen durch wartende Linksabbieger nicht unnötig behindert werden (Art. 38 SVG / Art. 13 VRV).",
    "ruleReference": "Art. 38 SVG"
  },
  {
    "id": 543,
    "testId": 3,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Wer hat auf einer schmalen Brücke ohne Vortrittsschilder Vorrang beim gleichzeitigen Eintreffen zweier Autos?",
    "options": [
      {
        "id": "a",
        "text": "Es gilt der Rechtsvortritt bzw. das Fahrzeug, das das Hindernis auf seiner Seite hat, muss warten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Das schnellere Fahrzeug.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Das grössere Fahrzeug.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Wer das Hindernis auf seiner Strassenseite hat, muss warten (Art. 9 VRV). Ansonsten gilt der Rechtsvortritt oder gegenseitige Verständigung.",
    "ruleReference": "Art. 9 VRV"
  },
  {
    "id": 544,
    "testId": 4,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Sie fahren auf einer Vorfahrtsstrasse und möchten nach links in eine Seitenstrasse abbiegen. Ein Fussgänger quert die Seitenstrasse. Wer hat Vortritt?",
    "options": [
      {
        "id": "a",
        "text": "Der Fussgänger hat Vorrang vor dem abbiegenden Fahrzeug.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sie haben Vortritt, weil Sie von der Vorfahrtsstrasse kommen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Wer schneller ist.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Abbiegende Fahrzeuge müssen Fussgängern, die die Querstrasse überschreiten, stets den Vortritt lassen (Art. 33 SVG).",
    "ruleReference": "Art. 33 SVG"
  },
  {
    "id": 545,
    "testId": 5,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Sie kommen an eine Kreuzung mit Kreisverkehr. Ein Radfahrer befindet sich bereits im Kreisel vor Ihnen. Dürfen Sie ihn im Kreisel überholen?",
    "options": [
      {
        "id": "a",
        "text": "Nein, im Kreisel sollte wegen des geringen Raumes und der Richtungsänderungen nicht überholt werden; Sicherheitsabstand halten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, mit mindestens 60 km/h.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, wenn man hupt.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Das Überholen im Kreisel ist wegen enger Radien extrem gefährlich. Radfahrer dürfen in der Fahrbahnmitte fahren (Art. 41b VRV).",
    "ruleReference": "Art. 41b VRV"
  },
  {
    "id": 546,
    "testId": 6,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Ein Polizeiauto mit eingeschaltetem Blaulicht (ohne Sirene) steht an einer roten Ampel. Die Ampel schaltet auf Grün. Darf die Polizei vor Ihnen fahren?",
    "options": [
      {
        "id": "a",
        "text": "Ja, Einsatzfahrzeuge haben auch mit Blaulicht allein Vorrang und sind zügig passieren zu lassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nein, ohne Sirene hat die Polizei keinerlei Rechte.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur wenn ein Notarzt drin sitzt.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Blaulicht zeigt eine dringliche Dienstfahrt an (Art. 27 SVG). Andere Verkehrsteilnehmer müssen die Fahrbahn unverzüglich freigeben.",
    "ruleReference": "Art. 27 SVG"
  },
  {
    "id": 547,
    "testId": 7,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Sie möchten aus einer verkehrsberuhigten Begegnungszone (20 km/h) in eine Tempo-30-Zone einfahren. Wer hat Vortritt?",
    "options": [
      {
        "id": "a",
        "text": "Der Verkehr in der Tempo-30-Zone; wer aus einer Begegnungszone ausfährt, hat keinen Rechtsvortritt.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sie haben Rechtsvortritt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Wer zuerst an der Kreuzung ist.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Ausfahrten aus Begegnungszonen, Fussgängerzonen und Grundstücken sind gegenüber dem fliessenden Verkehr nachrangig (Art. 15 Abs. 3 VRV).",
    "ruleReference": "Art. 15 Abs. 3 VRV"
  },
  {
    "id": 548,
    "testId": 8,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: An einer Kreuzung fällt die Ampel aus (gelbes Blinklicht). Ein Schild zeigt 'Hauptstrasse' für Ihre Richtung. Wer hat Vortritt?",
    "options": [
      {
        "id": "a",
        "text": "Sie haben Vortritt vor dem Querverkehr, da bei Ampelausfall die signalisierten Schilder gelten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Es gilt automatischer Rechtsvortritt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Alle müssen anhalten.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Bei gelbem Blinklicht oder Ausfall der Lichtsignalanlage gelten die angebrachten Vortrittsschilder (Art. 68 SSV).",
    "ruleReference": "Art. 68 SSV"
  },
  {
    "id": 549,
    "testId": 9,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Sie stehen als zweites Fahrzeug hinter einem an der Haltelinie wartenden Auto vor einem Stopsignal. Das vordere Auto fährt ab. Dürfen Sie direkt folgen?",
    "options": [
      {
        "id": "a",
        "text": "Nein, jedes Fahrzeug muss für sich selbst an der Haltelinie anhalten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, wenn kein Querverkehr zu sehen ist.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, wenn man dicht aufschliesst.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Die Stopp-Pflicht gilt individuell für jedes einzelne Fahrzeug an der Haltelinie (Art. 36 SSV). Kein 'Durchrutschen'!",
    "ruleReference": "Art. 36 SSV"
  },
  {
    "id": 550,
    "testId": 10,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Was bedeutet das Signal 'Rechtsabbiegen für Radfahrer gestattet bei Rot' (Signal mit grünem Velo und Pfeil an der Ampel)?",
    "options": [
      {
        "id": "a",
        "text": "Radfahrer und Mofas dürfen bei rotem Lichtsignal nach rechts abbiegen, müssen aber Fussgängern und dem Querverkehr den Vortritt lassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Alle Autos dürfen bei Rot rechts abbiegen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Radfahrer müssen absteigen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Seit 2021 dürfen Velos und Mofas bei roter Ampel mit diesem Zusatzschild vorsichtig rechts abbiegen (Art. 69a SSV).",
    "ruleReference": "Art. 69a SSV"
  },
  {
    "id": 551,
    "testId": 11,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Was bedeutet das Signal 'Pannensignal' (Signal 2.47 'Halteverbot auf dem Pannenstreifen')?",
    "options": [
      {
        "id": "a",
        "text": "Auf dem Pannenstreifen darf auch bei Panne nicht gehalten werden (sofern Gefahrenzone), Weiterrollen bis zur nächsten Bucht zwingend.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Pannenstreifen ist frei für alle.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Parkplatz für Wohnwagen.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Verbietet das Halten selbst bei Notfällen an besonders engen oder gefährlichen Tunnel- und Brückenstellen (Art. 30 SSV).",
    "ruleReference": "Art. 30 SSV"
  },
  {
    "id": 552,
    "testId": 12,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Was bedeutet das Hinweissignal 'Standort eines Defibrillators' (grünes Quadrat mit weissem Herz und Blitz)?",
    "options": [
      {
        "id": "a",
        "text": "Zeigt den genauen Standort eines öffentlich zugänglichen automatisierten Defibrillators (AED) für Notfälle an.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Spital in 1 km.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Elektroauto-Ladesäule.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Weist Ersthelfer auf lebensrettende Defibrillatoren bei plötzlichem Herzstillstand hin.",
    "ruleReference": "Art. 62 SSV"
  },
  {
    "id": 553,
    "testId": 13,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Was bedeutet eine gelbe Zickzack-Linie vor einer Bushaltestelle?",
    "options": [
      {
        "id": "a",
        "text": "Haltestelle für öffentliche Busse; Halten nur kurz zum Ein- und Aussteigen gestattet, sofern kein Bus behindert wird (Parkieren verboten).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Parkplatz für Taxis.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Strecke mit vielen Schlaglöchern.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Die gelbe Zickzacklinie (Art. 79a SSV) markiert ÖV-Haltestellen. Parkieren ist absolut verboten.",
    "ruleReference": "Art. 79a SSV"
  },
  {
    "id": 554,
    "testId": 14,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Was bedeutet das Signal 'Verbot für Motorwagen und Motorräder' (Auto und Motorrad im roten Kreis)?",
    "options": [
      {
        "id": "a",
        "text": "Einfahrtsverbot für alle mehrspurigen Motorfahrzeuge und alle Motorräder; Fahrräder und Mofas dürfen passieren.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nur für LKW gesperrt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Verbot für Fahrräder.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 2.13 untersagt das Befahren für Motorwagen und Motorräder (Art. 19 SSV).",
    "ruleReference": "Art. 19 SSV"
  },
  {
    "id": 555,
    "testId": 15,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Was bedeutet ein blaues quadratisches Schild mit weissem Pfeil geradeaus und dem Zusatz 'Einbahn'?",
    "options": [
      {
        "id": "a",
        "text": "Einbahnstrasse: Die Strasse darf nur in Pfeilrichtung befahren werden; Gegenverkehr ist nicht zulässig.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Pflicht zum Wenden am Ende.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur für Busse.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 4.08 kennzeichnet Einbahnstrassen (Art. 46 SSV).",
    "ruleReference": "Art. 46 SSV"
  },
  {
    "id": 556,
    "testId": 16,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Was bedeutet das Signal 'Spur für Busse' (blaue runde Tafel mit gelbem Bus-Symbol)?",
    "options": [
      {
        "id": "a",
        "text": "Dieser Fahrstreifen ist Linienbussen vorbehalten; andere Fahrzeuge dürfen ihn nicht benützen (ausser Taxis, wenn signalisiert).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Busse dürfen hier nicht fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Parkplatz für Reisebusse.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Busstreifen (Art. 34 SSV) sind dem Linienverkehr vorbehalten. Unberechtigtes Befahren wird gebüsst.",
    "ruleReference": "Art. 34 SSV"
  },
  {
    "id": 557,
    "testId": 17,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Was bedeutet ein rot-weisser Richtungspfeil auf einer Warntafel (Kurvenleittafel)?",
    "options": [
      {
        "id": "a",
        "text": "Kündigt eine besonders scharfe und gefährliche Kurve an; Richtungspfeil zeigt den Kurvenverlauf.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Zeigt eine Ausfahrt an.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Gilt nur für Lastwagen.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Kurvenleittafeln (Signal 1.01/1.02) weisen auf gefährlich enge Kurvenradien hin (Art. 5 SSV).",
    "ruleReference": "Art. 5 SSV"
  },
  {
    "id": 558,
    "testId": 18,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Was bedeutet ein weisses rundes Schild mit rotem Rand und einem schwarzen Velo?",
    "options": [
      {
        "id": "a",
        "text": "Verbot für Fahrräder und Motorfahrräder (Mofas).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Radweg obligatorisch.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Achtung Radfahrer.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 2.06 verbietet das Fahren mit Fahrrädern und Mofas (Art. 19 SSV).",
    "ruleReference": "Art. 19 SSV"
  },
  {
    "id": 559,
    "testId": 19,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Was bedeutet das Signal 'Tunnel' (Signal 4.07)?",
    "options": [
      {
        "id": "a",
        "text": "Kündigt die Einfahrt in einen Tunnel an: Abblendlicht obligatorisch, Sonnenbrille abnehmen, Wenden und Rückwärtsfahren verboten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Baustelle voraus.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Überdachter Parkplatz.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Signal 4.07 mahnt zu tunnelgerechtem Verhalten (Abblendlicht, Abstand, Rauchvermeidung) (Art. 45 SSV).",
    "ruleReference": "Art. 45 SSV"
  },
  {
    "id": 560,
    "testId": 20,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Welche Höchstgeschwindigkeit gilt innerorts für Motorräder und Personenwagen, wenn keine Schilder vorhanden sind?",
    "options": [
      {
        "id": "a",
        "text": "Generell 50 km/h.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Generell 60 km/h.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Generell 40 km/h.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "In geschlossenen Ortschaften gilt in der Schweiz generell Höchstgeschwindigkeit 50 km/h (Art. 4a VRV).",
    "ruleReference": "Art. 4a VRV"
  },
  {
    "id": 561,
    "testId": 1,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Wie gross ist der Reaktionsweg bei einer Geschwindigkeit von 100 km/h bei 1 Sekunde Reaktionszeit (Faustformel)?",
    "options": [
      {
        "id": "a",
        "text": "Ca. 30 Meter (100 / 10 * 3 = 30 m).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "10 Meter.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "100 Meter.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Der Reaktionsweg berechnet sich nach der Faustformel (Geschwindigkeit / 10) * 3 = 30 Meter.",
    "ruleReference": "Fahrschul-Physik"
  },
  {
    "id": 562,
    "testId": 2,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Wie gross ist der gesamte Anhalteweg bei 50 km/h auf trockener Strasse bei normaler Bremsung (Faustformel)?",
    "options": [
      {
        "id": "a",
        "text": "Ca. 40 Meter (15 m Reaktionsweg + 25 m Bremsweg).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "10 Meter.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "80 Meter.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Anhalteweg = Reaktionsweg ((50/10)*3 = 15m) + Bremsweg ((50/10)*(50/10) = 25m) = 40 Meter.",
    "ruleReference": "Fahrschul-Physik"
  },
  {
    "id": 563,
    "testId": 3,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Welche Höchstgeschwindigkeit gilt auf Schweizer Autostrassen (grünes Autoschild)?",
    "options": [
      {
        "id": "a",
        "text": "100 km/h (sofern nicht durch Schilder anders geregelt).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "120 km/h wie auf der Autobahn.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "80 km/h wie ausserorts.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Auf Autostrassen gilt für Personenwagen generell Höchsttempo 100 km/h (Art. 4a Abs. 1 Bst. c VRV).",
    "ruleReference": "Art. 4a VRV"
  },
  {
    "id": 564,
    "testId": 4,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Darf man ohne zwingenden Grund so langsam fahren, dass der Verkehrsfluss wesentlich behindert wird?",
    "options": [
      {
        "id": "a",
        "text": "Nein, grundloses Langsamfahren ('Schleichen') behindert den Verkehrsfluss, provoziert riskante Überholmanöver und ist verboten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, man darf beliebig langsam fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur nachts verboten.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Ohne zwingenden Grund darf kein Fahrzeugführer so langsam fahren, dass er den Verkehrsfluss behindert (Art. 4 Abs. 2 VRV).",
    "ruleReference": "Art. 4 Abs. 2 VRV"
  },
  {
    "id": 565,
    "testId": 5,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Was müssen Sie bei tief stehender Sonne im Herbst bezüglich Geschwindigkeit beachten?",
    "options": [
      {
        "id": "a",
        "text": "Geschwindigkeit sofort reduzieren und Sonnenblende nutzen; akute Blendgefahr und Gefahr des Übersehens von Fussgängern.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Vollgas geben, um schnell am Schatten zu sein.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Fernlicht einschalten.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Tiefe Sonne blendet extrem. Scheiben sauber halten und Geschwindigkeit anpassen (Art. 32 SVG).",
    "ruleReference": "Art. 32 SVG"
  },
  {
    "id": 566,
    "testId": 6,
    "category": "geschwindigkeit",
    "categoryName": "Geschwindigkeit & Abstand",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Welche Geschwindigkeit gilt beim Abschleppen eines defekten Fahrzeugs mit Seil oder Stange?",
    "options": [
      {
        "id": "a",
        "text": "Höchstens 40 km/h auf allen Strassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Maximal 80 km/h ausserorts.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Maximal 60 km/h.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Beim Abschleppen von Motorfahrzeugen beträgt die Höchstgeschwindigkeit aus Sicherheitsgründen 40 km/h (Art. 43 VRV).",
    "ruleReference": "Art. 43 VRV"
  },
  {
    "id": 567,
    "testId": 7,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Darf man auf der Autobahn den Beschleunigungsstreifen voll ausnutzen, um sich mit passender Geschwindigkeit einzufädeln?",
    "options": [
      {
        "id": "a",
        "text": "Ja, der Beschleunigungsstreifen soll über die gesamte Länge zügig genutzt werden, um sich dem Tempo des Autobahnverkehrs anzugleichen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nein, man muss sofort am Anfang einscheren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Man muss am Anfang stoppen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Der Beschleunigungsstreifen dient dem Erreichen der Reisegeschwindigkeit. Erst bei passender Lücke einfädeln (Art. 36 VRV).",
    "ruleReference": "Art. 36 VRV"
  },
  {
    "id": 568,
    "testId": 8,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Was gilt bei einer Panne auf der Autobahn, wenn das Fahrzeug auf der Fahrbahn liegenbleibt und nicht mehr rollt?",
    "options": [
      {
        "id": "a",
        "text": "Warnblinker an, Warnweste anziehen, Insassen sofort hinter die Leitplanke bringen, Pannendreieck mind. 100 m vorher aufstellen und Notruf 117 wählen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Im Auto sitzen bleiben und die Notbremse ziehen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Das Auto mit Passagieren von Hand anschieben.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Liegenbleiben auf der Fahrbahn ist lebensgefährlich. Eigensicherung hinter der Leitplanke hat oberste Priorität (Art. 54 VRV).",
    "ruleReference": "Art. 54 VRV"
  },
  {
    "id": 569,
    "testId": 9,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Was bedeutet das Verbot des Rechtsüberholens auf der Autobahn im Detail?",
    "options": [
      {
        "id": "a",
        "text": "Ausscheren nach rechts, Beschleunigen, Vorbeifahren am linken Auto und Wiedereinscheren nach links ist strikt verboten (hohe Busse & Ausweisentzug).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Man darf rechts überholen, wenn man blinkt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Rechtsüberholen ist ab 100 km/h erlaubt.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Rechtsüberholen ist ein schweres Verkehrsdelikt. Nur passives Rechtsvorbeifahren bei stockenden Kolonnen ist erlaubt (Art. 36 VRV).",
    "ruleReference": "Art. 36 VRV"
  },
  {
    "id": 570,
    "testId": 10,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Welche Spurwahl gilt auf einer 3-spurigen Autobahn bei dichtem Verkehr?",
    "options": [
      {
        "id": "a",
        "text": "Grundsätzlich die rechte Spur benutzen; die mittlere und linke Spur dienen ausschliesslich dem Überholen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Immer auf der Mittelspur bleiben.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Freie Spurwahl wie in den USA.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Das Rechtsfahrgebot gilt auch auf dreispurigen Autobahnen. Permanentes Mittelspurschleichen ist unzulässig (Art. 34 SVG).",
    "ruleReference": "Art. 34 SVG"
  },
  {
    "id": 571,
    "testId": 11,
    "category": "autobahn",
    "categoryName": "Autobahn & Autostrasse",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Wie verhalten Sie sich bei einer Tunnelfahrt, wenn der Verkehr vor Ihnen zum völligen Stillstand kommt?",
    "options": [
      {
        "id": "a",
        "text": "Warnblinker einschalten, mindestens 5 Meter Abstand zum Vorderfahrzeug halten, Motor abstellen, Radio (Verkehrsfunk) anlassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Dicht auffahren und hupen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Aussteigen und im Tunnel spazieren gehen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Abstand im Tunnelstau verhindert Kettenreaktionen und lässt Raum für Fluchtwege; Motor abstellen reduziert Abgase (Art. 39a VRV).",
    "ruleReference": "Art. 39a VRV"
  },
  {
    "id": 572,
    "testId": 12,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Welche Grenze gilt für qualifizierte Trunkenheit mit zwingendem Ausweisentzug für mindestens 3 Monate?",
    "options": [
      {
        "id": "a",
        "text": "Ab 0.80 Promille (bzw. 0.40 mg/l Atemalkohol).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ab 0.50 Promille.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ab 1.20 Promille.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Ab 0.80 ‰ liegt eine schwere Verkehrsregelverletzung vor, die zwingend mindestens 3 Monate Entzug nach sich zieht (Art. 16c SVG).",
    "ruleReference": "Art. 16c SVG"
  },
  {
    "id": 573,
    "testId": 13,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Darf man bei einer Panne oder einem Unfall die Autobahnfahrbahn überqueren, um das Pannendreieck auf der anderen Seite zu holen?",
    "options": [
      {
        "id": "a",
        "text": "Nein, das Betreten oder Überqueren der Autobahnfahrbahn zu Fuss ist strengstens verboten und lebensgefährlich.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, wenn gerade keine Autos kommen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, mit hochgehaltener Hand.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Fussgänger dürfen Autobahnen unter keinen Umständen betreten oder queren (Art. 35 VRV).",
    "ruleReference": "Art. 35 VRV"
  },
  {
    "id": 574,
    "testId": 14,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Welche Pflicht besteht bezüglich der Reifen bei winterlichen Strassenverhältnissen?",
    "options": [
      {
        "id": "a",
        "text": "Fahrzeuge müssen jederzeit betriebssicher beherrscht werden können; wer mit ungeeigneten Reifen den Verkehr behindert oder verunfallt, haftet und wird bestraft.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Winterreifen sind vom 1. Oktober bis 1. Mai vorgeschrieben.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Sommerreifen sind im Winter verboten.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Die Schweiz kennt keine kalendarische Winterreifenpflicht, aber die Pflicht zur Beherrschung des Fahrzeugs (Art. 29 SVG / Art. 3 VRV).",
    "ruleReference": "Art. 29 SVG"
  },
  {
    "id": 575,
    "testId": 15,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Welche Sicherung ist für lose Gegenstände auf der Rückbank oder im Kofferraum vorgeschrieben?",
    "options": [
      {
        "id": "a",
        "text": "Sie müssen so gesichert werden, dass sie bei einer Vollbremsung oder Kollision nicht nach vorne geschleudert werden und Insassen verletzen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Keine, wenn der Kofferraumdeckel zu ist.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur bei Gegenständen über 50 kg.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Ungesicherte Gegenstände werden bei Aufprall zu tödlichen Geschossen. Ladungssicherung ist Pflicht (Art. 73 VRV).",
    "ruleReference": "Art. 73 VRV"
  },
  {
    "id": 576,
    "testId": 16,
    "category": "sicherheit",
    "categoryName": "Sicherheit & Promille",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Was droht bei der Einnahme von Schlafmitteln vor Fahrtantritt?",
    "options": [
      {
        "id": "a",
        "text": "Gefahr von schwerer Fahruntüchtigkeit ('Hangover-Effekt'); bei Unfall droht Verurteilung wegen Fahrens in fahrunfähigem Zustand.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nichts, wenn das Medikament vom Arzt stammt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur ein Verwarnungsgeld.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Medikamente können die Reaktionszeit gravierend beeinträchtigen. Fahren unter Medikamenteneinfluss ist strafbar (Art. 31 SVG).",
    "ruleReference": "Art. 31 SVG"
  },
  {
    "id": 577,
    "testId": 17,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Was bedeutet das Aufleuchten der gelben Motorkontrollleuchte (Check Engine) während der Fahrt?",
    "options": [
      {
        "id": "a",
        "text": "Störung in der Motorsteuerung oder der Abgasreinigungsanlage; Werkstatt aufsuchen und Ursache diagnostizieren lassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sofortige Vollbremsung auf der Spur.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ölstand ist zu hoch.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Die Motorkontrollleuchte signalisiert abgas- oder verbrennungsrelevante Fehler im Motormanagement (VTS).",
    "ruleReference": "Fahrzeugtechnik VTS"
  },
  {
    "id": 578,
    "testId": 18,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Warum darf ein Fahrzeug mit Katalysator nicht durch Anschleppen oder Anschieben gestartet werden, wenn unverbrannter Treibstoff im Auspuff ist?",
    "options": [
      {
        "id": "a",
        "text": "Unverbrannter Kraftstoff kann in den heissen Katalysator gelangen und diesen durch Verbrennung zerstören.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Die Lichtmaschine explodiert.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Die Bremsen blockieren.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Treibstoff im Katalysator verbrennt explosionsartig und schmilzt den Keramikkörper des Katalysators (Technik-Leitfaden).",
    "ruleReference": "Technik VTS"
  },
  {
    "id": 579,
    "testId": 19,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Welche Flüssigkeit gehört in den Ausgleichsbehälter der Scheibenwaschanlage im Winter?",
    "options": [
      {
        "id": "a",
        "text": "Wasser gemischt mit ausreichend frostsicherem Scheibenreiniger (bis mind. -20 °C).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Reines Spülmittel ohne Wasser.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Heisses Motorenöl.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Frostschutz verhindert das Einfrieren der Spritzdüsen und Schläuche bei Minusgraden (Art. 57 VRV).",
    "ruleReference": "Art. 57 VRV"
  },
  {
    "id": 580,
    "testId": 20,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Welche Profiltiefe wird vom TCS für Winterreifen aus Sicherheitsgründen empfohlen?",
    "options": [
      {
        "id": "a",
        "text": "Mindestens 4 mm (gesetzliches Minimum ist 1.6 mm, bietet aber auf Schnee kaum noch Grip).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Mindestens 8 mm.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "1.0 mm genügt.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Unter 4 mm verlieren Winterreifen ihre Lamellenwirkung auf Schnee drastisch (TCS Sicherheitsempfehlung).",
    "ruleReference": "TCS Reifentest"
  },
  {
    "id": 581,
    "testId": 1,
    "category": "umwelt",
    "categoryName": "Fahrzeugtechnik & Umwelt",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Welche Lärmschutzregel gilt beim Schliessen von Türen, Motorhaube und Kofferraumdeckel nachts in Wohnquartieren?",
    "options": [
      {
        "id": "a",
        "text": "Türen und Klappen leise und ohne unnötiges Zuknallen schliessen (Vermeidung von Ruhestörung).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Möglichst laut zuschlagen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Es gibt keine Vorschriften.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Art. 33 VRV untersagt unnötigen Lärm, namentlich das laute Zuschlagen von Wagentüren in Wohngebieten.",
    "ruleReference": "Art. 33 VRV"
  },
  {
    "id": 582,
    "testId": 2,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Ein Postauto schaltet an einer Kreuzung das Signalhorn ein. Was müssen Sie tun?",
    "options": [
      {
        "id": "a",
        "text": "Dem Postauto unverzüglich freie Bahn gewähren, da Linienbusse auf Bergpoststrassen Vorrang haben.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Vor dem Postauto schnell abbiegen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Zurückhupen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Das Dreiklanghorn verpflichtet auf Bergpoststrassen zur Vorfahrtgewährung und Platzfreigabe (Art. 9 VRV).",
    "ruleReference": "Art. 9 VRV"
  },
  {
    "id": 583,
    "testId": 3,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Sie stehen an einer roten Ampel mit einem Schild 'Grünpfeil für Velos'. Gilt der Grünpfeil auch für Ihr Auto?",
    "options": [
      {
        "id": "a",
        "text": "Nein, der Grünpfeil gilt ausschliesslich für Fahrräder und Mofas. Autos müssen bei Rot warten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, alle Rechtsabbieger dürfen fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, nach kurzem Halt.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Das Signal 5.18 gilt explizit nur für Zweiräder. Autos begehen bei Missachtung einen Rotlichtverstoss (Art. 69a SSV).",
    "ruleReference": "Art. 69a SSV"
  },
  {
    "id": 584,
    "testId": 4,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Darf man auf einem Autobahnparkplatz übernachten?",
    "options": [
      {
        "id": "a",
        "text": "Das einmalige Wiederherstellen der Fahrfähigkeit (Schlafen im Auto zur Erholung) ist zulässig; Campieren mit Zelt oder Markise ist verboten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nein, Schlafen im Auto ist generell strafbar.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, man darf dort wochenlang wohnen.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Das Ausruhen zur Wiederherstellung der Fahrfähigkeit ist auf Raststätten erlaubt, echtes Campieren dagegen kantonal untersagt.",
    "ruleReference": "ASTRA Richtlinien Rastplätze"
  },
  {
    "id": 585,
    "testId": 5,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Was gilt an einer Verzweigung, wenn zwei Strassen zusammentreffen und beide ein 'Kein Vortritt'-Signal haben?",
    "options": [
      {
        "id": "a",
        "text": "Unter den beiden vortrittsbelasteten Fahrzeugen gilt untereinander der Rechtsvortritt.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Wer zuerst hupt, darf fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Beide müssen rückwärts fahren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Haben beide Einmündungen das gleiche Signal 'Kein Vortritt', regelt sich ihr Verhältnis untereinander nach dem Rechtsvortritt (Art. 36 SVG). Beliebte Fangfrage!",
    "ruleReference": "Art. 36 SVG"
  },
  {
    "id": 586,
    "testId": 6,
    "category": "spezial",
    "categoryName": "ASA-Prüfungsfallen",
    "question": "Vertiefungsfrage für Führerausweis Kat. B: Darf ein Fahrzeug mit defekter Scheibenwaschanlage bei Schneematsch weitergefahren werden?",
    "options": [
      {
        "id": "a",
        "text": "Nein, das Fahrzeug ist wegen Sichtbehinderung nicht mehr in vorschriftsgemässem Zustand; Weiterfahrt verboten bis zur Behebung.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, man kann die Scheibe während der Fahrt mit der Hand putzen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, wenn man die Seitenscheibe öffnet.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Ohne funktionierende Waschanlage bei Salz und Matsch erblindet die Frontscheibe innerhalb weniger Meter (Art. 57 VRV).",
    "ruleReference": "Art. 57 VRV"
  },
  {
    "id": 587,
    "testId": 7,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Praxis-Szenario: Sie stehen an einer Einmündung vor einem Stopsignal. Die Sicht ist durch parkierte Autos behindert. Wo halten Sie an?",
    "options": [
      {
        "id": "a",
        "text": "Zuerst an der Haltelinie vollkommen anhalten, danach langsam bis zur Sichtlinie vortasten und nötigenfalls erneut anhalten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Direkt mitten auf die Kreuzung fahren.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur hupen und ohne Halt weiterfahren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Bei behinderter Sicht muss zuerst an der Haltelinie gestoppt werden. Danach tastet man sich vorsichtig zur Sichtgrenze vor (Art. 36 SSV).",
    "ruleReference": "Art. 36 SSV"
  },
  {
    "id": 588,
    "testId": 8,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Praxis-Szenario: Ein Linienbus signalisiert innerorts das Verlassen einer Haltestelle. Sie nähern sich mit 50 km/h von hinten. Was tun Sie?",
    "options": [
      {
        "id": "a",
        "text": "Geschwindigkeit verringern, bremsbereit sein und dem Bus das Einspuren ermöglichen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sofort Vollgas geben, um vor dem Bus durchzuziehen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Auf den Gehsteig ausweichen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Innerorts ist Linienbussen das Wegfahren von Haltestellen durch Temporeduktion zu ermöglichen (Art. 15 Abs. 4 VRV).",
    "ruleReference": "Art. 15 Abs. 4 VRV"
  },
  {
    "id": 589,
    "testId": 9,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Praxis-Szenario: Ein Tram fährt auf der Strasse hinter Ihnen. Sie möchten links abbiegen und müssen wegen Gegenverkehr warten. Was beachten Sie?",
    "options": [
      {
        "id": "a",
        "text": "Sie dürfen die Schienen nur blockieren, wenn das Tram dadurch nicht behindert wird; andernfalls weiterfahren oder Tram passieren lassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Das Tram muss immer hinter wartenden Autos warten.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Man darf die Schienen beliebig lange blockieren.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Schienenfahrzeuge dürfen durch wartende Linksabbieger nicht unnötig behindert werden (Art. 38 SVG / Art. 13 VRV).",
    "ruleReference": "Art. 38 SVG"
  },
  {
    "id": 590,
    "testId": 10,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Praxis-Szenario: Wer hat auf einer schmalen Brücke ohne Vortrittsschilder Vorrang beim gleichzeitigen Eintreffen zweier Autos?",
    "options": [
      {
        "id": "a",
        "text": "Es gilt der Rechtsvortritt bzw. das Fahrzeug, das das Hindernis auf seiner Seite hat, muss warten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Das schnellere Fahrzeug.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Das grössere Fahrzeug.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Wer das Hindernis auf seiner Strassenseite hat, muss warten (Art. 9 VRV). Ansonsten gilt der Rechtsvortritt oder gegenseitige Verständigung.",
    "ruleReference": "Art. 9 VRV"
  },
  {
    "id": 591,
    "testId": 11,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Praxis-Szenario: Sie fahren auf einer Vorfahrtsstrasse und möchten nach links in eine Seitenstrasse abbiegen. Ein Fussgänger quert die Seitenstrasse. Wer hat Vortritt?",
    "options": [
      {
        "id": "a",
        "text": "Der Fussgänger hat Vorrang vor dem abbiegenden Fahrzeug.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sie haben Vortritt, weil Sie von der Vorfahrtsstrasse kommen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Wer schneller ist.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Abbiegende Fahrzeuge müssen Fussgängern, die die Querstrasse überschreiten, stets den Vortritt lassen (Art. 33 SVG).",
    "ruleReference": "Art. 33 SVG"
  },
  {
    "id": 592,
    "testId": 12,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Praxis-Szenario: Sie kommen an eine Kreuzung mit Kreisverkehr. Ein Radfahrer befindet sich bereits im Kreisel vor Ihnen. Dürfen Sie ihn im Kreisel überholen?",
    "options": [
      {
        "id": "a",
        "text": "Nein, im Kreisel sollte wegen des geringen Raumes und der Richtungsänderungen nicht überholt werden; Sicherheitsabstand halten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, mit mindestens 60 km/h.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, wenn man hupt.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Das Überholen im Kreisel ist wegen enger Radien extrem gefährlich. Radfahrer dürfen in der Fahrbahnmitte fahren (Art. 41b VRV).",
    "ruleReference": "Art. 41b VRV"
  },
  {
    "id": 593,
    "testId": 13,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Praxis-Szenario: Ein Polizeiauto mit eingeschaltetem Blaulicht (ohne Sirene) steht an einer roten Ampel. Die Ampel schaltet auf Grün. Darf die Polizei vor Ihnen fahren?",
    "options": [
      {
        "id": "a",
        "text": "Ja, Einsatzfahrzeuge haben auch mit Blaulicht allein Vorrang und sind zügig passieren zu lassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Nein, ohne Sirene hat die Polizei keinerlei Rechte.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Nur wenn ein Notarzt drin sitzt.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Blaulicht zeigt eine dringliche Dienstfahrt an (Art. 27 SVG). Andere Verkehrsteilnehmer müssen die Fahrbahn unverzüglich freigeben.",
    "ruleReference": "Art. 27 SVG"
  },
  {
    "id": 594,
    "testId": 14,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Praxis-Szenario: Sie möchten aus einer verkehrsberuhigten Begegnungszone (20 km/h) in eine Tempo-30-Zone einfahren. Wer hat Vortritt?",
    "options": [
      {
        "id": "a",
        "text": "Der Verkehr in der Tempo-30-Zone; wer aus einer Begegnungszone ausfährt, hat keinen Rechtsvortritt.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Sie haben Rechtsvortritt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Wer zuerst an der Kreuzung ist.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Ausfahrten aus Begegnungszonen, Fussgängerzonen und Grundstücken sind gegenüber dem fliessenden Verkehr nachrangig (Art. 15 Abs. 3 VRV).",
    "ruleReference": "Art. 15 Abs. 3 VRV"
  },
  {
    "id": 595,
    "testId": 15,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Praxis-Szenario: An einer Kreuzung fällt die Ampel aus (gelbes Blinklicht). Ein Schild zeigt 'Hauptstrasse' für Ihre Richtung. Wer hat Vortritt?",
    "options": [
      {
        "id": "a",
        "text": "Sie haben Vortritt vor dem Querverkehr, da bei Ampelausfall die signalisierten Schilder gelten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Es gilt automatischer Rechtsvortritt.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Alle müssen anhalten.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Bei gelbem Blinklicht oder Ausfall der Lichtsignalanlage gelten die angebrachten Vortrittsschilder (Art. 68 SSV).",
    "ruleReference": "Art. 68 SSV"
  },
  {
    "id": 596,
    "testId": 16,
    "category": "vortritt",
    "categoryName": "Vortritt & Kreuzungen",
    "question": "Praxis-Szenario: Sie stehen als zweites Fahrzeug hinter einem an der Haltelinie wartenden Auto vor einem Stopsignal. Das vordere Auto fährt ab. Dürfen Sie direkt folgen?",
    "options": [
      {
        "id": "a",
        "text": "Nein, jedes Fahrzeug muss für sich selbst an der Haltelinie anhalten.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Ja, wenn kein Querverkehr zu sehen ist.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Ja, wenn man dicht aufschliesst.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Die Stopp-Pflicht gilt individuell für jedes einzelne Fahrzeug an der Haltelinie (Art. 36 SSV). Kein 'Durchrutschen'!",
    "ruleReference": "Art. 36 SSV"
  },
  {
    "id": 597,
    "testId": 17,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Praxis-Szenario: Was bedeutet das Signal 'Rechtsabbiegen für Radfahrer gestattet bei Rot' (Signal mit grünem Velo und Pfeil an der Ampel)?",
    "options": [
      {
        "id": "a",
        "text": "Radfahrer und Mofas dürfen bei rotem Lichtsignal nach rechts abbiegen, müssen aber Fussgängern und dem Querverkehr den Vortritt lassen.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Alle Autos dürfen bei Rot rechts abbiegen.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Radfahrer müssen absteigen.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Seit 2021 dürfen Velos und Mofas bei roter Ampel mit diesem Zusatzschild vorsichtig rechts abbiegen (Art. 69a SSV).",
    "ruleReference": "Art. 69a SSV"
  },
  {
    "id": 598,
    "testId": 18,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Praxis-Szenario: Was bedeutet das Signal 'Pannensignal' (Signal 2.47 'Halteverbot auf dem Pannenstreifen')?",
    "options": [
      {
        "id": "a",
        "text": "Auf dem Pannenstreifen darf auch bei Panne nicht gehalten werden (sofern Gefahrenzone), Weiterrollen bis zur nächsten Bucht zwingend.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Pannenstreifen ist frei für alle.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Parkplatz für Wohnwagen.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Verbietet das Halten selbst bei Notfällen an besonders engen oder gefährlichen Tunnel- und Brückenstellen (Art. 30 SSV).",
    "ruleReference": "Art. 30 SSV"
  },
  {
    "id": 599,
    "testId": 19,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Praxis-Szenario: Was bedeutet das Hinweissignal 'Standort eines Defibrillators' (grünes Quadrat mit weissem Herz und Blitz)?",
    "options": [
      {
        "id": "a",
        "text": "Zeigt den genauen Standort eines öffentlich zugänglichen automatisierten Defibrillators (AED) für Notfälle an.",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Spital in 1 km.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Elektroauto-Ladesäule.",
        "isCorrect": false
      }
    ],
    "points": 1,
    "explanation": "Weist Ersthelfer auf lebensrettende Defibrillatoren bei plötzlichem Herzstillstand hin.",
    "ruleReference": "Art. 62 SSV"
  },
  {
    "id": 600,
    "testId": 20,
    "category": "signale",
    "categoryName": "Verkehrssignale (SSV)",
    "question": "Praxis-Szenario: Was bedeutet eine gelbe Zickzack-Linie vor einer Bushaltestelle?",
    "options": [
      {
        "id": "a",
        "text": "Haltestelle für öffentliche Busse; Halten nur kurz zum Ein- und Aussteigen gestattet, sofern kein Bus behindert wird (Parkieren verboten).",
        "isCorrect": true
      },
      {
        "id": "b",
        "text": "Parkplatz für Taxis.",
        "isCorrect": false
      },
      {
        "id": "c",
        "text": "Strecke mit vielen Schlaglöchern.",
        "isCorrect": false
      }
    ],
    "points": 2,
    "explanation": "Die gelbe Zickzacklinie (Art. 79a SSV) markiert ÖV-Haltestellen. Parkieren ist absolut verboten.",
    "ruleReference": "Art. 79a SSV"
  }
];
