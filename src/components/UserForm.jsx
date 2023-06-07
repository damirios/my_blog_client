export function UserForm(props) {

    const {isLogin} = props; // isLogin === true - авторизация, иначе - регистрация
    const API_URL = 'http://localhost:4000';
    const actionURL = API_URL + '/user' + (isLogin ? '/login' : '/sign-up');

    return <div className="user-form-box">
        <h1 className="user-form__title page-title">Sign Up</h1>
        <form method="POST" action={actionURL} className="user-form__form">
            <div className="user-form__user-block">
                <div className="user-form__group user-form__login">
                    <label htmlFor="login" className="user-form__label label">Login</label>
                    <input name="login" id="login" type="text" placeholder="Mr. Freeman" required className="user-form__input input" />
                </div>
                <div className="user-form__group user-form__password">
                    <label htmlFor="password" className="user-form__label label">Password</label>
                    <input name="password" id="password" type="password" required className="user-form__input input" />
                </div>
                {!isLogin && <div className="user-form__group user-form__confirm">
                    <label htmlFor="confirm" className="user-form__label label">Confirm password</label>
                    <input name="confirm" id="confirm" type="password" required className="user-form__input input" />
                </div>}
                <div className="user-form__group user-form__submit">
                    <button type="submit" className="user-form__submit-button">{isLogin ? "Log in" : "Sign up"}</button>
                </div>
            </div>
            {!isLogin && <div className="user-form__person-block">
                <div className="user-form__group user-form__first">
                    <label htmlFor="first" className="user-form__label label">First Name</label>
                    <input name="firstName" id="first" type="text" placeholder="Alyx" required className="user-form__input input" />
                </div>
                <div className="user-form__group user-form__last">
                    <label htmlFor="last" className="user-form__label label">Last Name</label>
                    <input name="lastName" id="last" type="text" placeholder="Vance" required className="user-form__input input" />
                </div>
                <div className="user-form__group user-form__avatar">
                    <label htmlFor="avatar" className="user-form__label label">Avatar</label>
                    <input name="avatar" id="avatar" type="file" required className="user-form__input input" />
                </div>
            </div>}
        </form>
    </div>
}