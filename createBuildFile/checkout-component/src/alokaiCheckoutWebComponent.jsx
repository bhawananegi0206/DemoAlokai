import React from "react";
import ReactDOM from "react-dom/client";
import AlokaiCheckout from "./alokaiCheckout";

class AlokaiCheckoutWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.products = [];  // Default value for products
  }

  static get observedAttributes() {
    return ["products"]; // Observe the 'products' attribute
  }

  // This method is called whenever the 'products' attribute changes
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "products") {
      try {
        this.products = JSON.parse(newValue);  // Parse the JSON string into an object
        this.render();  // Re-render the component when the products change
      } catch (error) {
        console.error("Invalid JSON in 'products' attribute", error);
      }
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    // Render the React component inside the shadow DOM
    const mountPoint = document.createElement("div");
    this.shadowRoot.innerHTML = "";  // Clear any previous content
    this.shadowRoot.appendChild(mountPoint);

    // Create a root and render the React component
    const root = ReactDOM.createRoot(mountPoint);
    root.render(<AlokaiCheckout products={this.products} />);
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.shadowRoot);
  }
}

customElements.define("alokai-checkout-web-component", AlokaiCheckoutWebComponent);

export default AlokaiCheckoutWebComponent;
