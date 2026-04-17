import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface DonationConfirmationEmailProps {
  donorEmail: string;
  amount: string;
  currency: string;
  merchantTradeNo: string;
  transactionId: string;
  donatedAt: string;
}

export default function DonationConfirmationEmail({
  donorEmail,
  amount,
  currency,
  merchantTradeNo,
  transactionId,
  donatedAt,
}: DonationConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>
        Thank you! Your donation of {amount} {currency} has been received 💛
      </Preview>
      <Tailwind>
        <Body className="bg-gray-50 font-sans">
          <Container className="max-w-xl mx-auto py-10 px-4">

            {/* Header card */}
            <Section className="bg-rose-600 rounded-t-2xl px-8 py-10 text-center">
              <Text className="text-white text-4xl mb-2">💛</Text>
              <Heading className="text-white text-2xl font-bold m-0">
                Thank You for Your Generosity
              </Heading>
              <Text className="text-rose-100 text-sm mt-2 mb-0">
                Your support means the world to us
              </Text>
            </Section>

            {/* Body card */}
            <Section className="bg-white rounded-b-2xl px-8 py-8 shadow-sm">

              <Text className="text-gray-700 text-sm leading-relaxed">
                Dear donor,
              </Text>
              <Text className="text-gray-700 text-sm leading-relaxed">
                We&apos;ve successfully received your donation. Every contribution
                brings us one step closer to better treatments, earlier detection,
                and ultimately a world without cancer.
              </Text>

              {/* Donation summary box */}
              <Section className="bg-rose-50 border border-rose-100 rounded-xl px-6 py-5 my-6">
                <Heading className="text-rose-800 text-base font-semibold m-0 mb-4">
                  Donation Summary
                </Heading>
                <Row>
                  <Text className="text-gray-500 text-xs uppercase tracking-wide m-0">Amount</Text>
                  <Text className="text-gray-900 font-bold text-xl m-0">
                    {amount} {currency}
                  </Text>
                </Row>
                <Hr className="border-rose-100 my-4" />
                <Row>
                  <Text className="text-gray-500 text-xs m-0">Date</Text>
                  <Text className="text-gray-700 text-sm m-0">{donatedAt}</Text>
                </Row>
                <Row>
                  <Text className="text-gray-500 text-xs m-0 mt-2">Order reference</Text>
                  <Text className="text-gray-700 text-sm font-mono m-0">{merchantTradeNo}</Text>
                </Row>
                <Row>
                  <Text className="text-gray-500 text-xs m-0 mt-2">Transaction ID</Text>
                  <Text className="text-gray-700 text-sm font-mono m-0">{transactionId}</Text>
                </Row>
                <Row>
                  <Text className="text-gray-500 text-xs m-0 mt-2">Sent to</Text>
                  <Text className="text-gray-700 text-sm m-0">{donorEmail}</Text>
                </Row>
              </Section>

              <Text className="text-gray-500 text-xs leading-relaxed">
                Please keep this email as your donation receipt. Your reference
                number is <strong>{merchantTradeNo}</strong>.
              </Text>

              <Hr className="border-gray-100 my-6" />

              <Text className="text-gray-400 text-xs text-center leading-relaxed">
                Questions? Reply to this email or contact our team at{" "}
                {process.env.SUPPORT_EMAIL ?? "support@example.com"}.
                <br />
                © {new Date().getFullYear()} Your Organisation Name. All rights reserved.
              </Text>
            </Section>

          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
