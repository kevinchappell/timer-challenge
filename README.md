# Timer Challenge

Create a countdown timer with start/stop and reset buttons.

![image](https://user-images.githubusercontent.com/1457540/55019549-5af09500-4fb2-11e9-9f23-cefec4dbc203.png)

## Objectives

Fill in the methods for the Timer class found in src/timer.js.
Fill in the `onReset` and `onComplete` functions in src/index.js.
Add toggle functionality to the click event handler for the start/pause button in src/index.js.

**Timer should:**

* [ ] count down to 0 and stop.
* [ ] be able to pause and resume.
  * [ ] Timer should stop counting down when paused
  * [ ] Timer should continue counting from paused time when resumed.
* [ ] be able to reset
  * [ ] when reset, the timer returns to it's initial start time.
  
## Getting Started

### Codesandbox

Fork [https://codesandbox.io/s/github/kevinchappell/timer-challenge](https://codesandbox.io/s/github/kevinchappell/timer-challenge)

### Local

```bash
git clone git@github.com:kevinchappell/timer-challenge.git
cd timer-challenge
npm install
npm start
```

This should clone the repo, install its dependencies and start the development server. From there you can edit the files in `src/` until the objectives are completed.


## Bonus
Describe testing strategy for the Timer class.

## Super Bonus
Add tests for the Timer class.
