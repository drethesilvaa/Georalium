export const AboutUs = () => {


    return (
        <div className="custom-container grid gap-32">
            <section>
                <div className="text-center">
                    <h2>Who We Are</h2>
                    <h3>A Trusted Partner in Angola’s Mining & Energy</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <p>Georalium Mining & Energy is a local Angolan firm supporting the mining sector with specialized services for investors and operators—reducing risk and streamlining market entry.</p>
                    <ul>
                        <li> Local content & legal support for investments </li>
                        <li> Supply-chain mapping and operational readiness </li>
                        <li> Environmental compliance and project evaluation </li>
                    </ul>
                </div>
            </section>
            <section>
                <div>
                    <h3>Bringing Efficiency Through Innovative IT Services</h3>
                    <h4>Technology that supports operations at every stage</h4>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <p>Viability studies, tailor-made software, web/intranet/extranet</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <p>System administration, security, support & maintenance</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <p>Training (IT)</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <h3>A Multi-Disciplinary Team Dedicated to Mining Excellence</h3>
                    <h4>International specialists with decades of experience; deep knowledge of mining standards.</h4>
                </div>
                <div>
                    Carrousel with images
                </div>
                <div className="text-right">
                    <p>“Behind every successful project is a team that knows
                        the ground, the market, and the people”</p>
                </div>
            </section>
            <section>
                <div className="grid grid-cols-2">
                    <div> Map </div>
                    <div>
                        <p>Our Presence Across Angola
                        </p>
                        <p> Luanda • Huambo • Lubango • Saurimo</p>
                    </div>
                </div>
            </section>
        </div>
    )
}