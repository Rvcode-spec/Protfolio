const scrollButton = document.getElementById("scrollButton");
  scrollButton.addEventListener("click", () => {
    // Scroll to the bottom of the page
    window.scrollTo({
      top: document.body.scrollHeight/5,
      behavior: "smooth",
    });

  });

