function interpolation({ step, start, end, callback, duration }) {
    const xstep = (end - start) / step
    const ystep = duration / step
    let s = start
    for (let i = 1; i <= step; i++) {
        setTimeout(() => {
            callback([s, ystep * i])
            s += xstep 
        }, ystep * i)
    }
}
// // step = 5
// // start = 0
// // end = 1
// // duration = 10

// // t = duration = y
// //    |
// // 10 |_______________. <- execute callback([0.8, 10])
// //    |               |
// //    |               |
// //  8 |___________.   |
// //    |           |   |
// //    |           |   |
// //  6 |_______.   |   |
// //    |       |   |   |
// //    |       |   |   |
// //  4 |___.   |   |   |
// //    |   |   |   |   |
// //    |   |   |   |   |
// //  2 .   |   |   |   |
// //    |   |   |   |   |
// //    |___|___|___|___|___d = steps = x
// //    0  0.2 0.4 0.6 0.8
// //step = how many stops u'll make
// //start and end where to start and end **end isn't included**
// //duration is the time it'll take 
// //end - start / steps = x0-x1
// //duration/steps = y0-y1
// //  2 .   |   |   |   |
// //    |   |   |   |   |
// //    |___|___|___|___|___d = steps = x
// //    0  0.2 0.4 0.6 0.8
// //step = how many stops u'll make
// //start and end where to start and end **end isn't included**
// //duration is the time it'll take 
// //end - start / steps = x0-x1
// //duration/steps = y0-y1

