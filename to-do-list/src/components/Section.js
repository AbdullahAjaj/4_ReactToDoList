import Cards from "./Cards";
import Footer from "./Footer";
import Nav from "./Nav";
import FormNew from "./FormNew";

import Image1 from "./../images/image.jpg";
import Image2 from "./../images/image2.png";
import Image3 from "./../images/image3.jpg";
import Image4 from "./../images/image4.jpg";

import { useState } from "react";

const Section = () => {
  const staticCards = [
    {
      id: 1676368472841,
      done: true,
      color: "#ff0000",
      title: "To do research",
      image: Image1,
    },
    {
      id: 1676368486003,
      done: false,
      color: "#ffa500",
      title: "Create Prototypes",
      image: Image2,
    },
    {
      id: 1676368496905,
      done: true,
      color: "#ffa500",
      title: "Create design consept",
      image: Image3,
    },
    {
      id: 1676368505544,
      done: true,
      color: "#008000",
      title: "Discuss consept with team",
      image: Image4,
    },
  ];

  const [cardsData, setCardsData] = useState(staticCards);
  const [appliedFilter, setAppliedFilter] = useState("none"); //none,done,todo
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [formLifeCycle, setFormLifeCycle] = useState("empty"); //empty

  const filteredData = (() => {
    if (appliedFilter === "none") return cardsData;
    else if (appliedFilter === "done")
      return cardsData.filter((card) => card.done === true);
    else return cardsData.filter((card) => card.done === false);
  })();

  function handleDeleteCard(cardId) {
    const unDeletedCards = cardsData.filter((card) => cardId !== card.id); // read , calculation
    setCardsData(unDeletedCards);
  }

  function handleTitleChange(e) {
    return e.target.value.length > 0
      ? setFormLifeCycle("ready")
      : setFormLifeCycle("empty");
  }

  function handleSave(newCard) {
    let newCardsData = [...cardsData, newCard];
    setCardsData(newCardsData);
    setIsAddingItem(false);
  }

  function saveCardChanges(newCard) {
    let newCards = cardsData.map((card) => {
      if (card.id === newCard.id) return newCard;
      else return card;
    });
    setCardsData(newCards);
  }

  return (
    <>
      <Nav
        appliedFilter={appliedFilter}
        onDoneClick={() => setAppliedFilter("done")}
        onToDoClick={() => setAppliedFilter("todo")}
      />
      <section>
        <Cards
          cards={filteredData}
          onDeleteCard={handleDeleteCard}
          saveCardChanges={saveCardChanges}
        />
        {isAddingItem && (
          <FormNew
            handleSave={handleSave}
            handleTitleChange={handleTitleChange}
            formLifeCycle={formLifeCycle}
            onDeleteCard={() => setIsAddingItem(false)}
            onCancel={() => setIsAddingItem(false)}
          />
        )}
      </section>
      <Footer onAdd={() => setIsAddingItem(true)} />
    </>
  );
};

export default Section;
