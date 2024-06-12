import { cn } from "@/lib/utils";
import { Source_Serif_4 } from "next/font/google";
import { FiUser } from "react-icons/fi";
import { HiOutlinePhone } from "react-icons/hi2";
import { MdOutlineEmail } from "react-icons/md";

const source = Source_Serif_4({
    subsets: ["latin"],
});

export default function ContactSection() {
    return <section className="bg-grayishBg">
        <div className="container p-10 lg:py-20 grid grid-cols-2">
            <div className="space-y-8">
                <h1 className={cn(source.className, "font-bold text-2xl lg:text-3xl")}>Contacez nous</h1>
                <p className="text-lg">Notre équipe est là  pour  répondre  à  toutes  vos questions et vous offrir l'assistance dont vous avez besoin. N'hésitez pas à nous contacter par e-mail</p>
                <div>
                    <h3 className="text-xl font-semibold">Point focal</h3>
                    <div className="flex items-center gap-x-2 space-y-2">
                        <FiUser className="text-2xl" />
                        <span className="text-lg">Pr Benatchba Karima</span>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Contacts</h3>
                    <div className="flex items-center gap-x-2">
                        <HiOutlinePhone className="text-2xl" />
                        <span className="text-lg">+213 23 93 91 32</span>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <MdOutlineEmail className="text-2xl" />
                        <span className="text-lg">LMCS@esi.dz</span>
                    </div>
                </div>
            </div>
            <div>
                <form className="space-y-4">
                    <div className="space-y-2">
                        <label className="block" htmlFor="name">Nom</label>
                        <input className="text-lg border border-gray-300 px-4 py-2 w-full" type="text" name="name" placeholder="Entrez votre nom" />
                    </div>
                    <div className="space-y-2">
                        <label className="block" htmlFor="email">Email</label>
                        <input className="text-lg border border-gray-300 px-4 py-2 w-full" type="text" name="email" placeholder="Entrez votre email" />
                    </div>
                    <div className="space-y-2">
                        <label className="block" htmlFor="phone">Numéro de téléphone</label>
                        <input className="text-lg border border-gray-300 px-4 py-2 w-full" type="text" name="phone" placeholder="Entrez votre numéro de téléphone" />
                    </div>
                    <div className="space-y-2">
                        <label className="block" htmlFor="name">Message</label>
                        <textarea maxLength={255} rows={3} className="text-lg border border-gray-300 px-4 py-2 w-full" type="text" name="name" placeholder="Entrez votre message" />
                    </div>
                    <button className="w-full py-4 text-white bg-gradient-to-b from-[#05316C] via-[#0D4DA4] to-[#105AC0] font-semibold" type="submit">
                        Envoyer le message
                    </button>
                </form>
            </div>
        </div>
    </section>
}