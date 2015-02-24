var data = [
    {"name": "Like a Rolling Stone", "artist": "Bob Dylan"},
    {"name": "Satisfaction", "artist": "The Rolling Stones"},
];


// var songFilters = {
//     songsByArtist: function(name) {
//         _.filter(data, function(datum) {
//             return data.artist === name;
//         });
//     }

// };

var SongFilters = (function(){

    function SongFilters(data) {
        this.data = data;
    };

    SongFilters.prototype = {
        songsByArtist: function(name) {
            var songObject = _.find(this.data, function(datum) {
                return datum.artist === name;
            }); 
            console.log(songObject);

            return songObject.name;
            
        }
    }

    return SongFilters;

})();