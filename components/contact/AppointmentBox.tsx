export default function AppointmentBox() {
  return (
    <section className="section text-center">
      <div className="container-narrow">

        <h2 className="h2">Book an appointment.</h2>

        <p className="body-lg mt-6">
          Add some text here if you like, and add your scheduling widget below
          (you can get one by signing up for a scheduling account through
          Squarespace, the top-tier plan is HIPAA compliant OR you can use your
          client portal).
        </p>

      
        <div className="bg-white shadow-sm mt-16 py-16 px-8 max-w-xl mx-auto">
          
          <h3 className="text-2xl font-semibold">
            This page is not active
          </h3>

          <p className="mt-4 text-sm">
            If you're the owner, please log into your account to start a free
            trial or subscribe.
          </p>

          <button className="mt-6 bg-black text-white px-6 py-3 text-sm tracking-wide">
            GO TO ACCOUNT
          </button>

        </div>

        
        <div className="mt-12">
          <p className="text-sm text-gray-600">Powered by</p>
          <p className="text-2xl font-semibold tracking-tight">
            acuity:scheduling
          </p>
        </div>

      </div>
    </section>
  );
}
