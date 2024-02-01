class Clock {
    constructor({ template }) {
        this.template = template;
        this.timer = null;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

class Event {
    #_date;
    #_type;

    constructor(date, type) {
        if (type === '') {
            throw new Error('Le type ne peut pas être vide');
        }
        let eventDate = new Date(date);
        if (!(eventDate instanceof Date)) {
            throw new Error('Mauvais format de date');
        }
        this.#_date = eventDate;
        this.#_type = type;
    }

    get laDate() {
        return this.#_date;
    }

    get affichage() {
        return this.#_type;
    }
}

class ConcertEvent extends Event {
    #_artiste;

    constructor(date, artiste) {
        super(date, 'Concert de');
        if (artiste === '') {
            throw new Error('L\'artiste ne peut pas être vide');
        }
        this.#_artiste = artiste;
    }

    get artiste() {
        return this.#_artiste;
    }

    get affichage() {
        return `${super.affichage} ${this.#_artiste}.`;
    }
}

class SportEvent extends Event {
    #_equipeA;
    #_equipeB;
    #_sport;

    constructor(sport, equipeA, equipeB, date) {
        super(date, 'Rencontre de');
        if (sport === '') {
            throw new Error('Le sport ne peut pas être vide');
        }
        this.#_sport = sport;
        this.#_equipeA = equipeA;
        this.#_equipeB = equipeB;
    }

    get sport() {
        return this.#_sport;
    }

    get affichage() {
        return `${super.affichage} ${this.#_sport} entre ${this.#_equipeA} et ${this.#_equipeB}.`;
    }
}

class EventFactory{
    constructor(type, data) {
        switch(type){
            case 'Concert':
                return new ConcertEvent(data.date, data.artiste);
            case 'Sport':
                return new SportEvent(data.sport, data.equipeA, data.equipeB, data.date);
            default:
                throw new Error('Type d\'évènement inconnu');
        }
    }
}