export function Hero() {
  return (
    <header className="Hero">
      <h1>Prepbook</h1>
      <p>Clever recipe manager</p>
      <br />
      <form
        method="post"
        action="https://app.loops.so/api/newsletter-form/YOUR_FORM_ENDPOINT"
      >
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          required
        />
        <input type="hidden" name="userGroup" value="Website signups" />
        <button type="submit">Join Waitlist</button>
      </form>
    </header>
  );
}
