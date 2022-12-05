import "../showcase.css";

export default function Showcase() {
  return (
    <header id="showcase">
      <div className="container">
        <div className="showcase-container">
          <div className="showcase-content">
            <div className="category category-health">Health</div>
            <h1>Some health Article</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              doloribus eaque iusto adipisci, nisi et illum? Adipisci, deserunt
              esse, veritatis praesentium quod eius, quos aliquid numquam
              aperiam officiis laboriosam quia.
            </p>
            <a href="allArticles.html" className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
