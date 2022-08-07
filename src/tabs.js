import "../src/styles.css";

class Tabs {
  constructor(container) {
    this.container = container;
    this.tabs = container.querySelectorAll(".trigger");
    this.content = container.querySelectorAll(".content");
  }
  init() {
    this.container.addEventListener("click", (e) => {
      if (e.target.classList.contains("trigger")) {
        if (e.target.classList.contains("active")) {
          // do nothing
        } else {
          const targetContent = this.container.querySelector(
            e.target.getAttribute("data-target")
          );
          this.tabs.forEach((tab) => {
            if (tab.classList.contains("active")) {
              tab.classList.remove("active");
            }
          });
          this.content.forEach((content) => {
            if (content.classList.contains("active")) {
              content.classList.remove("active");
            }
          });
          e.target.classList.add("active");
          targetContent.classList.add("active");
        }
      }
    });
  }
}
export default Tabs;
