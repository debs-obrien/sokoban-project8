/*define(['../../src/game/Game'], function(Game){
    describe("my-tests", function(){
        describe("direction", function(){
            it("should say left if left is chosen", function(){
                expect(Game.sayHello()).toEqual("hello");
            })
        });
    })
});*/

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
/*define(['../../src/game/controller/GamePad'], function(gamePad){
    describe("Map Manager Test", function(){
        describe('Returns a cells x,y value', function(){
            it('should give a value', function(){
                expect(gamePad.gamePadAvailable).toEqual(false)
            });

        })
    })

});*/
define(['../../src/game/controller/Controller', '../../src/game/controller/Keyboard'], function(controller, keyboard){
    describe("Map Manager Test", function(){
        describe('test initial controller values', function(){

            it('should test initial values', function(){
                expect(controller.left).toEqual(0);
                expect(controller.right).toEqual(0);
                expect(controller.up).toEqual(0);
                expect(controller.down).toEqual(0);
                expect(keyboard.LEFT_KEYCODE).toEqual(37);
                expect(keyboard.RIGHT_KEYCODE).toEqual(39);
                expect(keyboard.UP_KEYCODE).toEqual(38);
                expect(keyboard.DOWN_KEYCODE).toEqual(40);
            });

            function actionKey(action, key) {
                var e = new Event(action);
                e.keyCode=key;
                document.dispatchEvent(e);
            }
            //keyboard.changeKeyState(keyboard.LEFT_KEYCODE);
            keyboard.keyUp(keyboard.LEFT_KEYCODE);
            //actionKey('keydown', keyboard.LEFT_KEYCODE);
            it('pressing keydown changes the value to 1', function(){
                //expect(keyboard.keyUp(keyboard.LEFT_KEYCODE)).toEqual(1);
                expect(controller.left).toEqual(1);
            });
            /*actionKey('keyup', keyboard.LEFT_KEYCODE);
            it('pressing keyup changes the value to 0', function(){
                expect(controller.left).toEqual(0);
            });*/

        })
    })

});
