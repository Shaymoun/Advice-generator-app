const API_URL = `https://api.adviceslip.com/advice`

const adviceNumber = document.querySelector('.advice-id')
const adviceText = document.querySelector('.advice-text')
const dice = document.querySelector('.dice')

const getRandomAdvice = async() => {
	const response = await fetch(API_URL)
	const data = await response.json()
    const {slip} = data
    adviceNumber.textContent = slip.id;
    adviceText.textContent = `"${slip.advice}"`
}

dice.addEventListener('click', getRandomAdvice)
