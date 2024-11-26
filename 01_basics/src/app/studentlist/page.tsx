import Link from "next/link";

export default function StudentList() {

    const names = ['sonal', 'neha', 'priya', 'manisha', 'reshma', 'ritika', 'abhay', 'Salman'];

    return (
        <div>
            <h1>Student List</h1>
            <ul>
                {names.map((name) => {
                    return <li> <Link href={'/studentlist/' + name}>{name.toUpperCase()}</Link> </li>
                })}
            </ul>


            {/* <ul>
                <li>
                    <Link href={'/studentlist/neha'}>Neha</Link>
                </li>
                <li>
                    <Link href={'/studentlist/sonal'}>Sonal</Link>
                </li>
                <li>
                    <Link href={'/studentlist/reshma'}>Reshma</Link>
                </li>
                <li>
                    <Link href={'/studentlist/priya'}>Priya</Link>
                </li>
                <li>
                    <Link href={'/studentlist/manisha'}>Manisha</Link>
                </li>
            </ul> */}
        </div>
    )

}