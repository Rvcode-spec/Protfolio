const scrollButton = document.getElementById("scrollButton");
  scrollButton.addEventListener("click", () => {
    // Scroll to the bottom of the page
    window.scrollTo({
      top: document.body.scrollHeight/5,
      behavior: "smooth",
    });

  });

  const toggleButton = document.getElementById("toggleButton");
  const infoItem = document.getElementById("infoItem");
  const closeInfo = document.getElementById("closeInfo");

  // Toggle visibility of the info item when the button is clicked
  toggleButton.addEventListener("click", () => {
    infoItem.classList.toggle("hidden");
  });

  // Close the info item when the close icon is clicked
  closeInfo.addEventListener("click", () => {
    infoItem.classList.add("hidden");
  });


  const sunIcon = document.getElementById("sun-icon");

    sunIcon.addEventListener("click", () => {
      // Generate a random color
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      // Change the background color of the body
      document.body.style.backgroundColor = randomColor;
    });