 const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
    let str = "";

    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if (value === "AC") {
          str = "";
          display.value = str;
        } else if (value === "DEL") {
          str = str.slice(0, -1);
          display.value = str;
        } else if (value === "=") {
          try {
            str = eval(str).toString();
            display.value = str;
          } catch {
            display.value = "Error";
          }
        } else {
          str += value;
          display.value = str;
        }
      });
    });