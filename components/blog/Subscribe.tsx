export default function Subscribe() {
  return (
    <section className="bg-[var(--color-sage)] py-24 px-6">
      <div className="max-w-4xl mx-auto border border-white/40 text-center py-16 px-6 text-white">

        <h2 className="h2">Subscribe</h2>

        <p className="body-lg mt-4">
          Sign up with your email address to receive news and updates.
        </p>

      
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
          <input
            type="email"
            placeholder="Email Address"
            className=" bg-white border px-6 py-4 text-black w-full md:w-[420px]"
          />

          <button className="border border-white px-8 py-4 btn-text">
            SIGN UP
          </button>
        </div>

        <p className="body mt-6 text-white/80">We respect your privacy.</p>

      </div>
    </section>
  );
}
