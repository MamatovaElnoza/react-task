// import React from 'react'

// const Filter = () => {
//   return (
//     <div>Filter</div>
//   )
// }

// export default Filter


import { useState } from "react";
import './filter.css'

function Filter() {
  const [age, setAge] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);

  const hobbyOptions = ["Nature", "Art", "Nightlife", "Food", "Adventure"];

  const allCities = [
  {
    "name": "Seoul",
    "ageGroups": ["teen", "adult"],
    "hobbies": ["K-pop", "Fashion", "Gaming"],
    "cost": 850,
    "attractions": ["Myeongdong", "Gyeongbokgung", "Bukchon Hanok Village"],
    "reason": "Trendy, techie, and culturally rich metropolis.",
    "link": "https://images.unsplash.com/photo-1587840171675-a36caeb79bb1?w=800&h=600"
  },
  {
    "name": "London",
    "ageGroups": ["adult", "senior"],
    "hobbies": ["History", "Theatre", "Shopping"],
    "cost": 950,
    "attractions": ["Big Ben", "West End", "Camden Market"],
    "reason": "Royal heritage with modern flair.",
    "link": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?w=800&h=600"
  },
  {
    "name": "Buenos Aires",
    "ageGroups": ["adult"],
    "hobbies": ["Dance", "Literature", "Cafes"],
    "cost": 720,
    "attractions": ["Tango Shows", "Bookstores", "La Boca"],
    "reason": "Elegance, poetry, and rhythm in the streets.",
    "link": "https://images.unsplash.com/photo-1534811511662-784dd0f47cc7?w=800&h=600"
  },
  {
    "name": "Hanoi",
    "ageGroups": ["adult", "senior"],
    "hobbies": ["Street Food", "Crafts", "History"],
    "cost": 500,
    "attractions": ["Old Quarter", "Temple of Literature", "Hanoi Train Street"],
    "reason": "Rich tradition and vibrant local life.",
    "link": "https://images.unsplash.com/photo-1557964195-4a30578d7145?w=800&h=600"
  },
  {
    "name": "Prague",
    "ageGroups": ["teen", "adult", "senior"],
    "hobbies": ["Castles", "Beer", "Photography"],
    "cost": 780,
    "attractions": ["Charles Bridge", "Prague Castle", "Astronomical Clock"],
    "reason": "Fairy‑tale architecture and cozy pubs.",
    "link": "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=800&h=600"
  },
  {
    "name": "Toronto",
    "ageGroups": ["adult", "senior"],
    "hobbies": ["Diversity", "Museums", "Hockey"],
    "cost": 870,
    "attractions": ["CN Tower", "Royal Ontario Museum", "Kensington Market"],
    "reason": "Cultural mosaic with world-class museums.",
    "link": "https://images.unsplash.com/photo-1548829574-5f0a1a68633e?w=800&h=600"
  },
  {
    "name": "Athens",
    "ageGroups": ["adult", "senior"],
    "hobbies": ["Archaeology", "Mediterranean Food", "Mythology"],
    "cost": 810,
    "attractions": ["Acropolis", "Plaka", "Parthenon"],
    "reason": "Walk among ancient legends.",
    "link": "https://images.unsplash.com/photo-1555088462-56145a2bb122?w=800&h=600"
  },
  {
    "name": "Havana",
    "ageGroups": ["adult"],
    "hobbies": ["Vintage Cars", "Jazz", "Cigars"],
    "cost": 650,
    "attractions": ["Old Havana", "Malecón", "Classic Cars"],
    "reason": "Timeless charm and soulful music.",
    "link": "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=800&h=600"
  },
  {
    "name": "Edinburgh",
    "ageGroups": ["adult", "senior"],
    "hobbies": ["Literature", "Ghost Tours", "Festivals"],
    "cost": 860,
    "attractions": ["Edinburgh Castle", "Royal Mile", "Fringe Festival"],
    "reason": "Historic storytelling in every alley.",
    "link": "https://images.unsplash.com/photo-1505443342668-1fadfa4c71b0?w=800&h=600"
  },
  {
    "name": "Hong Kong",
    "ageGroups": ["teen", "adult"],
    "hobbies": ["Skyline Views", "Shopping", "Street Markets"],
    "cost": 900,
    "attractions": ["Victoria Peak", "Temple Street", "Disneyland HK"],
    "reason": "High-energy urban flavor and neon nights.",
    "link": "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&h=600"
  },
  {
    "name": "Lima",
    "ageGroups": ["adult", "senior"],
    "hobbies": ["Culinary", "Colonial History", "Surfing"],
    "cost": 620,
    "attractions": ["Miraflores", "Larco Museum", "Barranco"],
    "reason": "Coastal cuisine and colorful heritage.",
    "link": "https://images.unsplash.com/photo-1502378735452-bc7d86632805?w=800&h=600"
  },
  {
    "name": "Copenhagen",
    "ageGroups": ["adult", "senior"],
    "hobbies": ["Design", "Cycling", "Hygge"],
    "cost": 950,
    "attractions": ["Nyhavn", "The Little Mermaid", "Tivoli Gardens"],
    "reason": "Scandinavian charm and cozy vibes.",
    "link": "https://images.unsplash.com/photo-1505455184864-76ebb5cb7090?w=800&h=600"
  },
  {
    "name": "Marrakech",
    "ageGroups": ["adult", "senior"],
    "hobbies": ["Culture", "Food", "Shopping"],
    "cost": 600,
    "attractions": ["Medina", "Saadian Tombs", "Spice Markets"],
    "reason": "Spice-scented markets and historic walls.",
    "link": "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?w=800&h=600"
  },
  {
    "name": "Queenstown",
    "ageGroups": ["teen", "adult"],
    "hobbies": ["Adventure", "Nature", "Wine"],
    "cost": 780,
    "attractions": ["Bungee Jumping", "Lakes", "Vineyards"],
    "reason": "Thrill-filled scenery in the wild.",
    "link": "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=800&h=600"
  },
  {
    "name": "Lisbon",
    "ageGroups": ["adult", "senior"],
    "hobbies": ["History", "Food", "Music"],
    "cost": 700,
    "attractions": ["Belém Tower", "Fado", "Pastéis de Nata"],
    "reason": "Melancholic tunes with pastéis de nata.",
    "link": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600"
  },
  {
    "name": "Dubai",
    "ageGroups": ["adult", "senior"],
    "hobbies": ["Luxury", "Architecture", "Shopping"],
    "cost": 1100,
    "attractions": ["Burj Khalifa", "Desert Safari", "Malls"],
    "reason": "Extravagant modern city in the desert.",
    "link": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&h=600"
  },
  {
    "name": "Tokyo",
    "ageGroups": ["teen", "adult"],
    "hobbies": ["Food", "Nightlife", "Tech"],
    "cost": 900,
    "attractions": ["Shibuya", "Sushi", "Anime Shops"],
    "reason": "Energetic food and neon mecca.",
    "link": "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=800&h=600"
  },
  {
    "name": "Paris",
    "ageGroups": ["adult", "senior"],
    "hobbies": ["Art", "Food", "Romance"],
    "cost": 1000,
    "attractions": ["Eiffel Tower", "Louvre", "Bakeries"],
    "reason": "Artistic elegance meets culinary heaven.",
    "link": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600"
  },
  {
    "name": "Bali",
    "ageGroups": ["teen", "adult", "senior"],
    "hobbies": ["Nature", "Adventure", "Wellness"],
    "cost": 600,
    "attractions": ["Beaches", "Jungle", "Yoga Retreats"],
    "reason": "Tropical escape with heart and calm.",
    "link": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600"
  }
];


  const toggleHobby = (hobby) => {
    setHobbies((prev) =>
      prev.includes(hobby)
        ? prev.filter((h) => h !== hobby)
        : [...prev, hobby]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const matches = allCities.filter((city) => {
      const ageMatch = city.ageGroups.includes(age);
      const hobbyMatch = hobbies.some((hobby) =>
        city.hobbies.includes(hobby)
      );
      return ageMatch && hobbyMatch;
    });
    setFilteredCities(matches);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center display-5 mb-4">
        🌍 <span className="fw-bold">Where Should I Go?</span>
      </h1>

      <form onSubmit={handleSubmit} className="card p-4 shadow mb-5">
        <div className="mb-3">
          <label className="form-label fw-semibold">Select Age Group:</label>
          <select
            className="form-select"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          >
            <option value="">Choose...</option>
            <option value="teen">Under 20</option>
            <option value="adult">20–40</option>
            <option value="senior">40+</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Select Hobbies:</label>
          <div className="d-flex flex-wrap gap-3">
            {hobbyOptions.map((hobby) => (
              <div className="form-check" key={hobby}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={hobby}
                  checked={hobbies.includes(hobby)}
                  onChange={() => toggleHobby(hobby)}
                  id={`checkbox-${hobby}`}
                />
                <label
                  className="form-check-label"
                  htmlFor={`checkbox-${hobby}`}
                >
                  {hobby}
                </label>
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          🌟 Find My City ✈️
        </button>
      </form>

      <div className="row gy-4">
        {filteredCities.length === 0 && (
          <p className="text-center text-muted">
            No matching cities yet. Try different hobbies! 🌐
          </p>
        )}
        {filteredCities.map((city, i) => (
          <div className="col-md-6" key={i}>
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <img className="card-img-top fixed-img" src={city.link} alt={city.name} />
                <h5 className="card-title fw-bold">{city.name}</h5>
                <p className="card-text">💰 Avg. Cost: ${city.cost}/week</p>
                <p className="card-text">
                  📍 Attractions: {city.attractions.join(", ")}
                </p>
                <p className="card-text">💡 {city.reason}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;