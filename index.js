function changeToImg(_id) {
	let currentActive = document.querySelector('.active');
	let currentActiveButton = document.querySelector('.active-button');
	let temp = currentActive.id;
	let temp1 = currentActiveButton.id;
	temp = temp.replace(/.$/,_id)
	temp1 = temp1.replace(/.$/,_id)
	document.getElementById(temp).classList.add("active");
	document.getElementById(temp1).classList.add("active-button");
	currentActive.classList.remove("active");
	currentActiveButton.classList.remove("active-button");
}

function nextImg() {
	let currentActive = document.querySelector('.active');
	let temp = currentActive.id;
	let next = Number(temp[temp.length-1])+1;
	if (next == 5) {
		changeToImg(0);
	} else {
		changeToImg(next);
	}
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function rotateImgs() {
	while (true) {
		await sleep(3000);
		nextImg();
	}
}

rotateImgs();
