// let enteredNeeded = document.getElementById("neededMonay").value;
// let enteredPercent = document.getElementById("percent").value;
// let neteredYears = document.getElementById("startYear").value;


// let needed = enteredNeeded;
// let percent = 7.8;
// let years = 15;
// let totalMonth = years * 12;

// let TotalAddedPerYear = (needed * percent) / 100;
// let totalAddedPercent = TotalAddedPerYear * years;

// let totalReturn = needed + totalAddedPercent;
// let startPayPerMonth = totalReturn / totalMonth



function generate() {

    let enteredNeeded =parseInt(document.getElementById("neededMonay").value); 
    let enteredPercent = parseInt(document.getElementById("percent").value);
    let enteredYears = parseInt(document.getElementById("startYear").value);

    let needed = enteredNeeded;  // მოთხოვნილი თანხა
    let percent = enteredPercent; // გაცემული პროცენტი
    let years = enteredYears;   // რამდენ წელზეც გადანაწილდება
    let totalMonth = years * 12; // ამ წლების თვეების რაოდენობა

    let TotalAddedPerYear = (needed * percent) / 100; // ეს ითვლის თუ რამდენი ემატება წელზე
    let totalAddedPercent = TotalAddedPerYear * years; // ეს კი არის ბანკის საერთო სარგებელი სარგებელი

    let totalReturn = needed + totalAddedPercent; // ეს რიცხვი ასახავს თუ რამდენი არის დასაბრუნებელი სესხი პლისუ საერთო პროცენტი
    let startPayPerMonth = totalReturn / totalMonth // ეს რიცხვი ასახავს თუ რამდენი არის თვეში სახდელი
     
    document.getElementById("amount").innerHTML = needed;
    document.getElementById("percentAmount").innerHTML = percent;
    document.getElementById("duringYears").innerHTML = years;
    document.getElementById("months").innerHTML = totalMonth;
    document.getElementById("payPerMonth").innerHTML = startPayPerMonth.toFixed(2);

    console.log(needed);
    console.log(percent);
    console.log(years);
    console.log(totalReturn);
    console.log(startPayPerMonth.toFixed(2));

}


