document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('nav-active');
  });
  

  // Form validation
document.getElementById('membershipForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const membership = e.target.gender.value;
    let errors = [];

    if (fullName.length < 3) errors.push("Full name must be at least 3 characters.");

    if (!email.includes('@')) errors.push("Email must be valid.");

    if (password.length < 8) errors.push("Password must be at least 8 characters.");



    const validMemberships = ["Ordinary", "vip", "vvip"];
    if (!validMemberships.includes(membership)) {
        errors.push("You must select a valid membership option.");
    }
    if (errors.length > 0) {
        document.getElementById('formErrors').textContent = errors.join(', ');
    } else {
        document.getElementById('formErrors').textContent = "";
        let membershipMessage;
        if (membership === "Ordinary") {
            membershipMessage = "You have become an Ordinary Member.";
        } else if (membership === "vip") {
            membershipMessage = "You have become a VIP Member.";
        } else if (membership === "vvip") {
            membershipMessage = "You have become a Super VIP Member.";
        }

        alert(membershipMessage);

        e.target.reset();
    }
});
document.querySelectorAll('.video-links a').forEach(link => {
            link.addEventListener('click', () => {
                alert('You are about to visit: ' + link.href);
            });
});
