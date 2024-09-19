export const validateEmail = (emailInput, setEmail, setError) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(emailInput);
    if (!emailRegex.test(emailInput)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };
  