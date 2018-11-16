//
//
//
var app = {
    version : '1.0.0',
    targetEvent : 'click',
    isCordova : false,

    hook : function () {
        document.getElementById('tab1').addEventListener(app.targetEvent, function (evt) {
            console.log(evt.target.id);

            document.getElementById('tab2Data').classList.add('hidden');
            document.getElementById('tab1Data').classList.remove('hidden');
        });
        document.getElementById('tab2').addEventListener(app.targetEvent, function (evt) {
            console.log(evt.target.id);

            document.getElementById('tab1Data').classList.add('hidden');
            document.getElementById('tab2Data').classList.remove('hidden');
        });
    },
    //
    onDOMContentLoaded : function () {
        document.getElementById('test').innerHTML    = 'app.onDOMContentLoaded';

        app.targetEvent = 'click';
        app.isCordova   = (typeof window.cordova !== "undefined");
        //
        app.hook();
    },
    //
    onDeviceReady : function () {
        document.getElementById('test').innerHTML    = 'app.onDeviceReady';

        app.targetEvent = 'touchend';
        app.isCordova   = (typeof window.cordova !== "undefined");
    }

};