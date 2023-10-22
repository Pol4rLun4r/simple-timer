import dayjs, { Dayjs } from "dayjs";

interface IGetRemaining {
    currentTime: Dayjs,
    futureTime: Dayjs
}

const userGetRemainingTime = (setTime: number, startTime: number) => {
    const currentTime = dayjs();
    const futureTime = dayjs(startTime + setTime);

    if(futureTime.isBefore(currentTime)){
        return {
            seconds: '00',
            minutes: '00',
            hours: '00',
            progress: 0
        }
    }

    return {
        seconds: getRemainingSeconds({currentTime: currentTime, futureTime: futureTime}),
        minutes: getRemainingMinutes({currentTime: currentTime, futureTime: futureTime}),
        hours: getRemainingHours({currentTime: currentTime, futureTime: futureTime}),
        progress: getRemainingProgress({currentTime: currentTime, futureTime: futureTime})
    }

    function getRemainingSeconds({ currentTime, futureTime }: IGetRemaining) {
        const seconds = futureTime.diff(currentTime, 'seconds') % 60;
        return padWithZeros(seconds).toString();
    }

    function getRemainingMinutes({ currentTime, futureTime }: IGetRemaining) {
        const minutes = futureTime.diff(currentTime, 'minutes') % 60;
        return padWithZeros(minutes).toString();
    }

    function getRemainingHours({ currentTime, futureTime }: IGetRemaining) {
        const hours = futureTime.diff(currentTime, 'hours');
        return padWithZeros(hours).toString();
    }

    function getRemainingProgress({ currentTime, futureTime }: IGetRemaining) {
        const remainingTime = futureTime.unix() - currentTime.unix();   
        const progress = ((remainingTime / (setTime / 1000)) * 100);
        return progress;
    }

    function padWithZeros(numberTime: number) {
        return numberTime < 10 ? '0' + numberTime : numberTime;
    }
};


export default userGetRemainingTime;