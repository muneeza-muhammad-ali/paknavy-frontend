import FlipCard from "../Components/FlipCard";
import peshawar from "../assets/peshawar.webp";

function Peshawar() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 space-y-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center">Peshawar Center</h1>

      <FlipCard
        image={peshawar}
        title="Peshawar Selection Center"
        description={`📍 Address:
Naval Office, Near Saddar Bazar, Peshawar Cantt

📞 Phone:
091-9210567

📧 Email:
nro-peshawar@paknavy.gov.pk`}
        autoFlip={true}
      />

      <p className="text-lg text-gray-700 text-center max-w-xl">
        The Navy recruitment center for Peshawar serves all KPK students wishing to join Pak Navy.
      </p>
    </div>
  );
}

export default Peshawar;
