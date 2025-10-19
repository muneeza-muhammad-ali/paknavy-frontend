import FlipCard from "../Components/FlipCard";
import faisalabad from "../assets/faisalabad.webp";

function Faisalabad() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 space-y-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center">Faisalabad Center</h1>

      <FlipCard
        image={faisalabad}
        title="Faisalabad Selection Center"
        description={`📍 Address:
PN Recruitment Office, Susan Road, Faisalabad

📞 Phone:
041-9200363

📧 Email:
nro-faisalabad@paknavy.gov.pk`}
        autoFlip={true}
      />

      <p className="text-lg text-gray-700 text-center max-w-xl">
        Navy center in Faisalabad helps youth from Central Punjab to apply and get recruited in Pakistan Navy.
      </p>
    </div>
  );
}

export default Faisalabad;
