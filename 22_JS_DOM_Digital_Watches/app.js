// indian watch
let indianWatch = () => {
    let options = {timeZone : 'Asia/Kolkata'};
    let currentDate = new Date().toLocaleDateString('en-US',options);
    let currentTime = new Date().toLocaleYimeString('en-US',options);
    document.querySelector('#indian-date').innerText = currentDate;
    document.querySelector('#indian-time').innerText = currentTime;
};
indianWatch();