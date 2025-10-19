import FlipCard from "../Components/FlipCard";
import multan from "../assets/multan.webp";

function Multan() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 space-y-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center">Multan Center</h1>

      <FlipCard
        image={multan}
        title="Multan Selection Center"
        description={`📍 Address:
Naval Selection Center, 18-A Sher Shah Road, Multan Cantt

📞 Phone:
061-9330584

📧 Email:
nro-multan@paknavy.gov.pk`}
        autoFlip={true}
      />

      <p className="text-lg text-gray-700 text-center max-w-xl">
        The Navy center in Multan manages selection for South Punjab region. Apply here for tests and medical procedures.
      </p>
    </div>
  );
}

export default Multan;
