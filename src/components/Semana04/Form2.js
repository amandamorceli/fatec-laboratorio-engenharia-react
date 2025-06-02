import { useState } from "react";

export default function Form2() {
    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhpworth@sculpture.com'
    });

    function handleFirstNameChange(e) {
        person.firstName = e.target.value;
    }

    function handleLastNameChange(e) {
        person.lastName = e.target.value;
    }

    function handleEmailChange(e) {
        person.email = e.target.value;
    }

    return (
        <>
        <div className="flex flex-col gap-y-3">
        <h1 className="text-xl">Form 2</h1>
            <label>
                First name:
                <input
                    value={person.firstName}
                    onChange={handleFirstNameChange}
                    className="border-2 border-black"
                />
            </label>

            <label>
                Last name:
                <input
                    value={person.lastName}
                    onChange={handleLastNameChange}
                    className="border-2 border-black"
                />
            </label>

            <label>
                Email:
                <input
                    value={person.email}
                    onChange={handleEmailChange}
                    className="border-2 border-black"
                />
            </label>

            <p>
                {person.firstName}{' '}
                {person.lastName}{' '}
                ({person.email})
            </p>
            </div>
        </>
    );
}