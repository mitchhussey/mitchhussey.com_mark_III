import * as React from "react"
import Button from "../Button/Button"
import { BasicTextModuleStyles } from "./BasicTextModuleStyles"
import { Link } from "gatsby"

const BasicTextModule = () => {
  return (
    <BasicTextModuleStyles>
      <div className="container">
        <h2>I'm passionate about user experience, tech, and photography.</h2>
        <p style={{ marginBottom: "60px" }}>
          This is my space to share my personal opinions about my favorite
          products, express creativity, and grow my skills as a writer.
        </p>
        <Button text="Reviews" as={Link} to="/reviews" />
        {/* <Button text="Photography" as={Link} to="/gallery" /> */}
      </div>
    </BasicTextModuleStyles>
  )
}

export default BasicTextModule
