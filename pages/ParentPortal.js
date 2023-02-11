import Link from 'next/link'
import Image from "next/image";
import Router from "next/client";
export default function ParentPortal () {
    return (
        <>
            <h1>This is the parent portal! (WIP)</h1>
            <div className="mt-8">
                <Link href="/" className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">Go back</Link>
                <Link href="/registration-page" className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">this is registration button!</Link>
            </div>
        </>
    )
}