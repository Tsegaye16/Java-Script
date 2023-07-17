document.addEventListener("DOMContentLoaded", function () {
  let result = document.querySelector(".input-text");
  let calculate = (number) => {
    result.value += number;
  };
  let one = document.querySelector(".one");
  one.addEventListener("click", function () {
    calculate(one.textContent);
  });

  let two = document.querySelector(".two");
  two.addEventListener("click", function () {
    calculate(two.textContent);
  });

  let minus = document.querySelector(".minus");
  minus.addEventListener("click", function () {
    calculate(minus.textContent);
  });

  let six = document.querySelector(".six");
  six.addEventListener("click", function () {
    calculate(six.textContent);
  });

  let five = document.querySelector(".five");
  five.addEventListener("click", function () {
    calculate(five.textContent);
  });

  let four = document.querySelector(".four");
  four.addEventListener("click", function () {
    calculate(four.textContent);
  });

  let multiple = document.querySelector(".multiple");
  multiple.addEventListener("click", function () {
    calculate(multiple.textContent);
  });

  let reminder = document.querySelector(".reminder");
  reminder.addEventListener("click", function () {
    calculate(reminder.textContent);
  });

  let division = document.querySelector(".division");
  division.addEventListener("click", function () {
    calculate(division.textContent);
  });

  let seven = document.querySelector(".seven");
  seven.addEventListener("click", function () {
    calculate(seven.textContent);
  });

  let eight = document.querySelector(".eight");
  eight.addEventListener("click", function () {
    calculate(eight.textContent);
  });

  let nine = document.querySelector(".nine");
  nine.addEventListener("click", function () {
    calculate(nine.textContent);
  });

  let three = document.querySelector(".three");
  three.addEventListener("click", function () {
    calculate(three.textContent);
  });

  let plus = document.querySelector(".plus");
  plus.addEventListener("click", function () {
    calculate(plus.textContent);
  });

  let dot = document.querySelector(".dot");
  dot.addEventListener("click", function () {
    calculate(dot.textContent);
  });

  let zero = document.querySelector(".zero");
  zero.addEventListener("click", function () {
    calculate(zero.textContent);
  });
  let Result = document.querySelector(".equal");
  Result.addEventListener("click", function () {
    try {
      result.value = eval(result.value);
    } catch (err) {
      alert("Enter the valid result");
    }
  });

  let clear = document.querySelector(".clr");
  clear.addEventListener("click", function () {
    result.value = " ";
  });

  let deletes = document.querySelector(".del");
  deletes.addEventListener("click", function () {
    result.value = result.value.slice(0, -1);
  });
});
