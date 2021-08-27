/*
apply, call, bind helps to pass 'this' object to a function
*/

function playVideo(a, b) {
    console.log(this, a, b);
}

playVideo.call({ name: 'Nuwan' }, 1, 2);
playVideo.apply({ name: 'Dasuni' }, [1, 2]);

/* 
const fn = playVideo.bind({ name: 'Mevan' });
fn(); */


playVideo.bind({ name: 'Mevan' }, 1, 2)();


//playVideo();// window


const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (e) {
            console.log(this.title, e)
        }.bind(this));
    }
};

video.showTags()

