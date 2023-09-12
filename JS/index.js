const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonTimeUp = document.querySelector('.timeUp');
const buttonTimeDown = document.querySelector('.timeDown');
const buttonForest = document.querySelector('.forest');
const cardForest = document.querySelector('#forest');
const sliderForest = document.querySelector('#volumeForest');
const buttonRain = document.querySelector('.rain');
const cardRain = document.querySelector('#rain');
const sliderRain = document.querySelector('#volumeRain');
const buttonCoffeeShop = document.querySelector('.coffeeShop');
const cardCoffeeShop  = document.querySelector('#coffeeShop');
const sliderCoffeeShop = document.querySelector('#volumeCoffeeShop');
const buttonFireplace = document.querySelector('.fireplace');
const cardFireplace  = document.querySelector('#fireplace');
const sliderFireplace = document.querySelector('#volumeFireplace');
const buttonLightmode = document.querySelector('.lightmode');
const buttonDarkmode = document.querySelector('.darkmode');
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let timeTimerOut
let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)

function updateDisplay(newMinutes, seconds){
  newMinutes = newMinutes === undefined ? minutes : newMinutes
  seconds = seconds === undefined ? 0 : seconds
  minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetControls() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
}

function countdown () {
  timeTimerOut = setTimeout(function(){

    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
    let isFinished = minutes <= 0 && seconds <= 0

    updateDisplay(minutes, 0)

    if(isFinished) {
      updateDisplay()
      kitchenTimer.play()
      resetControls()
      return
    }
    
    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateDisplay(minutes, String(seconds) - 1)

    countdown()
  }, 1000)
}

//Timer
buttonPlay.addEventListener('click', function() {

  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonPressAudio.play()
  countdown()

})

buttonPause.addEventListener('click', function() {
  buttonPressAudio.play()
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')

  clearTimeout(timeTimerOut)
})

buttonStop.addEventListener('click', function() {
  buttonPressAudio.play()
  clearTimeout(timeTimerOut)
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
})

buttonTimeUp.addEventListener('click', function() {
  buttonPressAudio.play()
  minutesDisplay.textContent = String(Number(minutes) + 5).padStart(2, "0")
  minutes = Number(minutesDisplay.textContent)
  if (minutes >= 100) {
    minutesDisplay.textContent = String(100).padStart(2, '0')
    minutes = Number(minutesDisplay.textContent)
  }
})

buttonTimeDown.addEventListener('click', function() {
  buttonPressAudio.play()
  minutesDisplay.textContent = String(Number(minutes) - 5).padStart(2, "0")
  minutes = Number(minutesDisplay.textContent)
  if (minutes <= 0) {
    minutesDisplay.textContent = String(0).padStart(2, '0')
    minutes = Number(minutesDisplay.textContent)
  }
})


//Sons ambientes

const forestSound = new Audio('../sounds/Floresta.wav')
const rainSound = new Audio('../sounds/Chuva.wav')
const coffeeShopSound = new Audio('../sounds/Cafeteria.wav')
const fireplaceSound = new Audio('../sounds/Lareira.wav')
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

forestSound.loop = true
rainSound.loop = true
coffeeShopSound.loop = true
fireplaceSound.loop = true


buttonForest.addEventListener('click', function(){
  buttonForest.classList.toggle('active')
  cardForest.classList.toggle('active')
  buttonPressAudio.play()
  let isActived = buttonForest.classList.contains('active')
  if(isActived) {
    forestSound.play()
  } else {
    forestSound.pause()
  }
})

sliderForest.addEventListener('click', function() {
  forestSound.volume = (sliderForest.value) / 100
})

buttonRain.addEventListener('click', function() {
  buttonRain.classList.toggle('active')
  cardRain.classList.toggle('active')
  buttonPressAudio.play()
  let isActived = buttonRain.classList.contains('active')
  if(isActived) {
    rainSound.play()
  } else {
    rainSound.pause()
  }
})

sliderRain.addEventListener('click', function() {
  rainSound.volume = (sliderRain.value) / 100
})

buttonCoffeeShop.addEventListener('click', function(){
  buttonCoffeeShop.classList.toggle('active')
  cardCoffeeShop.classList.toggle('active')
  buttonPressAudio.play()
  let isActived = buttonCoffeeShop.classList.contains('active')
  if(isActived) {
    coffeeShopSound.play()
  } else {
    coffeeShopSound.pause()
  }
})

sliderCoffeeShop.addEventListener('click', function() {
  coffeeShopSound.volume = (sliderCoffeeShop.value) / 100
})

buttonFireplace.addEventListener('click', function(){
  buttonFireplace.classList.toggle('active')
  cardFireplace.classList.toggle('active')
  buttonPressAudio.play()
  let isActived = buttonFireplace.classList.contains('active')
  if(isActived) {
    fireplaceSound.play()
  } else {
    fireplaceSound.pause()
  }
})

sliderFireplace.addEventListener('click', function() {
  fireplaceSound.volume = (sliderFireplace.value) / 100
})

//modo luz

buttonLightmode.addEventListener('click', function() {
  buttonLightmode.classList.add('hide')
  buttonDarkmode.classList.remove('hide')
  buttonPressAudio.play()
  document.querySelector('html').classList.add('dark')
})

buttonDarkmode.addEventListener('click', function() {
  buttonDarkmode.classList.add('hide')
  buttonLightmode.classList.remove('hide')
  buttonPressAudio.play()
  document.querySelector('html').classList.remove('dark')
})

