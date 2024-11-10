import { Badge } from "./badge";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Briefcase, Users, Zap } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Misión",
      description:
        " Enfoca sus capacidades hacia la superación de la exclusión histórica y socio cultural que invisibiliza a la niñez, adolescencia y juventud, o los considera objetos de control, negándoles el ejercicio de sus derechos ciudadanos por considerarlos menores",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Visión",
      description:
        "Las niñas, niños, adolescentes y jóvenes son reconocidos en su condición de sujetos sociales y de derecho, y en el ejercicio de su ciudadanía.",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Objetivo",
      description:
        "Promover acciones tendientes a asegurar mejores condiciones de vida de todos los sectores sociales, en especial de la niñez, adolescencia y juventud, a través de la investigación, planficación y elaboración de estrategias.",
    },
  ];

  const teamMembers = [
    {
      name: "Rossmery Egüez",
      role: "Directora General",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Javier Soto",
      role: "Impulsador",
      image: "/placeholder.svg?height=100&width=100",
    },
  ];

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Quienes somos</h2>
          <p className="text-muted-foreground">Nosotros</p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-center">
            Somos una organización sin fines de lucro dedicada al desarrollo
            integral de niños, niñas y adolescentes. Nuestro compromiso es crear
            oportunidades y entornos seguros para que cada joven pueda crecer
            con salud, educación y apoyo emocional. A través de programas de
            educación, desarrollo personal y apoyo psicológico, trabajamos para
            empoderar a las nuevas generaciones, ayudándoles a descubrir su
            potencial y construir un futuro lleno de posibilidades. Creemos en
            el derecho de todos los niños y adolescentes a una vida digna y en
            un entorno que fomente su bienestar y crecimiento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16 md:space-x-8">
          <div>
            <h3 className="font-semibold text-2xl mb-2">Overview</h3>

            <div className="grid gap-6 text-teal-50">
              {/* Main stat */}
              <div className="bg-teal-600 rounded-lg p-6 md:p-8 text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  +15K
                </div>
                <div className="text-sm md:text-base mt-2">
                  Estudiantes registrados
                </div>
              </div>

              {/* Grid of smaller stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-6">
                  <div className="bg-zinc-900 rounded-lg p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold">+100</div>
                    <div className="text-sm md:text-base mt-2 text-zinc-400">
                      Capacitaciones
                    </div>
                  </div>
                  <div className="bg-zinc-900 rounded-lg p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold">+5</div>
                    <div className="text-sm md:text-base mt-2 text-zinc-400">
                      Proyectos completados
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-zinc-900 rounded-lg p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold">+150</div>
                    <div className="text-sm md:text-base mt-2 text-zinc-400">
                      Escuelas visitadas
                    </div>
                  </div>
                  <div className="bg-zinc-900 rounded-lg p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold">+10</div>
                    <div className="text-sm md:text-base mt-2 text-zinc-400">
                      Eventos públicos
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-zinc-900 rounded-lg p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold">+70</div>
                    <div className="text-sm md:text-base mt-2 text-zinc-400">
                      Charlas para padres
                    </div>
                  </div>
                  <div className="bg-zinc-900 rounded-lg p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold">+3</div>
                    <div className="text-sm md:text-base mt-2 text-zinc-400">
                      Eventos másivos
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            {features.map((feature) => (
              <div key={feature.title} className="mb-12">
                <h3 className="font-semibold text-2xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Nuestro Equipo</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h4 className="font-semibold">{member.name}</h4>
                <Badge variant="secondary" className="mt-1">
                  {member.role}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
