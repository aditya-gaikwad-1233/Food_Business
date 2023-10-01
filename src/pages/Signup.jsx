import Template from "../Components/Template";
import signupImg from "../assets/signup.jpg";

function Signup({ setIsLoggedIn }) {
  return (
    <Template
      title="Welcome to Kitchen Kween!"
      description1="We're so excited to have you as a member."
      description2="You'll enjoy exclusive discounts."
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Signup;
