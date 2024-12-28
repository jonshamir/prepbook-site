import { EmailForm } from "../EmailForm/EmailForm";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export function Hero() {
  return (
    <header className="Hero">
      <h1>Prepbook</h1>
      <p>Clever recipe manager</p>
      <br />
      <QueryClientProvider client={queryClient}>
        <EmailForm />
      </QueryClientProvider>
      <div className="links" style={{ display: "flex", gap: "16px" }}>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
      </div>
    </header>
  );
}
