import LoginForm from "@src/components/Auth/LoginForm/LoginForm";
import RegisterForm from "@src/components/Auth/RegisterForm/RegisterForm";

const AuthPage = () => {
  return (
    <section>
      <h3>Registration / Login</h3>
      <RegisterForm />
      <div style={{ "marginTop": "100px" }}>
        <LoginForm />
      </div>
    </section>
  );
};

export default AuthPage;
