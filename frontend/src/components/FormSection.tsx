import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from 'react';
import { api } from '../lib/axios';
import './FormSection.css'
import './slider.css'
import { Icon } from './Icon'
import { passwordSchema, type PasswordSchema } from "../schemas/passwordSchema";

export function FormSection() {

    const [password, setPassword] = useState('');
    const passwordRef = useRef<HTMLInputElement>(null);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<PasswordSchema>({
        resolver: zodResolver(passwordSchema),
        defaultValues: {
            length: 8,
            numbers: true,
            caps: true,
            symbols: true
        }
    });

    
    // Observa apenas os parâmetros de filtro
    const length = useWatch({ control, name: "length" });
    const caps = useWatch({ control, name: "caps" });
    const numbers = useWatch({ control, name: "numbers" });
    const symbols = useWatch({ control, name: "symbols" });

    useEffect(() => {
        const parsed = passwordSchema.safeParse({ length, caps, numbers, symbols });
        if (parsed.success) {
            handleGeneratePassword(parsed.data);
        }
    }, [length, caps, numbers, symbols]);

    async function handleGeneratePassword({ length, caps, numbers, symbols }: PasswordSchema) {
        // event.preventDefault();

        const response = await api.get('/senha', {
            params: {
                length,
                numbers,
                caps,
                symbols,
            }
        })

        setPassword(response.data.password);
    }

    function handleCopy() {
        if (passwordRef.current) {
        navigator.clipboard.writeText(passwordRef.current.value).then(() => {
            console.log("Senha copiada para a área de transferência!");
        }).catch((err) => {
            console.error("Erro ao copiar:", err);
        });
        }
    };

  return (
    <>
      <main>
        <form onSubmit={handleSubmit(handleGeneratePassword)}>
            <div className="div-password">
                <input 
                    type="text" 
                    ref={passwordRef}
                    value={password}
                    readOnly
                />
                <Icon iconType="copy" onClick={handleCopy} />
                <Icon iconType="generate" onClick={handleSubmit(handleGeneratePassword)} />
            </div>

            <div className="div-filters">
                <div>
                    <label htmlFor="passwordLength">Comprimento da senha:</label>
                    <div className="div-length">
                        <input type="number" id="passwordLength" {...register("length", { valueAsNumber: true })} />
                        <input type="range" min={6} max={64} step={1} {...register("length", { valueAsNumber: true })} className="slider" />
                    </div>
                </div>

                <div>
                    <label htmlFor="includeNumbers" className="checkbox">
                        <input type="checkbox" id="includeNumbers" {...register("numbers")} defaultChecked />
                        Números
                    </label>

                    <label htmlFor="includeUppercase" className="checkbox">
                        <input type="checkbox" id="includeUppercase" {...register("caps")} defaultChecked />
                        Letras maiúsculas
                    </label>

                    <label htmlFor="includeSpecialChars" className="checkbox">
                        <input type="checkbox" id="includeSpecialChars" {...register("symbols")} defaultChecked />
                        Caracteres especiais
                    </label>

                </div>
            </div>

            <div className="div-buttons">
                <button type="button" onClick={handleCopy}>Copiar Senha</button>
                <button type="submit">Gerar Senha</button>
            </div>
        </form>
      </main>
    </>
  )
}