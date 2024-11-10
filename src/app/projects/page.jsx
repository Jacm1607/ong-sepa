import { Circle } from "lucide-react";
import Link from "next/link";

const timelineData = [
  {
    name: "Bienal Infanto Juvenil",
    date: "2024-08-08",
    description: "La Bienal Infanto Juvenil es un proceso formativo-educativo con enfoque de derechos, que utiliza el Arte y las Expresiones Socio culturales y el deporte como estrategia para prevenir situaciones de riesgo como ser pandillas juveniles, bulliyng, consumo de drogas, alcohol, violencia de género, embarazos no planificados con la movilización de las propias niñas, niños, adolescentes y jóvenes.",
    url: 'bienal-infanto-juvenil'
  },
  {
    name: "Proyecto de prevención del maltrato y la violencia sexual a niñas y niños",
    date: "2024-02-01",
    description: "Con el propósito de prevenir el maltrato y la violencia sexual contra niñas y niños en dos ciudades estratégicas de Bolivia, caracterizadas por sus altos índices de violencia sexual contra niños/as, se propuso como Resultado del Proyecto que 10.500 niñas y niños de primaria de 30 escuelas en los municipios de La Paz y Santa Cruz de la Sierra junto a sus madres y padres, sus maestros/as, los gobiernos municipales y el Ministerio de Educación construyen espacios educativos y sociales seguros para la protección efectiva de las niñas y niños contra el maltrato y la violencia sexual.",
  },
  {
    name: "Proyecto de Prevención y Erradicación Progresiva del Trabajo Infantil, a partir del ejercicio del Derecho a la Educación",
    date: "2024-02-15",
    description: "El “trabajo infantil” se define como todo trabajo que priva a los niños de su niñez, su potencial y su dignidad.",
  },
  {
    name: "Proyecto de Prevención y Erradicación Progresiva del Trabajo Infantil, a partir del ejercicio del Derecho a la Educación",
    date: "2024-03-10",
    description:
      "Niñas, niños y adolescentes, madres y padres, organizaciones de la sociedad civil y gobiernos locales toman acciones efectivas para el ejercicio de derechos por parte de niñas, niños y adolescentes que trabajan en espacios públicos o en otras actividades de alto riesgo.",
  },
  {
    name: "Programa Integral de protección de la niñez y adolescencia y resiliencia climática en el marco del Programa de saneamiento y sostenibilidad descentralizado urbano en el municipio de Montero 2020 – 2023",
    date: "2024-03-25",
    description:
      "Desarrollar a través de una metodología participativa planes de desarrollo familiar para 45 familias en situación de vulnerabilidad beneficiadas por los MOFASAS.",
  },
  {
    name: "Proyecto de investigación y abordaje de la Violencia y Explotación Sexual  de niños, niñas y adolescentes en la Chiquitanía (San José, San Rafael, San Miguel y San Ignacio de Velasco)",
    date: "2024-04-01",
    description: "El estudio se propone identificar los factores protectores y de riesgo  asociados a la Violencia y Explotación Sexual de niños, niñas y adolescentes (VESNNA), que en los Municipios de San José de Chiquitos, San Miguel de Velasco, San Rafael de Velasco y San Ignacio de Velasco en la Chiquitania, sus causas principales, la potencial relación con el Proyecto Carretero, así como recomendaciones para mitigar los riesgos.",
  },
];

export default function ProjectTimeline() {
  return (
    <div className="mx-8">
      <div className="flex justify-center pt-24">
      <div className="container">
        <h2 className="text-2xl font-bold mb-8 text-gray-700">Linea de tiempo de nuestros proyectos</h2>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {timelineData.map((item, index) => (
            <Link key={index} href={'/'}>
              <li className="mb-10 ml-12">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <Circle className="w-3 h-3 text-blue-800 dark:text-blue-300" />
              </span>
              {index === timelineData.length - 1 && (
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                    Nuevo
                  </span>
              )}
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-700 dark:text-white">
                {item.name}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {new Date(item.date).toLocaleDateString("es-BO", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <p className="mb-4 text-sm font-normal text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </li>
            </Link>
          ))}
        </ol>
      </div>
    </div>
    </div>
  );
}
