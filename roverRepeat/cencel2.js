    // /**
    //  * @param {Function} fn
    //  * @param {Array} args
    //  * @param {number} t
    //  * @return {Function}
    //  */
    // var cancellable = function (fn, args, t) {
    //     fn(...args)
    //     const timer = setInterval(() => {
    //         fn(...args)
    //     }, t)
    //     return function cencelFn() {
    //         clearInterval(timer)
    //     }
    // };

    // const result = []

    // const timer = 35;
    // const cencelTimer = 190;
    // const args = [4];

    // const fn = (x) => {
    //     return x * 2;
    // }

    // const start = performance.now();

    // const log = (...args) => {
    //     const diff = Math.floor(performance.now() - start);
    //     result.push({ "returned": fn(...args), "time": diff })
    // }

    // const cenc = cancellable(log, args, timer)

    // setTimeout(() => {
    //     cenc()
    // }, cencelTimer)

    // setTimeout(() => {
    //     console.log(result)
    // }, cencelTimer + timer + 15)


    // /**
    //  *  const result = [];
    //  *
    //  *  const fn = (x) => x * 2;
    //  *  const args = [4], t = 35, cancelTimeMs = 190;
    //  *
    //  *  const start = performance.now();
    //  *
    //  *  const log = (...argsArr) => {
    //  *      const diff = Math.floor(performance.now() - start);
    //  *      result.push({"time": diff, "returned": fn(...argsArr)});
    //  *  }
    //  *       
    //  *  const cancel = cancellable(log, args, t);
    //  *
    //  *  setTimeout(cancel, cancelTimeMs);
    //  *   
    //  *  setTimeout(() => {
    //  *      console.log(result); // [
    //  *                           //     {"time":0,"returned":8},
    //  *                           //     {"time":35,"returned":8},
    //  *                           //     {"time":70,"returned":8},
    //  *                           //     {"time":105,"returned":8},
    //  *                           //     {"time":140,"returned":8},
    //  *                           //     {"time":175,"returned":8}
    //  *                           // ]
    //  *  }, cancelTimeMs + t + 15)    
    //  */