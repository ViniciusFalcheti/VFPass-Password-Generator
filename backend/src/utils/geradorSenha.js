export function gerarSenha(length, numbers, caps, symbols) {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const special = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characters = lower + numbers;

    if (numbers) {
        characters += nums;
    }

    if (caps) {
        characters += upper;
    }

    if (symbols) {
        characters += special;
    }

    let senha = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        
        senha += characters[randomIndex];
    }

    // Garantir que a senha contenha pelo menos um caractere de cada tipo, se aplicável
    if (caps && !/[A-Z]/.test(senha)) {
        senha = senha.slice(0, -1) + upper[Math.floor(Math.random() * upper.length)];
    }

    if (symbols && !/[!@#$%^&*()_+[\]{}|;:,.<>?]/.test(senha)) {
        senha = senha.slice(0, -1) + special[Math.floor(Math.random() * special.length)];
    }

    if (numbers && !/[0-9]/.test(senha)) {
        senha = senha.slice(0, -1) + nums[Math.floor(Math.random() * nums.length)];
    }

    return senha;
}