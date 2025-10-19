import FlipCard from "../Components/FlipCard";
import lahore from "../assets/lahore.webp";

function Lahore() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 space-y-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center">Lahore Center</h1>

      <FlipCard
        image={lahore}
        title="Lahore Selection Center"
        description={`📍 Address:
92 Shami Road, Near Fortress Stadium, LAHORE Cantt

📞 Phone:
 042-66961409-10

📧 Email:
nro-lahore@paknavy.gov.pk`}
        autoFlip={true}
      />

      <p className="text-lg text-gray-700 text-center max-w-xl">
        Visit the Lahore center for Navy recruitment and selection. You can apply, get test details, and verify documents.
      </p>
    </div>
  );
}

export default Lahore;
