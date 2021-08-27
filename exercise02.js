//Stop Watch


function StopWatch() {

    let isRunning = false;
    let startTime = 0;
    let stopTime = 0;
    let duration = 0;

    Object.defineProperty(this, 'isRunning', {
        get: function () {
            return this.isRunning;
        }
    });

    Object.defineProperty(this, 'startTime', {
        get: function () {
            return this.startTime;
        }
    });

    Object.defineProperty(this, 'stopTime', {
        get: function () {
            return this.stopTime;
        }
    });

    Object.defineProperty(this, 'duration', {
        get: function () {
            return this.duration;
        }
    });
}


StopWatch.prototype.start = function () {
    if (this.isRunning)
        throw new Error('Stopwatch already running');

    this.isRunning = true;
    this.startTime = new Date();

}

StopWatch.prototype.stop = function () {

    if (!this.isRunning)
        throw new Error('Stopwatch already stopped');

    this.isRunning = false;
    this.stopTime = new Date();

    const seconds = (this.stopTime.getTime() - this.startTime.getTime()) / 1000
    this.duration += seconds
}

StopWatch.prototype.reset = function () {
    this.isRunning = false;
    this.startTime = 0;
    this.stopTime = 0;
    this.duration = 0;

}


const sw = new StopWatch();

//sw.stop();
console.log(sw);




