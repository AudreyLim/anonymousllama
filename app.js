$(document).ready(function () {
	for (var i=1;i<101;i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			$('.list').append("<p>AnonymousLlama</p>");
		}
		else if (i % 3 == 0 && i % 5 !== 0) {
			$('.list').append("<p>Anonymous</p>");
		}
		else if (i % 5 == 0 && i % 3 !== 0) {
			$('.list').append("<p>Llama</p>");
		}
		else {
			$('.list').append("<p>"+i+"</p>");
		}
	}
}

);

