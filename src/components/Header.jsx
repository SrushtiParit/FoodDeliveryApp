import logoImg from "../assets/logo.jpg";

export default function Header() {
  return (
    <main id="main-header">
      <div id="title">
        <img src={logoImg} />
        <h1>Food Delivery App</h1>
      </div>
      <button>Cart(0)</button>
    </main>
  );
}
