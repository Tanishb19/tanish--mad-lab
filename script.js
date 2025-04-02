if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/service-worker.js")
        .then((registration) => {
          console.log("Service Worker registered with scope:", registration.scope);
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    });
  }
  // Select the button using its ID
const button = document.getElementById("myButton");

// Add a click event listener to the button
button.addEventListener("click", () => {
    // Action to perform when the button is clicked
    alert("Button was clicked!");
});
