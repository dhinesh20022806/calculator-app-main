const rangebtn = document.querySelector('input[type=range]');

console.log(rangebtn.value);

// theme are changes

const body = document.querySelector("body");
const rangeClass =document.querySelector('.range-btn')
const triBackground = document.querySelector(".tri-state-toggle");
const themeTop = document.querySelector(".top");
const display = document.querySelector(".display-output");
const buttons = document.querySelector(".buttons");
const keyButton = document.querySelectorAll(".key-buttons");
const delKey = document.querySelector(".key-del");
const resetKey = document.querySelector(".key-reset");
const equalKey = document.querySelector(".key-equal");

rangebtn.addEventListener("click", changeTheme);


// const switch_themes = document.querySelector('.tri-state-toggle-button')

// console.log(themeOne);
// console.log(document.querySelector("#tri-state-button1"));

// themeOne.addEventListener("click", () => {});

const themeChange = (
  rangebtn,
  bodyClass,
  triClass,
  background_range,
  btnclass,
  displayClass,
  keyClass,
  delResetClass,
  equalClass
) => {
  rangeClass.classList.add(rangebtn);
  body.classList.add(bodyClass);
  triBackground.classList.add(triClass);
  rangeClass.classList.add(background_range)
  buttons.classList.add(btnclass);
  display.classList.add(displayClass);
  for (let index = 0; index < keyButton.length; index++) {
    keyButton[index].classList.add(keyClass);
  }
  delKey.classList.remove(keyClass);
  resetKey.classList.remove(keyClass);
  equalKey.classList.remove(keyClass)
  delKey.classList.add(delResetClass);
  resetKey.classList.add(delResetClass);
  equalKey.classList.add(equalClass);
};


const removeTheme = (
  rangebtn,
  bodyClass,
  triClass,
  background_range,
  btnclass,
  displayClass,
  keyClass,
  delResetClass,
  equalClass
) => {
    rangeClass.classList.remove(rangebtn);
    body.classList.remove(bodyClass);
    triBackground.classList.remove(triClass);
     rangeClass.classList.remove(background_range);
    buttons.classList.remove(btnclass);
    display.classList.remove(displayClass);
    for (let index = 0; index < keyButton.length; index++) {
      keyButton[index].classList.remove(keyClass);
    }
    // delKey.classList.remove(keyClass);
    // resetKey.classList.remove(keyClass);
    // equalKey.classList.remove(keyClass);
    delKey.classList.remove(delResetClass);
    resetKey.classList.remove(delResetClass);
    equalKey.classList.remove(equalClass);
};

// themeOne.addEventListener("click",()=>{
    

// })


// themeTwo.addEventListener("click",()=>{
//     removeTheme(
//       themeOne,
//       "active_theme_1",
//       "_theme_1_bg",
//       "_theme_1_tri_btn",
//       "_theme_1_buttons",
//       "_theme_1_display_output",
//       "_theme_1_key-buttons",
//       "_theme_1_key_for_del_reset",
//       "_theme_1_equal"
//     );
//      removeTheme(
//        themeThree,
//        "active_theme_3",
//        "_theme_3_bg",
//        "_theme_3_tri_btn",
//        "_theme_3_buttons",
//        "_theme_3_display_output",
//        "_theme_3_key-buttons",
//        "_theme_3_key_for_del_reset",
//        "_theme_3_equal"
//      );

//     themeChange(
//       themeTwo,
//       "active_theme_2",
//       "_theme_2_bg",
//       "_theme_2_tri_btn",
//       "_theme_2_buttons",
//       "_theme_2_display_output",
//       "_theme_2_key-buttons",
//       "_theme_2_key_for_del_reset",
//       "_theme_2_equal"
//     );

// })

// themeThree.addEventListener("click",()=>{
//      themeChange(
//        themeThree,
//        "active_theme_3",
//        "_theme_3_bg",
//        "_theme_3_tri_btn",
//        "_theme_3_buttons",
//        "_theme_3_display_output",
//        "_theme_3_key-buttons",
//        "_theme_3_key_for_del_reset",
//        "_theme_3_equal"
//      );
//        removeTheme(
//          themeOne,
//          "active_theme_1",
//          "_theme_1_bg",
//          "_theme_1_tri_btn",
//          "_theme_1_buttons",
//          "_theme_1_display_output",
//          "_theme_1_key-buttons",
//          "_theme_1_key_for_del_reset",
//          "_theme_1_equal"
//        );
//        removeTheme(
//          themeTwo,
//          "active_theme_2",
//          "_theme_2_bg",
//          "_theme_2_tri_btn",
//          "_theme_2_buttons",
//          "_theme_2_display_output",
//          "_theme_2_key-buttons",
//          "_theme_2_key_for_del_reset",
//          "_theme_2_equal"
//        );

// })

// drag start

changeTheme();
function  changeTheme(){
  console.log('iam working',rangebtn.value);
  
  switch (rangebtn.value) {
  case "1":
      themeChange(
        "active_theme_1",
        "_theme_1_bg",
        "_theme_1_tri_btn",
        "_theme_1_range",
        "_theme_1_buttons",
        "_theme_1_display_output",
        "_theme_1_key-buttons",
        "_theme_1_key_for_del_reset",
        "_theme_1_equal"
      );
      removeTheme(
        "active_theme_2",
        "_theme_2_bg",
        "_theme_2_tri_btn",
        "_theme_2_range",
        "_theme_2_buttons",
        "_theme_2_display_output",
        "_theme_2_key-buttons",
        "_theme_2_key_for_del_reset",
        "_theme_2_equal"
      );
      removeTheme(
        "active_theme_3",
        "_theme_3_bg",
        "_theme_3_tri_btn",
        "_theme_3_range",
        "_theme_3_buttons",
        "_theme_3_display_output",
        "_theme_3_key-buttons",
        "_theme_3_key_for_del_reset",
        "_theme_3_equal"
      );
    break;
    case "2":
       themeChange(
         "active_theme_2",
         "_theme_2_bg",
         "_theme_2_tri_btn",
         "_theme_2_range",
         "_theme_2_buttons",
         "_theme_2_display_output",
         "_theme_2_key-buttons",
         "_theme_2_key_for_del_reset",
         "_theme_2_equal"
       );
      removeTheme(
        "active_theme_1",
        "_theme_1_bg",
        "_theme_1_tri_btn",
        "_theme_1_range",
        "_theme_1_buttons",
        "_theme_1_display_output",
        "_theme_1_key-buttons",
        "_theme_1_key_for_del_reset",
        "_theme_1_equal"
      );
      removeTheme(
        "active_theme_3",
        "_theme_3_bg",
        "_theme_3_tri_btn",
        "_theme_3_range",
        "_theme_3_buttons",
        "_theme_3_display_output",
        "_theme_3_key-buttons",
        "_theme_3_key_for_del_reset",
        "_theme_3_equal"
      );
      break;
      case "3":
         themeChange(
           "active_theme_3",
           "_theme_3_bg",
           "_theme_3_tri_btn",
           "_theme_3_range",
           "_theme_3_buttons",
           "_theme_3_display_output",
           "_theme_3_key-buttons",
           "_theme_3_key_for_del_reset",
           "_theme_3_equal"
         );
          removeTheme(
            "active_theme_1",
            "_theme_1_bg",
            "_theme_1_tri_btn",
            "_theme_1_range",
            "_theme_1_buttons",
            "_theme_1_display_output",
            "_theme_1_key-buttons",
            "_theme_1_key_for_del_reset",
            "_theme_1_equal"
          );
           removeTheme(
             "active_theme_2",
             "_theme_2_bg",
             "_theme_2_tri_btn",
             "_theme_2_range",
             "_theme_2_buttons",
             "_theme_2_display_output",
             "_theme_2_key-buttons",
             "_theme_2_key_for_del_reset",
             "_theme_2_equal"
           );
           break;


  default:
    console.log('hello');
    break;
}
}

