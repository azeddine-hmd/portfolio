import React from "react";
import {
  Html,
  Body,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  firstName: string;
  lastName: string;
  senderEmail: string;
  message: string;
};

export default function ContactFormEmail({
  firstName,
  lastName,
  senderEmail,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Preview>
        New message from {firstName} {lastName} on my portoflio site
      </Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You recieved the following message from {firstName} {lastName}
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>{`The sender's email is: ${senderEmail}`}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
