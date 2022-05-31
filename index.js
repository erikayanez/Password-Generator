
const lib = document.querySelector(".showMe")
const passwordGenerator = () => {
    let result = [];
    let options = "1234567890ABCDEF";
    for (let i = 0; i < 6; i++) {
      result.push(options[Math.floor(Math.random() * options.length)]);
    }
    lib.innerHTML = result.join("");
    return result.join("");
};
// passwordGenerator(); 


// for (const item of items) {
//     item.style.backgroundColor = `#${passwordGenerator()}`;
// }