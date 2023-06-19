const dateinput = document.querySelector("#dateinput");
const btn = document.querySelector("#btn");
const year = document.querySelector("#year");
const month = document.querySelector("#month");
const day = document.querySelector("#day");

btn.addEventListener("click",()=>{
    const date = new Date()
    const currentyear = date.getFullYear();
    const currentmonth = date.getMonth() + 1;
    const currentday = date.getDate();


    const splitingDate = dateinput.value.split("-");
    
    const calculateyear = currentyear - splitingDate[0];
    year.innerHTML = calculateyear

    const calculatemonth =Math.abs(currentmonth - splitingDate[1]);
    month.innerHTML = calculatemonth

    const calculateday = Math.abs(currentday - splitingDate[2]);
    day.innerHTML = calculateday

})
