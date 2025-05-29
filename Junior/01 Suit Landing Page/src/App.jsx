import FadeInSection from "./FadeInSection";

export default function App() {
  return (
    <div className="space-y-20 p-10">
      <div className="h-[100vh] bg-gray-100">Scroll down 👇</div>

      <FadeInSection>
        <div className="p-10 bg-blue-500 text-white rounded-xl shadow-lg">
          🎉 I fade in once when visible!
        </div>
      </FadeInSection>
    </div>
  );
} 
