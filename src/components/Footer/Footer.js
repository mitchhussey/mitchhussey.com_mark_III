import * as React from "react"
import { Link } from "gatsby"
import { menuItems, socialItems } from "../../constants/links"
import { FooterStyles } from "./FooterStyles"

const Footer = () => {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__menu">
          <ul>
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path} activeClassName="menu__item--active">
                    {item.text}
                    <span>.</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="social__menu">
          <ul>
            {socialItems.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href={item.path}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    {item.icon}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="copyright">
          <p>
            Created by{" "}
            <a
              href="https://www.twitter.com/mitch_hussey"
              target="_blank"
              rel="noreferrer"
            >
              Mitch Hussey
            </a>
            <span>. </span>
            Initial design by{" "}
            <a
              href="https://www.morganbaker.dev"
              target="_blank"
              rel="noreferrer"
            >
              Morgan Baker
            </a>
          </p>
        </div>
      </div>
    </FooterStyles>
  )
}

export default Footer
