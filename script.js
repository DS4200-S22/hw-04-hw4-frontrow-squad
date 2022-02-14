// circle 1 scripts
let circle1TimesClicked = 0;

const onCircle1Click = () => {

    circle1TimesClicked += 1;
    document.getElementById("counter").innerHTML = circle1TimesClicked;
};

// circle 2 scripts
document.getElementById("c2").addEventListener("mouseover", () => {
    document.getElementById("c2").style.stroke = "black";
    document.getElementById("c2").style.strokeWidth = 3;
});

document.getElementById("c2").addEventListener("mouseout", () => {
    document.getElementById("c2").style.strokeWidth = 0;
});

// circle 3 scripts
let circle3Visible = true;

const onCircle3Click = () => {

    circle3Visible ? document.getElementById("c3").style.opacity = 0 : document.getElementById("c3").style.opacity = 100
    circle3Visible = !circle3Visible
};