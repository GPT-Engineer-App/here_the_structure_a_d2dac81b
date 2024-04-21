import React from "react";
import { Box, Container, Heading, Text, VStack, Link } from "@chakra-ui/react";
import Navigation from "../components/Navigation.jsx";

const AboutUs = () => {
  return (
    <Container maxW="container.xl">
      <Navigation />
      <VStack spacing={5} align="start">
        <Heading as="h1">Erfahren Sie mehr über ProBau – Ihr Partner für Bauprojekte</Heading>
        <Text>Willkommen bei ProBau, der innovativen Plattform, die Bauvorhaben revolutioniert. Unsere Mission ist es, Bauherren und Fachleute aus der Baubranche zusammenzubringen, um jedes Bauprojekt effizient, transparent und erfolgreich zu gestalten.</Text>
        <Heading as="h2">Unsere Geschichte</Heading>
        <Text>ProBau wurde 2023 gegründet mit dem Ziel, den Bauprozess für alle Beteiligten zu vereinfachen. Seitdem haben wir uns zu einer der vertrauenswürdigsten Plattformen in der Bauindustrie entwickelt, unterstützt durch ein starkes Netzwerk von qualifizierten Bauunternehmen und zufriedenen Kunden.</Text>
        <Heading as="h2">Unsere Mission</Heading>
        <Text>Bei ProBau steht die Kundenzufriedenheit im Mittelpunkt. Wir streben danach, die beste Matchmaking-Plattform für Bauprojekte zu sein, indem wir innovative Lösungen anbieten, die den gesamten Bauprozess von der Planung bis zur Fertigstellung optimieren.</Text>
        <Heading as="h2">Unsere Werte</Heading>
        <Text>Transparenz: Klare Kommunikation und offene Preisgestaltung</Text>
        <Text>Vertrauen: Geprüfte Bauunternehmen und echte Kundenbewertungen</Text>
        <Text>Innovation: Ständige Verbesserung unserer Plattform und Services</Text>
        <Heading as="h2">Unser Team</Heading>
        <Text>Unser Team besteht aus leidenschaftlichen Experten aus den Bereichen Bauwesen, Technologie und Kundenservice. Gemeinsam arbeiten wir jeden Tag daran, ProBau zu verbessern und unsere Kunden bei der Verwirklichung ihrer Bauprojekte zu unterstützen.</Text>
        <Heading as="h2">Warum ProBau wählen?</Heading>
        <Text>Mit ProBau wählen Sie nicht nur eine Plattform, sondern einen Partner, der sich für die Erfüllung Ihrer Bauprojektziele einsetzt. Von der einfachen Projektplanung bis zur Auswahl des perfekten Bauunternehmens – ProBau steht Ihnen zur Seite.</Text>
      </VStack>
    </Container>
  );
};

export default AboutUs;
