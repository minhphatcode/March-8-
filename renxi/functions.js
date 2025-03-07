
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "<span class=\"digit\">" + days + "</span> ngày <span class=\"digit\">" + hours + "</span> giờ <span class=\"digit\">" + minutes + "</span> phút <span class=\"digit\">" + seconds + "</span> giây"; 
	$("#clock").html(result);
}

$(document).ready(function() {
    $(document).on('click', function() {
        $('#backgroundAudio').prop('muted', false).get(0).play().catch(error => console.log("Lỗi phát âm thanh: ", error));
    });
});

function createFlyingClouds() {
    const container = document.getElementById('flyingClouds');
    setInterval(() => {
        const cloud = document.createElement('div');
        cloud.className = 'flying-cloud';
        cloud.style.top = Math.random() * 50 + 'vh'; // Vị trí ngẫu nhiên theo chiều dọc
        cloud.style.animationDelay = Math.random() * 5 + 's'; // Trễ ngẫu nhiên
        container.appendChild(cloud);
        setTimeout(() => cloud.remove(), 15000); // Xóa sau khi chạy hết animation
    }, 5000); // Tạo đám mây mới mỗi 5 giây
}

function createFlyingPlanes() {
    const container = document.getElementById('flyingPlanes');
    setInterval(() => {
        const plane = document.createElement('div');
        plane.className = 'flying-plane';
        plane.style.top = Math.random() * 70 + 'vh'; // Vị trí ngẫu nhiên theo chiều dọc
        plane.style.animationDelay = Math.random() * 3 + 's'; // Trễ ngẫu nhiên
        container.appendChild(plane);
        setTimeout(() => plane.remove(), 10000); // Xóa sau khi chạy hết animation
    }, 3000); // Tạo máy bay mới mỗi 3 giây
}

$(document).ready(function() {
    $(document).on('click', function() {
        $('#backgroundAudio').prop('muted', false).get(0).play().catch(error => console.log("Lỗi phát âm thanh: ", error));
    });
    createFlyingClouds();
    createFlyingPlanes();
});