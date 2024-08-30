import Image from "next/image";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">

      <p className="text-accent font-medium text-sm font-mono">
            {/* Pure decoration, you can remove it */}
            About Salego;
          </p>
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
        Empowering legal teams with advanced AI to deliver exceptional results
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
        At Salego, we are committed to revolutionizing the way legal teams manage U.S. citizenship cases. Our platform combines cutting-edge artificial intelligence with user-friendly tools to make the complex simple. Trusted by top immigration law firms, Salego is designed to optimize every step of the citizenship process, ensuring accuracy, efficiency, and compliance. Join the future of legal technology with Salego.
        </p>
        <button className="btn btn-primary btn-wide">Get ShipFast</button>

      </div>
    </section>
  );
};

export default About;
