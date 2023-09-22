import Link from "next/link";
import { Form } from "./form";

/** Add your relevant code here for the issue to reproduce */
export default async function Home() {

  return <div>
    Home
    <Link href="/login" > Login here </Link></div>;
}
