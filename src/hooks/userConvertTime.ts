interface IConvert {
    hr: number,
    min: number,
    sec: number,
}

const userConvertTime = ({ hr = 0, min = 0, sec = 0 }: IConvert) => {
    const hour = hr * 3600000;
    const minute = min * 60000;
    const second = sec * 1000;

    const setTime = hour + minute + second;
    return setTime;
}

export default userConvertTime;