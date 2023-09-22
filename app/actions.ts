"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";



export async function expensiveCalculation() {
    // sleep for 1 second
    await new Promise(resolve => setTimeout(resolve, 1000));

    revalidatePath("/");

    return Math.random();
}