function insert(num) {
  $(".calc-display").val($(".calc-display").val() + num);
}

function equal() {
  $(".calc-display").val(eval($(".calc-display").val()));
}

function clr() {
  $(".calc-display").val("");
}

function del() {
  value = $(".calc-display").val();
  $(".calc-display").val(value.substring(0, value.length - 1));
}

$(document).on("keypress", function (e) {
  switch (e.which) {
    case 48:
      insert(0);
      break;
    case 49:
      insert(1);
      break;
    case 50:
      insert(2);
      break;
    case 51:
      insert(3);
      break;
    case 52:
      insert(4);
      break;
    case 53:
      insert(5);
      break;
    case 54:
      insert(6);
      break;
    case 55:
      insert(7);
      break;
    case 55:
      insert(8);
      break;
    case 55:
      insert(9);
      break;
    case 61:
    case 13:
      equal();
      break;
    case 43:
      insert("+");
      break;
    case 47:
      insert("-");
      break;
    case 42:
      insert("*");
      break;
    case 46:
      insert(".");
      break;
    case 99:
    case 08:
        clr();
        break;
  } 
});
