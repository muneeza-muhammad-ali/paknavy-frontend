import FlipCard from "../Components/FlipCard";
import gwadar from "../assets/gwadar.webp";

function Gwadar() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 space-y-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center">Gwadar Center</h1>

      <FlipCard
        image={gwadar}
        title="Gwadar Selection Center"
        description={`📍 Address:
PN Base PNS AKRAM, Near Marine Drive, Gwadar

📞 Phone:
086-9200630

📧 Email:
nro-gwadar@paknavy.gov.pk`}
        autoFlip={true}
      />

      <p className="text-lg text-gray-700 text-center max-w-xl">
        Gwadar center facilitates recruitment and training of locals in Balochistan. Visit or contact for Navy registration.
      </p>
    </div>
  );
}

export default Gwadar;
