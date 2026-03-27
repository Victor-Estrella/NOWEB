import { faCaretDown, faGlobe, faMagnifyingGlass, faUser, faBars, faXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import type ViaCEPResponse from "../../interface/CEP";
import type CEPResult from "../../interface/CEP";


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [cep, setCep] = useState("");
    const [result, setResult] = useState<CEPResult | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const formatCep = (value: string) => {
        const digits = value.replace(/\D/g, "").slice(0, 8);
        if (digits.length > 5) return `${digits.slice(0, 5)}-${digits.slice(5)}`;
        return digits;
    };

    const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCep(formatCep(e.target.value));
        setError("");
    };

    const handleSearch = async () => {
        const digits = cep.replace(/\D/g, "");
        if (digits.length !== 8) {
            setError("Digite um CEP válido com 8 dígitos.");
            return;
        }

        setLoading(true);
        setError("");
        setResult(null);

        try {
            const response = await fetch(`https://viacep.com.br/ws/${digits}/json/`);
            const data: ViaCEPResponse = await response.json();

            if (data.erro) {
                setError("CEP não encontrado. Verifique e tente novamente.");
            } else {
                setResult({
                    cep: data.cep,
                    logradouro: data.logradouro,
                    complemento: data.complemento,
                    bairro: data.bairro,
                    localidade: data.localidade,
                    uf: data.uf,
                });
            }
        } catch {
            setError("Erro ao buscar o CEP. Tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") handleSearch();
    };

    const handleClose = () => {
        setSearchOpen(false);
        setCep("");
        setResult(null);
        setError("");
    };

    const handleNewSearch = () => {
        setCep("");
        setResult(null);
        setError("");
    };

    return (
        <header className="relative">
            {/* Barra principal */}
            <div className="flex flex-row items-center justify-between lg:justify-around py-8 lg:py-14 px-6 lg:px-0">
                {/* Logo */}
                <h1 className="text-3xl font-extrabold">NOWEB</h1>

                {/* Nav — desktop */}
                <nav className="hidden lg:block">
                    <ul className="flex flex-row gap-12">
                        <li className="cursor-pointer transition-transform duration-200 hover:scale-105">Home</li>
                        <li className="cursor-pointer transition-transform duration-200 hover:scale-105">Property <FontAwesomeIcon icon={faCaretDown} /></li>
                        <li className="cursor-pointer transition-transform duration-200 hover:scale-105">Product</li>
                        <li className="cursor-pointer transition-transform duration-200 hover:scale-105">Contact</li>
                        <li className="cursor-pointer transition-transform duration-200 hover:scale-105">Communities</li>
                    </ul>
                </nav>

                {/* Ações direita */}
                <div className="flex flex-row items-center gap-4">
                    <div className="hidden lg:flex flex-row items-center gap-1 border-r pr-2 border-[#E6E6E6] cursor-pointer">
                        <FontAwesomeIcon icon={faGlobe} className="text-[#656971]" />
                        <p className="text-[#656971]">EN</p>
                    </div>
                    <div className="hidden lg:flex flex-row items-center gap-5">
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className="text-black cursor-pointer transition-transform duration-200 hover:scale-110"
                            onClick={() => setSearchOpen(true)}
                        />
                        <FontAwesomeIcon icon={faUser} className="text-black cursor-pointer" />
                    </div>

                    {/* Hamburger — mobile */}
                    <button
                        className="lg:hidden text-black text-2xl cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
                    </button>
                </div>
            </div>

            {/* Menu mobile */}
            {menuOpen && (
                <nav className="lg:hidden absolute top-full left-0 w-full bg-white z-50 shadow-md border-t border-[#E6E6E6]">
                    <ul className="flex flex-col px-6 py-4 gap-5">
                        <li className="cursor-pointer py-1 border-b border-[#F0F0F0]">Home</li>
                        <li className="cursor-pointer py-1 border-b border-[#F0F0F0]">Property <FontAwesomeIcon icon={faCaretDown} /></li>
                        <li className="cursor-pointer py-1 border-b border-[#F0F0F0]">Product</li>
                        <li className="cursor-pointer py-1 border-b border-[#F0F0F0]">Contact</li>
                        <li className="cursor-pointer py-1 border-b border-[#F0F0F0]">Communities</li>
                        <li className="flex items-center justify-between gap-4 py-1">
                            <div className="flex items-center gap-1 cursor-pointer text-[#656971]">
                                <FontAwesomeIcon icon={faGlobe} />
                                <span>EN</span>
                            </div>
                            <div className="flex items-center gap-5">
                                <FontAwesomeIcon
                                    icon={faMagnifyingGlass}
                                    className="text-black cursor-pointer"
                                    onClick={() => { setMenuOpen(false); setSearchOpen(true); }}
                                />
                                <FontAwesomeIcon icon={faUser} className="text-black cursor-pointer" />
                            </div>
                        </li>
                    </ul>
                </nav>
            )}

            {/* Modal de busca por CEP */}
            {searchOpen && (
                <div
                    className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
                    onClick={handleClose}
                >
                    <div
                        className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 flex flex-col gap-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header da modal */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-semibold text-[#1A1D22]">Buscar por CEP</h2>
                                <p className="text-sm text-[#9B9494] mt-0.5">Digite o CEP para encontrar o endereço</p>
                            </div>
                            <button
                                onClick={handleClose}
                                className="w-9 h-9 rounded-full border border-[#E6E6E6] flex items-center justify-center text-[#656971] hover:bg-gray-100 transition-colors cursor-pointer"
                            >
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>

                        {/* Campo de busca */}
                        <div className="flex gap-2">
                            <div className="flex items-center gap-2 border border-[#DCDADA] rounded-full px-5 py-3 flex-1 focus-within:border-black transition-colors">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[#9B9494] text-sm shrink-0" />
                                <input
                                    type="text"
                                    value={cep}
                                    onChange={handleCepChange}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Ex: 03323-000"
                                    maxLength={9}
                                    className="outline-none bg-transparent text-black placeholder:text-[#9B9494] w-full text-base"
                                    autoFocus
                                />
                            </div>
                            <button
                                onClick={handleSearch}
                                disabled={loading}
                                className="bg-[#333333] text-white px-6 py-3 rounded-full font-medium text-base cursor-pointer hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                            >
                                {loading
                                    ? <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                                    : "Buscar"
                                }
                            </button>
                        </div>

                        {/* Erro */}
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-2xl">
                                {error}
                            </div>
                        )}

                        {/* Resultado */}
                        {result && (
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-[#656971] uppercase tracking-wide">Resultado</p>
                                    <button
                                        onClick={handleNewSearch}
                                        className="text-sm text-[#17412D] underline underline-offset-2 cursor-pointer hover:text-black transition-colors"
                                    >
                                        Nova busca
                                    </button>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        { label: "CEP", value: result.cep },
                                        { label: "UF", value: result.uf },
                                        { label: "Logradouro", value: result.logradouro || "—" },
                                        { label: "Bairro", value: result.bairro || "—" },
                                        { label: "Complemento", value: result.complemento || "—" },
                                        { label: "Estado", value: result.localidade },
                                    ].map(({ label, value }) => (
                                        <div key={label} className="flex flex-col gap-1">
                                            <label className="text-xs text-[#9B9494] font-medium uppercase tracking-wide">
                                                {label}
                                            </label>
                                            <input
                                                type="text"
                                                value={value}
                                                readOnly
                                                className="bg-[#F6F6F4] border border-[#DCDADA] rounded-xl px-4 py-2.5 text-sm text-[#1A1D22] outline-none cursor-not-allowed"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}