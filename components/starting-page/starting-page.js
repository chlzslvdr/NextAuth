import SEO from "../seo/index";
import classes from "./starting-page.module.css";

function StartingPageContent() {
  // Show Link to Login page if NOT auth

  return (
    <section className={classes.starting}>
      <SEO title="NextAuth" />
      <h1>Welcome on Board!</h1>
    </section>
  );
}

export default StartingPageContent;
