const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    // else {
    //   entry.target.classList.remove("show");
    // }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => observer.observe(element));

// custom cursor
const container = document.getElementsByClassName("container")[0];
const customCursor = document.getElementById("customCursor");
const enlargeCursor = document.querySelectorAll(".enlargeCursor");

container.addEventListener("mousemove", (dets) => {
  // console.log(dets);
  customCursor.style.left = dets.x - 5 + "px";
  customCursor.style.top = dets.y - 5 + "px";
});

enlargeCursor.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    customCursor.style.transform = "scale(20)";
  });
  el.addEventListener("mouseleave", () => {
    customCursor.style.transform = "scale(1)";
  });
});
