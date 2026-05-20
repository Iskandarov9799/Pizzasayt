  import "./App3.css";

  function App() {
    return (
      <div className="cardlar">
  <div className="card">
    <div className="qismi bosh">
       <img src="/public/rasm.png" alt="" />
      <h3>HOW WE COOKING</h3>
      <button className="zakaz">More</button>
    </div>
    <div className="qismi bosh">
       <img src="/public/rasmm.png" alt="" />
      <h3>OUR BLOG</h3>
      <button className="zakaz">More</button>
    </div>

    <div className="yozuv">
      <h1>Events</h1>
      <p>There are regular events in our pizzeria that will <br /> allow you to eat delicious food for a lower price!</p>
    </div>
  </div>
  <div className="card">
    <div className="qismi orta">
      <img src="/public/rasmmm.jpg" alt="" />
      <h3>TWO PIZZA FOR 1 PRICE</h3>
      <button className="zakaz">More</button>
    </div>

    <div className="qismi orta">
      <img src="/public/rasmmmm.png" alt="" />
      <h3>KITCHEN TOUR</h3>
      <button className="zakaz">More</button>
    </div>
  </div>
  <div className="card">
    <div className="qismi pastki">
      <img src="/public/rasmmmmm.png" alt="" />
      <h3>FREE COFFEE FOR 3 PIZZA</h3>
      <button className="zakaz">More</button>
    </div>

    <div className="qismi pastki">
      <img src="/public/rasmmmmmm.png" alt="" />
      <h3>OUR INSTAGRAM</h3>
      <button className="zakaz">More</button>
    </div>

    <div className="qismi pastki">
      <img src="/public/rasmmmmmmm.png" alt="" />
      <h3>WHERE ARE YOU CHOOSE US?</h3>
      <button className="zakaz">More</button>
    </div>
  </div>

</div>
    );
  }

  export default App;