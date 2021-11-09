import * as React from "react"
import {
  FaGithubSquare as Github,
  FaTwitterSquare as Twitter,
  FaInstagramSquare as Instagram,
  FaLinkedin as Linkedin,
  FaYoutubeSquare as Youtube,
} from "react-icons/fa"

export const menuItems = [
  {
    path: "/",
    text: "home",
  },
  {
    path: "/reviews",
    text: "reviews",
  },
  {
    path: "/blog",
    text: "blog",
  },
  {
    path: "/contact",
    text: "contact",
  },
]

export const socialItems = [
  {
    path: "https://www.instagram.com/mitch_hussey",
    icon: <Instagram />,
  },
  {
    path: "https://www.youtube.com/mitch_hussey",
    icon: <Youtube />,
  },
  {
    path: "https://www.twitter.com/mitch_hussey",
    icon: <Twitter />,
  },
  {
    path: "https://www.linkedin.com/in/mitchhussey",
    icon: <Linkedin />,
  },
  {
    path: "https://www.github.com/mitchhussey",
    icon: <Github />,
  },
]
