function callback(){
    console.log("hi from callback after 1 second")
}  
setTimeout(callback, 1000)
//here it is asyncronous callback because we will not wait for first egzicution if there is settime out it go next and exacute ,then again come to and execute first task after some time .it is work like asyncronous.

const tenSecondsLater = () => console.log('10 seconds passed!')
setTimeout(tenSecondsLater, 10000)
console.log('Start!')
//asyncronous callback