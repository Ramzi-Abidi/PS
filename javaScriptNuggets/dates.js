const date1 = new Date("April 1 , 2001");
const date2 = new Date("july 5 , 2022");

const fct = () => {
    const time1 = date1.getTime();     // value in milliseconds
    const time2 = date2.getTime();     // value in milliseconds

    console.log(time1);
    console.log(time2);

    const res = time2 - time1;

    return res / 1000 / 60 / 60 / 24;
}


console.log(fct());