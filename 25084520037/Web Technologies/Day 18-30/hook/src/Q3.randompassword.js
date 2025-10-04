import { useState } from "react";

export default function PasswordGenerator() {
    const [length, setLength] = useState(8);
    const [password, setPassword] = useState("");

    function generatePassword() {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$!";
        let pwd = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            pwd += chars[randomIndex];
        }
        setPassword(pwd);
    }

    return (
        <div>
            <h3>Password Generator</h3>
            <input
                type="number"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                placeholder="Length"
            />
            <button onClick={generatePassword}>Generate</button>
            <p>{password}</p>
        </div>
    );
}
