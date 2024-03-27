document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Robusta Brazil", img: "coffeebag.jpg", price: 15 },
      { id: 2, name: "Java", img: "coffeebag2.jpg", price: 15 },
      { id: 3, name: "Costa Rica", img: "coffeebag3.jpg", price: 15 },
      { id: 4, name: "Arabica", img: "coffeebag4.jpg", price: 15 },
      { id: 5, name: "Sumatra", img: "coffeebag5.jpg", price: 15 },
    ],
  }));
});
