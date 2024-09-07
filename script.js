const sideleft = document.getElementById("sideleft").style;
const Sideright = document.getElementById("sideright").style;
const bodystyle = document.getElementById("bodystyle").style;

const showNav = () => {
  sideleft.left = "0";
  bodystyle.height = "100vh";
  bodystyle.overflow = "hidden";
  Sideright.right = "0";
};

const closeNav = () => {
  sideleft.left = "-100%";
  bodystyle.height = "auto";
  bodystyle.overflow = "auto";
  Sideright.right = "-100%";
};
