document.addEventListener('DOMContentLoaded', function () {
    var popup = document.getElementById('popup');
    var authorizeButton = document.getElementById('authorizeButton');
    var closeButton = document.getElementById('closeButton');
    var audioElement = document.getElementById('audioElement');

    // 显示弹窗  
    popup.style.display = 'block';

    // 处理授权按钮点击  
    authorizeButton.addEventListener('click', function () {
        popup.style.display = 'none'; // 隐藏弹窗  

        // 尝试播放音频  
        playAudio(audioElement);
    });

    // 处理关闭按钮点击  
    closeButton.addEventListener('click', function () {
        popup.style.display = 'none'; // 隐藏弹窗  
    });

    function playAudio(audio) {
        // 检查音频是否已加载  
        if (audio.readyState >= 3) { // 3 = HAVE_FUTURE_DATA 或 4 = HAVE_ENOUGH_DATA  
            audio.play()
                .then(_ => {
                    console.log('Audio is playing.');
                })
                .catch(error => {
                    console.error('Unable to play audio:', error);
                });
        } else {
            // 否则，等待加载完成后再尝试播放  
            audio.oncanplaythrough = function () {
                audio.play()
                    .then(_ => {
                        console.log('Audio is playing.');
                    })
                    .catch(error => {
                        console.error('Unable to play audio:', error);
                    });
            };
        }
    }

    // 其他的音频控件和播放逻辑可以在这里添加  
    // ...  
});