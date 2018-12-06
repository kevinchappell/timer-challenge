import { format } from 'date-fns'
import './styles.css'
import Timer from './timer'

const TIMER_FORMAT = 'mm:ss:SS'
const timer = document.querySelector('.timer')
const startPauseButton = timer.querySelector('.start-pause-timer')
const resetButton = timer.querySelector('.reset-timer')
const timerDisplay = timer.querySelector('.timer-display')
const setTimerDisplay = time => {
  timerDisplay.innerText = format(time + new Date().getTimezoneOffset() * 60 * 1000, TIMER_FORMAT)
}

const onReset = () => {
  // handle Timer reset
}

const onComplete = () => {
  // handle Timer completion
}

// Initialize Timer
const countDownTimer = new Timer({ onUpdate: setTimerDisplay, onComplete })
setTimerDisplay(countDownTimer.remainingTime)

startPauseButton.addEventListener(
  'click',
  () => {
    // toggle Timer running state
  },
  false
)

resetButton.addEventListener('click', onReset, false)
