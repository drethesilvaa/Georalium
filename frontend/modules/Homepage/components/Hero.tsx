import { ArrowCircleDownIcon } from "@phosphor-icons/react/dist/ssr"

export const Hero = () => {


    return (
        <div className="h-screen bg-[url('/HeroBg.png')] bg-cover bg-center ">
            <div className="grid grid-cols-12 custom-container h-full items-center">
                <div className="col-span-12 xl:col-span-7">
                    <h1>Powering Angola’s Mining Future.</h1>
                    <h3>From prospecting to operations, we provide the clarity, compliance, and local support you need to succeed in Angola</h3>
                    <button className="btn" type="button">KNOW MORE <ArrowCircleDownIcon /></button>
                </div>
                <div className="grid gap-4 col-span-12 xl:col-start-9 xl:col-span-3">
                    <div className="card w-full bg-base-100 card-md shadow-sm">
                        <div className="card-body">
                            <p>“We don’t just provide services, we become partners in your success”</p>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 card-md shadow-sm">
                        <div className="card-body">
                            <p>00+</p>
                            <p>Satisfied Partners</p>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 card-md shadow-sm">
                        <div className="card-body">
                            <p>000k</p>
                            <p>Some Metric</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}