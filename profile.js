function submitProfile() {
    // Fetch values from the form and perform any necessary actions
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const category = document.getElementById('category').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const income = document.getElementById('income').value;

    // Perform any additional actions (e.g., send data to a server)
    console.log("Profile submitted:", name, dob, category, gender, income);

    // Redirect to the next page (replace with your actual page URL)
    window.location.href = 'schemes.html';
    alert('Profile submitted successfully!');

}
