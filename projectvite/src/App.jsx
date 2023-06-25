import React from "react";
import BusinessCard from "./BusinessCard";

function App() {
  const businessCards = [
    {
      name: "John Doe",
      email: "johndoe@example.com",
      tel: "123-456-7890",
      photo: "",
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      tel: "987-654-3210",
      photo: "",
    },
    {
      name: "JaneCarol Gate",
      email: "janesmith@example.com",
      tel: "987-654-3210",
      photo: "",
    },
    {
      name: "Brandon Walls",
      email: "janesmith@example.com",
      tel: "987-654-3210",
      photo: "",
    },
    {
      name: "Kristy Reymans",
      email: "janesmith@example.com",
      tel: "987-654-3210",
      photo: "",
    },
    {
      name: "George Watters",
      email: "janesmith@example.com",
      tel: "987-654-3210",
      photo: "",
    },
    {
      name: "Diana Sunny",
      email: "janesmith@example.com",
      tel: "987-654-3210",
      photo:
        "https://media.istockphoto.com/id/1405730723/photo/empty-asphalt-road-and-new-year-2023-concept-driving-on-an-empty-road-to-goals-2023-with.webp?b=1&s=170667a&w=0&k=20&c=xn2OFq_1n9KNM8OdUzIxKBH949UOqe5M4_VQ7XAcvwQ=",
    },
  ];

  return (
    <>
      <div className="App">
        <h1>Business Cards</h1>
        <div className="business-card-container">
          {businessCards.map((card, index) => (
            <BusinessCard
              key={index}
              name={card.name}
              email={card.email}
              tel={card.tel}
              photo={card.photo}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
