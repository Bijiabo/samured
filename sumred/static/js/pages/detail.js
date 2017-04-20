/**
 * Created by huchunbo on 2017/4/6.
 */
window.didLoadActions = [];

// 渲染元素
var render = function() {
    var app = new Vue({
        el: '#app',
        data: {
            videoCards: Array.apply(null, Array(50))
        },
        methods: {
        },
        mounted: function () {
        }
    });
};
window.didLoadActions.push(render);

requirejs(['public'], function(_public) {
    var targetActions = function () {
        _public.init();
        // video play
        var controls = ["<div class='plyr__controls'>",
            "<button type='button' data-plyr='play'>",
            "<svg><use xlink:href='#plyr-play'></use></svg>",
            "<span class='plyr__sr-only'>Play</span>",
            "</button>",
            "<button type='button' data-plyr='pause'>",
            "<svg><use xlink:href='#plyr-pause'></use></svg>",
            "<span class='plyr__sr-only'>Pause</span>",
            "</button>",
            "<span class='plyr__progress'>",
            "<label for='seek{id}' class='plyr__sr-only'>Seek</label>",
            "<input id='seek{id}' class='plyr__progress--seek' type='range' min='0' max='100' step='0.1' value='0' data-plyr='seek'>",
            "<progress class='plyr__progress--played' max='100' value='0' role='presentation'></progress>",
            "<progress class='plyr__progress--buffer' max='100' value='0'>",
            "<span>0</span>% buffered",
            "</progress>",
            "<span class='plyr__tooltip'>00:00</span>",
            "</span>",
            "<span class='plyr__time'>",
            "<span class='plyr__sr-only'>Current time</span>",
            "<span class='plyr__time--current'>00:00</span>",
            "</span>",
            "<span class='plyr__time'>",
            "<span class='plyr__sr-only'>Duration</span>",
            "<span class='plyr__time--duration'>00:00</span>",
            "</span>",
            "<button type='button' data-plyr='mute'>",
            "<svg class='icon--muted'><use xlink:href='#plyr-muted'></use></svg>",
            "<svg><use xlink:href='#plyr-volume'></use></svg>",
            "<span class='plyr__sr-only'>Toggle Mute</span>",
            "</button>",
            "<span class='plyr__volume'>",
            "<label for='volume{id}' class='plyr__sr-only'>Volume</label>",
            "<input id='volume{id}' class='plyr__volume--input' type='range' min='0' max='10' value='5' data-plyr='volume'>",
            "<progress class='plyr__volume--display' max='10' value='0' role='presentation'></progress>",
            "</span>",
            "<div class='right-container'>",
            "<button type='button' data-plyr='captions'>",
            "<svg class='icon--captions-on'><use xlink:href='#plyr-captions-on'></use></svg>",
            "<svg><use xlink:href='#plyr-captions-off'></use></svg>",
            "<span class='plyr__sr-only'>Toggle Captions</span>",
            "</button>",
            "<button type='button' data-plyr='fullscreen'>",
            "<svg class='icon--exit-fullscreen'><use xlink:href='#plyr-exit-fullscreen'></use></svg>",
            "<svg><use xlink:href='#plyr-enter-fullscreen'></use></svg>",
            "<span class='plyr__sr-only'>Toggle Fullscreen</span>",
            "</button>",
            "</div>",// .right-container
            "</div>"].join("");
        var playerOptions = {
            controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'fullscreen'],
            debug: true,
            autoplay: false,
            html: controls,
            captions: {defaultActive: true},
            hideControls: false
        };
        plyr.setup(playerOptions);
    };
    
    window.didLoadActions.push(targetActions);
    
});