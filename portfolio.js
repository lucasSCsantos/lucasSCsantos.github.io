const portfolioImages = document.getElementsByClassName('port');
const portfolioType = document.querySelector('.portfolio-type ul');
const graphicDesign = [
	'images/Preset_Bíbilico_4.jpg',
	'images/Preset_Biblico_3.jpg',
	'images/Preset_Bíblico_6_6.jpg',
	'images/Preset_Bíblico_7.jpg',
	'images/Preset_Bíblico_8.jpg',
	'images/Preset_Bíblico_10.jpg',
];
const webDesign = [
	'images/site-1.jpg',
	'images/site-2.jpg',
	'images/site-3.jpg',
	'images/site-4.jpg',
	'images/site-1.jpg',
	'images/site-2.jpg',
];
const portType = document.querySelector('.port-type');

function sorteioWebGraphic() {
	const number = Math.floor(Math.random() * 2);
	if(number === 1){
		return graphicDesign;
	} else {
		return webDesign;
	}
}

function selectedPortfolio() {
	const selected = document.querySelector('.selected');
	if (selected.innerText === 'All') {
		for (let index = 0; index < portfolioImages.length; index += 1){
			const array = sorteioWebGraphic();
			portfolioImages[index].style.backgroundImage = `url(${array[index]})`;
		}
	} else if (selected.innerText === 'Web Design') {
		for (let index = 0; index < portfolioImages.length; index += 1){
			portfolioImages[index].style.backgroundImage = `url(${webDesign[index]})`;
		}
	}	else {
		for (let index = 0; index < portfolioImages.length; index += 1){
			portfolioImages[index].style.backgroundImage = `url(${graphicDesign[index]})`;
		}
	}
}

function selectPortfolio(element) {
	if (element.target.parentNode === portfolioType) {
    if (document.querySelector('.selected') !== null) {
      document.querySelector('.selected').classList.remove('selected');
      element.target.classList.add('selected');
    } else {
      element.target.classList.add('selected');
    }
  }
	selectedPortfolio();
}

window.onload = function() {
	selectedPortfolio();
}

portType.addEventListener('click', selectPortfolio);