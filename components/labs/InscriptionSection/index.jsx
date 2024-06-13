export default function InscriptionSection() {
    return <section className="bg-grayishBg">
        <div className="container py-10 lg:py-20 space-y-8">
            <div className="leading-10 text-lg opacity-70">
                <p>
                    Pour s’inscrire il faut au préalable prendre connaissance de la Charte, ensuite remplir le Formulaire d’inscription où il est impératif de :
                </p>
                <ul className="list-disc ml-8">
                    <li>Cocher la case: charte lue et approuvée</li>
                    <li>Identifier l’utilisateur et ou les utilisateurs membres du projet</li>
                    <li>Décrire le projet en précisant les différentes étapes de réalisation, le matériel et l’échéancier.</li>
                </ul>
                <p>
                    Une fois votre inscription est faite et que le projet est bien soumis, vous allez recevoir, au plus tard une semaine après, une réponse de validation. Dans le cas d’une réponse favorable, vous devez vous rapprocher de ESI-FabLab pour réserver un créneau et dans le cas contraire vous pouvez reformuler votre projet en tenant des remarques et resoumettre le projet.
                </p>
            </div>
            <div className="flex justify-center">
                <button className="bg-gradient-to-br from-[#05316C] via-[#0D4DA4] to-[#105AC0] px-12 py-4 text-white font-semibold">
                    Télécharger la charte
                </button>
            </div>
        </div>
    </section>
}