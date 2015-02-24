describe("SongFilters", function() {
    var songFilters;

    beforeEach(function() {
        songFilters = new SongFilters();
    })

    describe("songsByArtist", function() {
        it("should return one song the artist made", function() {

            var data = [
                {"name": "Like a Rolling Stone", "artist": "Bob Dylan"},
                {"name": "Satisfaction", "artist": "The Rolling Stones"},
            ];

            expect(songsByArtist("Bob Dylan")).eq("Like a Rolling Stone");
        });  

    });

});