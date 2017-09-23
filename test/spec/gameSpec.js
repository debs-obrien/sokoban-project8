define(['../../src/game/Game'], function(Game){
    describe("my-tests", function(){
        describe("direction", function(){
            it("should say left if left is chosen", function(){
                expect(Game.sayHello()).toEqual("hello");
            })
        });
    })
});

/*define(['../../src/game/game/Player'], function(Player){
    describe("my-tests", function(){
        describe('test', function(){
            var position = Player.getPlayerPos(6);
            it('test', function(){
                expect(position).toEqual(6)
            })
        })
    })
});*/

/*define(['../../src/game/game/box/Box'], function(Box){
    describe("my-tests", function(){
        describe('tests the moves', function(){
            var xOffset = 0;
            if(Box.prototype.move('left')){
                xOffset = -1;
            }
            it('move left', function(){
                expect(xOffset).toEqual(-1)
            })
        })
    })
});*/
