// WhatsApp Form
const whatsappBtn = document.getElementById("whatsapp-btn");
whatsappBtn.addEventListener("click", () => {
  const name = document.getElementById("name-whatsapp").value.trim();
  const phone = document.getElementById("phone-whatsapp").value.trim();
  const query = document.getElementById("query-whatsapp").value.trim();

  if (!name || !phone || !query) {
    alert("Please fill all fields!");
    return;
  }

  const message = `Hello! My name is ${name}. Phone: ${phone}. Query: ${query}`;
  const whatsappURL = `https://wa.me/916350038601?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank");
});

// Email Form
const emailBtn = document.getElementById("email-btn");
emailBtn.addEventListener("click", () => {
  const name = document.getElementById("name-email").value.trim();
  const email = document.getElementById("email-email").value.trim();
  const query = document.getElementById("query-email").value.trim();

  if (!name || !email || !query) {
    alert("Please fill all fields!");
    return;
  }

  const subject = `Query from ${name}`;
  const body = `Name: ${name}\nEmail: ${email}\nQuery: ${query}`;
  const mailtoLink = `mailto:rohanganguly65@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
});
