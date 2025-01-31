import {Card, CardContent} from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <header></header>
          <section>
              <Link href={'#'}>
                  <Card>
                      <CardContent>
                          <h2 className={'text-center'}>Wystaw fakturę</h2>
                          <p className={'text-gray-400 text-center'}>Wprowadź dane, wystaw fakturę i wyślij do klienta.</p>
                      </CardContent>
                  </Card>
              </Link>
          </section>
          <footer className={'w-full'}>
              <p className={'text-gray-300 text-center'}>&copy; Copyright {new Date().getFullYear()} Invoiceo</p>
          </footer>
      </main>
    </div>
  );
}
