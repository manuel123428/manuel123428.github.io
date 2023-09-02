var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var nameInput = document.getElementById('name');
var downloadBtn = document.getElementById('download-btn');

var image = new Image();
image.crossOrigin = "anonymous";
image.src = '1.jpg';
image.onload = function () {
	drawImage();
}

function drawImage() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
	ctx.font = '35px "Alex Brush"';
	ctx.fillStyle = '#114d00';
	ctx.fillText(nameInput.value, 230, 238);

	// Add the current date
	ctx.font = '20px Arial';
	ctx.fillStyle = '#000';
	const currentDate = new Date();
	const formattedDate = currentDate.toLocaleDateString();
	ctx.fillText(formattedDate, 175, 365);
}

nameInput.addEventListener('input', function () {
	drawImage();
});

downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('image/jpg');
	downloadBtn.download = 'Certificate - ' + nameInput.value + '.jpg';
});
