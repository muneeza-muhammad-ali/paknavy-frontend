import FlipCard from "../Components/FlipCard";
import dikhan from "../assets/dikhan.webp";

function DIKhan() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 space-y-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center">D.I. Khan Center</h1>

      <FlipCard
        image={dikhan}
        title="D.I. Khan Selection Center"
        description={`📍 Address:
Naval Office, Near Commissioner's Office, Dera Ismail Khan

📞 Phone:
0966-9280280

📧 Email:
nro-dikhan@paknavy.gov.pk`}
        autoFlip={true}
      />

      <p className="text-lg text-gray-700 text-center max-w-xl">
        DI Khan center manages recruitment for southern KPK and tribal areas. Visit or contact for joining Navy.
      </p>
    </div>
  );
}

export default DIKhan;
