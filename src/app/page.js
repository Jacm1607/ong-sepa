"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Banner from "../assets/images/banner.webp";
import Ajedrez from "../assets/images/ajedrez.jpg";
import Audiovisual from "../assets/images/audiovisual.jpg";
import Declamacion from "../assets/images/declamacion.jpg";
import Expojoven from "../assets/images/expojoven.jpg";
import Fotografia from "../assets/images/fotografia.jpg";
import Farandula from "../assets/images/farandula.jpg";
import Pintura from "../assets/images/pintura.jpg";
import Futbol from "../assets/images/futbol.jpg";
import Tecnologia from "../assets/images/tecnologia.jpg";
import Cuentos from "../assets/images/cuentos.jpg";
import ComposicionPoetica from "../assets/images/composicionPoetica.jpg";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import About from "../components/view/about";
import AdvertisingFacebook from "../components/view/advertising-fb";

const featuredContent = {
  id: "featured1",
  title: "Fundación SEPA",
  description:
    "ONG dedicada al estudio de la niñez, adolescencia y juventud en situaciones de de riesgo en Santa Cruz de la Sierra",
  image: Banner,
};

const contentRows = [
  {
    title: "Actividades de la Bienal Infanto Juvenil",
    items: [
      {
        id: "1",
        title: "Dibujo y pintura",
        image: Pintura,
      },
      {
        id: "2",
        title: "Audiovisual",
        image: Audiovisual,
      },
      {
        id: "3",
        title: "Farandula socioculturales",
        image: Farandula,
      },
      {
        id: "4",
        title: "Declamación",
        image: Declamacion,
      },
      {
        id: "5",
        title: "Fotografia",
        image: Fotografia,
      },
      {
        id: "6",
        title: "Expojoven",
        image: Expojoven,
      },
      {
        id: "7",
        title: "Futbol social",
        image: Futbol,
      },
      {
        id: "8",
        title: "Creación de productos tecnologicos",
        image: Tecnologia,
      },
      {
        id: "9",
        title: "Cuentos",
        image: Cuentos,
      },
      {
        id: "10",
        title: "Ajedrez",
        image: Ajedrez,
      },
      {
        id: "11",
        title: "Composición poética",
        image: ComposicionPoetica,
      },
    ],
  },
];

export default function HomeScreen() {
  const rowRefs = useRef([]);
  const [showLeftButtons, setShowLeftButtons] = useState([]);

  useEffect(() => {
    setShowLeftButtons(new Array(contentRows.length).fill(false));
  }, []);

  const scrollRow = (rowIndex, direction) => {
    const row = rowRefs.current[rowIndex];
    if (row) {
      const scrollAmount =
        direction === "left" ? -row.clientWidth : row.clientWidth;
      row.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleScroll = (rowIndex) => {
    const row = rowRefs.current[rowIndex];
    if (row) {
      setShowLeftButtons((prev) => {
        const newState = [...prev];
        newState[rowIndex] = row.scrollLeft > 0;
        return newState;
      });
    }
  };

  return (
    <main>
      <section className="relative h-[70vh] mb-12">
        <Image
          src={featuredContent.image}
          alt={featuredContent.title}
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black">
          <h2 className="text-4xl font-bold mb-2 text-white">
            {featuredContent.title}
          </h2>
          <p className="text-lg mb-4 text-white">
            {featuredContent.description}
          </p>
          <Button
            variant={"outline"}
            className="bg-transparent text-white border-2"
          >
            Ver más
          </Button>
        </div>
      </section>

      {contentRows.map((row, rowIndex) => (
        <section key={row.title} className="mb-12">
          <div className=" mx-4 px-4 mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              {row.title}
            </h3>
            <div className="relative">
              <div
                className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide"
                ref={(el) => {
                  rowRefs.current[rowIndex] = el;
                }}
                onScroll={() => handleScroll(rowIndex)}
              >
                {row.items.map((item) => (
                  <div key={item.id} className="flex-none w-64">
                    <div className="relative aspect-video mb-2 rounded-md overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                        className="hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="text-sm font-medium text-white">
                      {item.title}
                    </h4>
                  </div>
                ))}
              </div>
              {showLeftButtons[rowIndex] && (
                <button
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white transition-colors"
                  onClick={() => scrollRow(rowIndex, "left")}
                  aria-label={`Scroll ${row.title} left`}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}
              <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white transition-colors"
                onClick={() => scrollRow(rowIndex, "right")}
                aria-label={`Scroll ${row.title} right`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>
      ))}

      <AdvertisingFacebook
        title={
          "Únete a un futuro mejor para los niños: ¡Regístrate en la Bienal Infanto Juvenil!"
        }
        description={"¿Quieres ser parte de una iniciativa que impacta de verdad? Participa a nuestros proyectos enfocados en mejorar el presente y futuro de niños, niñas y adolescentes. Tendrás la oportunidad de contribuir y participar en actividades educativas, recreativas y de apoyo emocional, haciendo una diferencia significativa en sus vidas."}
        labelButtom={"Quiero participar"}
        titleFacebook={"facebook-bienal-infanto-juvenil"}
        urlFacebook={"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbienalinfantojuvenil.org%2Fphotos_albums%3Flocale%3Des_LA&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=990978016033471"}
        widthFacebook={"340"}
        heightFacebook={"500"}
      />

      <About />

      <AdvertisingFacebook
        title={
          "Quieres participar en Fundación SEPA?"
        }
        description={"Forma parte de los proyectos que cambian las vidas de muchas persona."}
        labelButtom={"Quiero participar"}
        titleFacebook={"facebook-fsepa"}
        urlFacebook={"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffunsepa%2F%3Flocale%3Des_LA&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=990978016033471"}
        widthFacebook={"340"}
        heightFacebook={"500"}
      />

    </main>
  );
}
