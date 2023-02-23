import "../styles/loginSection.css";

export const LoginForm = () => {
  return (
    <div className="hero mr-56 login-section-container">
      <div className="hero-content login-form-container max-w-screen flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <div className="form-control" id="end-page-login">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control flex flex-row mt-6">
              <button className="btn btn-primary btn-generic">Login</button>
              <span className="text-base mt-3 mx-4"> oppure </span>
              <button className="btn btn-primary btn-generic">Registrati</button>
            </div>
          </div>
        </div>
        <div className="lg:text-left">
          <h2 className="text-5xl mr-28 font-bold"> Login now <span className="ml-4"><i className="fa-solid fa-plane"></i></span></h2>
        </div>
      </div>
    </div>
  );
};
