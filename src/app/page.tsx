"use client";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import LanguageSelector from "@/components/languageSelector/LanguageSelector";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ChakraProvider>
        <LanguageSelector />
      </ChakraProvider>
    </>
  );
}
