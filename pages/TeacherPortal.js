import Link from 'next/link'
export default function TeacherPortal () {
    return (
        <>
            <h1 className="flex justify-center">This is the teacher portal! (WIP)</h1>
            <div className="flex py-8 px-8 flex flex-col items-center justify-between">
                <Link href="/" className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">Go back</Link>
            </div>
        </>
    )
}