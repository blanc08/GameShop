import FeaturedGameCard from '../../molecules/FeaturedGameCard';
import Image from 'next/image';
export default function FeaturedGames() {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br />
          Games This Year
        </h2>
        <div
          className="
            d-flex
            flex-row flex-lg-wrap
            overflow-setting
            justify-content-lg-between
            gap-lg-3 gap-4
          "
          data-aos="fade-up"
        >
          <FeaturedGameCard
            title="Super Mechs"
            category="Mobile"
            thumbnail="Thumbnail-1"
          />
          <FeaturedGameCard
            title="Call of Duty: Modern"
            category="Mobile"
            thumbnail="Thumbnail-2"
          />
          <FeaturedGameCard
            title="Mobile Legends"
            category="Mobile"
            thumbnail="Thumbnail-3"
          />
          <FeaturedGameCard
            title="Clash of Clans"
            category="Mobile"
            thumbnail="Thumbnail-4"
          />
          <FeaturedGameCard
            title="Valorant"
            category="Desktop"
            thumbnail="Thumbnail-5"
          />
        </div>
      </div>
    </section>
  );
}
