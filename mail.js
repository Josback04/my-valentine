function() {
    emailjs.init("ton_user_id"); // Remplace par ton User ID EmailJS
  })();

  document.querySelector(".form-group").addEventListener("submit", function(event) {
    event.preventDefault();

    let dateValue = document.querySelector("input[type='date']").value;
    if (!dateValue) {
      alert("Veuillez choisir une date !");
      return;
    }

    let templateParams = {
      to_email: "backelantsjoseph@gmail.com",
      date_selected: dateValue
    };

    emailjs.send("ton_service_id", "ton_template_id", templateParams)
      .then(response => {
        alert("E-mail envoyé avec succès !");
      })
      .catch(error => {
        alert("Erreur lors de l'envoi de l'e-mail.");
      });
  }