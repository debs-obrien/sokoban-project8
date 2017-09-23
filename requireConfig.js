requirejs.config ({
	baseUrl : "../",
	paths : {
		"jquery" : "libs/jquery/jquery.min",
		"jquery-ui" : "libs/jquery-ui/jquery-ui.min",
		"howler" : "libs/howler.min",
		"underscore" : "libs/underscore-min",
		"pathfinding" : "libs/pathfinding-browser.min",
		"stats" : "libs/debug/stats.min",
		"datgui" : "libs/debug/dat.gui.min",
        'jasmine': ['test/lib/jasmine/jasmine'],
        'jasmine-html': ['test/lib/jasmine/jasmine-html'],
        'jasmine-boot': ['test/lib/jasmine/boot']
	},
	shim : {
		"jquery-ui" : {
			exports : "$",
			deps : ['jquery']
		},
		"howler" : {
			exports : "Howl"
		},
		"underscore" : {
			exports : "_"
		},
		"pathfinding" : {
			exports : "PF"
		},
		"stats" : {
			exports : "Stats"
		},
		"datgui" : {
			exports : "dat.gui"
		},
        'jasmine-html': {
            deps : ['jasmine']
        },
        'jasmine-boot': {
            deps : ['jasmine', 'jasmine-html']
        }
	},
	urlArgs : "d=" + Date.now()
});


require(['jasmine-boot'], function () {
    require(['../sokoban/test/spec/gameSpec'], function(){
        //trigger Jasmine
        window.onload();
    })
});


define([
	"src/game/Game"
], function (
	game
) {
	game.init();
});

requirejs.config ({
    baseUrl : "",
    paths : {
        "jquery" : "libs/jquery/jquery.min",
        "jquery-ui" : "libs/jquery-ui/jquery-ui.min",
        "howler" : "libs/howler.min",
        "underscore" : "libs/underscore-min",
        "pathfinding" : "libs/pathfinding-browser.min",
        "stats" : "libs/debug/stats.min",
        "datgui" : "libs/debug/dat.gui.min"
    },
    shim : {
        "jquery-ui" : {
            exports : "$",
            deps : ['jquery']
        },
        "howler" : {
            exports : "Howl"
        },
        "underscore" : {
            exports : "_"
        },
        "pathfinding" : {
            exports : "PF"
        },
        "stats" : {
            exports : "Stats"
        },
        "datgui" : {
            exports : "dat.gui"
        }
    },
    urlArgs : "d=" + Date.now()
});


define([
    "src/game/Game"
], function (
    game
) {
    game.init();
});


