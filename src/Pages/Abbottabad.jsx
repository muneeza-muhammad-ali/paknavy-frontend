import FlipCard from "../Components/FlipCard";
import abbotabad from "../assets/abbotabad.webp";

function Abbottabad() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 space-y-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center">Abbottabad Center</h1>

      <FlipCard
        image={abbotabad}
        title="Abbottabad Selection Center"
        description={`📍 Address:
Near PMA Kakul Road, Abbottabad Cantt

📞 Phone:
0992-9310164

📧 Email:
nro-abbottabad@paknavy.gov.pk`}
        autoFlip={true}
      />

      <p className="text-lg text-gray-700 text-center max-w-xl">
        Recruitment and selection center in Abbottabad for northern areas and KPK candidates.
      </p>
    </div>
  );
}

export default Abbottabad;
