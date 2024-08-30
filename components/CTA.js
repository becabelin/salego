import Image from "next/image";

const CTA = () => {
  return (
    <section className="relative hero overflow-hidden min-h-screen">
      <Image
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background"
        className="object-cover w-full"
        fill
      />
      <div className="relative hero-overlay bg-neutral bg-opacity-80"></div>
      <div className="relative hero-content text-center text-neutral-content p-8">
        <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
          Ready to Revolutionize Your Legal Practice?
          </h2>
          <p className="text-lg opacity-80 mb-12 md:mb-16">
          Join the many firms who trust Salego to deliver top-tier results.
          </p>

          <button className="btn btn-primary btn-wide">Contact Us Today</button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
