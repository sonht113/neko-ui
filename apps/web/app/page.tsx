import { Button } from '@nuicoder/neko-ui/components/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTitle,
} from '@nuicoder/neko-ui/components/accordion'

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@nuicoder/neko-ui/components/alert'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <Button variant={'primary'} size={'lg'}>
        Open alert
      </Button>
      <Alert variant="success">
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTitle>Product Information</AccordionTitle>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Our flagship product combines cutting-edge technology with sleek
              design. Built with premium materials, it offers unparalleled
              performance and reliability.
            </p>
            <p>
              Key features include advanced processing capabilities, and an
              intuitive user interface designed for both beginners and experts.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTitle>Shipping Details</AccordionTitle>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              We offer worldwide shipping through trusted courier partners.
              Standard delivery takes 3-5 business days, while express shipping
              ensures delivery within 1-2 business days.
            </p>
            <p>
              All orders are carefully packaged and fully insured. Track your
              shipment in real-time through our dedicated tracking portal.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTitle>Return Policy</AccordionTitle>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              We stand behind our products with a comprehensive 30-day return
              policy. If you&apos;re not completely satisfied, simply return the
              item in its original condition.
            </p>
            <p>
              Our hassle-free return process includes free return shipping and
              full refunds processed within 48 hours of receiving the returned
              item.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
