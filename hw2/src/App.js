import 'bootstrap/dist/css/bootstrap.min.css';
import Progress from "./components/Progress";
import Alert from "./components/Alert";
function App() {
  return (
    <div className="App">

        <Progress percentage={20} />
        <Progress percentage={40} />
        <Progress percentage={80} />
        <Alert type="warning" text="what is love?" />
    </div>
  );
}

export default App;
