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
// const container = document.getElementsByClassName("container")[0];
const container = document.body;
const customCursor = document.getElementById("customCursor");
const enlargeCursor = document.querySelectorAll(".enlargeCursor");

container.addEventListener("mousemove", (dets) => {
  // console.log(dets);
  // console.log(window.innerHeight);
  customCursor.style.display = "block";
  if (
    dets.clientX < 1 ||
    dets.clientY < 5 ||
    dets.clientX > window.innerWidth - 20 ||
    dets.clientY > window.innerHeight - 20
  ) {
    gsap.to(customCursor, {
      opacity: 0,
    });
    // customCursor.style.opacity = "0";
  } else {
    gsap.to("#customCursor", {
      left: dets.x - 5 + "px",
      top: dets.y - 5 + "px",
      opacity: "1",
      ease: "power3",
    });
    // customCursor.style.opacity = "1";
    // customCursor.style.left = dets.x - 5 + "px";
    // customCursor.style.top = dets.y - 5 + "px";
  }
});

enlargeCursor.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    gsap.to("#customCursor", {
      transform: "scale(10)",
      backgroundColor: "rgba(0, 0, 0, 0.15)",
      // opacity: "0",
    });

    customCursor.style.boxShadow = "0 0 0 .08px rgba(0, 0, 0, 0.5)";
    // customCursor.style.transform = "scale(20)";
  });
  el.addEventListener("mouseleave", () => {
    gsap.to("#customCursor", {
      transform: "scale(1)",
      backgroundColor: "black",
    });
    // customCursor.style.transform = "scale(1)";
  });
});
