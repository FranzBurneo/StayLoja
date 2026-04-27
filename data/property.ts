import {
  ArrowUpDown,
  Bath,
  BedDouble,
  Car,
  ChefHat,
  CircleParking,
  Coffee,
  DoorOpen,
  Dumbbell,
  Gamepad2,
  Heater,
  Home,
  Luggage,
  Microwave,
  Refrigerator,
  Shirt,
  ShowerHead,
  Sparkles,
  Tv,
  Utensils,
  WashingMachine,
  Wifi
} from "lucide-react";
import type { Property } from "@/types/property";

export const property: Property = {
  name: "Stay Loja Centro",
  location: "Sector Parque Infantil, cerca del centro de Loja, Ecuador",
  shortLocation: "Sector Parque Infantil, Loja",
  locationNote: "Revisa la ubicación en Google Maps y confirma si la zona se ajusta a tu estadía.",
  description:
    "Disfruta de una experiencia con estilo en este alojamiento céntrico en Loja. Ubicado frente al Parque Infantil, estarás a pocos pasos del centro, cafeterías y restaurantes. El departamento ofrece una sala amplia con TV, comedor elegante, cocina equipada, dos baños y cómodas habitaciones con armarios. Ideal para familias, parejas o viajes de trabajo que buscan confort, ubicación y tranquilidad en el corazón de la ciudad.",
  whatsapp: "593961100356",
  phoneDisplay: "+593 96 110 0356",
  email: "franzdavidburneo@gmail.com",
  mapsUrl: "https://maps.app.goo.gl/bJ9mryWkVr7KhLS3A?g_st=ipc",
  airbnbUrl:
    "https://es-l.airbnb.com/rooms/1499026054784754004?guests=1&adults=1&s=67&unique_share_id=6aeb9d6d-4eb7-4e4b-aeae-047d6445e4b7",
  heroImage: "/images/property/sala-principal.jpg",
  bookingMessage: "Hola, quiero consultar disponibilidad para el departamento en Loja.",
  developerMessage: "Hola, me interesa una página web similar para mi alojamiento o negocio.",
  parkingNote:
    "Parqueadero privado dentro del edificio. La entrada es angosta, por lo que se recomienda para vehículos pequeños o medianos.",
  accessText:
    "Los huéspedes tendrán acceso a todo el departamento de manera privada: sala, comedor, cocina equipada, dos habitaciones, dos baños y parqueadero. No hay áreas compartidas.",
  stats: [
    { value: "4", label: "huéspedes" },
    { value: "2", label: "habitaciones" },
    { value: "2", label: "camas" },
    { value: "2", label: "baños" },
    { value: "WiFi", label: "rápido" },
    { value: "P", label: "parqueadero" }
  ],
  trustItems: [
    "Sector Parque Infantil",
    "Cerca del centro de Loja",
    "WiFi de alta velocidad",
    "Departamento privado",
    "Ideal para familias y trabajo",
    "Disponible en Airbnb"
  ],
  benefits: [
    {
      title: "Alojamiento entero y privado",
      description:
        "Departamento completo, sin áreas compartidas, ideal para descansar con privacidad en una zona céntrica de Loja."
    },
    {
      title: "Ubicación práctica",
      description:
        "Estarás en el sector Parque Infantil, cerca del centro, cafeterías, restaurantes y puntos de interés de la ciudad."
    },
    {
      title: "Equipado para estadías cómodas",
      description:
        "Sala amplia, TV HD con Netflix, comedor para 6 personas, cocina completa, dos baños, WiFi y parqueadero."
    }
  ],
  gallery: [
    {
      title: "Sala principal",
      description: "Sala amplia y acogedora con sofás, mesa de centro y TV HD con Netflix.",
      src: "/images/property/sala-principal.jpg",
      alt: "Sala principal amplia del departamento Stay Loja Centro"
    },
    {
      title: "Comedor",
      description: "Comedor elegante para 6 personas, ideal para familias o viajes de trabajo.",
      src: "/images/property/comedor.jpg",
      alt: "Comedor elegante para seis personas"
    },
    {
      title: "Cocina equipada",
      description: "Cocina completa con refrigeradora, microondas, horno, cafetera y utensilios.",
      src: "/images/property/cocina.jpg",
      alt: "Cocina equipada del departamento en Loja"
    },
    {
      title: "Habitación principal",
      description: "Cama Queen de dos plazas y media, clóset amplio y ropa de cama incluida.",
      src: "/images/property/habitacion-principal.jpg",
      alt: "Habitación principal con cama queen y clóset"
    },
    {
      title: "Habitación secundaria",
      description: "Cama doble de dos plazas, clóset amplio, mesa de noche y toallas incluidas.",
      src: "/images/property/habitacion-secundaria.jpg",
      alt: "Habitación secundaria con cama doble"
    },
    {
      title: "Baño principal",
      description: "Baño con ducha/tina, agua caliente, secadora de pelo y toallas incluidas.",
      src: "/images/property/bano-principal.jpg",
      alt: "Baño principal con ducha y tina"
    },
    {
      title: "Baño social",
      description: "Baño social práctico para mayor comodidad durante la estadía.",
      src: "/images/property/bano-social.jpg",
      alt: "Baño social del departamento"
    }
  ],
  amenities: [
    { category: "Confort", title: "Agua caliente", description: "Duchas cómodas durante toda tu estadía.", icon: ShowerHead },
    { category: "Confort", title: "Almohadas y mantas adicionales", description: "Más comodidad para descansar como en casa.", icon: BedDouble },
    { category: "Confort", title: "Sábanas", description: "Ropa de cama incluida para ambas habitaciones.", icon: Sparkles },
    { category: "Confort", title: "Secadora de pelo", description: "Disponible en el baño principal.", icon: Heater },
    { category: "Confort", title: "Tina", description: "Baño principal con ducha/tina.", icon: Bath },
    { category: "Entretenimiento", title: "TV HD", description: "Sala equipada para ver películas y series.", icon: Tv },
    { category: "Entretenimiento", title: "Netflix", description: "Entretenimiento listo para una noche tranquila.", icon: Sparkles },
    { category: "Entretenimiento", title: "Juegos de mesa", description: "Detalles para compartir en familia o pareja.", icon: Gamepad2 },
    { category: "Entretenimiento", title: "WiFi", description: "Conexión de alta velocidad para trabajar o descansar.", icon: Wifi },
    { category: "Cocina", title: "Cocina", description: "Cocina totalmente equipada para preparar tus comidas.", icon: ChefHat },
    { category: "Cocina", title: "Refrigeradora", description: "Espacio para conservar alimentos y bebidas.", icon: Refrigerator },
    { category: "Cocina", title: "Microondas", description: "Práctico para calentar comidas rápido.", icon: Microwave },
    { category: "Cocina", title: "Horno y cocina a gas", description: "Opciones completas para cocinar con comodidad.", icon: Utensils },
    { category: "Cocina", title: "Cafetera y licuadora", description: "Cafetera de filtro y licuadora disponibles.", icon: Coffee },
    { category: "Cocina", title: "Platos y cubiertos", description: "Vajilla completa para una estadía práctica.", icon: Utensils },
    { category: "Cocina", title: "Básicos para cocinar", description: "Ollas, sartenes, aceite, sal y pimienta.", icon: ChefHat },
    { category: "Estadía práctica", title: "Lavadora", description: "Ideal para estadías de varios días.", icon: WashingMachine },
    { category: "Estadía práctica", title: "Secadora", description: "Mayor facilidad para viajes largos.", icon: Dumbbell },
    { category: "Estadía práctica", title: "Plancha", description: "Útil para viajes de trabajo o eventos.", icon: Shirt },
    { category: "Estadía práctica", title: "Productos de limpieza", description: "Disponibles para mantener el espacio en orden.", icon: Sparkles },
    { category: "Estadía práctica", title: "Ganchos y almacenamiento", description: "Clósets amplios y espacio para guardar ropa.", icon: DoorOpen },
    { category: "Accesibilidad y movilidad", title: "Ascensor", description: "Acceso cómodo dentro del edificio.", icon: ArrowUpDown },
    { category: "Accesibilidad y movilidad", title: "Parqueadero en instalaciones", description: "Parqueadero gratuito dentro del edificio.", icon: CircleParking },
    { category: "Accesibilidad y movilidad", title: "Estacionamiento en la calle", description: "Opciones gratuitas cercanas según disponibilidad.", icon: Car },
    { category: "Servicios adicionales", title: "Estadías largas", description: "Disponible para reservas de varios días o semanas.", icon: Home },
    { category: "Servicios adicionales", title: "Equipaje", description: "Se permite dejar el equipaje con coordinación previa.", icon: Luggage }
  ],
  rooms: [
    {
      title: "Habitación principal",
      description: "Un dormitorio cómodo para descansar con privacidad.",
      features: ["Cama Queen, dos plazas y media", "Clóset amplio", "Mesa de noche", "Ropa de cama incluida", "Toallas incluidas"]
    },
    {
      title: "Habitación secundaria",
      description: "Ideal para acompañantes, niños o una segunda pareja.",
      features: ["Cama Doble, dos plazas", "Clóset amplio", "Mesa de noche", "Ropa de cama incluida", "Toallas incluidas"]
    },
    {
      title: "Sala y comedor",
      description: "Espacios sociales amplios para descansar, compartir o trabajar.",
      features: ["Sala amplia y acogedora", "Sofás", "Mesa de centro", "TV HD con Netflix", "Comedor para 6 personas"]
    },
    {
      title: "Cocina equipada",
      description: "Preparada para desayunos, comidas familiares o estadías largas.",
      features: ["Refrigeradora", "Microondas", "Cocina a gas", "Horno", "Cafetera", "Licuadora", "Platos, cubiertos y utensilios"]
    },
    {
      title: "Baños",
      description: "Dos baños para mayor comodidad durante la estadía.",
      features: ["Un baño con ducha/tina", "Un baño social", "Agua caliente", "Secadora de pelo", "Toallas incluidas"]
    },
    {
      title: "Parqueadero",
      description: "Parqueadero privado disponible dentro del edificio.",
      features: ["Dentro del edificio", "Recomendado para vehículos pequeños o medianos", "Entrada angosta", "Coordinación por WhatsApp"]
    }
  ],
  pricing: [
    { label: "Desde", value: "$23 por noche" },
    { label: "Fin de semana", value: "Desde $28 por noche" },
    { label: "Descuento semanal", value: "15%" },
    { label: "Descuento mensual", value: "25%" }
  ],
  pricingNote:
    "Las tarifas pueden variar según fechas, temporada, disponibilidad, número de huéspedes y duración de la estadía. Escríbenos para confirmar el valor final.",
  rules: [
    "Check-in desde las 3:00 p.m.",
    "Check-out antes de las 11:00 a.m.",
    "Máximo 4 huéspedes",
    "No fiestas ni eventos",
    "No fumar dentro del departamento",
    "Horas de silencio de 10:00 p.m. a 7:00 a.m.",
    "Cuidar muebles y equipamiento",
    "Reportar cualquier novedad durante la estadía",
    "Coordinar ingreso y salida por WhatsApp",
    "Consultar previamente sobre mascotas"
  ],
  faqs: [
    {
      question: "¿Cómo consulto disponibilidad?",
      answer:
        "Puedes escribirnos por WhatsApp indicando tus fechas de llegada y salida. Te confirmaremos disponibilidad y tarifa final."
    },
    {
      question: "¿Cuál es la hora de check-in?",
      answer: "El check-in es desde las 3:00 p.m. La hora exacta de llegada se coordina previamente por WhatsApp."
    },
    {
      question: "¿Cuál es la hora de salida?",
      answer: "El check-out es antes de las 11:00 a.m."
    },
    {
      question: "¿El departamento tiene parqueadero?",
      answer: "Sí, cuenta con parqueadero dentro del edificio."
    },
    {
      question: "¿El parqueadero sirve para cualquier vehículo?",
      answer: "La entrada es angosta, por lo que se recomienda para vehículos pequeños o medianos."
    },
    {
      question: "¿Tiene WiFi?",
      answer: "Sí, el departamento cuenta con WiFi de alta velocidad."
    },
    {
      question: "¿Tiene Netflix?",
      answer: "Sí, la sala cuenta con TV HD y Netflix."
    },
    {
      question: "¿Puedo cocinar?",
      answer:
        "Sí, la cocina está equipada con refrigeradora, microondas, cocina a gas, cafetera, horno, licuadora, platos, cubiertos y utensilios básicos."
    },
    {
      question: "¿Se puede reservar por varios días o semanas?",
      answer: "Sí, el alojamiento está disponible para estadías cortas y largas, sujeto a disponibilidad."
    },
    {
      question: "¿El departamento es privado?",
      answer: "Sí, los huéspedes tienen acceso privado a todo el departamento. No hay áreas compartidas."
    },
    {
      question: "¿Está cerca del centro de Loja?",
      answer: "Sí, está ubicado en el sector Parque Infantil, cerca del centro, cafeterías y restaurantes."
    },
    {
      question: "¿Se permiten mascotas?",
      answer: "Consultar previamente por WhatsApp antes de reservar."
    }
  ],
  testimonials: []
};
