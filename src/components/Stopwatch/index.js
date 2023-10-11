import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timerInSeconds: 0}

  componentWillUnmount() {
    this.clearIntervalTimer()
  }

  clearIntervalTimer = () => {
    clearInterval(this.intervalId)
  }

  incrementTime = () => {
    this.setState(prevState => ({
      timerInSeconds: prevState.timerInSeconds + 1,
    }))
  }

  onClickStart = () => {
    this.intervalId = setInterval(this.incrementTime, 1000)
    this.setState({isTimerRunning: true})
  }

  onClickStop = () => {
    this.clearIntervalTimer(this.intervalId)
    this.setState({isTimerRunning: false})
  }

  onClickReset = () => {
    this.clearIntervalTimer(this.intervalId)
    this.setState({
      isTimerRunning: false,

      timerInSeconds: 0,
    })
  }

  getTimerInStopwatch = () => {
    const {timerInSeconds} = this.state
    const minutes = Math.floor(timerInSeconds / 60)
    const seconds = Math.floor(timerInSeconds % 60)
    const stringMinute = minutes > 9 ? minutes : `0${minutes}`
    const stringSecond = seconds > 9 ? seconds : `0${seconds}`

    return `${stringMinute}:${stringSecond}`
  }

  render() {
    const {isTimerRunning} = this.state
    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="stopwatch">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                className="timer-image"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="heading">Timer</p>
            </div>
            <h1 className="stopwatch-timer">{this.getTimerInStopwatch()}</h1>
            <div className="timer-buttons">
              <button
                type="button"
                className="start-button button"
                onClick={this.onClickStart}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-button button"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-button button"
                onClick={this.onClickReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
