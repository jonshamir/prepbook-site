import { useMutation } from "react-query";
import { useState } from "react";

export function EmailForm() {
  const [email, setEmail] = useState("");

  const mutation = useMutation((formData: { email: string }) => {
    const formBody = `email=${encodeURIComponent(formData.email)}`;

    return fetch(
      "https://app.loops.so/api/newsletter-form/clz8v0ovs00az11liaobaaql9",
      {
        method: "POST",
        body: formBody,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ email });
  };

  return (
    <div className="EmailForm">
      {(mutation.isIdle || mutation.isLoading) && (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required={true}
          />
          <button type="submit" disabled={mutation.isLoading}>
            {mutation.isLoading ? "Joining..." : "Join Waitlist"}
          </button>
        </form>
      )}
      {mutation.isError && (
        <div className="message">Error: {mutation.error.message}</div>
      )}
      {mutation.isSuccess && (
        <div className="message">~ Thanks for signing up! ~</div>
      )}
    </div>
  );
}
