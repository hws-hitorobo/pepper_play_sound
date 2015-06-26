
$(function() {

    // アプリのパスを生成
    var app_dir = location.href.split("/");
    app_dir = "/home/nao/.local/share/PackageManager/apps/" + app_dir[app_dir.length-2] + "/sound/";

    var audio = null;
    var memory = null;

    var qis = new QiSession();
    qis.socket().on('connect', function() {
        // ALMemoryを取得
        qis.service('ALMemory').done( function(m) {
            memory = m;
        });
        // ALAudioPlayerを取得
        qis.service('ALAudioPlayer').done( function(ap) {
            audio = ap;
        });
    });

    // ボタンを押したら再生
    $("#player").on("click", function(e) {
        audio.playFile(app_dir + "hello.wav");
    });
    // ボタンを押したらイベントを発生
    $("#memory").on("click", function(e) {
        memory.raiseEvent("PlaySound", "");
    });

    // ボタンを押したら再生
    var hello = new Audio("sound/hello.wav");
    $("#audio").on("click", function(e) {
        hello.play();
    });

});
