import Header from "./components/Header";
import Section from "./components/Section";
import DeleteDialogProvider from "./DeleteDialogProvider";

const App = () => {
  return (
    <div className="container">
      <Header />
      <DeleteDialogProvider>
        <Section />
      </DeleteDialogProvider>
    </div>
  );
};

export default App;
