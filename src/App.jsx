import Post from "./components/Post";

function App() {
  //return <Post />;
  return (
    <main>
      <Post author="Ammar" body="React is great!" />
      <Post author="Johan" body="NO I like Vue more!" />
    </main>
  )
}

export default App;
