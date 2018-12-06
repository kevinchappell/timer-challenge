const identity = () => null
const DEFAULT_OPTIONS = () => ({
  timeout: 100,
  millisInFuture: 20000,
  onComplete: identity,
  onUpdate: identity,
})

/*
  Fill in the class properties to complete the API
*/
class Timer {
  constructor(userOptions) {
    const { onUpdate, onComplete, ...options } = Object.assign({}, DEFAULT_OPTIONS(), userOptions)
    this.options = options
    this.remainingTime = options.millisInFuture
    this.onUpdate = onUpdate
    this.onComplete = onComplete
    this.isRunning = false
  }
  startTimer = () => {
    // Start the timer
  }
  stopTimer = () => {
    // Stop the timer
  }
  resetTimer = () => {
    // Reset the timer
  }
  toggleTimer = () => {
    // Toggle the timer's running state
  }
}

export default Timer
