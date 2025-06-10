    // Validation formulaire
    document.getElementById('myForm').addEventListener('submit', function (event) {
        let isValid = true;

        let name = document.getElementById('name');
        let nameError = document.getElementById('nameError');
        if (name.value === '' || name.value.length <= 2) {
            nameError.style.display = 'inline';
            isValid = false;
        } else {
            nameError.style.display = 'none';
        }

        let email = document.getElementById('email');
        let emailError = document.getElementById('emailError');
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email.value === '' || !emailPattern.test(email.value)) {
            emailError.style.display = 'inline';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }

        let tel = document.getElementById('tel');
        let telError = document.getElementById('telError');
        const telPattern = /^[0-9]{10}$/;
        if (tel.value === '' || !telPattern.test(tel.value)) {
            telError.style.display = 'inline';
            isValid = false;
        } else {
            telError.style.display = 'none';
        }

        // Si un champ invalide, empêche l'envoi
        if (!isValid) {
            event.preventDefault();
        } else {
            alert("Formulaire envoyé avec succès !");
            document.getElementById('myForm').reset();
        }
    });