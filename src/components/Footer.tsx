import logo from "../assets/images/logo.svg";
import { contact } from "../data";

function Footer() {
  return (
    <footer>
      <div className="container">
        <article className="newsletter">
          <h2>Newsletter</h2>

          <p>
            To recieve tips on how to grow your community, sign up to our weekly
            newsletter. We'll never send you span or pass on your email address
          </p>
        </article>

        <article>
          <div>
            <img src={logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem iste distinctio nisi repudiandae obcaecati eius,
              excepturi eligendi numquam? Eum, quasi?
            </p>
          </div>

          <div>
            {contact.map((contact, index) => (
              <div key={index}>
                <img src={contact.icon} />
                <span>{contact.text}</span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </footer>
  );
}

export default Footer;
