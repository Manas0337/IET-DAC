function fetchData(callback) {
    console.log('All arguments:', process.argv);
    let a = process.argv[2];
    for (let i = 1; i < 11; i++) {
        console.log(i * a);
    }
}


fetchData()