import menuPreview from '../../images/menu-preview.jpg';
import table from '../../images/table.jpg';
import open from '../../images/open.jpg';
import './Main.css';

export default function Main() {
  return (
    <main>
      <article className="news">
        <h1>30% Off This Weekend</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium laboriosam cumque doloribus corrupti consequatur quos nam asperiores labore praesentium numquam quibusdam placeat quam officia, voluptates et vero animi quo voluptate officiis laborum voluptatem quia? Modi voluptate itaque, praesentium quod pariatur exercitationem porro, deserunt doloribus eos laborum optio hic molestias in.</p>
      </article>
      <section className="product">
        <article className="product__card">
          <h2>Our New Menu</h2>
          <img src={menuPreview} alt="menu image"/>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quaerat earum, possimus ratione quas atque assumenda, est consectetur placeat nulla, eligendi mollitia incidunt laudantium fugit. </p>
        </article>
        <article className="product__card">
          <h2>Book a table</h2>
          <img src={table} alt="book a table"/>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quaerat earum, possimus ratione quas atque assumenda, est consectetur placeat nulla, eligendi mollitia incidunt laudantium fugit. </p>
        </article>
        <article className="product__card">
          <h2>Opening Hours</h2>
          <img src={open} alt="opening hours"/>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quaerat earum, possimus ratione quas atque assumenda, est consectetur placeat nulla, eligendi mollitia incidunt laudantium fugit. </p>
          <ul>
            <li>Mon - Fri: 2pm - 10pm</li>
            <li>Sat: 2pm - 11pm</li>
            <li>Sun: 2pm - 9pm</li>
          </ul>
        </article>
      </section>
  </main>

  )
}