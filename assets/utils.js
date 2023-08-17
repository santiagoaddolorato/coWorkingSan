function padTo2Digits(num){
    return num.toString().padStart(2, "0");
};

const getNextDay = ()=>{
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()+1);
    return tomorrow;
};

const getTomorrowDate = ()=>{
    let year = getNextDay().getFullYear();
    let month = getNextDay().getMonth()+1;
    let day = getNextDay().getDate();
    return `${year}-${padTo2Digits(month)}-${padTo2Digits(day)}`;
};

const isEmpty = (value)=>{
    return !value.length;
};

const showError = (input, message)=>{
    const formfield = input.parentElement;
    formfield.classList.add("error");
    const error = formfield.querySelector("small");
    error.textContent = message;
};

const clearError = (input)=>{
    const formfield = input.parentElement;
    formfield.classList.remove("error");
    const error = formfield.querySelector("small");
    error.textContent = "";
};

const isEmailValid = (email)=>{
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return re.test(email);
};

const isPhoneValid = (phone)=>{
    const re = /^[0-9]{10}$/;
    return re.test(phone);
};

const isValidDate = (date) =>{
    const currentDate = new Date();
    const turnDate = new Date (date);

    turnDate.setHours(currentDate.getHours());
    turnDate.setMinutes(currentDate.getMinutes());
    turnDate.setSeconds(currentDate.getSeconds());

    turnDate.setDate(turnDate.getDate() +1);
    return date.length && currentDate < turnDate;
};

const formatDate = (date)=>{
    const splitDate = date.split("-").reverse().join("/");
    return splitDate;
};

const getRadioValue = (inputs) =>{
    const checkedInput = [...inputs].find((input)=>{
       return input.checked;
    });

    return checkedInput.value;
};

const getCheckedOptions = (inputs)=>{
    const checkedOptions = [...inputs].filter((input)=>{
       return input.checked;
    }).map((opt)=>{
       return opt.value;
    });
    return checkedOptions;
};

const setDateIntervals = ()=>{
    dateInput.value = getTomorrowDate();
    dateInput.min = getTomorrowDate();
    dateInput.max = getNextDay().getFullYear() + "-12-31";
};

const setCardBackground = (quantity) =>{
    return quantity === "Más de 10" ? "violet-card" 
    : quantity === "Entre 5 y 10" ? "red-card"
    : "black-card";
};
const setTimeBackground = (quantity) =>{
    return quantity ===  "Menos de 5" ? "red-card": "black-card";
};
const setDateBackground = (quantity) =>{
    return quantity ===  "Más de 10"? "red-card": "violet-card";
};

const setCardImg = (quantity) => {
	return quantity === "Más de 10"
		? "./assets/img/server.png"
		: quantity === "Entre 5 y 10"
		? "./assets/img/laptop.png"
		: "./assets/img/lupa.png";
};

const setCardImgClass = (quantity) => {
	return quantity === "Más de 10"
		? "server-img"
		: quantity === "Entre 5 y 10"
		? "laptop-img"
		: "lupa-img";
};