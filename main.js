const portfolioImages = document.getElementsByClassName('port');
const portfolioType = document.querySelector('.portfolio-type ul');

function selectedPortfolio() {
	const selected = document.querySelector('.selected');
	if (selected.innerText === 'All') {
		for (let index = 0; index < portfolioImages.length; index += 1){
			portfolioImages[index].style.backgroundImage = 'url(jonatan-pie-655dlJ6H0sI-unsplash.jpg)';
		}
	} else if (selected.innerText === 'Web Design') {
		for (let index = 0; index < portfolioImages.length; index += 1){
			portfolioImages[index].style.backgroundImage = 'url(jonathan-chng-lD0XR40WIVw-unsplash.jpg)';
		}
	}	else {
		for (let index = 0; index < portfolioImages.length; index += 1){
			portfolioImages[index].style.backgroundImage = 'url(maria-van-schoor-MoZGghHR08U-unsplash.jpg)';
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


addEventListener('click', selectPortfolio);