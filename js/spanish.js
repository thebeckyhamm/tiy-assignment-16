var spanish = {

    howDoISayTheWord: function(word) {
        return "Como se dice " + word + " en espanol?";
    },

    goodMorningTo: function(name) {
        return "Buenos dias, " + name + "!";
    },

    thankYouTo: function(name) {
        return "Gracias, " + name;
    },

    numberBelow10: function(number) {
        var data = [
            {1: "uno"},
            {2: "dos"},
            {3: "tres"},
            {4: "cuatro"},
            {5: "cinco"},
            {6: "seis"},
            {7: "siete"},
            {8: "ocho"},
            {9: "nueve"}
        ];

        var findObj = _.find(data, function(datum) {
            return datum[number];
        });
        return _.values(findObj).toString();
    },

    colorOfTheRainbow: function(color) {
        var data = [
            { red: "rojo" },
            { orange: "naranja" },
            { yellow: "amarillo" },
            { green: "verde" },
            { blue: "azul" },
            { purple: "púrpura" }
        ]; 

        if( !(_.findIndex(data, color) !== -1) ) {
            return "That is not a color in the rainbow";
        }

        var findColor = _.find(data, function(datum) {
            return datum[color];
        });  

        return _.values(findColor).toString(); 
    },

    myNameIs: function(name) {
        return "Me llamo " + name; 
    },

    whatDayIsIt: function() {
        var trans = [
            { Sunday: "domingo" },
            { Monday: "lunes" },
            { Tuesday: "martes" },
            { Wednesday: "miércoles" },
            { Thursday: "jueves" },
            { Friday: "viernes" },
            { Saturday: "sabado"}
        ];

        var date = new Date();
        date = date.getDay();

        date = trans[date];
        return _.values(date).toString();
    },

    whatMonthIsIt: function() {
        var trans = [
            { January: "enero" },
            { February: "febrero" },
            { March: "marzo" },
            { April: "abril" },
            { May: "mayo" },
            { June: "junio" },
            { July: "julio"},
            { August: "agosto"},
            { September: "septiembre"},
            { October: "octubre"},
            { November: "noviembre"},
            { December: "diciembre"}
        ];

        var date = new Date();
        date = date.getMonth();

        date = trans[date];
        return _.values(date).toString();
    },

    direction: function(direction) {
        var trans = [
            { north: "el norte" },
            { south: "el sur" },
            { east: "el este" },
            { west: "el oeste" }
        ];

        direction = direction.toLowerCase();

        return _.chain(trans)
                .find(direction)
                .values().toString();

    },

    whatSeasonIsIt: function() {
        var date = new Date();
        date = date.getMonth();

        if (_.contains([0,1,2], date)) {
            return "el invierno";
        }
        else if (_.contains([3,4,5], date)) {
            return "la primavera";
        }
        else if (_.contains([6,7,8], date)) {
            return "el verano";
        }
        else if (_.contains([9, 10, 11], date)) {
            return "el otoño";
        }
    }


};