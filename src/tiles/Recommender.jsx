export function Recommender() {
  const recommendation = loadRecommendation();
  return (
    <div className="Recommender">
      {recommendation}
    </div>
  );
}

function loadRecommendation() {
  return 'IT Crowd';
}
