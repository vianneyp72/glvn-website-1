import Link from 'next/link'
import Image from "next/image";
import Router from "next/client";
export default function ParentPortal () {
    return (
        <>
            <h1 className="flex justify-center">This is the parent portal very big funny (WIP)</h1>
            <div className="flex py-8 px-8 flex flex-col items-center justify-between">
                <Link href="/" className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">Go back</Link><br></br>
                <Link href="/registration-page" className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">This is registration button!</Link>
            </div>
        </>
    )
}