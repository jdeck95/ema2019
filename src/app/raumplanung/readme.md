*Räume abfragen für die man freigeschaltet ist:
    https://digiboard.htwk-leipzig.de/raumplanung/getrooms.php?did=<device-id>

*Abfrage von Reservierungen für einen bestimmten Raum
    https://digiboard.htwk-leipzig.de/raumplanung/getreservations.php?rid=1&did=<device-id>

*Raum anlegen
    https://digiboard.htwk-leipzig.de/raumplanung/addroom.php?did=<device-id>&bez=<raum-bezeichnung>&nr=<raum-nr>

    Bsp.:
    https://digiboard.htwk-leipzig.de/raumplanung/addroom.php?did=5cca08d03b69554033897&bez=ErsterTEST&nr=GuL201

*Um einem anderen Nutzer Ihren Raum freizugeben, tätigen Sie folgenden Aufruf:
    https://digiboard.htwk-leipzig.de/raumplanung/adduser2myroom.php?did=5ccd03b6955.54033897&rid=2&nid=11
    
    Ordnet einen Nutzer meinem Raum zu, der Nutzer darf in Zukunft Termine für meinen Raum beantragen:
    did: Device-ID
    rid: ID des Raums, für die der Nutzer freigeschaltet werden soll
    nid: ID des Nutzers, der freigeschaltet werden soll

*Liefert eine Liste der freigeschalteten Nutzer zu einem angegebenen Raum, der mir gehören muss.
    https://digiboard.htwk-leipzig.de/raumplanung/getuser4myroom.php?did=5cd9315aa05.03233216&rid=1
    did: Device-ID
    rid: ID des Raums, für die der Nutzer freigeschaltet werden 
    
*Anlegen von Reservierungen:
    https://digiboard.htwk-leipzig.de/raumplanung/addreservation.php?did=5cc3751e1ec48.95563961&von=1559114000&bis=1559124000&nr=1

    legt eine Reservierung an
    Es wird überprüft, ob es eine Überschneidung für den Raum mit einer anderen Reservierung gibt
    Ist der Nutzer Besitzer des Raums, wird die Reservierung direkt übernommen, Genehmigt wird auf J gesetzt
    Sonst:
    ist der Raum frei planbar, wird die Reservierung direkt übernommen, Genehmigt wird auf J gesetzt
    Sonst:
    es wird eine Anfrage per Email an den Besitzer gesendet, Genehmigt wird auf N gesetzt

    did: Device-ID
    von: Timestamp der von-Zeit
    bis: Timestamp der bis-Zeit
    nr: Raumnummer
    bem: Bemerkung (optional)

*Löschen von Reservierungen
    https://digiboard.htwk-leipzig.de/raumplanung/delreservation.php?did=5cc3751ec458.95563961&id=24

    löscht eine Reservierung mit der ID “id”
    ID muss vom Nutzer erzeugt worden sein.
    Wenn noch nicht genehmigt, dann Email an den Besitzer, dass die Reservierung zurückgezogen wurde.

    did: Device-ID
    id: id der Reservierung