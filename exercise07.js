/*
All the movies inb 2018 with rating > 4
Sort them by their rating
Descending order
Pick their titles

a,b
*/

const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3.0 },
    { title: 'd', year: 2017, rating: 4.5 },
];




function filterMovies(array) {

    return movies.
        filter(movie => movie.year === 2018 && movie.rating >= 4).
        sort((a, b) => a.rating - b.rating).
        reverse().
        map(movie => movie.title)
}

const filtered = filterMovies(movies);
console.log(filtered);