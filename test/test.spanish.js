describe("spanish", function() {

    describe("howDoISayTheWord", function() {

        it("should return how do you say this in spanish", function() {

            expect(spanish.howDoISayTheWord("boat")).eq("Como se dice boat en espanol?");

        });

    });

    describe("goodMorningTo", function() {

        it("should say good morning in spanish to a name", function() {

            expect(spanish.goodMorningTo("Becky")).eq("Buenos dias, Becky!");

        });

    });

    describe("thankYouTo", function() {

        it("should say thank you in spanish to a name", function() {

            expect(spanish.thankYouTo("Becky")).eq("Gracias, Becky");

        });

    });

    describe("numberBelow10", function() {

        it("should say the number in spanish", function(){

            expect(spanish.numberBelow10(4)).eq("cuatro");

        });
    });

    describe("colorOfTheRainbow", function() {

        it("should return a color in the rainbow", function() {

            expect(spanish.colorOfTheRainbow("red")).eq("rojo");

        });
    });

    describe("myNameIs", function() {

        it("should return the spanish sentence with a name", function() {

            expect(spanish.myNameIs("Slim Shady")).eq("Me llamo Slim Shady");

        });
    });

    describe("whatDayIsIt", function() {

        it("should return the day of the week", function() {

            var date = new Date("02-24-2015");

            expect(spanish.whatDayIsIt(date.getDay())).eq("martes");
        });
    });

    describe("whatMonthIsIt", function() {

        it("should return the day of the week", function() {

            var date = new Date("02-24-2015");

            expect(spanish.whatMonthIsIt(date.getMonth())).eq("febrero");
        });
    });

    describe("direction", function() {

        it("should return spanish for north south east or west", function() {


            expect(spanish.direction("north")).eq("el norte");
        });
    });

    describe("whatSeasonIsIt", function() {

        it("should return the current season", function() {

            var date = new Date("02-24-2015");

            expect(spanish.whatSeasonIsIt(date.getMonth())).eq("el invierno");
        });
    });



    // describe("sampleBy", function() {

    //     it("gives a sample from array with a matching given key value", function() {
    //         var data, sample;

    //         data = [
    //             {group: "work", name: "Boss"},
    //             {group: "family", name: "John"},
    //             {group: "family", name: "Jane"},
    //             {group: "friends", name: "Cody"}
    //         ];

    //         sample = myUnderscoreMixins.sampleBy(data, {group: "family"});

    //         expect(sample.group).eq("family");

    //         data = [
    //             {group: "family", name: "John"},
    //             {group: "work", name: "Boss"},
    //             {group: "friends", name: "Cody"},
    //             {group: "family", name: "Jane"}
    //         ];

    //         sample = myUnderscoreMixins.sampleBy(data, {group: "family"});

    //         expect(sample.group).eq("family");

    //     });


    //     it("can sample by multiple properties", function() {
    //         var data, sample;

    //         data = [
    //             {group: "family", name: "John"},
    //             {group: "work", name: "Boss"},
    //             {group: "friends", name: "Cody"},
    //             {group: "family", name: "Jane"}
    //         ];

    //         sample = myUnderscoreMixins.sampleBy(data, {group: "family", name: "John"});   

    //         expect(sample).deep.eq({group: "family", name: "John"}); 
    //     });
    // });

});