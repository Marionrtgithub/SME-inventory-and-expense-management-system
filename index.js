function logoutUser() {
  localStorage.clear(); 
  window.location.href = "index.html"; 
}

document.addEventListener('DOMContentLoaded', () => {
  let isSignedIn = false;

  const getStartedBtn = document.getElementById('getStartedBtn');
  const learnMoreBtn = document.getElementById('learnMoreBtn');
  const learnMoreSection = document.getElementById('learnMoreSection');
  const signUpForm = document.getElementById('signUpForm');
  const signUpMessage = document.getElementById('signUpMessage');
  const signUpBtn = document.getElementById('signUpBtn');
  const googleSignInBtn = document.getElementById('googleSignInBtn');
  const passwordError = document.getElementById('passwordError');

  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');

  getStartedBtn.addEventListener('click', () => {
    const isFormVisible = signUpForm.style.display === 'block';

    if (isFormVisible) {
      signUpForm.style.display = 'none';
      signUpMessage.style.display = 'none';
      getStartedBtn.textContent = 'Get Started';
    } else {
      signUpForm.style.display = 'block';
      signUpMessage.style.display = 'block';
      getStartedBtn.textContent = 'Hide Form';
    }
  });

  learnMoreBtn.addEventListener('click', () => {
    const isVisible = learnMoreSection.style.display === 'block';
    learnMoreSection.style.display = isVisible ? 'none' : 'block';
    learnMoreBtn.textContent = isVisible ? 'Learn More' : 'Hide Learn More';
  });

  signUpBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Basic validation
    if (!email || !password || !confirmPassword) {
      passwordError.textContent = 'Please fill out all fields.';
      return;
    }

    if (password !== confirmPassword) {
      passwordError.textContent = 'Passwords do not match!';
    } else {
      passwordError.textContent = '';

      // Store user info in localStorage (for demo purposes)
      localStorage.setItem('user', JSON.stringify({ email }));

      alert('Sign Up Successful! Redirecting to dashboard...');

      // Redirect to dashboard page
      window.location.href = 'dashboard.html';
    }
  });

  googleSignInBtn.addEventListener('click', () => {
    alert('Sign in with Google!');
  });

});
