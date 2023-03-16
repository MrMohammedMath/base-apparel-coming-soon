export default function Coming() {
    return (
        <div className="coming">
            <img src="./images/logo.svg" alt="logo" className="coming.logo" />

            <picture>
                <source srcSet="./images/hero-desktop.jpg" media="(min-width: 768px)" />
                <img src="./images/hero-mobile.jpg" alt="hero" className="coming.hero" />
            </picture>

            <section className="coming.content">
                <img src="./images/logo.svg" alt="logo" className="coming.content.logo" />
                
                <h1 className="coming.content.title">We're <span className="coming.content.title.coming-soon">coming soon</span></h1>

                <p className="coming.content.paragraph">Hello fellow shoppers! We're currently building our new fashion store.
                    Add your email below to stay up-to-date with announcements and our launch deals.</p>


                <form className="coming.content.email">
                    <input type="email" placeholder="Email Address" className="coming.content.email.input" />
                    <button className="coming.content.email.btn">
                        <img src="./images/icon-arrow.svg" alt="" />
                    </button>
                </form>
            </section>
        </div>
    );
}