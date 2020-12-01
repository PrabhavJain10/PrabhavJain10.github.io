var frmvalidator  = new Validator("contact_form");
frmvalidator.addValidation("name","req", "Please provide your name");
frmvalidator.addValidation("email","req", "Please provide your email");
frmvalidator.addValidation("email","email", "Please enter a valid email address");
frmvalidator.addValidation("phone","req", "Please provide your phone number");
frmvalidator.addValidation("phone","maxlen=15", "Please provide a valid phone number");
frmvalidator.addValidation("phone","numeric", "Please provide a valid phone number - without letters or symbols");
frmvalidator.addValidation("contact","selone_radio", "Please select a preferred contact method");
frmvalidator.addValidation("message","req", "Please provide a message");
frmvalidator.addValidation("message","minlen=10", "Please provide a longer, meaningful message");