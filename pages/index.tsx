import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Oluwatoyin Abayomi Olaoye | Full-Stack Developer</title>
        <link rel="shortcut icon" href="/oat-logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="e5qcThTIdpZ7TH21zTYf0YWKXqY_M0OLKednXhZqrGc" />
        <meta name="description" content="Oluwatoyin Abayomi Olaoye | Full-Stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Oluwatoyin Abayomi Olaoye | Full-Stack Developer" />
        <meta name="description" content="Hey! I'm Oluwatoyin Olaoye, a full-stack software developer with keen interest in problem-solving." />

        <meta property="og:title" content="Oluwatoyin Abayomi Olaoye | Full-Stack Developer" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://mindprep.tech/" />
        <meta property="og:image" content="https://mindprep.tech/oat_bg.png" />
        <meta property="og:description" content="Hey! I'm Oluwatoyin Olaoye, a full-stack software developer with keen interest in problem-solving." />

        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@olaoyeelijah"/>
        <meta name="twitter:title" content="Oluwatoyin Abayomi Olaoye | Full-Stack Developer"/>
        <meta name="twitter:description" content="Hey! I'm Oluwatoyin Olaoye, a full-stack software developer with keen interest in problem-solving."/>
        <meta name="twitter:creator" content="@olaoyeelijah"/>
        <meta name="twitter:image" content="https://mindprep.tech/oat_bg.png"/>
      </Head>
      <Home />
    </>
  );
}