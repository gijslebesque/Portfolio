const sequelize 	= require('sequelize')

const db = {

}

db.conn = new sequelize(process.env.POSTGRES_DB_NAME, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
	host: 'localhost',
	dialect: 'postgres'
})

db.Poem = db.conn.define ('poem', {
	author: 	sequelize.STRING,
	title: 		sequelize.STRING,
	year: 		sequelize.INTEGER,
	lat:  		sequelize.FLOAT,
	lng: 		sequelize.FLOAT,
	poem: 		sequelize.TEXT
})




db.conn.sync({force:true}).then(conn => {
	console.log('Synced db')

	db.Poem.create({
		author: "Andreas Burnier",
		title: "Kromme Waal",
		year: 1981,
		lat: 52.3743904,
		lng: 4.9025958,
		poem: `In de avonddeur bruine schemering \nglimlacht de prostituée: ting, ting, ting\nals een voorbarig mechanisch kloltje,\nspeeldoos die zijn vale liedje zingt,\nwant een kind liet het vallen.\nDrakeprinses met je dikke, verlepte: ting, ting\ngeniet nu van het koffiekleurig licht\nlaat je strelen door vingers van schemering\nop je krijtwitte wangenrotsen.\nStraks komen morsige mannen hun ding\nvertonen en even warm leeglopen: ting, ting.\nBomen ruisen, het water stinkt, schepen \nverzinken tussen traag rottend weggegooid\ngruis. Een knaap die het vechten jong leerde \nsnuit in het voorbijgaan zijn neus.\nEen eenzame vrouw laat een bijtende hond uit.\nBegrijp er maar niets van, lach nu nog even\nmet ogen vol as en bittere lippen.\nIemand die langsging heeft je gezien.`
	})
	db.Poem.create({
		author: "Antony Cuvaly",
		title: "Gijs",
		year: 2016,
		lat: 52.3527074,
		lng: 4.9456599,
		poem: "Gijs heeft een leuke dag, hij is namelijk op reis, nee natuurlijk niet, maar dat de kat wijs, deze vent heeft geen cent, hoe kan ie een reisje betalen, hij kan niet eens een baan binnenhalen, zei de boze man, terwijl die eigenlijk weet, dat gijs super veel kan. Deze jongen is bestemd voor grote daden, kanker, aids hij gaat het allemaal oplossen, die nare kwalen. Nou heb een beetje vertrouwen in bassie, want hij zit in de linkerbaan, met zn voet vol op het gassie"
	})

	db.Poem.create({
		author: "Remco Campert",
		title: "Lieverdje",
		year: 1982,
		lat: 52.3687508,
		lng: 4.8890007,
		poem: `Zoet weer \nwilde naar de Geldersekade \nhet beeld van Breero \nmaar bleefhangen op het Spui \n bij het onooglijke Lieverdje \n sprak er op een bankje \n met de jonge bleke actrice \n op weg naar het hoofdpostkantoor \n dat gesloten zou zijn \n als ze er aankwam \n nog bleef ik dralen \n aanschouwde het straattoneel van de misère \neen kale jongen in een te groot pak \ngilde om zijn moeder \neen vrouw met vier plastic tassen \nkrabde constant aan haar benen \nde politie arresteerde geruisloos een boekendief \nbij Hoppe en Zwart stond de hoop der natie \nvijf uur men kocht de NRC \n het was vrijdag de valse middag stierf \n ik sloeg de krant op \n weer was Robert Jasper Grootvelds boot verbrand`
	})

	db.Poem.create({
		author: "Jan Eijkelboom",
		title: "Duiven",
		year: 1983,
		lat: 52.373045,
		lng: 4.8926323,
		poem: `Ik zag een man op de Dam,
hij was met drek overdekt,
hij stond onder een wolk,
liep in een vijver van duiven.

Kleuters wuifden half-bang langs de kant
of waadden dronken door het luid
koerende, doorvoede maar toch
steeds bezetener klapwiekende volk.

Vertederd keken ouders naar dit
niet uit te roeien misverstand:
geen land of op square en piazza
wordt vrede door vraatzucht vertolkt.

Ja, laat Picasso maar schuiven.
Hij schetste Stalin als Adonis
en de duif met een tak in het bekje.
De duif? Die bestaat niet in't echt,
men ziet. nooit anders dan duiven.`
	})

	db.Poem.create({
		author: "Simon Vestdijk",
		title: "Thorbeckeplein",
		year: 1936,
		lat: 52.3653398,
		lng: 4.8960201,
		poem:`Twee winkels zijn nog niet tot kroeg bevorderd,
Staan leeg te wachten onder hun balkon,
Maar weldra worden zij geridderorderd
Met een 'Olympia' of 'Chez Gas ton':

Er zullen hees-trillende bronstgeluiden
De klanten lokken voor livreien langs,
En vrouwen zullen zich zo zwoel als 't Zuiden
Uit pelzen blank openen voor de dans.

Eén is er, die zich niet verleiden laat,
Al groeit het cabaret ook tot de hemel:
De staatsman in zijn joelend internaat,
De handen zorg'lijkrein (voor het gefemel).

Of zou hij, wijzer, met het nachtvolk praten:
Dodenontspanning, moeizaam en met mate?
Want als de melkman vroeg de mussen stoort,
Staat zijn gezicht nadenkend, maar bekoord.`
	})

		db.Poem.create({
		author: "Remco Campert",
		title: "Het lied van de jongens in het Vondelpark",
		year: 1970,
		lat: 52.3580178,
		lng: 4.8686062,
		poem:`Met de tram gaan ze naar hun werk
als de schemering valt
de jongens van het park

bleek en afgetrokken
goedkope broeken aan
dunne truitjes
kettinkjes van doublé

het gezicht van hun moeder
haal je direct uit het hunne
de jongens van het park

in het struikgewas
tussen de bomen
wachten ze op de eenzame kamerbewoner
huisvader, de verdrietige boekhouder
de bange notaris

als de Volkswagen langskomt
trekken ze zich in het duister terug
even maar
de politie is hun beste kameraad

soms is het warm en zijn er sterren
maar vaker is het koud, valt de regen
is het park als een kwade droom
als je kind bent
met de goedkope zakkam
gaan ze steeds door hun haar
de jongens van het park

later komt oom hen halen
oom met het perkamenten gezicht
de streepjes van wenkbrauwen en de dunne mond
oom met de flonkerende ringen
aan elke hand twee

weer zitten ze in de tram
de nacht is nogjong, zegt oom
en klopt ze op de dij
met kille bemoediging
en vangt het verdiende geld
van de jongens van het park`
	})

	db.Poem.create({
		author: "Constantijn Huygens",
		title: "Geluk aan de E. Heren regeerders van Amsterdam in haar nieuwe stadhuis",
		year: 1657,
		lat: 52.3653398,
		lng: 4.8960201,
		poem:`Doorluchte Stichteren van 's Werelds Achtste wonder,
Van zoveel Steens omhoog op zoveel Houts vanonder,
Van zoveel kostelijks zo konstelijk verwrocht,
Van zoveel heerlijkheids tot zoveel nuts gebracht;
God, die u Macht en Pracht met Reden gaf te voegen,
God, gev' u in 't Gebouw met Reden en Genoegen
Te tonen wie gij zijt, en, daar ik 'tal in sluit,
Heil zij daar eeuwig in en Onheil eeuwig uit.
Is 't ook zo voorgeschikt, dat deze Marmermuren
Des Aardrijks uiterste niet hebben te verduren,
En, werd het nodig dat het Negende verschijn'
Om 't Achtste Wonderwerks nakomeling te zijn,
God, uwer Vad'ren God, God uwer Kind'ren Vader,
God zo nabij u, zij die Kind'ren zoveel nader,
Dat hare Welvaart nog een Huis bouw' en bezitt'
Daar bij dit Nieuwe sta als 't Oude stond bij dit.`
	})

	db.Poem.create({
		author: "Willem Frederik Hermans",
		title: "Eerste Helmersstraat",
		year: 1967,
		lat: 52.3602335,
		lng: 4.8622165,
		poem:`Alle straten in de buurt waar ik ben grootgebracht,
zijn naar zesderangsschrijvers genoemd.
Niet minder dan drie straten heeft het
gemeentebestuur ten deel doen vallen aanJ an
Frederik Helmers, die door niemand meer gelezen
wordt. En in de eerste daarvan woon ik.`
	})

	db.Poem.create({
		author: "Jan Blokker",
		title: "Het Bellamy-kwartier",
		year: 1976,
		lat: 52.3681121,
		lng: 4.867551,
		poem:`Het Bellamy-kwartier bijvoorbeeld, dat een
paar honderd vierkante meter aarzelt tussen
een nachtmerrie en een idylle, een bidonville en
een schilderachtig dorp, en dat dan ineens net
zo redeloos ophoudt als het is begonnen: op
een veelhoekig plein dat alle misère van Amsterdam-
West bondig samenvat in twee pisbakken,
een stortplaats van de stadsreiniging,
de achterkant van een tramremise en een paar
olmen die achter een gietijzeren hek het schamele
alibi vormen van Haar die als Keizerin
de Kroon draagt van Europa. Mijn god, wat is
die stad troosteloos lelijk.`
	})

})

module.exports = db
