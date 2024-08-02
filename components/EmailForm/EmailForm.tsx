import { useMutation } from "react-query";
import { useState } from "react";

function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [mailingListIds, setMailingListIds] = useState("");

  const mutation = useMutation((formData) => {
    const formBody = `firstName=${encodeURIComponent(
      formData.firstName
    )}&email=${encodeURIComponent(
      formData.email
    )}&mailingLists=${encodeURIComponent(formData.mailingListIds)}`;

    return fetch(
      "https://localhost:2020/api/newsletter-form/YOUR_FORM_ENDPOINT",
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
    mutation.mutate({ firstName, email, mailingListIds });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="text"
        value={mailingListIds}
        onChange={(e) => setMailingListIds(e.target.value)}
        placeholder="Mailing List IDs"
      />
      <button type="submit" disabled={mutation.isLoading}>
        {mutation.isLoading ? "Submitting..." : "Submit"}
      </button>
      {mutation.isError && (
        <div>An error occurred: {mutation.error.message}</div>
      )}
      {mutation.isSuccess && <div>Thank you for signing up!</div>}
    </form>
  );
}
