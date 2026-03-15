class LinkList extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="services.html">Services??</a></li>
        <li><a href="clients.html">Clients!!!</a></li>
        <li><a href="contact.html">Contact Form</a></li>
        <li><a href="blank.html">Blank</a></li>
    `;
  }
}
customElements.define('header-component', Header);
