//Stop Watch


function StopWatch() {

    let isRunning = false;
    let startTime = 0;
    let stopTime = 0;
    let duration = 0;

    this.start = function () {
        if (isRunning)
            throw new Error('Stopwatch already running');

        isRunning = true;
        startTime = new Date();

    }

    this.stop = function () {

        if (!isRunning)
            throw new Error('Stopwatch already stopped');

        isRunning = false;
        stopTime = new Date();

        const seconds = (stopTime.getTime() - startTime.getTime()) / 1000
        duration += seconds
    }

    this.reset = function () {

    }

    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        }
    });
}


//const sw = new StopWatch();

//sw.stop();
//console.log('D: ', sw.duration);




